import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { RHFSelect } from "../../../native/src/components/Form/components/RHFSelect";
import { Form } from "../../../native/src/components/Form/index";
import { FormProvider, useForm } from "react-hook-form";

const meta = {
  component: RHFSelect,
  tags: ["autodocs"],

  decorators: (Story) => {
    const decoratorForm = useForm();
    return (
      <View
        style={{
          maxWidth: 320,
        }}
      >
        <FormProvider {...decoratorForm}>
          <Form.Field>
            <Form.Label>Selecione uma fruta</Form.Label>
            <Story />
          </Form.Field>
        </FormProvider>
      </View>
    );
  },
} satisfies Meta<typeof RHFSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockedOptions = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cat", value: "cat" },
];

export const Default: Story = {
  args: {
    name: "fruit",
    options: mockedOptions,
    getLabel: (option) => (option as (typeof mockedOptions)[0]).label,
    getValue: (option) => (option as (typeof mockedOptions)[0]).value,
  },
};
