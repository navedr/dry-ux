import * as React from "react";
import Section from "./Section";

const DomSection = ({ viewport, width, height }) => (
    <Section>
        <h3>DOM</h3>
        <p>
            Viewport: {viewport.current} [XS: {viewport.isXS ? "Yes" : "No"}] [SM: {viewport.isSM ? "Yes" : "No"}] [MD:{" "}
            {viewport.isMD ? "Yes" : "No"}] [LG: {viewport.isLG ? "Yes" : "No"}]
        </p>
        <p>
            Dimensions: {width}x{height}px
        </p>
    </Section>
);

export default DomSection;
