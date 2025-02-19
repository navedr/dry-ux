import { Omit } from "react-bootstrap";

export type Content = JSX.Element | string;

export type PopUp = {
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
    /**
     * Updates the modal options.
     */
    update: (options: Partial<PopUpOptions>) => void;
    /**
     * The overlay for the modal.
     */
    overlay: {
        /**
         * Shows the overlay.
         */
        show: (content: Content) => void;
        /**
         * Shows the overlay with yes/no buttons.
         */
        showConfirm: (content: Content, onYes: () => void, onNo?: () => void) => void;
        /**
         * Shows the overlay with custom actions.
         */
        showActions: (title: Content, content: Content, actions: Omit<PopUpAction, "confirm">[]) => void;
        /**
         * Hides the overlay.
         */
        hide: () => void;
    };
};

export type ButtonType = "primary" | "secondary" | "info" | "success" | "warning" | "danger";

export type PopUpInstance = {
    options: PopUpOptions;
    shown: boolean;
    overlay?: Content;
    handleClose: (id: string, shown: boolean, destroyOnClose?: boolean) => void;
    toggleOverlay: (id: string, content?: Content) => void;
};

export type PopUpAction = {
    /**
     * The content to display in the modal.
     */
    content: Content;
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
    /**
     * If set, confirm overlay will be shown before the action is executed.
     */
    confirm?: Content;
};

export type PopUpOptions = {
    /**
     * The content of the modal.
     */
    content: Content;
    /**
     * Footer content of the modal.
     */
    footerContent?: Content;
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
    title?: Content;
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
    /**
     * If true, the modal will be centered vertically.
     */
    centered?: boolean;
    /**
     * The tracking ID for the modal.
     */
    trackingId?: string;
    /**
     * If true, the modal will be shown.
     */
    actions?: PopUpAction[];
};

export type UIUtilModal = {
    /**
     * Creates a non-unique modal.
     * @param options The options for the modal.
     */
    show: (options: PopUpOptions) => PopUp;
    /**
     * Creates a unique (by id) modal
     * @param id The id of the modal.
     * @param options The options for the modal.
     */
    create: (id: string, options: PopUpOptions) => PopUp;
    /**
     * Dictionary of modal instances in memory.
     */
    instances: {
        [id: string]: PopUpInstance;
    };
    /**
     * Gets the current modal instance.
     */
    getCurrent: () => PopUp;
    /**
     * Shows an alert style modal.
     * @param content The content to display in the modal.
     */
    showAlert: (content: Content, onClose?: PopUpOptions["onClose"]) => PopUp;
    /**
     * Shows a confirm style modal.
     * @param options The options for the modal.
     * @param onYes The function to call when the yes button is clicked.
     * @param onNo The function to call when the no button is clicked.
     */
    showConfirm: (options: Omit<PopUpOptions, "actions">, onYes: () => void, onNo?: () => void) => PopUp;
    /**
     * Shows a modal with custom actions.
     * @param options The options for the modal.
     * @param actions The actions to display in the modal.
     */
    showActions: (options: Omit<PopUpOptions, "actions">, actions: PopUpAction[]) => PopUp;
};

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

export type UIUtilPrompt = Pick<UIUtilModal, "showConfirm" | "showActions" | "instances" | "getCurrent">;
