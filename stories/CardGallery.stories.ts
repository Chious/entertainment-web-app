import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CardGalllery from '@/components/ui/card/CardGalllery';

const meta = {
  title: 'Card/CardGalllery',
  component: CardGalllery,
  args: {
    display: 'trend',
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    display: 'search',
  },
};

export const Secondary: Story = {
  args: {
    display: 'trend',
  },
};
