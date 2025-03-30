import * as React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { RenderWhenVisible } from "./RenderWhenVisible";

export default {
    title: "UI Utils/RenderWhenVisible",
    component: RenderWhenVisible,
} as Meta;

const Template: StoryFn<{ minHeight: number }> = args => (
    <RenderWhenVisible minHeight={args.minHeight}>
        <div style={{ height: 200, backgroundColor: "lightblue" }}>Content to render when visible</div>
    </RenderWhenVisible>
);

export const Default = Template.bind({});
Default.args = {
    minHeight: 100,
};
