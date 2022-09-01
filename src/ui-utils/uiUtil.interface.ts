export interface IModalCreate {
    hide: () => void;
    show: () => void;
    remove: () => void;
}

export type ModalOptions = {
    content: JSX.Element | string;
    cssClass?: string;
    width?: string | number;
    title?: string;
    titleCloseBtn?: boolean;
    closeBtn?: boolean;
    onClose?: () => void;
    destroyOnClose?: boolean;
};

export type AlertType = "success" | "warning" | "error";
export type ButtonType = "primary" | "info" | "success" | "warning" | "danger";

export interface IUtilModalAction {
    content: JSX.Element | string;
    type?: ButtonType;
    onClick?: () => void;
    closeOnClick?: boolean;
}

export interface IUIUtilModal {
    // Creates a non-unique modal
    show: (options: ModalOptions) => IModalCreate;
    // Creates a unique (by id) modal
    create: (id: string, options: ModalOptions) => IModalCreate;
    instances: {
        [id: string]: {
            options: ModalOptions;
            shown: boolean;
            handleClose: (id: string, shown: boolean, destroyOnClose: boolean) => void;
        };
    };
    getCurrent: () => IModalCreate;
    showAlert: (content: string) => IModalCreate;
    showConfirm: (options: ModalOptions, onYes: () => void, onNo?: () => void) => IModalCreate;
    showActions: (options: ModalOptions, actions: IUtilModalAction[]) => IModalCreate;
}

export interface IUIUtilLoader {
    shown: boolean;
    show: () => void;
    hide: () => void;
}

export interface IUIUtilAlert {
    show: (message: string, alertType?: AlertType, position?: string, bindToElement?: any) => void;
    showNoty: (message: string, alertType: AlertType) => void;
}
