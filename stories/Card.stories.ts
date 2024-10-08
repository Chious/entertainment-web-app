import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Card from '@/components/ui/card/Card';

const meta = {
  title: 'Card/Card',
  component: Card,
  args: {
    display: 'trend',
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    display: 'trend',
  },
};

export const Secondary: Story = {
  args: {
    display: 'search',
  },
};
