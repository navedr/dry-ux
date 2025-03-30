import * as React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ErrorScreen } from "./ErrorScreen";

export default {
    title: "ErrorScreen",
    component: ErrorScreen,
} as Meta;

const Template: StoryFn = args => <ErrorScreen {...args} />;

export const Default = Template.bind({});
Default.args = {};
