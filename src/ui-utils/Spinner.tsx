import * as React from "react";
import { SpinnerStyles } from "./SpinnerStyles";

/**
 * A React component that renders a spinner.
 * The spinner styles are added when the component is mounted.
 * @returns A JSX element representing the spinner.
 */
export const Spinner = React.memo(() => {
    React.useEffect(() => {
        const spinnerStyles = SpinnerStyles.getInstance();
        spinnerStyles.add();
    }, []);

    return <div className={"dry-ux-spinner"} />;
});
