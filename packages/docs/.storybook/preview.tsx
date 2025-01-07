import React, { FC, PropsWithChildren } from "react";
import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import { addons } from '@storybook/preview-api';

import "../src/styles/global.scss";
import "../src/tokens/tokens.scss";

import { DocsContainer as BaseContainer, DocsContainerProps } from '@storybook/blocks';

const channel = addons.getChannel();

const DocsContainer: FC<PropsWithChildren<DocsContainerProps>> = ({ children, context }) => {
  const theme = (channel as any).data?.globalsUpdated?.[0]?.globals?.theme || 'dark'

  return (
    <BaseContainer theme={themes[theme]} context={context}>
      {children}
    </BaseContainer>
  );
};


const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Global theme for components",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "dark",
  },
  parameters: {
    // layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
    docs: {
      container: DocsContainer,
      theme: themes.dark
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;

      document.body.style.backgroundColor =
        theme === "dark" ? "#333333" : "#ccc";

      document.documentElement.classList.remove("light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add(theme);
      
      document.body.style.padding = "0"

      return <Story />;
    },
  ],
};

export default preview;
