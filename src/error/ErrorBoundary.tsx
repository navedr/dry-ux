import * as React from "react";
import { ErrorScreen } from "./ErrorScreen";

/**
 * Props for the ErrorBoundary component.
 */
export interface IErrorBoundaryProps {
    /**
     * An optional function to handle the error.
     */
    errorHandler?: (error?: Error, info?: React.ErrorInfo) => void;

    /**
     * An optional callback function to call when an error is caught.
     */
    onErrorCallback?: (error?: Error) => void;

    /**
     * If true, rethrows the error after handling it. Defaults to false.
     */
    rethrowError?: boolean;

    /**
     * An optional function to render a fallback UI when an error is caught.
     */
    fallback?: (error: Error, resetError: () => void) => JSX.Element;

    /**
     * The child components to render.
     */
    children: JSX.Element;
}

interface IErrorBoundaryInnerState {
    error: Error | null;
}

/**
 * A React component that acts as an error boundary to catch JavaScript errors anywhere in its child component tree.
 * It displays a fallback UI when an error is caught.
 */
export class ErrorBoundary extends React.PureComponent<IErrorBoundaryProps, IErrorBoundaryInnerState> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = { error: null };
    }

    /**
     * Updates the state with the error.
     * @param error The error that was thrown.
     * @returns The updated state.
     */
    public static getDerivedStateFromError(error: Error) {
        return { error };
    }

    /**
     * Handles the error and updates the state.
     * @param error The error that was thrown.
     * @param info Additional information about the error.
     */
    public componentDidCatch(error: Error, info: React.ErrorInfo) {
        this.handleError(error, info);
    }

    /**
     * Renders the component.
     * @returns The rendered component.
     */
    public render = () => {
        const { children, fallback = null } = this.props;
        const { error } = this.state;
        if (error) {
            return fallback ? fallback(error, this.resetError.bind(this)) : <ErrorScreen />;
        }

        return children;
    };

    /**
     * Handles the error based on the provided props.
     * @param error The error that was thrown.
     * @param info Additional information about the error.
     */
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

    /**
     * Resets the error state.
     */
    private resetError() {
        this.setState({ error: null });
    }
}
