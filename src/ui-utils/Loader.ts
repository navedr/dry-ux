import { SpinnerStyles } from "./SpinnerStyles";

/**
 * A singleton class that manages the display of a fullscreen loader spinner.
 */
export class Loader {
    private readonly spinnerStyles = SpinnerStyles.getInstance();
    private readonly elementId = "dry-ux-loader";
    private static instance: Loader;

    private constructor() {}

    /**
     * Returns the singleton instance of the Loader class.
     * @returns The Loader instance.
     */
    public static getInstance() {
        if (!Loader.instance) {
            Loader.instance = new Loader();
        }
        return Loader.instance;
    }

    /**
     * Gets the loader element from the DOM.
     * @returns The loader element.
     */
    get element() {
        return document.getElementById(this.elementId);
    }

    /**
     * Shows the loader by setting its visibility to visible.
     */
    public show() {
        this.addElementsIfNotExists();
        this.element.style.visibility = "visible";
    }

    /**
     * Hides the loader by setting its visibility to hidden.
     */
    public hide() {
        if (this.element) {
            this.element.style.visibility = "hidden";
        }
    }

    /**
     * Adds the loader elements to the DOM if they do not already exist.
     */
    private addElementsIfNotExists() {
        this.spinnerStyles.add();
        if (!this.element) {
            let el = document.createElement("div");
            el.id = this.elementId;
            el.className = "dry-ux-spinner fullscreen";
            document.body.appendChild(el);
        }
    }
}
