import * as React from "react";
import Section from "./Section";

const DomSection = ({ viewport, width, height }) => (
    <Section title={"Viewport"}>
        <div className={"viewport-info"}>
            <span className={"viewport-tag" + (viewport.isXS ? " is-active" : "")}>XS</span>
            <span className={"viewport-tag" + (viewport.isSM ? " is-active" : "")}>SM</span>
            <span className={"viewport-tag" + (viewport.isMD ? " is-active" : "")}>MD</span>
            <span className={"viewport-tag" + (viewport.isLG ? " is-active" : "")}>LG</span>
            <span className={"viewport-dims"}>
                {viewport.current || "none"} · {width}×{height}px
            </span>
        </div>
    </Section>
);

export default DomSection;
