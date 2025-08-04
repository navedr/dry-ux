export type InputElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

/**
 * Class representing a generic DOM element with utility methods for manipulation and validation.
 */
export class Element {
    private readonly _native: HTMLElement;
    /**
     * Creates an instance of Element.
     * @param native The native HTML element.
     */
    constructor(native: HTMLElement) {
        this._native = native;
    }

    /**
     * Gets the native HTML element.
     * @returns The native HTML element.
     */
    public get native(): HTMLElement {
        return this._native;
    }

    /**
     * Gets or sets the value of the input element.
     * @param value Optional value to set for the input element.
     * If no value is provided, it returns the current value of the input element.
     * If a value is provided, it sets the input element's value to that value.
     * This method is useful for both getting and setting the value of input elements.
     * @returns The value of the input element.
     */
    public val(value?: string): string | undefined {
        return value === undefined ? this.nativeInput.value : (this.nativeInput.value = value);
    }

    /**
     * Clears the inner content of element by setting it to an empty string.
     */
    public empty() {
        this.native.innerHTML = "";
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
     * Adds an event listener to the element.
     * @param type The event type to listen for.
     * @param handler The event handler function.
     * @param once Whether the event should only fire once.
     * @returns A function to remove the event listener, or undefined if the element is not suitable for events.
     */
    public addEventListener(type: string, handler: (e: Event) => void, once?: boolean): () => void | undefined {
        if (
            (this.nativeInput instanceof HTMLInputElement ||
                this.nativeInput instanceof HTMLSelectElement ||
                this.nativeInput instanceof HTMLTextAreaElement) &&
            !!type
        ) {
            const abortController = new AbortController();
            this.nativeInput.addEventListener("change", handler, { once, signal: abortController.signal });
            return abortController.abort;
        }
    }

    /**
     * Adds a change event listener to the element.
     * @param handler The event handler function.
     * @param once Whether the event should only fire once.
     * @returns A function to remove the event listener.
     */
    public change(handler: (e: Event) => void, once?: boolean) {
        return this.addEventListener("change", handler, once);
    }

    /**
     * Adds a click event listener to the element.
     * @param handler The event handler function.
     * @param once Whether the event should only fire once.
     * @returns A function to remove the event listener.
     */
    public click(handler: (e: Event) => void, once?: boolean) {
        return this.addEventListener("click", handler, once);
    }

    /**
     * Adds a focus event listener to the element.
     * @param handler The event handler function.
     * @param once Whether the event should only fire once.
     * @returns A function to remove the event listener.
     */
    public focus(handler: (e: Event) => void, once?: boolean) {
        return this.addEventListener("focus", handler, once);
    }

    /**
     * Adds a blur event listener to the element.
     * @param handler The event handler function.
     * @param once Whether the event should only fire once.
     * @returns A function to remove the event listener.
     */
    public blur(handler: (e: Event) => void, once?: boolean) {
        return this.addEventListener("blur", handler, once);
    }

    /**
     * Adds a keydown event listener to the element.
     * @param handler The keyboard event handler function.
     * @param once Whether the event should only fire once.
     * @returns A function to remove the event listener.
     */
    public keydown(handler: (e: KeyboardEvent) => void, once?: boolean) {
        return this.addEventListener("keydown", handler, once);
    }

    /**
     * Adds a keyup event listener to the element.
     * @param handler The keyboard event handler function.
     * @param once Whether the event should only fire once.
     * @returns A function to remove the event listener.
     */
    public keyup(handler: (e: KeyboardEvent) => void, once?: boolean) {
        return this.addEventListener("keyup", handler, once);
    }

    /**
     * Finds an element by its ID.
     * When called as static method: searches entire document.
     * When called as instance method: searches within this element's scope.
     * @param id The ID of the element to find.
     * @returns The Element instance if found, null otherwise.
     */
    public static byId(id: string): Element | null {
        const element = document.getElementById(id);
        return element ? new Element(element) : null;
    }

    /**
     * Finds an element by its ID within this element's scope.
     * @param id The ID of the element to find.
     * @returns The Element instance if found, null otherwise.
     */
    public byId(id: string): Element | null {
        return this.bySelector(`#${id}`);
    }

    /**
     * Finds the first element matching the CSS selector.
     * When called as static method: searches entire document.
     * When called as instance method: searches within this element's scope.
     * @param selector The CSS selector to match.
     * @returns The Element instance if found, null otherwise.
     */
    public static bySelector(selector: string): Element | null {
        const element = document.querySelector(selector);
        return element ? new Element(element as HTMLElement) : null;
    }

    /**
     * Finds the first element matching the CSS selector within this element's scope.
     * @param selector The CSS selector to match.
     * @returns The Element instance if found, null otherwise.
     */
    public bySelector(selector: string): Element | null {
        const element = this.native.querySelector(selector);
        return element ? new Element(element as HTMLElement) : null;
    }

    /**
     * Finds all elements matching the CSS selector.
     * When called as static method: searches entire document.
     * When called as instance method: searches within this element's scope.
     * @param selector The CSS selector to match.
     * @returns An array of Element instances.
     */
    public static bySelectorAll(selector: string): Element[] {
        return Array.from(document.querySelectorAll(selector)).map(el => new Element(el as HTMLElement));
    }

    /**
     * Finds all elements matching the CSS selector within this element's scope.
     * @param selector The CSS selector to match.
     * @returns An array of Element instances.
     */
    public bySelectorAll(selector: string): Element[] {
        return Array.from(this.native.querySelectorAll(selector)).map(el => new Element(el as HTMLElement));
    }

    /**
     * Finds all elements with the specified tag name.
     * When called as static method: searches entire document.
     * When called as instance method: searches within this element's scope.
     * @param tagName The tag name to match.
     * @returns An array of Element instances.
     */
    public static byTagName(tagName: string): Element[] {
        return Array.from(document.getElementsByTagName(tagName)).map(el => new Element(el as HTMLElement));
    }

    /**
     * Finds all elements with the specified tag name within this element's scope.
     * @param tagName The tag name to match.
     * @returns An array of Element instances.
     */
    public byTagName(tagName: string): Element[] {
        return Array.from(this.native.getElementsByTagName(tagName)).map(el => new Element(el as HTMLElement));
    }

    /**
     * Finds all elements with the specified class name.
     * When called as static method: searches entire document.
     * When called as instance method: searches within this element's scope.
     * @param className The class name to match.
     * @returns An array of Element instances.
     */
    public static byClassName(className: string): Element[] {
        return Array.from(document.getElementsByClassName(className)).map(el => new Element(el as HTMLElement));
    }

    /**
     * Finds all elements with the specified class name within this element's scope.
     * @param className The class name to match.
     * @returns An array of Element instances.
     */
    public byClassName(className: string): Element[] {
        return Array.from(this.native.getElementsByClassName(className)).map(el => new Element(el as HTMLElement));
    }
}
