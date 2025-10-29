import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from '../components/accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: 'select',
    },
    showLeftIcon: {
      control: 'boolean',
    },
    showRightIcon: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
  {
    id: '1',
    label: 'What is this Accordion Component?',
    content:
      'This is a component that allows you to display collapsible content sections. Each item can be expanded or collapsed independently.',
    defaultOpen: false,
  },
  {
    id: '2',
    label: 'How do I use it?',
    content:
      'Pass an array of items with id, label, and content properties. You can customize the size, icons, and styling through props.',
    defaultOpen: false,
  },
  {
    id: '3',
    label: 'Can I customize it?',
    content:
      'Yes! You can customize colors, sizes, icons, and behavior through the various props and style configuration options.',
    defaultOpen: false,
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
    size: 'medium',
    showLeftIcon: false,
    showRightIcon: true,
  },
};

export const Small: Story = {
  args: {
    items: sampleItems,
    size: 'small',
    showLeftIcon: false,
    showRightIcon: true,
  },
};

export const Large: Story = {
  args: {
    items: sampleItems,
    size: 'large',
    showLeftIcon: false,
    showRightIcon: true,
  },
};

export const WithLeftIcon: Story = {
  args: {
    items: sampleItems,
    size: 'medium',
    showLeftIcon: true,
    showRightIcon: false,
  },
};

export const WithoutRightIcon: Story = {
  args: {
    items: sampleItems,
    size: 'medium',
    showLeftIcon: false,
    showRightIcon: false,
  },
};

export const DefaultOpen: Story = {
  args: {
    items: [
      {
        id: '1',
        label: 'First Item - Open by Default',
        content: 'This item is open by default.',
        defaultOpen: true,
      },
      {
        id: '2',
        label: 'Second Item - Closed by Default',
        content: 'This item is closed by default.',
        defaultOpen: false,
      },
    ],
    size: 'medium',
    showLeftIcon: false,
    showRightIcon: true,
  },
};
