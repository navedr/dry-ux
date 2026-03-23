import * as React from "react";
import { InputHTMLAttributes } from "react";
import { IEnhancedProps } from "./interface";
import { Input } from "./HTMLInputs";
import { formatDollar } from "../helpers/utilities";

interface CurrencyInputProps extends InputHTMLAttributes<HTMLInputElement>, IEnhancedProps {
    /** Show decimal places (default: true) */
    decimal_places?: boolean;
    /** Currency symbol (default: "$") */
    currency?: string;
}

const toRaw = (value: any): string => {
    if (value == null || value === "") return "";
    return String(value).replace(/[^0-9.\-]/g, "");
};

const formatDisplay = (raw: string, currency: string, decimal_places: boolean): string => {
    if (raw === "" || raw === "-") return raw;
    const num = parseFloat(raw);
    if (isNaN(num)) return raw;
    return currency + formatDollar(num, decimal_places);
};

export const CurrencyInput = React.forwardRef<HTMLInputElement, CurrencyInputProps>(
    ({ decimal_places = true, currency = "$", name, value, defaultValue, onChange, onFocus, onBlur, ...rest }, ref) => {
        const initialRaw = toRaw(value ?? defaultValue ?? "");
        const [rawValue, setRawValue] = React.useState(initialRaw);
        const [isFocused, setIsFocused] = React.useState(false);
        const hiddenRef = React.useRef<HTMLInputElement>(null);
        const isControlled = value !== undefined;

        // Sync rawValue when controlled value changes
        React.useEffect(() => {
            if (isControlled) {
                setRawValue(toRaw(value));
            }
        }, [value]);

        const displayValue = isFocused ? rawValue : formatDisplay(rawValue, currency, decimal_places);

        const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
            setIsFocused(true);
            onFocus?.(e);
        };

        const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
            setIsFocused(false);
            onBlur?.(e);
        };

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const raw = toRaw(e.target.value);
            setRawValue(raw);
            // Sync hidden input immediately so DOM reads in onChange see the new value
            if (hiddenRef.current) {
                hiddenRef.current.value = raw;
            }
            if (onChange) {
                const syntheticEvent = {
                    ...e,
                    target: { ...e.target, value: raw, name },
                } as React.ChangeEvent<HTMLInputElement>;
                onChange(syntheticEvent);
            }
        };

        return (
            <>
                <Input
                    ref={ref}
                    {...rest}
                    type="text"
                    value={displayValue}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                <input
                    ref={hiddenRef}
                    type="hidden"
                    name={name}
                    value={rawValue}
                    className="validate validate-hidden"
                />
            </>
        );
    },
);
