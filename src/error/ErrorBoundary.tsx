import * as React from "react";
import { ErrorScreen } from "./ErrorScreen";

export interface IErrorBoundaryProps {
    errorHandler?: (error?: Error, info?: React.ErrorInfo) => void;
    onErrorCallback?: (error?: Error) => void;
    rethrowError?: boolean;
    fallbackUI?: React.ReactNode | ((error: Error, resetError: () => void) => JSX.Element);
}

interface IErrorBoundaryInnerState {
    error: Error | null;
}

export class ErrorBoundary extends React.PureComponent<IErrorBoundaryProps, IErrorBoundaryInnerState> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = { error: null };
    }

    public static getDerivedStateFromError(error: Error) {
        return { error };
    }

    public componentDidCatch(error: Error, info: React.ErrorInfo) {
        this.handleError(error, info);
    }

    public render = () => {
        const { children, fallbackUI = null } = this.props;
        const { error } = this.state;
        if (error) {
            if (typeof fallbackUI === "function") {
                return fallbackUI(error, this.resetError.bind(this));
            }
            return fallbackUI || <ErrorScreen />;
        }

        return children;
    };

    private handleError = (error: Error, info: React.ErrorInfo) => {
        const { errorHandler, onErrorCallback, rethrowError } = this.props;

        if (onErrorCallback) {
            onErrorCallback(error);
        }

        if (errorHandler) {
            errorHandler(error, info);
            if (rethrowError) {
                throw error;
            }
            return;
        }

        if (rethrowError) {
            throw error;
        }
    };

    private resetError() {
        this.setState({ error: null });
    }
}
