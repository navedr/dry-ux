import * as React from "react";

export const ErrorScreen = React.memo(() => (
    <div className="text-center" style={{ marginTop: 70 }}>
        <h1 style={{ fontSize: 70 }}>
            <i className="fa fa-exclamation-triangle"></i>
        </h1>
        <h1>Oops, Something went wrong!</h1>
        <h4 className="pull-center" style={{ width: 500, maxWidth: "90vw", lineHeight: 1.5 }}>
            Try to refresh this page or feel free to contact us if the problem persists.
        </h4>
        <a href="/" className="btn btn-primary mtop mbm">
            Back to Home
        </a>
    </div>
));
