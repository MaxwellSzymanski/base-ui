import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"

import Button, { ButtonProps } from "./Button"

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    label: { control: { type: 'text' } },
    variant: { control: { type: "radio", defaultValue: "primary" } },
    color: { control: { type: "select", defaultValue: "blue" } },
    icon: { control: { type: "select", defaultValue: undefined } },
    onClick: { control: { type: "Event"} },
  }
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Button1 = Template.bind({})
Button1.args = {
  label: "Primary button",
  variant: "primary",
  icon: "thumbs-down"
}

export const Button2 = Template.bind({})
Button2.args = {
  label: "Secondary button",
  variant: "secondary",
  color: "gray"
}
