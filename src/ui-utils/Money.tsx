import * as React from "react";
import { formatDollar } from "../helpers/utilities";

export const Money: React.FC<{ amount: number; decimal_places?: boolean; currency?: string }> = React.memo(
    ({ amount, decimal_places = false, currency = "$" }) => {
        const isNegative = amount < 0;
        const converted = `${currency}${formatDollar(Math.abs(amount), decimal_places)}`;
        return (
            <span style={{ ...(isNegative && { color: "#d9534f" }) }}>{isNegative ? `(${converted})` : converted}</span>
        );
    },
);
