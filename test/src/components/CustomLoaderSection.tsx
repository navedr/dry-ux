import * as React from "react";
import Section from "./Section";

const CustomLoaderSection = ({ customLoader }) => (
    <Section>
        <h3>Custom Loader</h3>
        <button
            className={"btn btn-primary"}
            onClick={() => {
                customLoader.show();
                setTimeout(() => customLoader.hide(), 5000);
            }}>
            Show (5 secs)
        </button>
        {customLoader.shown && <div className="text-center">Loading...</div>}
    </Section>
);

export default CustomLoaderSection;
