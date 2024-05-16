import * as React from "react";
import {
    AlertType,
    IModalCreate,
    IUIUtilAlert,
    IUIUtilLoader,
    IUIUtilModal,
    IUtilModalAction,
    ModalOptions,
} from "./uiUtil.interface";
import "../types";
import { Button } from "react-bootstrap";
import { Loader } from "./Loader";

export interface IUIUtilProviderState {
    modal: IUIUtilModal;
    alert: IUIUtilAlert;
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
    alert: {
        show: null,
        showNoty: null,
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
    constructor(props) {
        super(props);

        this.state = {
            ...defaultState,
            modal: this.modalDefaults,
            alert: this.alertDefaults,
            customLoader: this.customLoaderDefaults,
            loader: this.loaderDefaults,
        };
    }

    get modalDefaults() {
        return {
            ...defaultState.modal,
            create: this.createModal.bind(this),
            show: (options: ModalOptions) => this.createModal(null, options),
            getCurrent: () => {
                const {
                    modal: { instances },
                } = this.state;
                const id = Object.keys(instances).find(id => instances[id].shown);
                return this.getCurrentModal(id);
            },
            showAlert: (content: ModalOptions["content"], onClose?: ModalOptions["onClose"]) =>
                this.createModal(null, {
                    content: typeof content == "string" ? <h4 className="text-center mtop">{content}</h4> : content,
                    destroyOnClose: true,
                    closeBtn: true,
                    width: 400,
                    onClose,
                }),
            showConfirm: (options: ModalOptions, onYes: () => void, onNo?: () => void) =>
                this.createModal("confirm", {
                    ...options,
                    footerContent: (
                        <>
                            {options.footerContent}
                            <Button bsClass={"btn btn-success mright"} onClick={onYes}>
                                Yes
                            </Button>
                            <Button
                                bsClass={"btn btn-danger"}
                                onClick={() => (onNo ? onNo() : this.toggleModalInstance("confirm", false, true))}
                            >
                                No
                            </Button>
                        </>
                    ),
                }),
            showActions: (options: ModalOptions, actions: IUtilModalAction[]) =>
                this.createModal("actions", {
                    ...options,
                    footerContent: (
                        <>
                            {options.footerContent}
                            {actions.map(({ content, type = "success", closeOnClick, onClick }, index) => (
                                <Button
                                    bsClass={`btn btn-${type} mright`}
                                    onClick={() => {
                                        onClick && onClick();
                                        closeOnClick && this.toggleModalInstance("actions", false, true);
                                    }}
                                >
                                    {content}
                                </Button>
                            ))}
                        </>
                    ),
                }),
        };
    }

    get alertDefaults() {
        return {
            show: this.showNotifyAlert.bind(this),
            showNoty: this.showNoty.bind(this),
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

    showNotifyAlert(message: string, alertType: AlertType, position?: string, bindToElement?: any) {
        import(/* webpackChunkName: "notify" */ "../external-dependencies/notify-js/notify").then(() => {
            const options = {
                ...(alertType && { className: alertType }),
                ...(position && { position }),
            };
            $(".notifyjs-hidable").trigger("click");
            if (bindToElement) {
                $(bindToElement).notify(message, options);
            } else {
                $.notify(message, options);
            }
        });
    }

    showNoty(message: string, alertType: AlertType) {
        import(/* webpackChunkName: "noty" */ "../external-dependencies/noty/jquery.noty.packaged").then(() => {
            $.noty.defaults = {
                layout: "topCenter",
                theme: "relax", // or 'relax'
                type: "alert",
                text: "", // can be html or string
                dismissQueue: false, // If you want to use queue feature set this true
                template:
                    '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
                animation: {
                    open: { height: "toggle" }, // or Animate.css class names like: 'animated bounceInLeft'
                    close: { height: "toggle" }, // or Animate.css class names like: 'animated bounceOutLeft'
                    easing: "swing",
                    speed: 500, // opening & closing animation speed
                },
                timeout: 4000, // delay for closing event. Set false for sticky notifications
                force: true, // adds notification to the beginning of queue when set to true
                modal: false,
                maxVisible: 1, // you can set max visible notification for dismissQueue true option,
                killer: true, // for close all notifications before show
                closeWith: ["click"], // ['click', 'button', 'hover', 'backdrop'] // backdrop click will close all notifications
                callback: {
                    onShow: function () {},
                    afterShow: function () {},
                    onClose: function () {},
                    afterClose: function () {},
                    onCloseClick: function () {},
                },
                buttons: false, // an array of buttons
            };
            window.noty({ text: message, type: alertType });
        });
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

    removeModalInstance(id: string) {
        const {
            modal: { instances },
        } = this.state;
        delete instances[id];
        this.setState({
            modal: {
                ...this.state.modal,
                instances,
            },
        });
    }

    getCurrentModal(id: string): IModalCreate {
        return {
            show: () => this.toggleModalInstance(id, true),
            hide: () => this.toggleModalInstance(id, false),
            remove: () => this.removeModalInstance(id),
        };
    }

    createModal(id: string, options: ModalOptions): IModalCreate {
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
