import { InputHTMLAttributes } from "react";

/**
 * Type alias for validation, which can be a boolean or a string.
 */
export type IValidation = boolean | string;

/**
 * Interface representing a value validation with an optional message.
 */
export interface IValueValidation<T> {
    /**
     * The value to be validated.
     */
    value: T;
    /**
     * Optional message to be displayed if validation fails.
     */
    message?: string;
}

/**
 * Interface representing various validation rules for a field.
 */
export interface IValidations {
    /**
     * Indicates if the field is required.
     */
    required?: IValidation;
    /**
     * Indicates if the field should be validated as a number.
     */
    number?: IValidation;
    /**
     * Indicates if the field should be validated as a monetary value.
     */
    money?: IValidation;
    /**
     * Indicates if the field should be validated as a positive number.
     */
    positiveNumber?: IValidation;
    /**
     * Indicates if the field should be validated as an email.
     */
    email?: IValidation;
    /**
     * Indicates if the field should be validated as digits.
     */
    digits?: IValidation;
    /**
     * Indicates if the field should be validated as a date.
     */
    date?: IValidation;
    /**
     * Compares the field with another field specified by its ID.
     */
    compare?: IValueValidation<string>;
    /**
     * Minimum length validation for the field.
     */
    minLength?: IValueValidation<number>;
    /**
     * Minimum digits length validation for the field.
     */
    minDigitsLength?: IValueValidation<number>;
    /**
     * Maximum length validation for the field.
     */
    maxLength?: IValueValidation<number>;
    /**
     * Maximum value validation for the field.
     */
    maxValue?: IValueValidation<number>;
    /**
     * Maximum date validation for the field.
     */
    maxDate?: IValueValidation<Date>;
    /**
     * Minimum date validation for the field.
     */
    minDate?: IValueValidation<Date>;
    /**
     * Disallowed days of the week for the field.
     */
    disallowedDaysOfWeek?: number[];
    /**
     * Indicates if the field should be validated even if it is hidden.
     */
    validateHidden?: boolean;
    /**
     * JQuery selector of the element to add the error after.
     */
    errorRef?: string;
}

/**
 * Interface representing enhanced properties for an input field.
 */
export interface IEnhancedProps {
    /**
     * Validation rules for the field.
     */
    validations?: IValidations;
    /**
     * Indicates if the field should have form control styling.
     */
    formControl?: boolean;
    /**
     * Maximum length for the field.
     */
    eMaxLength?: number;
    /**
     * Indicates if the field should select its content on focus.
     */
    selectOnFocus?: boolean;
    /**
     * Indicates if the field should not have error background styling.
     */
    noErrorBackground?: boolean;
    /**
     * Indicates if the field should validate on change (Default: true).
     */
    validateOnChange?: boolean;
}

/**
 * Type alias for input attributes, extending HTML input, select, and textarea attributes.
 */
export type InputAttributes = InputHTMLAttributes<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;
