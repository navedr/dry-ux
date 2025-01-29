const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

type InputElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

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
}

/**
 * Options for configuring the validation.
 */
type ValidationOptions = {
    /**
     * The form element and its configuration.
     */
    form?: {
        /**
         * The ID of the form element.
         */
        id?: string;
        /**
         * The form element itself.
         */
        element?: HTMLFormElement;
        /**
         * Whether to bind validation to value changes.
         */
        bindToValueChanges?: boolean;
    };
    /**
     * Whether to use modern error messages.
     */
    modernErrorMessage?: boolean;
};

/**
 * Class representing form validation.
 */
export class Validation {
    private readonly form: HTMLFormElement;
    private readonly modernErrorMessage: boolean;

    /**
     * Creates an instance of Validation.
     * @param options The options for configuring the validation.
     */
    constructor(options?: ValidationOptions) {
        const { form, modernErrorMessage } = options || {};
        if (form?.id || form?.element) {
            this.form = typeof form.id ? (document.getElementById(form.id) as HTMLFormElement) : form.element;
            if (form.bindToValueChanges) {
                this.getElements(this.form).forEach(element => this.bindToValueChanges(element.native));
            }
        }
        this.modernErrorMessage = modernErrorMessage;
    }

    /**
     * Binds the form to value changes for validation.
     * @param input The input element or its ID.
     */
    public bindToValueChanges(input: HTMLElement | string) {
        const element = typeof input === "string" ? new Element(document.getElementById(input)) : new Element(input);
        element.native.addEventListener("change", event => this.validate(element));
    }

    /**
     * Validates the entire form.
     * @returns True if the form is valid, false otherwise.
     */
    public validateForm() {
        return this.getElements(this.form).filter(element => !this.validate(element)).length === 0;
    }

    /**
     * Validates a specific input element.
     * @param input The input element or its ID.
     * @returns True if the input is valid, false otherwise.
     */
    public validateInput(input: HTMLElement | string) {
        const element = typeof input === "string" ? new Element(document.getElementById(input)) : new Element(input);
        return this.validate(element);
    }

    /**
     * Validates a specific element.
     * @param element The element to validate.
     * @returns True if the element is valid, false otherwise.
     */
    private validate(element: Element) {
        if (!element.visible() && !element.hasClass("validate-hidden")) {
            return true;
        }
        let val = element.val(),
            errorRefAttr = element.data("validationErrorRef");
        let isValid = true;
        let errorMsg = "";
        const numericValue = Number(val);
        if (element.data("validationTrim") != null) {
            const trim = element.data("validationTrim");
            for (let i = 0, len = trim.length; i < len; i++) {
                val = val.split(trim[i]).join("");
            }
        }
        //Optional: data-required-message
        if (element.hasClass("validate-required") && isValid) {
            isValid = val != "";
            if (element.data("requiredMessage") != null) errorMsg = element.data("requiredMessage");
            else errorMsg = "This field is required";
        }
        //Optional: data-number-message
        if (element.hasClass("validate-number") && isValid) {
            isValid = !isNaN(numericValue);
            if (element.data("numberMessage") != null) errorMsg = element.data("numberMessage");
            else errorMsg = "Please enter a valid number";
        }
        //Optional: data-money-message
        if (element.hasClass("validate-money") && isValid) {
            isValid = !isNaN(numericValue);
            if (isValid) isValid = numericValue >= 0;
            if (element.data("moneyMessage") != null) errorMsg = element.data("moneyMessage");
            else errorMsg = "Please enter a valid amount";
        }
        //Optional: data-positive-number-message
        if (element.hasClass("validate-positive-number") && isValid) {
            isValid = !isNaN(numericValue);
            if (isValid) isValid = numericValue >= 0;
            if (element.data("positiveNumberMessage") != null) errorMsg = element.data("positiveNumberMessage");
            else errorMsg = "Please enter a valid positive number";
        }
        //Optional: data-email-message
        if (element.hasClass("validate-email") && isValid) {
            var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            isValid = val.search(emailRegEx) != -1;
            if (element.data("emailMessage") != null) errorMsg = element.data("emailMessage");
            else errorMsg = "Please enter Email in correct format";
        }
        //Optional: data-digits-message
        if (element.hasClass("validate-digits") && isValid) {
            isValid = val.match(/[0-9]*/)[0].length == val.length;
            if (element.data("digitsMessage") != null) errorMsg = element.data("digitsMessage");
            else errorMsg = "Only digits allowed";
        }
        //Required: data-compare attribute to the field and specify the ID of the input to compare with
        //Optional: data-compare-message
        if (element.hasClass("validate-compare") && isValid) {
            if (element.data("compare") != null) {
                const compareTo = new Element(document.getElementById(element.data("compare"))).val();
                isValid = compareTo == val;
                if (element.data("compareMessage") != null) errorMsg = element.data("compareMessage");
                else errorMsg = "Values do not match";
            }
        }
        //Required: data-min-length to the field and specify the minimum length required
        //Optional: data-min-length-message
        if (element.hasClass("validate-min-length") && isValid) {
            if (element.data("minLength") != null) {
                const maxLength = parseInt(element.data("minLength"));
                isValid = val.length >= maxLength;
                if (element.data("minLengthMessage") != null) errorMsg = element.data("minLengthMessage");
                else errorMsg = "Minimum " + maxLength + " characters required.";
            }
        }
        //Required: data-min-digits-length to the field and specify the minimum length required
        //Optional: data-min-digits-length-message
        if (element.hasClass("validate-min-digits-length") && isValid) {
            if (element.data("minDigitsLength") != null) {
                const minLength = parseInt(element.data("minDigitsLength"));
                isValid = val.replace(/[^0-9]/g, "").length >= minLength;
                if (element.data("minDigitsLengthMessage") != null) errorMsg = element.data("minDigitsLengthMessage");
                else errorMsg = "Minimum " + minLength + " digits required.";
            }
        }
        //Required: data-max-length to the field and specify the maximum length allowed
        //Optional: data-maxlength-message
        if (element.hasClass("validate-max-length") && isValid) {
            if (element.data("maxLength") != null) {
                const maxlength = parseInt(element.data("maxLength"));
                isValid = val.length <= maxlength;
                if (element.data("maxLengthMessage") != null) errorMsg = element.data("maxLengthMessage");
                else errorMsg = "Maximum " + maxlength + " characters allowed.";
            }
        }
        //Optional: data-date-message
        if (element.hasClass("validate-date") && isValid) {
            isValid = this.validateDate(val);
            if (element.data("dateMessage") != null) errorMsg = element.data("dateMessage");
            else errorMsg = "Not a valid date";
        }
        //Required: data-max-value to the field and specify the maximum value allowed
        //Optional: data-maxvalue-message
        if (element.hasClass("validate-max-value") && isValid) {
            if (element.data("maxValue") != null) {
                const maxvalue = parseFloat(element.data("maxValue"));
                if (val.length > 0 && !isNaN(numericValue)) isValid = parseFloat(val) <= maxvalue;
                if (element.data("maxvalueMessage") != null) errorMsg = element.data("maxvalueMessage");
                else errorMsg = "Value cannot be more than " + maxvalue + ".";
            }
        }
        //Required: data-max-date to the field and specify the maximum date allowed
        //Optional: data-max-date-message
        if (element.hasClass("validate-max-date") && isValid) {
            if (element.data("maxDate") != null) {
                const maxDate = new Date(element.data("maxDate"));
                const day = new Date(val);
                isValid = day <= maxDate;
                if (element.data("maxDateMessage") != null) errorMsg = element.data("maxDateMessage");
                else errorMsg = "Date cannot be more than " + maxDate + ".";
            }
        }
        //Required: data-min-date to the field and specify the maximum date allowed
        //Optional: data-min-date-message
        if (element.hasClass("validate-min-date") && isValid) {
            if (element.data("minDate") != null) {
                const minDate = new Date(element.data("minDate"));
                const day = new Date(val);
                isValid = day >= minDate;
                if (element.data("minDateMessage") != null) errorMsg = element.data("minDateMessage");
                else errorMsg = "Date cannot be less than " + minDate + ".";
            }
        }
        if (element.hasClass("validate-disallowed-days-of-week") && isValid) {
            const disallowedDays = element.data("disallowedDaysOfWeek").toString().split(",");
            try {
                const day = new Date(val).getUTCDay().toString();
                // Days in JS range from 0-6 where 0 is Sunday and 6 is Saturday
                isValid = !disallowedDays.some(d => d == day);
                if (!isValid) {
                    errorMsg = `${daysOfWeek[parseInt(day)]} not allowed! Please pick a different day.`;
                }
            } catch (e) {}
        }
        const errorRef = errorRefAttr ? element.parents(errorRefAttr) : element;

        if (errorRef.next()?.hasClass("error-message")) {
            errorRef.next().remove();
        }
        //Checking if control is valid and performing necessary action
        if (isValid) {
            errorRef.removeClass("error-background");
            return true;
        } else {
            if (errorMsg !== "") {
                if (this.modernErrorMessage) {
                    element.nativeInput.setCustomValidity(errorMsg);
                    element.nativeInput.reportValidity();
                } else {
                    errorRef.after("<div class='error-message'>" + errorMsg + "</div>");
                }
            }
            if (!element.hasClass("validation-no-error-background")) {
                errorRef.addClass("error-background");
            }
            return false;
        }
    }

    /**
     * Gets the elements to be validated.
     * @param form The form element.
     * @returns An array of elements to be validated.
     */
    private getElements = (form: HTMLFormElement): Element[] =>
        Array.from(form.getElementsByClassName("validate") as HTMLCollectionOf<InputElement>).map(
            field => new Element(field),
        );

    /**
     * Validates a date string.
     * @param value The date string to validate.
     * @returns True if the date is valid, false otherwise.
     */
    private validateDate(value: string) {
        const format = /^\d{2}\/\d{2}\/\d{4}$/; //Basic check for format validity
        if (!format.test(value)) {
            return false;
        } else {
            //Detailed check for valid date ranges
            const [month, day, year] = value.split("/").map(Number);
            const date = new Date(year, month - 1, day);
            return !(date.getMonth() + 1 != month || date.getDate() != day || date.getFullYear() != year);
        }
    }
}
