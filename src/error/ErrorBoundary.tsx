import * as React from "react";
import { ErrorScreen } from "./ErrorScreen";

export class ErrorBoundary extends React.Component<
    { fallback?: JSX.Element; children: JSX.Element },
    { hasError: boolean }
> {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback || <ErrorScreen />;
        }

        return this.props.children;
    }
}
