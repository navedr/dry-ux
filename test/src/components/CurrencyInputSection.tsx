import * as React from "react";
import Section from "./Section";
import { CurrencyInput } from "../../../src";

const CurrencyInputSection = () => {
    const [value, setValue] = React.useState("1234.56");

    return (
        <Section title="Currency Input">
            <div className={"currency-row"}>
                <label>Clearable (controlled)</label>
                <CurrencyInput
                    clearable
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder="Enter amount"
                />
                <span className={"raw-value"}>raw: {value || "(empty)"}</span>
            </div>
            <div className={"currency-row"}>
                <label>Clearable (uncontrolled)</label>
                <CurrencyInput clearable defaultValue="500" placeholder="Enter amount" />
            </div>
            <div className={"currency-row"}>
                <label>Not clearable</label>
                <CurrencyInput defaultValue="99.99" placeholder="Enter amount" />
            </div>
            <div className={"currency-row"}>
                <label>Right-aligned</label>
                <CurrencyInput clearable defaultValue="9999.99" style={{ textAlign: "right" }} />
            </div>
            <div className={"currency-row"}>
                <label>Disabled</label>
                <CurrencyInput clearable disabled value="100" />
            </div>
        </Section>
    );
};

export default CurrencyInputSection;
