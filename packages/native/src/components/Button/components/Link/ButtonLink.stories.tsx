import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { Button } from "../..";

const meta: Meta<typeof Button.Link> = {
  title: "Components/Button",
  component: Button.Link,
  parameters: {
    docs: { autodocs: true },
  },
  decorators: [
    (Story) => (
      <View style={{ width: "fit-content" } as unknown as StyleProp<ViewStyle>}>
        <Story />
      </View>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["primary", "color"],
      description: "Define o estilo do botão.",
    },
    disabled: {
      control: {
        type: "radio",
      },
      options: [true, false],
    },
    size: {
      control: {
        type: "select",
      },
      options: [1, 2, 3, 4, 5],
      description: "Tamanho do botão.",
    },
    children: {
      control: {
        type: "text",
      },
      description: "Texto ou elementos filhos do botão.",
    },
    onPress: {
      action: "onPress",
      description: "Função chamada ao clicar no botão.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonLink: Story = {
  args: {
    children: <Button.Text>Default Button</Button.Text>,
  },
};

export const ButtonLinkColor: Story = {
  args: {
    variant: "color",
    children: <Button.Text>Default Button</Button.Text>,
  },
};
