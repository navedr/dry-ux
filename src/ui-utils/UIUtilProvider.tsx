import * as React from "react";
import {
    Content,
    IUIUtilLoader,
    PopUp,
    PopUpAction,
    PopUpInstance,
    PopUpOptions,
    UIUtilModal,
    UIUtilPrompt,
} from "./UIUtil.interface";
import "../types";
import { Loader } from "./Loader";
import { ActionsOverlay } from "./ActionsOverlay";
import { CurrentViewport, ViewportDetect } from "./ViewportDetect";

export interface IUIUtilProviderState {
    modal: UIUtilModal;
    prompt: UIUtilPrompt;
    customLoader: IUIUtilLoader;
    loader: Pick<IUIUtilLoader, "show" | "hide">;
    viewport: CurrentViewport;
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
    viewport: new CurrentViewport(undefined),
};

export const UIUtilContext = React.createContext<IUIUtilProviderState>(defaultState);

export const useUIUtilContext = () => React.useContext<IUIUtilProviderState>(UIUtilContext);

const modalId = {
    actions: "actions",
    confirm: "confirm",
    alert: "alert",
    modal: "modal",
};

type ModalId = (typeof modalId)[keyof typeof modalId];

export class UIUtilProvider extends React.PureComponent<{ viewportDetect?: boolean }, IUIUtilProviderState> {
    private readonly loader = Loader.getInstance();

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
            show: (options: PopUpOptions) => this.createModal(modalId.modal, options),
            getCurrent: () => {
                const {
                    modal: { instances },
                } = this.state;
                const id = Object.keys(instances).find(id => instances[id].shown);
                return this.getCurrentModal(id);
            },
            showAlert: (content: Content, onClose?: PopUpOptions["onClose"]) =>
                this.createModal(modalId.alert, {
                    content: typeof content == "string" ? <h4 className="text-center mtop">{content}</h4> : content,
                    destroyOnClose: true,
                    closeBtn: true,
                    width: 400,
                    onClose,
                }),
            showConfirm: (options: PopUpOptions, onYes: () => void, onNo?: () => void) =>
                this.createModal(modalId.confirm, {
                    ...options,
                    actions: [
                        { content: "Yes", type: "success", onClick: onYes },
                        {
                            content: "No",
                            type: "danger",
                            onClick: onNo,
                            closeOnClick: true,
                        },
                    ],
                }),
            showActions: (options: PopUpOptions, actions: PopUpAction[]) =>
                this.createModal(modalId.actions, { ...options, actions }),
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

    toggleModalInstance: PopUpInstance["handleClose"] = (id: ModalId, shown: boolean, destroyOnClose = false) => {
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
    };

    toggleModalOverlay: PopUpInstance["toggleOverlay"] = (id: ModalId, content?: Content) => {
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
    };

    removeModalInstance(id: ModalId) {
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

    getCurrentModal(id: ModalId): PopUp {
        return {
            show: () => this.toggleModalInstance(id, true),
            hide: () => this.toggleModalInstance(id, false),
            remove: () => this.removeModalInstance(id),
            update: (options: Partial<PopUpOptions>) => {
                const instance = this.state.modal.instances[id];
                instance.options = { ...instance.options, ...options };
                this.setState({
                    modal: {
                        ...this.state.modal,
                        instances: {
                            ...this.state.modal.instances,
                            [id]: instance,
                        },
                    },
                });
            },
            overlay: {
                show: (content: Content) => this.toggleModalOverlay(id, content),
                showConfirm: (content: Content, onYes: () => void, onNo?: () => void) =>
                    this.toggleModalOverlay(
                        id,
                        <ActionsOverlay
                            title={"Confirm"}
                            content={content}
                            hide={() => this.toggleModalOverlay(id)}
                            actions={[
                                {
                                    content: "Yes",
                                    type: "success",
                                    onClick: onYes,
                                    closeOnClick: true,
                                },
                                {
                                    content: "No",
                                    type: "danger",
                                    onClick: onNo,
                                    closeOnClick: true,
                                },
                            ]}
                        />,
                    ),
                showActions: (title: Content, content: Content, actions: Omit<PopUpAction, "confirm">[]) =>
                    this.toggleModalOverlay(
                        id,
                        <ActionsOverlay
                            title={title}
                            content={content}
                            hide={() => this.toggleModalOverlay(id)}
                            actions={actions}
                        />,
                    ),
                hide: () => this.toggleModalOverlay(id),
            },
        };
    }

    createModal(id: ModalId, options: PopUpOptions): PopUp {
        const {
            modal: { instances },
        } = this.state;

        instances[id] = {
            options,
            shown: false,
            handleClose: this.toggleModalInstance.bind(this),
            toggleOverlay: this.toggleModalOverlay.bind(this),
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
        return (
            <UIUtilContext.Provider value={this.state}>
                {this.props.viewportDetect && <ViewportDetect onChange={viewport => this.setState({ viewport })} />}
                {this.props.children}
            </UIUtilContext.Provider>
        );
    }
}
