import * as React from "react";
import { IEnhancedProps, InputAttributes, IValidations, IValueValidation, IValidation } from "./interface";

/**
 * Extracts enhanced properties from the passed props.
 * @param passedProps The props passed to the component.
 * @returns An object containing the extracted enhanced properties and the remaining props.
 */
export const extractEnhancedProps = <P,>(passedProps: P & IEnhancedProps) => {
    const { validations, formControl, eMaxLength, selectOnFocus, noErrorBackground, validateOnChange, ...props } =
        passedProps;
    return { validations, formControl, eMaxLength, selectOnFocus, noErrorBackground, validateOnChange, props };
};

/**
 * Gets the enhanced attributes for an input element.
 * @param className The class name of the input element.
 * @param validations The validations to apply to the input element.
 * @param formControl Whether the input element is a form control.
 * @param noErrorBackground Whether to disable the error background.
 * @returns An object containing the class name and attributes for the input element.
 */
export const getEnhancedAttributes = (
    className: string,
    validations: IValidations,
    formControl: boolean,
    noErrorBackground: boolean,
) => {
    className = className || "";
    className += (!className.length ? "" : " ") + "enhanced-input";
    let attributes = {};
    if (validations) {
        const addValidation = (validation: IValidation, name: string) => {
            !!validation && (className += " validate-" + name);
            return !!validation && typeof validation == "string" && { [`data-${name}-message`]: validation };
        };

        const addValueValidation = (validation: IValueValidation<any>, name: string) => {
            !!validation && (className += " validate-" + name);
            return (
                !!validation && {
                    ...(validation.message !== undefined && { [`data-${name}-message`]: validation.message }),
                    [`data-${name}`]: validation.value,
                }
            );
        };

        const addGenericValidation = (validation: any, name: string) => {
            !!validation && (className += " validate-" + name);
            return !!validation && { [`data-${name}`]: validation };
        };

        attributes = {
            ...addValidation(validations.required, "required"),
            ...addValidation(validations.number, "number"),
            ...addValidation(validations.positiveNumber, "positive-number"),
            ...addValidation(validations.email, "email"),
            ...addValidation(validations.digits, "digits"),
            ...addValidation(validations.date, "date"),
            ...addValidation(validations.money, "money"),
            ...addValidation(validations.validateHidden, "hidden"),
            ...(validations.errorRef && { [`data-validation-error-ref`]: validations.errorRef }),
            ...addValueValidation(validations.compare, "compare"),
            ...addValueValidation(validations.minLength, "min-length"),
            ...addValueValidation(validations.minDigitsLength, "min-digits-length"),
            ...addValueValidation(validations.maxLength, "max-length"),
            ...addValueValidation(validations.maxValue, "max-value"),
            ...addValueValidation(validations.maxDate, "max-date"),
            ...addValueValidation(validations.minDate, "min-date"),
            ...addGenericValidation(validations.disallowedDaysOfWeek, "disallowed-days-of-week"),
        };
    }
    className.match("validate-") && (className += " validate");
    formControl && (className += " form-control");
    noErrorBackground && (className += " validation-no-error-background");
    return {
        className,
        attributes,
    };
};

/**
 * Higher-order component that adds enhancements to an input component.
 * @param Component The input component to enhance.
 * @returns The enhanced input component.
 */
export const withEnhancements = <P extends InputAttributes>(Component: React.ComponentType<P>) =>
    class EnhancedInput extends React.Component<P & IEnhancedProps> {
        render() {
            const { validations, formControl, noErrorBackground, validateOnChange, props } = extractEnhancedProps<P>(
                this.props,
            );
            const { className, attributes } = getEnhancedAttributes(
                props.className,
                validations,
                formControl,
                noErrorBackground,
            );
            return <Component {...(props as P)} {...attributes} className={className} />;
        }
    };
