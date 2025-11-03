import type { Decorator } from "@storybook/react-vite";
import { Wrapper } from "../src/providers/Wrapper";
import { theme } from "../src/chakra/theme";
import "./preview.css";

export const PreviewRoot: Decorator = (Story, context) => {
  console.log("Storybook context:", context);
  return (
    <Wrapper theme={theme}>
      {/* <div data-testing="true" style={{ background: "red" }}></div> */}
      <Story />
    </Wrapper>
  );
};
