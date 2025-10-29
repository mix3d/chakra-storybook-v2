import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text, Button } from '@chakra-ui/react';
import { palette } from '../chakra/theme/foundations/colors';

const meta = {
  title: 'Primitives/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      name: 'Text',
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: 'select',
    },
    variant: {
      options: [
        'solid',
        'solid-alt',
        'outline',
        'outline-black',
        'outline-alt',
        'ghost',
        'ghost-alt',
        'link',
        'danger',
        'success',
        'muted',
      ],
      control: 'select',
    },
    isDisabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'solid',
    size: 'md',
    isDisabled: false,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'outline',
    size: 'md',
    isDisabled: false,
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'solid',
    size: 'lg',
    isDisabled: false,
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    variant: 'solid',
    size: 'sm',
    isDisabled: false,
  },
};

export const AllVariants: Story = {
  args: {},
  render: () => (
    <>
      <Text>Variants</Text>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          padding: '24px',
        }}
      >
        <Button variant="solid">Solid</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="outline-black">Outline Black</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="success">Success</Button>
        <Button variant="muted">Muted</Button>
      </div>
      <Text>Alt Variants</Text>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          background: palette.shading['900'],
          padding: '24px',
        }}
      >
        <Button variant="solid-alt">Solid Alt</Button>
        <Button variant="outline-alt">Outline Alt</Button>
        <Button variant="ghost-alt">Ghost Alt</Button>
      </div>
    </>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'solid',
    isDisabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading',
    variant: 'solid',
    isLoading: true,
  },
};
