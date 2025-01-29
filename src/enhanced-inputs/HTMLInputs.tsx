import * as React from "react";
import { InputHTMLAttributes } from "react";
import { IEnhancedProps } from "./interface";
import { withEnhancements } from "./withEnhancements";
import "./styles.css";

/**
 * Interface extending InputHTMLAttributes with an optional inputRef property.
 */
interface InputHTMLAttributesWithRef<T> extends InputHTMLAttributes<T> {
    inputRef?: any;
}

/**
 * Type alias for enhanced input props.
 */
type EnhanceInputProps<T> = InputHTMLAttributes<T> & IEnhancedProps;

/**
 * Enhanced input component with enhancements applied.
 */
const EnhancedInput = withEnhancements(({ inputRef, ...props }: InputHTMLAttributesWithRef<HTMLInputElement>) => (
    <input ref={inputRef} {...props} />
));

/**
 * Forwarded ref input component with enhancements.
 */
export const Input = React.forwardRef<HTMLInputElement, EnhanceInputProps<HTMLInputElement>>((props, ref) => {
    return <EnhancedInput {...props} inputRef={ref} />;
});

/**
 * Enhanced select component with enhancements applied.
 */
const EnhancedSelect = withEnhancements(({ inputRef, ...props }: InputHTMLAttributesWithRef<HTMLSelectElement>) => (
    <select ref={inputRef} {...props} />
));

/**
 * Forwarded ref select component with enhancements.
 */
export const Select = React.forwardRef<HTMLInputElement, EnhanceInputProps<HTMLSelectElement>>((props, ref) => {
    return <EnhancedSelect {...props} inputRef={ref} />;
});

/**
 * Enhanced textarea component with enhancements applied.
 */
const EnhancedTextArea = withEnhancements(({ inputRef, ...props }: InputHTMLAttributesWithRef<HTMLTextAreaElement>) => (
    <textarea ref={inputRef} {...props} />
));

/**
 * Forwarded ref textarea component with enhancements.
 */
export const TextArea = React.forwardRef<HTMLInputElement, EnhanceInputProps<HTMLTextAreaElement>>((props, ref) => {
    return <EnhancedTextArea {...props} inputRef={ref} />;
});
