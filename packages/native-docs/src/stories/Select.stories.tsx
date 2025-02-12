import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { Select } from "../../../native/src/components/Form/controls/Select ";

const meta = {
  component: Select,
  tags: ["autodocs"],

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
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockedOptions = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cat", value: "cat" },
];

export const Default: Story = {
  args: {
    selectedOption: undefined,
    options: mockedOptions,
    getLabel: (option) => (option as (typeof mockedOptions)[0]).label,
    getValue: (option) => (option as (typeof mockedOptions)[0]).value,
  },
};
