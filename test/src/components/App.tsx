import * as React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { DryUXProvider, DryUXRenderer, ErrorBoundary, useDimensions } from "../../../src";
import "../css/site.css";
import Content from "./Content";
import LargeContent from "./LargeContent";
import "../../../src/styles/helper.css";

// https://urre.me/writings/test-local-npm-packages/

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

const App = React.memo(() => {
    const [centered, setCentered] = React.useState(false);
    const [largeContent, toggleLargeContent] = React.useState(false);

    return (
        <ErrorBoundary>
            <DryUXProvider noRenderer viewportDetect id={"test-app"} debug>
                <div className={"container"}>
                    <div className="row">
                        <div className="col-12">
                            <label>
                                <input type={"checkbox"} onChange={e => setCentered(e.target.checked)} />
                                &nbsp;Centered Modals
                            </label>
                            <label>
                                <input type={"checkbox"} onChange={e => toggleLargeContent(e.target.checked)} />
                                &nbsp;Large Content
                            </label>
                            {largeContent && (
                                <>
                                    <LargeContent />
                                    <LargeContent />
                                </>
                            )}
                            <Content />
                        </div>
                    </div>
                    <DryUXRenderer modalConfig={{ defaultModalStyles: true, centered }} debug id={"test-app"} />
                </div>
            </DryUXProvider>
        </ErrorBoundary>
    );
});

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("app"),
);
