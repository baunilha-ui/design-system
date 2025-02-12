import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { FormProvider, useForm } from "react-hook-form";
import { View } from "react-native";
import { RHFInputProps } from "../../../native/src/components/Form/components/RHFInput";
import { Form } from "../../../native/src/components/Form";
import { BaseText } from "../../../native/src/components/BaseText";

const meta = {
  component: Form.Input,
  tags: ["autodocs"],
  argTypes: {
    suffix: {
      options: ["alert-circle", "help-circle"],
    },
  },

  decorators: (Story) => {
    const decoratorForm = useForm();
    return (
      <FormProvider {...decoratorForm}>
        <View
          style={{
            maxWidth: 320,
          }}
        >
          <Story />
        </View>
      </FormProvider>
    );
  },
} satisfies Meta<RHFInputProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "email",
    placeholder: "olivia@untitledui.com",
  },
};

export const WithLabel: Story = {
  decorators: [
    (Story) => {
      return (
        <Form.Field>
          <Form.Label>Email</Form.Label>
          <Story />
        </Form.Field>
      );
    },
  ],
  args: {
    name: "example",
    placeholder: "Digite seu email",
  },
};

export const CompleteRequiredField: Story = {
  decorators: [
    (Story) => {
      return (
        <Form.Field>
          <Form.Label isRequired>Celular</Form.Label>
          <Story />
          <BaseText color="tertiary">
            Usaremos para contatos via WhatsApp.
          </BaseText>
        </Form.Field>
      );
    },
  ],
  args: {
    name: "example",
    placeholder: "Digite seu celular",
  },
};
