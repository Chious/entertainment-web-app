import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Searchbar from '@/components/Searchbar';

const meta = {
  title: 'Searchbar',
  component: Searchbar,
  args: {},
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
