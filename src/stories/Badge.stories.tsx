import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../components/badge';
import { Flex } from '@chakra-ui/react';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Badge text content',
    },
    variant: {
      control: 'select',
      options: ['blue', 'green', 'red', 'yellow', 'purple', 'gray'],
      description: 'Badge color variant',
    },
    showDot: {
      control: 'boolean',
      description: 'Show/hide the dot indicator',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Limited Edition',
    variant: 'blue',
    showDot: true,
  },
};

export const Blue: Story = {
  args: {
    text: 'New',
    variant: 'blue',
    showDot: true,
  },
};

export const Green: Story = {
  args: {
    text: 'In Stock',
    variant: 'green',
    showDot: true,
  },
};

export const Red: Story = {
  args: {
    text: 'Hot Deal',
    variant: 'red',
    showDot: true,
  },
};

export const Yellow: Story = {
  args: {
    text: 'Best Seller',
    variant: 'yellow',
    showDot: true,
  },
};

export const Purple: Story = {
  args: {
    text: 'Featured',
    variant: 'purple',
    showDot: true,
  },
};

export const Gray: Story = {
  args: {
    text: 'Standard',
    variant: 'gray',
    showDot: true,
  },
};

export const WithoutDot: Story = {
  args: {
    text: 'Sale',
    variant: 'red',
    showDot: false,
  },
};

export const AllVariants: Story = {
  render: () => (
    <Flex direction="column" gap="16px" alignItems="flex-start">
      <Badge text="Limited Edition" variant="blue" showDot />
      <Badge text="In Stock" variant="green" showDot />
      <Badge text="Hot Deal" variant="red" showDot />
      <Badge text="Best Seller" variant="yellow" showDot />
      <Badge text="Featured" variant="purple" showDot />
      <Badge text="Standard" variant="gray" showDot />
      <Badge text="No Dot" variant="blue" showDot={false} />
    </Flex>
  ),
};
