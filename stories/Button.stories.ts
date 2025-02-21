import type { Meta, StoryObj } from '@storybook/react';
import BookmarkButton from '../components/ui/button/BookmarkButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Button',
  component: BookmarkButton,
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    bookmarked: false,
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Bookmark: Story = {
  args: {
    bookmarked: true,
  },
};
