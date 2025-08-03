export type InputElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

/**
 * Class representing a generic DOM element with utility methods for manipulation and validation.
 */
export class Element {
    /**
     * Creates an instance of Element.
     * @param native The native HTML element.
     */
    constructor(public native: HTMLElement) {}

    /**
     * Gets the value of the input element.
     * @returns The value of the input element.
     */
    public val() {
        return this.nativeInput.value;
    }

    /**
     * Checks if the element has a specific class.
     * @param className The class name to check.
     * @returns True if the element has the class, false otherwise.
     */
    public hasClass(className: string) {
        return this.native.classList.contains(className);
    }

    /**
     * Removes a specific class from the element.
     * @param className The class name to remove.
     */
    public removeClass(className: string) {
        this.native.classList.remove(className);
    }

    /**
     * Gets the value of a data attribute.
     * @param attribute The data attribute name.
     * @returns The value of the data attribute.
     */
    public data(attribute: string) {
        return this.native.getAttribute(
            ["data"].concat(attribute.split(/(?=[A-Z])/).map(s => s.toLowerCase())).join("-"),
        );
    }

    /**
     * Gets the value of an attribute.
     * @param attribute The attribute name.
     * @returns The value of the attribute or null if not found.
     */
    public attr(attribute: string) {
        return this.native.getAttribute(attribute);
    }

    /**
     * Checks if the element is visible.
     * @returns True if the element is visible, false otherwise.
     */
    public visible() {
        return !!(this.native.offsetWidth || this.native.offsetHeight || this.native.getClientRects().length);
    }

    /**
     * Gets the closest ancestor element that matches the selector.
     * @param selector The selector to match.
     * @returns The closest ancestor element.
     */
    public parents(selector: string) {
        return new Element(this.native.closest(selector));
    }

    /**
     * Gets the next sibling element.
     * @returns The next sibling element.
     */
    public next(): Element | null {
        return !!this.native.nextElementSibling ? new Element(this.native.nextElementSibling as HTMLElement) : null;
    }

    /**
     * Inserts HTML after the element.
     * @param html The HTML to insert.
     */
    public after(html: string) {
        this.native.insertAdjacentHTML("afterend", html);
    }

    /**
     * Adds a class to the element.
     * @param className The class name to add.
     */
    public addClass(className: string) {
        this.native.classList.add(className);
    }

    /**
     * Removes the element from the DOM.
     */
    public remove() {
        this.native.remove();
    }

    /**
     * Gets the native input element.
     * @returns The native input element.
     */
    public get nativeInput() {
        return this.native as InputElement;
    }

    /**
     * Finds an element by its ID.
     * @param id The ID of the element to find.
     * @returns The Element instance if found, null otherwise.
     */
    public static byId(id: string): Element | null {
        const element = document.getElementById(id);
        return element ? new Element(element) : null;
    }

    /**
     * Finds the first element matching the CSS selector.
     * @param selector The CSS selector to match.
     * @returns The Element instance if found, null otherwise.
     */
    public static bySelector(selector: string): Element | null {
        const element = document.querySelector(selector);
        return element ? new Element(element as HTMLElement) : null;
    }

    /**
     * Finds all elements matching the CSS selector.
     * @param selector The CSS selector to match.
     * @returns An array of Element instances.
     */
    public static bySelectorAll(selector: string): Element[] {
        return Array.from(document.querySelectorAll(selector)).map(el => new Element(el as HTMLElement));
    }

    /**
     * Finds all elements with the specified tag name.
     * @param tagName The tag name to match.
     * @returns An array of Element instances.
     */
    public static byTagName(tagName: string): Element[] {
        return Array.from(document.getElementsByTagName(tagName)).map(el => new Element(el as HTMLElement));
    }

    /**
     * Finds all elements with the specified class name.
     * @param className The class name to match.
     * @returns An array of Element instances.
     */
    public static byClassName(className: string): Element[] {
        return Array.from(document.getElementsByClassName(className)).map(el => new Element(el as HTMLElement));
    }
}
