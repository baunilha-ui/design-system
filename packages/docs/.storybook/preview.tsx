import React from "react";
import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../src/tokens/tokens.scss"
// import "@baunilha/react/dist/index.css"


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
    layout: "centered",
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
      theme: themes.dark,
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;

      document.body.style.backgroundColor =
        theme === 'dark' ? '#333333' : '#ffffff';


      document.documentElement.classList.remove("light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add(theme);
      document.documentElement.style.setProperty("--color-test", "#fff");

      return <Story />;
    },
  ],
};

export default preview;
