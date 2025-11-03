import type { Meta, StoryObj } from '@storybook/react-vite';
import { ImageBanner } from '../components/image-banner';

const meta = {
  title: 'Components/ImageBanner',
  component: ImageBanner,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ImageBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: {
      src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=300&fit=crop',
      alt: 'Banner image',
    },
  },
};

export const WithMobileImage: Story = {
  args: {
    image: {
      src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=300&fit=crop',
      alt: 'Desktop banner',
    },
    imageMobile: {
      src: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=300&fit=crop',
      alt: 'Mobile banner',
    },
  },
};

export const MobileOnly: Story = {
  args: {
    imageMobile: {
      src: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=300&fit=crop',
      alt: 'Mobile only banner',
    },
  },
};

export const WithPriority: Story = {
  args: {
    image: {
      src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=300&fit=crop',
      alt: 'Priority banner',
    },
    priority: true,
  },
};

export const NoImage: Story = {
  args: {
    image: undefined,
    imageMobile: undefined,
  },
};
