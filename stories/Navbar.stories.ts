import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Navbar from '../components/Navbar';

const meta = {
  title: 'Navbar',
  component: Navbar,
  args: {},
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bookmark: Story = {
  args: {},
};
