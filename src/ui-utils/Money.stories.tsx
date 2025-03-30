import * as React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Money } from "./Money";

export default {
    title: "UI Utils/Money",
    component: Money,
} as Meta;

const Template: StoryFn<{ amount: number; decimal_places?: boolean; currency?: string }> = args => <Money {...args} />;

export const PositiveAmount = Template.bind({});
PositiveAmount.args = {
    amount: 1234.56,
    decimal_places: true,
    currency: "$",
};

export const NegativeAmount = Template.bind({});
NegativeAmount.args = {
    amount: -1234.56,
    decimal_places: true,
    currency: "$",
};

export const NoDecimalPlaces = Template.bind({});
NoDecimalPlaces.args = {
    amount: 1234,
    decimal_places: false,
    currency: "$",
};

export const DifferentCurrency = Template.bind({});
DifferentCurrency.args = {
    amount: 1234.56,
    decimal_places: true,
    currency: "€",
};
