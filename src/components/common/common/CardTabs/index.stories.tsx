import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { CardTabs } from '@/components/common/CardTabs';

const meta = {
  title: 'common/CardTabs',
  component: CardTabs,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  argTypes: {
    value: {
      control: false,
    },
    onValueChange: {
      control: false,
    },
  },
} satisfies Meta<typeof CardTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const CardTabsWrapper = (args: React.ComponentProps<typeof CardTabs>) => {
  const [activeTab, setActiveTab] = useState(args.items[0].value);

  return (
    <CardTabs
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...args}
      value={activeTab}
      onValueChange={(value) => {
        setActiveTab(value);
      }}
    />
  );
};

export const sampleNotIcon: Story = {
  name: 'default',
  // eslint-disable-next-line react/jsx-props-no-spreading
  render: (args) => <CardTabsWrapper {...args} />,
  args: {
    className: '',
    items: [
      { value: 'tab1', label: 'Tab 1' },
      { value: 'tab2', label: 'Tab 2' },
      { value: 'tab3', label: 'Tab 3' },
    ],
    value: '',
    onValueChange: () => null,
  },
};

export const sampleWithIcon: Story = {
  name: 'default',
  // eslint-disable-next-line react/jsx-props-no-spreading
  render: (args) => <CardTabsWrapper {...args} />,
  args: {
    className: '',
    items: [
      { value: 'tab1', label: 'Tab 1', icon: 'rw-account-balance' },
      { value: 'tab2', label: 'Tab 2', icon: 'rw-savings' },
      { value: 'tab3', label: 'Tab 3', icon: 'rw-money-seminar' },
    ],
    value: '',
    onValueChange: () => null,
  },
};
