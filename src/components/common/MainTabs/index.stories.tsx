import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { MainTabs } from '@/components/common/MainTabs';

const meta = {
  title: 'common/MainTabs',
  component: MainTabs,
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
} satisfies Meta<typeof MainTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const MainTabsWrapper = (args: React.ComponentProps<typeof MainTabs>) => {
  const [activeTab, setActiveTab] = useState(args.items[0].value);

  return (
    <MainTabs
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...args}
      value={activeTab}
      onValueChange={(value) => {
        setActiveTab(value);
      }}
    />
  );
};

export const sample: Story = {
  name: 'default',
  // eslint-disable-next-line react/jsx-props-no-spreading
  render: (args) => <MainTabsWrapper {...args} />,
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
