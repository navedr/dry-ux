import * as React from "react";
import Section from "./Section";

const LoaderSection = ({ loader }) => {
    const buttons = [
        {
            onClick: () => {
                loader.show();
                setTimeout(() => loader.hide(), 5000);
            },
            label: "Show (5 secs)",
        },
    ];

    return <Section title="Loader" buttons={buttons} />;
};

export default LoaderSection;
