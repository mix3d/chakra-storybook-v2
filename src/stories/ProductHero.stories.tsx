import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProductHero } from '../components/product-hero';

const meta = {
  title: 'Components/ProductHero',
  component: ProductHero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Product title/heading',
    },
    description: {
      control: 'text',
      description: 'Product description',
    },
    price: {
      control: 'text',
      description: 'Product price',
    },
  },
} satisfies Meta<typeof ProductHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    useBadge: true,
    badge: {
      text: 'Limited Edition',
      variant: 'blue',
      showDot: true,
    },
    rating: {
      rating: 4.8,
      reviewCount: 2547,
      showReviewCount: true,
    },
    image: {
      src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80',
      alt: 'Premium Wireless Headphones',
    },
    title: 'Premium Wireless Headphones',
    description:
      'Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort for all-day wear.',
    price: '$299',
    primaryButton: {
      label: 'Add to Cart',
      onClick: () => console.log('Add to cart clicked'),
    },
    secondaryButton: {
      label: 'View Details',
      onClick: () => console.log('View details clicked'),
    },
    features: [
      { label: 'Free shipping' },
      { label: '30-day returns' },
      { label: '2-year warranty' },
    ],
  },
};

export const WithCustomFeatures: Story = {
  args: {
    image: {
      src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80',
      alt: 'Premium Wireless Headphones',
    },
    title: 'Premium Wireless Headphones',
    description:
      'Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort for all-day wear.',
    price: '$299',
    primaryButton: {
      label: 'Buy Now',
      onClick: () => console.log('Buy now clicked'),
    },
    secondaryButton: {
      label: 'Learn More',
      onClick: () => console.log('Learn more clicked'),
    },
    features: [
      { label: 'Free express shipping' },
      { label: '60-day money back' },
      { label: '3-year warranty' },
      { label: '24/7 support' },
    ],
  },
};

export const WithoutSecondaryButton: Story = {
  args: {
    image: {
      src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80',
      alt: 'Premium Wireless Headphones',
    },
    title: 'Premium Wireless Headphones',
    description:
      'Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort for all-day wear.',
    price: '$299',
    primaryButton: {
      label: 'Add to Cart',
      onClick: () => console.log('Add to cart clicked'),
    },
    features: [
      { label: 'Free shipping' },
      { label: '30-day returns' },
      { label: '2-year warranty' },
    ],
  },
};

export const WithoutFeatures: Story = {
  args: {
    image: {
      src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80',
      alt: 'Premium Wireless Headphones',
    },
    title: 'Premium Wireless Headphones',
    description:
      'Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort for all-day wear.',
    price: '$299',
    primaryButton: {
      label: 'Add to Cart',
      onClick: () => console.log('Add to cart clicked'),
    },
    secondaryButton: {
      label: 'View Details',
      onClick: () => console.log('View details clicked'),
    },
    features: [],
  },
};

export const AlternativeProduct: Story = {
  args: {
    badge: {
      text: 'Best Seller',
      variant: 'yellow',
      showDot: true,
    },
    rating: {
      rating: 4.6,
      reviewCount: 1832,
      showReviewCount: true,
    },
    image: {
      src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1056&h=1056&fit=crop',
      alt: 'Premium Smart Watch',
    },
    title: 'Premium Smart Watch',
    description:
      'Stay connected and track your fitness goals with our advanced smartwatch. Features include heart rate monitoring, GPS tracking, and 7-day battery life.',
    price: '$399',
    primaryButton: {
      label: 'Add to Cart',
      onClick: () => console.log('Add to cart clicked'),
    },
    secondaryButton: {
      label: 'View Details',
      onClick: () => console.log('View details clicked'),
    },
    features: [
      { label: 'Free shipping' },
      { label: '14-day returns' },
      { label: '1-year warranty' },
    ],
  },
};

export const WithBadgeOnly: Story = {
  args: {
    badge: {
      text: 'Hot Deal',
      variant: 'red',
      showDot: true,
    },
    image: {
      src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80',
      alt: 'Premium Wireless Headphones',
    },
    title: 'Premium Wireless Headphones',
    description:
      'Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort for all-day wear.',
    price: '$299',
    primaryButton: {
      label: 'Add to Cart',
      onClick: () => console.log('Add to cart clicked'),
    },
    secondaryButton: {
      label: 'View Details',
      onClick: () => console.log('View details clicked'),
    },
    features: [
      { label: 'Free shipping' },
      { label: '30-day returns' },
      { label: '2-year warranty' },
    ],
  },
};

export const WithRatingOnly: Story = {
  args: {
    rating: {
      rating: 4.9,
      reviewCount: 5423,
      showReviewCount: true,
    },
    image: {
      src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80',
      alt: 'Premium Wireless Headphones',
    },
    title: 'Premium Wireless Headphones',
    description:
      'Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort for all-day wear.',
    price: '$299',
    primaryButton: {
      label: 'Add to Cart',
      onClick: () => console.log('Add to cart clicked'),
    },
    secondaryButton: {
      label: 'View Details',
      onClick: () => console.log('View details clicked'),
    },
    features: [
      { label: 'Free shipping' },
      { label: '30-day returns' },
      { label: '2-year warranty' },
    ],
  },
};
