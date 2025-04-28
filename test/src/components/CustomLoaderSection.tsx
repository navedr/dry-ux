import * as React from "react";
import Section from "./Section";

const CustomLoaderSection = ({ customLoader }) => {
    const buttons = [
        {
            onClick: () => {
                customLoader.show();
                setTimeout(() => customLoader.hide(), 5000);
            },
            label: "Show (5 secs)",
        },
    ];

    return (
        <Section title="Custom Loader" buttons={buttons}>
            {customLoader.shown && <div className="text-center">Loading...</div>}
        </Section>
    );
};

export default CustomLoaderSection;
