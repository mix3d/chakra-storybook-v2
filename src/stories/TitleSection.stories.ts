import type { Meta, StoryObj } from '@storybook/react-vite';
import { TitleSection } from '../components/title-section';

const meta = {
  title: 'Components/TitleSection',
  component: TitleSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['page', 'drawer'],
      control: 'select',
    },
  },
} satisfies Meta<typeof TitleSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PageType: Story = {
  args: {
    type: 'page',
    title: 'Welcome to Our Store',
    description:
      'Discover amazing products and exclusive offers tailored just for you.',
  },
};

export const DrawerType: Story = {
  args: {
    type: 'drawer',
    title: 'Cart Items',
    description: 'Review and manage items in your shopping cart.',
  },
};

export const PageWithLongContent: Story = {
  args: {
    type: 'page',
    title: 'Our Collection',
    description:
      'Browse through our curated selection of premium products. From fashion to electronics, find everything you need in one place with competitive prices and fast shipping.',
  },
};

export const DrawerWithShortContent: Story = {
  args: {
    type: 'drawer',
    title: 'Filters',
    description: 'Sort by price and category.',
  },
};
