import type { Preview } from '@storybook/react-vite';
import { PreviewRoot } from './previewRoot';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [PreviewRoot],
};

export default preview;
