import * as React from "react";
import Section from "./Section";

const PromptsSection = ({ prompt }) => (
    <Section>
        <h3>Prompts</h3>
        <button
            className={"btn btn-primary"}
            onClick={() => prompt.showConfirm({ content: "This is a test prompt" }, () => {})}>
            Show Prompt
        </button>
    </Section>
);

export default PromptsSection;
