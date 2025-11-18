import * as React from "react";
import { formatDollar } from "../helpers/utilities";

type MoneyProps = {
    /**
     * Numeric amount to display. Negative values are wrapped in parentheses and styled using negativeColor/negativeStyles.
     */
    amount: number;
    /**
     * Whether to include decimal places in the formatted output. When true, the helper will format with standard cents precision.
     * Defaults to false.
     */
    decimal_places?: boolean;
    /**
     * Currency symbol prefix to display before the formatted amount. Defaults to "$".
     */
    currency?: string;
    /**
     * Fallback text color applied when the amount is negative (unless overridden via negativeStyles). Defaults to Bootstrap danger-like red.
     */
    negativeColor?: string;
    /**
     * Base styles applied to the <span>. These are merged last and can override sign-specific styles.
     */
    styles?: React.CSSProperties;
    /**
     * Additional styles merged when amount is negative (after negativeColor). Overridden by properties in styles if conflicts occur.
     */
    negativeStyles?: React.CSSProperties;
    /**
     * Additional styles merged when amount is zero or positive. Overridden by properties in styles if conflicts occur.
     */
    positiveStyles?: React.CSSProperties;
};

/**
 * Renders a formatted dollar amount with a currency symbol and parentheses if the amount is negative.
 */
export const Money: React.FC<MoneyProps> = React.memo(
    ({
        amount,
        decimal_places = false,
        currency = "$",
        negativeColor = "#d9534f",
        styles = {},
        negativeStyles = {},
        positiveStyles = {},
    }) => {
        const isNegative = amount < 0;
        const converted = `${currency}${formatDollar(Math.abs(amount), decimal_places)}`;
        return (
            <span style={{ ...styles, ...(isNegative ? { color: negativeColor, ...negativeStyles } : positiveStyles) }}>
                {isNegative ? `(${converted})` : converted}
            </span>
        );
    },
);
