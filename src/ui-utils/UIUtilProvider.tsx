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

/**
 * Interface representing the state of the UIUtilProvider.
 */
export interface IUIUtilProviderState {
    /**
     * Modal utility for managing modals.
     */
    modal: UIUtilModal;
    /**
     * Prompt utility for managing prompts.
     */
    prompt: UIUtilPrompt;
    /**
     * Custom loader utility.
     */
    customLoader: IUIUtilLoader;
    /**
     * Loader utility with show and hide methods.
     */
    loader: Pick<IUIUtilLoader, "show" | "hide">;
    /**
     * Current viewport information.
     */
    viewport: CurrentViewport;
}

/**
 * Default state for the UIUtilProvider.
 */
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

/**
 * React context for UI utilities.
 */
export const UIUtilContext = React.createContext<IUIUtilProviderState>(defaultState);

/**
 * Hook to use the UIUtil context.
 *
 * @returns {IUIUtilProviderState} The current state of the UIUtil context.
 */
export const useUIUtilContext = () => React.useContext<IUIUtilProviderState>(UIUtilContext);

/**
 * Object containing modal IDs.
 */
const modalId = {
    actions: "actions",
    confirm: "confirm",
    alert: "alert",
    modal: "modal",
};

type ModalId = (typeof modalId)[keyof typeof modalId];

/**
 * UIUtilProvider component that provides UI utilities to its children.
 */
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

    /**
     * Default modal utility methods.
     */
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

    /**
     * Default custom loader utility methods.
     */
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

    /**
     * Default loader utility methods.
     */
    get loaderDefaults() {
        return {
            ...defaultState.loader,
            show: () => this.loader.show(),
            hide: () => this.loader.hide(),
        };
    }

    /**
     * Default prompt utility methods.
     */
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

    /**
     * Toggles the visibility of a modal instance.
     *
     * @param {ModalId} id - The ID of the modal.
     * @param {boolean} shown - Whether the modal should be shown.
     * @param {boolean} [destroyOnClose=false] - Whether to destroy the modal on close.
     */
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

    /**
     * Toggles the overlay content of a modal instance.
     *
     * @param {ModalId} id - The ID of the modal.
     * @param {Content} [content] - The content to display in the overlay.
     */
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

    /**
     * Removes a modal instance.
     *
     * @param {ModalId} id - The ID of the modal.
     */
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

    /**
     * Gets the current modal instance.
     *
     * @param {ModalId} id - The ID of the modal.
     * @returns {PopUp} The current modal instance.
     */
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

    /**
     * Creates a new modal instance.
     *
     * @param {ModalId} id - The ID of the modal.
     * @param {PopUpOptions} options - The options for the modal.
     * @returns {PopUp} The created modal instance.
     */
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

    /**
     * Renders the UIUtilProvider component.
     *
     * @returns {JSX.Element} The rendered component.
     */
    render() {
        return (
            <UIUtilContext.Provider value={this.state}>
                {this.props.children}
                {this.props.viewportDetect && <ViewportDetect onChange={viewport => this.setState({ viewport })} />}
            </UIUtilContext.Provider>
        );
    }
}
