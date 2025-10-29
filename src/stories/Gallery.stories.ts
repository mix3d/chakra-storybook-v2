import type { Meta, StoryObj } from '@storybook/react-vite';
import { Gallery } from '../components/gallery';

const meta = {
  title: 'Components/Gallery',
  component: Gallery,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    aspectRatio: {
      control: 'number',
    },
  },
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleImages = [
  {
    src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=600&fit=crop',
    alt: 'Product image 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=600&fit=crop',
    alt: 'Product image 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&h=600&fit=crop',
    alt: 'Product image 3',
  },
];

export const Default: Story = {
  args: {
    images: sampleImages,
    aspectRatio: 3 / 4,
    productName: 'Sample Product',
  },
};

export const WithLink: Story = {
  args: {
    images: sampleImages,
    aspectRatio: 3 / 4,
    href: '/product/sample',
    productName: 'Linked Product',
  },
};

export const SingleImage: Story = {
  args: {
    images: [sampleImages[0]],
    aspectRatio: 1,
    productName: 'Single Image Product',
  },
};

export const SquareAspectRatio: Story = {
  args: {
    images: sampleImages,
    aspectRatio: 1,
    productName: 'Square Format',
  },
};

export const Loading: Story = {
  args: {
    images: undefined,
    aspectRatio: 3 / 4,
  },
};
