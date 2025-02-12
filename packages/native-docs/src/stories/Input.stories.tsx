import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Input, InputProps } from "../../../native/src/components/Form/controls/Input";
import { View } from "react-native";

const meta = {
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    suffix: {
      options: ["alert-circle", "help-circle", "check-fill"],
    },
  },

  decorators: (Story) => {
    return (
      <View
        style={{
          maxWidth: 320,
        }}
      >
        <Story />
      </View>
    );
  },
} satisfies Meta<InputProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    multiline: true,
    numberOfLines: 4,
    placeholder: "olivia@untitledui.com",
  },
};

export const WithError: Story = {
  args: {
    hasError: true,
    placeholder: "Seu email",
  },
};
