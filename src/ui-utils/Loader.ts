import { SpinnerStyles } from "./SpinnerStyles";

export class Loader {
    private readonly spinnerStyles = new SpinnerStyles();
    private readonly elementId = "dry-ux-loader";
    get element() {
        return document.getElementById(this.elementId);
    }

    public show() {
        this.addElementsIfNotExists();
        this.element.style.visibility = "visible";
    }

    public hide() {
        if (this.element) {
            this.element.style.visibility = "hidden";
        }
    }

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
