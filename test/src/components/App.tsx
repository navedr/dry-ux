import * as React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { DryUXProvider, DryUXRenderer, ErrorBoundary } from "../../../src";
import "../css/site.css";
import Content from "./Content";
import LargeContent from "./LargeContent";
import "../../../src/styles/helper.css";

// https://urre.me/writings/test-local-npm-packages/

const App = React.memo(() => {
    const [centered, setCentered] = React.useState(false);
    const [largeContent, toggleLargeContent] = React.useState(false);

    return (
        <ErrorBoundary>
            <DryUXProvider noRenderer viewportDetect id={"test-app"} debug>
                <div className={"container"}>
                    <header className={"app-header"}>
                        <h1 className={"app-title"}>
                            dry-ux <span className={"app-title-tag"}>playground</span>
                        </h1>
                        <div className={"app-controls"}>
                            <label className={"toggle-label"}>
                                <input type={"checkbox"} onChange={e => setCentered(e.target.checked)} />
                                <span className={"toggle-track"} />
                                Centered Modals
                            </label>
                            <label className={"toggle-label"}>
                                <input type={"checkbox"} onChange={e => toggleLargeContent(e.target.checked)} />
                                <span className={"toggle-track"} />
                                Large Content
                            </label>
                        </div>
                    </header>
                    {largeContent && (
                        <>
                            <LargeContent />
                            <LargeContent />
                        </>
                    )}
                    <Content />
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
