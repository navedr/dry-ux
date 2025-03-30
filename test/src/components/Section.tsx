import * as React from "react";
import { useDimensions } from "../../../src";

const Section = React.memo(({ children }) => {
    const ref = React.useRef(null);
    const { width, height } = useDimensions(ref);

    return (
        <section ref={ref}>
            <div style={{ float: "right" }}>
                {width}x{height}px
            </div>
            {children}
        </section>
    );
});

export default Section;
