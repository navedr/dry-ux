import * as React from "react";
import {
    IUIUtilLoader,
    UIUtilModal,
    PopUp,
    PopUpAction,
    PopUpOptions,
    UIUtilPrompt,
    Content,
} from "./UIUtil.interface";
import "../types";
import { Button } from "react-bootstrap";
import { Loader } from "./Loader";
import { ConfirmOverlay } from "./ConfirmOverlay";

export interface IUIUtilProviderState {
    modal: UIUtilModal;
    prompt: UIUtilPrompt;
    customLoader: IUIUtilLoader;
    loader: Pick<IUIUtilLoader, "show" | "hide">;
}

const defaultState: IUIUtilProviderState = {
    modal: {
        show: null,
        create: null,
        instances: {},
        getCurrent: null,
        showAlert: null,
        showConfirm: null,
        showActions: null,
    },
    prompt: {
        showConfirm: null,
        showActions: null,
        instances: {},
        getCurrent: null,
    },
    customLoader: {
        shown: false,
        show: null,
        hide: null,
    },
    loader: {
        show: null,
        hide: null,
    },
};

export const UIUtilContext = React.createContext<IUIUtilProviderState>(defaultState);

export const useUIUtilContext = () => React.useContext<IUIUtilProviderState>(UIUtilContext);

export class UIUtilProvider extends React.PureComponent<{}, IUIUtilProviderState> {
    private readonly loader = Loader.getInstance();
    private readonly modalId = {
        actions: "actions",
        confirm: "confirm",
    };

    constructor(props) {
        super(props);

        this.state = {
            ...defaultState,
            modal: this.modalDefaults,
            customLoader: this.customLoaderDefaults,
            loader: this.loaderDefaults,
            prompt: this.promptDefaults,
        };
    }

    get modalDefaults() {
        return {
            ...defaultState.modal,
            create: this.createModal.bind(this),
            show: (options: PopUpOptions) => this.createModal(null, options),
            getCurrent: () => {
                const {
                    modal: { instances },
                } = this.state;
                const id = Object.keys(instances).find(id => instances[id].shown);
                return this.getCurrentModal(id);
            },
            showAlert: (content: Content, onClose?: PopUpOptions["onClose"]) =>
                this.createModal(null, {
                    content: typeof content == "string" ? <h4 className="text-center mtop">{content}</h4> : content,
                    destroyOnClose: true,
                    closeBtn: true,
                    width: 400,
                    onClose,
                }),
            showConfirm: (options: PopUpOptions, onYes: () => void, onNo?: () => void) =>
                this.createModal(this.modalId.confirm, {
                    ...options,
                    footerContent: (
                        <>
                            {options.footerContent}
                            <Button bsClass={"btn btn-success mright"} onClick={onYes}>
                                Yes
                            </Button>
                            <Button
                                bsClass={"btn btn-danger"}
                                onClick={() =>
                                    onNo ? onNo() : this.toggleModalInstance(this.modalId.confirm, false, true)
                                }
                            >
                                No
                            </Button>
                        </>
                    ),
                }),
            showActions: (options: PopUpOptions, actions: PopUpAction[]) =>
                this.createModal(this.modalId.actions, {
                    ...options,
                    footerContent: (
                        <>
                            {options.footerContent}
                            {this.getModalActionButtons(actions)}
                        </>
                    ),
                }),
        };
    }

    get customLoaderDefaults() {
        return {
            ...defaultState.customLoader,
            show: () =>
                this.setState({
                    customLoader: {
                        ...this.state.customLoader,
                        shown: true,
                    },
                }),
            hide: () =>
                this.setState({
                    customLoader: {
                        ...this.state.customLoader,
                        shown: false,
                    },
                }),
        };
    }

    get loaderDefaults() {
        return {
            ...defaultState.loader,
            show: () => this.loader.show(),
            hide: () => this.loader.hide(),
        };
    }

    get promptDefaults() {
        return {
            ...defaultState.prompt,
            getCurrent: () => {
                const {
                    prompt: { instances },
                } = this.state;
                const id = Object.keys(instances).find(id => instances[id].shown);
                return this.getCurrentModal(id);
            },
        };
    }

    toggleModalInstance(id: string, shown: boolean, destroyOnClose = false) {
        const {
            modal: { instances },
        } = this.state;
        const instance = instances[id];

        if (!instance) {
            return;
        }

        // Hide all other instances
        Object.keys(instances).forEach(id => (instances[id].shown = false));

        if (!shown) {
            instance.options.onClose?.();
        }

        if (!shown && destroyOnClose && instance.options.destroyOnClose) {
            this.removeModalInstance(id);
        } else {
            instance.shown = shown;
            this.setState({
                modal: {
                    ...this.state.modal,
                    instances,
                },
            });
        }
    }

    toggleModalOverlay(id: string, content?: JSX.Element | string) {
        const {
            modal: { instances },
        } = this.state;
        instances[id].overlay = content;
        this.setState({
            modal: {
                ...this.state.modal,
                instances,
            },
        });
    }

    getModalActionButtons(actions: PopUpAction[]) {
        return actions.map(({ content, type = "success", closeOnClick, onClick, confirm }, index) => (
            <Button
                bsClass={`btn btn-${type} mright`}
                onClick={() => {
                    const triggerClick = () => {
                        onClick?.();
                        closeOnClick && this.toggleModalInstance(this.modalId.actions, false, true);
                    };
                    if (!!confirm) {
                        this.toggleModalOverlay(
                            this.modalId.actions,
                            <ConfirmOverlay
                                content={confirm}
                                onYes={() => {
                                    triggerClick();
                                    this.toggleModalOverlay(this.modalId.actions);
                                }}
                                onNo={() => this.toggleModalOverlay(this.modalId.actions)}
                            />,
                        );
                    } else {
                        triggerClick();
                    }
                }}
            >
                {content}
            </Button>
        ));
    }

    removeModalInstance(id: string) {
        const {
            modal: { instances },
        } = this.state;
        const instance = instances[id];
        instance.options.onClose?.();
        delete instances[id];
        this.setState({
            modal: {
                ...this.state.modal,
                instances,
            },
        });
    }

    getCurrentModal(id: string): PopUp {
        return {
            show: () => this.toggleModalInstance(id, true),
            hide: () => this.toggleModalInstance(id, false),
            remove: () => this.removeModalInstance(id),
            overlay: {
                show: (content: Content) => this.toggleModalOverlay(id, content),
                showConfirm: (content: Content, onYes: () => void, onNo?: () => void) =>
                    this.toggleModalOverlay(
                        id,
                        <ConfirmOverlay
                            content={content}
                            onYes={() => {
                                onYes();
                                this.toggleModalOverlay(id);
                            }}
                            onNo={() => {
                                onNo?.();
                                this.toggleModalOverlay(id);
                            }}
                        />,
                    ),
                hide: () => this.toggleModalOverlay(id),
            },
        };
    }

    createModal(id: string, options: PopUpOptions): PopUp {
        const {
            modal: { instances },
        } = this.state;

        instances[id] = {
            options,
            shown: false,
            handleClose: this.toggleModalInstance.bind(this),
        };

        this.setState({
            modal: {
                ...this.state.modal,
                instances,
            },
        });

        this.toggleModalInstance(id, true);

        return this.getCurrentModal(id);
    }

    render() {
        return <UIUtilContext.Provider value={this.state}>{this.props.children}</UIUtilContext.Provider>;
    }
}
