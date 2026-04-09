import * as React from "react";
import { useDimensions } from "../../../src";

const Section: React.FC<{
    title: string;
    children?: React.ReactNode;
    buttons?: { label: string; onClick: () => void }[];
}> = React.memo(({ title, children, buttons }) => {
    const ref = React.useRef(null);
    const { width, height } = useDimensions(ref);

    return (
        <div className={"demo-section"} ref={ref}>
            <div className={"section-header"}>
                {title && <h3 className={"section-title"}>{title}</h3>}
                <span className={"section-dims"}>
                    {width}×{height}
                </span>
            </div>
            {buttons && (
                <div className={"btn-grid"}>
                    {buttons.map((button, index) => (
                        <button key={index} className={"btn-demo"} onClick={button.onClick}>
                            {button.label}
                        </button>
                    ))}
                </div>
            )}
            {children}
        </div>
    );
});

export default Section;
