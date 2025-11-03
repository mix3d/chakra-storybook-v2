import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip, Button, HStack } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

const meta = {
  title: 'Primitives/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      options: [
        'top',
        'bottom',
        'left',
        'right',
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
        'left-start',
        'left-end',
        'right-start',
        'right-end',
      ],
      control: 'select',
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip label="This is a tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  ),
};

export const Placements: Story = {
  render: () => (
    <HStack
      spacing={4}
      wrap="wrap"
      justify="center"
    >
      <Tooltip
        label="Top"
        placement="top"
      >
        <Button size="sm">Top</Button>
      </Tooltip>
      <Tooltip
        label="Bottom"
        placement="bottom"
      >
        <Button size="sm">Bottom</Button>
      </Tooltip>
      <Tooltip
        label="Left"
        placement="left"
      >
        <Button size="sm">Left</Button>
      </Tooltip>
      <Tooltip
        label="Right"
        placement="right"
      >
        <Button size="sm">Right</Button>
      </Tooltip>
    </HStack>
  ),
};

export const DarkVariant: Story = {
  render: () => (
    <Tooltip
      label="Dark tooltip"
      variant="dark"
    >
      <Button>Hover for dark tooltip</Button>
    </Tooltip>
  ),
};

export const LightVariant: Story = {
  render: () => (
    <Tooltip
      label="Light tooltip"
      variant="light"
    >
      <Button>Hover for light tooltip</Button>
    </Tooltip>
  ),
};

export const HighlightVariant: Story = {
  render: () => (
    <Tooltip
      label="Highlighted tooltip"
      variant="highlight"
    >
      <Button>Hover for highlight</Button>
    </Tooltip>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Tooltip label="This is helpful information">
      <InfoIcon
        boxSize={5}
        cursor="pointer"
      />
    </Tooltip>
  ),
};

export const Delayed: Story = {
  render: () => (
    <Tooltip
      label="Delayed tooltip"
      openDelay={500}
      closeDelay={500}
    >
      <Button>Hover (delayed)</Button>
    </Tooltip>
  ),
};

export const Arrow: Story = {
  render: () => (
    <Tooltip
      label="Tooltip with arrow"
      hasArrow
    >
      <Button>With Arrow</Button>
    </Tooltip>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Tooltip
      label="This is a longer tooltip content that provides more detailed information about the element."
      maxW="200px"
    >
      <Button>Hover for long content</Button>
    </Tooltip>
  ),
};
