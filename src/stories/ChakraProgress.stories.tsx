import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress, VStack, Text } from '@chakra-ui/react';

const meta = {
  title: 'Primitives/Progress',
  component: Progress,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100 },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: 'select',
    },
    colorScheme: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
    size: 'md',
  },
};

export const Sizes: Story = {
  render: () => (
    <VStack
      spacing={6}
      width="100%"
    >
      <div style={{ width: '100%' }}>
        <Text mb={2}>Extra Small</Text>
        <Progress
          value={40}
          size="xs"
        />
      </div>
      <div style={{ width: '100%' }}>
        <Text mb={2}>Small</Text>
        <Progress
          value={50}
          size="sm"
        />
      </div>
      <div style={{ width: '100%' }}>
        <Text mb={2}>Medium</Text>
        <Progress
          value={60}
          size="md"
        />
      </div>
      <div style={{ width: '100%' }}>
        <Text mb={2}>Large</Text>
        <Progress
          value={70}
          size="lg"
        />
      </div>
    </VStack>
  ),
};

export const Values: Story = {
  render: () => (
    <VStack
      spacing={4}
      width="100%"
    >
      <div style={{ width: '100%' }}>
        <Text mb={2}>0%</Text>
        <Progress
          value={0}
          size="md"
        />
      </div>
      <div style={{ width: '100%' }}>
        <Text mb={2}>25%</Text>
        <Progress
          value={25}
          size="md"
        />
      </div>
      <div style={{ width: '100%' }}>
        <Text mb={2}>50%</Text>
        <Progress
          value={50}
          size="md"
        />
      </div>
      <div style={{ width: '100%' }}>
        <Text mb={2}>75%</Text>
        <Progress
          value={75}
          size="md"
        />
      </div>
      <div style={{ width: '100%' }}>
        <Text mb={2}>100%</Text>
        <Progress
          value={100}
          size="md"
        />
      </div>
    </VStack>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <VStack
      spacing={6}
      width="100%"
    >
      <div style={{ width: '100%' }}>
        <Text mb={2}>Upload Progress: 45%</Text>
        <Progress
          value={45}
          size="md"
        />
      </div>
      <div style={{ width: '100%' }}>
        <Text mb={2}>Installation: 80%</Text>
        <Progress
          value={80}
          size="md"
        />
      </div>
      <div style={{ width: '100%' }}>
        <Text mb={2}>Download: 100%</Text>
        <Progress
          value={100}
          size="md"
        />
      </div>
    </VStack>
  ),
};

export const Animated: Story = {
  args: {
    value: 50,
    size: 'md',
    isIndeterminate: true,
  },
};

export const WithColorScheme: Story = {
  render: () => (
    <VStack
      spacing={4}
      width="100%"
    >
      <div style={{ width: '100%' }}>
        <Text mb={2}>Blue (Default)</Text>
        <Progress
          value={60}
          size="md"
        />
      </div>
      <div style={{ width: '100%' }}>
        <Text mb={2}>Green</Text>
        <Progress
          value={60}
          size="md"
          colorScheme="green"
        />
      </div>
      <div style={{ width: '100%' }}>
        <Text mb={2}>Red</Text>
        <Progress
          value={60}
          size="md"
          colorScheme="red"
        />
      </div>
    </VStack>
  ),
};
