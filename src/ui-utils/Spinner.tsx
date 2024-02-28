import * as React from "react";
import { SpinnerStyles } from "./SpinnerStyles";

export const Spinner = React.memo(() => {
    React.useEffect(() => {
        const spinnerStyles = SpinnerStyles.getInstance();
        spinnerStyles.add();
    }, []);

    return <div className={"dry-ux-spinner"} />;
});
