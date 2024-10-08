import type { Preview } from '@storybook/react';
import '../app/globals.css';
import { background } from 'storybook/internal/theming';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a202c' },
        { name: 'light', value: '#f7fafc' },
      ],
    },
  },
};

export default preview;
