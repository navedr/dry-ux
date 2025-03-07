import { Omit } from "react-bootstrap";

/**
 * Type alias for content, which can be a JSX element or a string.
 */
export type Content = JSX.Element | string;

/**
 * Represents a PopUp with methods to control its visibility and content.
 */
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
     * @param {Partial<PopUpOptions>} options - The options to update.
     */
    update: (options: Partial<PopUpOptions>) => void;
    /**
     * The overlay for the modal.
     */
    overlay: {
        /**
         * Shows the overlay.
         * @param {Content} content - The content to display in the overlay.
         */
        show: (content: Content) => void;
        /**
         * Shows the overlay with yes/no buttons.
         * @param {Content} content - The content to display in the overlay.
         * @param {() => void} onYes - The function to call when the yes button is clicked.
         * @param {() => void} [onNo] - The function to call when the no button is clicked.
         */
        showConfirm: (content: Content, onYes: () => void, onNo?: () => void) => void;
        /**
         * Shows the overlay with custom actions.
         * @param {Content} title - The title of the overlay.
         * @param {Content} content - The content to display in the overlay.
         * @param {Omit<PopUpAction, "confirm">[]} actions - The actions to display in the overlay.
         */
        showActions: (title: Content, content: Content, actions: Omit<PopUpAction, "confirm">[]) => void;
        /**
         * Hides the overlay.
         */
        hide: () => void;
    };
};

/**
 * Type alias for button types.
 */
export type ButtonType = "primary" | "secondary" | "info" | "success" | "warning" | "danger";

/**
 * Represents an instance of a PopUp.
 */
export type PopUpInstance = {
    /**
     * The options for the PopUp.
     */
    options: PopUpOptions;
    /**
     * Indicates whether the PopUp is shown.
     */
    shown: boolean;
    /**
     * The overlay content for the PopUp.
     */
    overlay?: Content;
    /**
     * Handles closing the PopUp.
     * @param {string} id - The id of the PopUp.
     * @param {boolean} shown - Indicates whether the PopUp is shown.
     * @param {boolean} [destroyOnClose] - If true, the PopUp will be destroyed when closed.
     */
    handleClose: (id: string, shown: boolean, destroyOnClose?: boolean) => void;
    /**
     * Toggles the overlay content for the PopUp.
     * @param {string} id - The id of the PopUp.
     * @param {Content} [content] - The content to display in the overlay.
     */
    toggleOverlay: (id: string, content?: Content) => void;
};

/**
 * Represents an action for a PopUp.
 */
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

/**
 * Represents the options for a PopUp.
 */
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

/**
 * Represents a utility for managing UI modals.
 */
export type UIUtilModal = {
    /**
     * Creates a non-unique modal.
     * @param {PopUpOptions} options - The options for the modal.
     * @returns {PopUp} The created PopUp.
     */
    show: (options: PopUpOptions) => PopUp;
    /**
     * Creates a unique (by id) modal.
     * @param {string} id - The id of the modal.
     * @param {PopUpOptions} options - The options for the modal.
     * @returns {PopUp} The created PopUp.
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
     * @returns {PopUp} The current PopUp.
     */
    getCurrent: () => PopUp;
    /**
     * Shows an alert style modal.
     * @param {Content} content - The content to display in the modal.
     * @param {() => void} [onClose] - Function to call when the modal is closed.
     * @returns {PopUp} The created PopUp.
     */
    showAlert: (content: Content, onClose?: PopUpOptions["onClose"]) => PopUp;
    /**
     * Shows a confirm style modal.
     * @param {Omit<PopUpOptions, "actions">} options - The options for the modal.
     * @param {() => void} onYes - The function to call when the yes button is clicked.
     * @param {() => void} [onNo] - The function to call when the no button is clicked.
     * @returns {PopUp} The created PopUp.
     */
    showConfirm: (options: Omit<PopUpOptions, "actions">, onYes: () => void, onNo?: () => void) => PopUp;
    /**
     * Shows a modal with custom actions.
     * @param {Omit<PopUpOptions, "actions">} options - The options for the modal.
     * @param {PopUpAction[]} actions - The actions to display in the modal.
     * @returns {PopUp} The created PopUp.
     */
    showActions: (options: Omit<PopUpOptions, "actions">, actions: PopUpAction[]) => PopUp;
};

/**
 * Represents a loader utility.
 */
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

/**
 * Type alias for UIUtilPrompt, which includes specific methods from UIUtilModal.
 */
export type UIUtilPrompt = Pick<UIUtilModal, "showConfirm" | "showActions" | "instances" | "getCurrent">;
