export interface IModalCreate {
    /**
     * Hides the modal.
     */
    hide: () => void;
    /**
     * Shows the modal.
     */
    show: () => void;
    /**
     * Removes the modal.
     */
    remove: () => void;
}

export type ModalOptions = {
    /**
     * The content of the modal.
     */
    content: JSX.Element | string;
    /**
     * Footer content of the modal.
     */
    footerContent?: JSX.Element | string;
    /**
     * The class to apply to the modal.
     */
    cssClass?: string;
    /**
     * The width of the modal.
     */
    width?: string | number;
    /**
     * The title of the modal.
     */
    title?: JSX.Element | string;
    /**
     * If true, the modal will have a close button in the title bar.
     */
    titleCloseBtn?: boolean;
    /**
     * If true, the modal will have a close button in the footer.
     */
    closeBtn?: boolean;
    /**
     * Function to call when the modal is closed.
     */
    onClose?: () => void;
    /**
     * If true, the modal will be destroyed when it is closed.
     */
    destroyOnClose?: boolean;
};

export type AlertType = "success" | "warning" | "error";
export type ButtonType = "primary" | "info" | "success" | "warning" | "danger";

export interface IUtilModalAction {
    /**
     * The content to display in the modal.
     */
    content: JSX.Element | string;
    /**
     * The type of button to display.
     */
    type?: ButtonType;
    /**
     * Function to call when the button is clicked.
     */
    onClick?: () => void;
    /**
     * If true, the modal will be closed when the button is clicked.
     */
    closeOnClick?: boolean;
}

export interface IUIUtilModal {
    /**
     * Creates a non-unique modal.
     * @param options The options for the modal.
     */
    show: (options: ModalOptions) => IModalCreate;
    /**
     * Creates a unique (by id) modal
     * @param id The id of the modal.
     * @param options The options for the modal.
     */
    create: (id: string, options: ModalOptions) => IModalCreate;
    /**
     * Dictionary of modal instances in memory.
     */
    instances: {
        [id: string]: {
            options: ModalOptions;
            shown: boolean;
            handleClose: (id: string, shown: boolean, destroyOnClose: boolean) => void;
        };
    };
    /**
     * Gets the current modal instance.
     */
    getCurrent: () => IModalCreate;
    /**
     * Shows an alert style modal.
     * @param content The content to display in the modal.
     */
    showAlert: (content: ModalOptions["content"]) => IModalCreate;
    /**
     * Shows a confirm style modal.
     * @param options The options for the modal.
     * @param onYes The function to call when the yes button is clicked.
     * @param onNo The function to call when the no button is clicked.
     */
    showConfirm: (options: ModalOptions, onYes: () => void, onNo?: () => void) => IModalCreate;
    /**
     * Shows a modal with custom actions.
     * @param options The options for the modal.
     * @param actions The actions to display in the modal.
     */
    showActions: (options: ModalOptions, actions: IUtilModalAction[]) => IModalCreate;
}

export interface IUIUtilLoader {
    /**
     * Status of the loader.
     */
    shown: boolean;
    /**
     * Shows the loader.
     */
    show: () => void;
    /**
     * Hides the loader.
     */
    hide: () => void;
}

export interface IUIUtilAlert {
    /**
     * Shows an alert.
     * @param message The message to display in the alert.
     * @param alertType The type of alert to display.
     * @param position The position of the alert.
     * @param bindToElement The element to bind the alert to.
     */
    show: (message: string, alertType?: AlertType, position?: string, bindToElement?: any) => void;
    /**
     * Shows an alert using Noty library.
     * @param message The message to display in the alert.
     * @param alertType The type of alert to display.
     */
    showNoty: (message: string, alertType: AlertType) => void;
}
