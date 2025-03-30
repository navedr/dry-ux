import * as React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ErrorBoundary, IErrorBoundaryProps } from "./ErrorBoundary";

export default {
    title: "ErrorBoundary",
    component: ErrorBoundary,
} as Meta;

const Template: StoryFn<IErrorBoundaryProps> = args => (
    <ErrorBoundary {...args}>
        <div>Child component content</div>
    </ErrorBoundary>
);

export const Default = Template.bind({});
Default.args = {};

export const WithError = Template.bind({});
WithError.args = {
    fallback: (error, resetError) => (
        <div>
            <h1>Custom Fallback UI</h1>
            <p>{error.message}</p>
            <button onClick={resetError}>Try Again</button>
        </div>
    ),
    children: (() => {
        throw new Error("Test error");
    })(),
};
