import * as React from "react";
import "../types";
const defaultState = {
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
    loader: {
        shown: false,
        show: null,
        hide: null,
    },
};
export const UIUtilContext = React.createContext(defaultState);
export const useUIUtilContext = () => React.useContext(UIUtilContext);
export class UIUtilProvider extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = Object.assign(Object.assign({}, defaultState), { modal: this.modalDefaults, alert: this.alertDefaults, loader: this.loaderDefaults });
    }
    get modalDefaults() {
        return Object.assign(Object.assign({}, defaultState.modal), { create: this.createModal.bind(this), show: options => this.createModal(null, options), getCurrent: () => {
                const { modal: { instances }, } = this.state;
                const id = Object.keys(instances).find(id => instances[id].shown);
                return this.getCurrentModal(id);
            }, showAlert: content => this.createModal(null, {
                content: React.createElement("h4", { className: "text-center mtop" }, content),
                destroyOnClose: true,
                closeBtn: true,
                width: 400,
            }), showConfirm: (options, onYes, onNo) => this.createModal("confirm", Object.assign(Object.assign({}, options), { content: (React.createElement("div", null,
                    options.content,
                    React.createElement("div", { className: "text-center mtop" },
                        React.createElement("button", { className: "btn btn-success mright", onClick: onYes }, "Yes"),
                        React.createElement("button", { className: "btn btn-danger", onClick: () => (onNo ? onNo() : this.toggleModalInstance("confirm", false, true)) }, "No")))) })), showActions: (options, actions) => this.createModal("actions", Object.assign(Object.assign({}, options), { content: (React.createElement("div", null,
                    options.content,
                    React.createElement("div", { className: "text-center mtop" }, actions.map(({ content, type = "success", closeOnClick, onClick }, index) => (React.createElement("button", { className: `btn btn-${type} mright`, onClick: () => {
                            onClick && onClick();
                            closeOnClick && this.toggleModalInstance("actions", false, true);
                        } }, content)))))) })) });
    }
    get alertDefaults() {
        return {
            show: this.showNotifyAlert.bind(this),
            showNoty: this.showNoty.bind(this),
        };
    }
    get loaderDefaults() {
        return Object.assign(Object.assign({}, defaultState.loader), { show: () => this.setState({
                loader: Object.assign(Object.assign({}, this.state.loader), { shown: true }),
            }), hide: () => this.setState({
                loader: Object.assign(Object.assign({}, this.state.loader), { shown: false }),
            }) });
    }
    showNotifyAlert(message, alertType, position, bindToElement) {
        import(/* webpackChunkName: "notify" */ "../external-dependencies/notify-js/notify").then(() => {
            const options = Object.assign(Object.assign({}, (alertType && { className: alertType })), (position && { position }));
            $(".notifyjs-hidable").trigger("click");
            if (bindToElement) {
                $(bindToElement).notify(message, options);
            }
            else {
                $.notify(message, options);
            }
        });
    }
    showNoty(message, alertType) {
        import(/* webpackChunkName: "noty" */ "../external-dependencies/noty/jquery.noty.packaged").then(() => {
            $.noty.defaults = {
                layout: "topCenter",
                theme: "relax",
                type: "alert",
                text: "",
                dismissQueue: false,
                template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
                animation: {
                    open: { height: "toggle" },
                    close: { height: "toggle" },
                    easing: "swing",
                    speed: 500, // opening & closing animation speed
                },
                timeout: 4000,
                force: true,
                modal: false,
                maxVisible: 1,
                killer: true,
                closeWith: ["click"],
                callback: {
                    onShow: function () { },
                    afterShow: function () { },
                    onClose: function () { },
                    afterClose: function () { },
                    onCloseClick: function () { },
                },
                buttons: false, // an array of buttons
            };
            window.noty({ text: message, type: alertType });
        });
    }
    toggleModalInstance(id, shown, destroyOnClose = false) {
        const { modal: { instances }, } = this.state;
        const instance = instances[id];
        if (!instance) {
            return;
        }
        // Hide all other instances
        Object.keys(instances).forEach(id => (instances[id].shown = false));
        if (!shown && destroyOnClose && instance.options.destroyOnClose) {
            this.removeModalInstance(id);
        }
        else {
            instance.shown = shown;
            this.setState({
                modal: Object.assign(Object.assign({}, this.state.modal), { instances }),
            });
        }
    }
    removeModalInstance(id) {
        const { modal: { instances }, } = this.state;
        delete instances[id];
        this.setState({
            modal: Object.assign(Object.assign({}, this.state.modal), { instances }),
        });
    }
    getCurrentModal(id) {
        return {
            show: () => this.toggleModalInstance(id, true),
            hide: () => this.toggleModalInstance(id, false),
            remove: () => this.removeModalInstance(id),
        };
    }
    createModal(id, options) {
        const { modal: { instances }, } = this.state;
        instances[id] = {
            options,
            shown: false,
            handleClose: this.toggleModalInstance.bind(this),
        };
        this.setState({
            modal: Object.assign(Object.assign({}, this.state.modal), { instances }),
        });
        this.toggleModalInstance(id, true);
        return this.getCurrentModal(id);
    }
    render() {
        return React.createElement(UIUtilContext.Provider, { value: this.state }, this.props.children);
    }
}
//# sourceMappingURL=UIUtilProvider.js.map