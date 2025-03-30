import * as React from "react";
import Section from "./Section";

const LoaderSection = ({ loader }) => (
    <Section>
        <h3>Loader</h3>
        <button
            className={"btn btn-primary"}
            onClick={() => {
                loader.show();
                setTimeout(() => loader.hide(), 5000);
            }}>
            Show (5 secs)
        </button>
    </Section>
);

export default LoaderSection;
