import type { Meta, StoryObj } from '@storybook/react-vite';
import { Rating } from '../components/rating';
import { Flex } from '@chakra-ui/react';

const meta = {
  title: 'Components/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    rating: {
      control: { type: 'number', min: 0, max: 5, step: 0.1 },
      description: 'Rating value (0-5)',
    },
    maxRating: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Maximum number of stars',
    },
    reviewCount: {
      control: 'number',
      description: 'Number of reviews',
    },
    showReviewCount: {
      control: 'boolean',
      description: 'Show/hide review count',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the rating component',
    },
  },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rating: 4.8,
    reviewCount: 2547,
    showReviewCount: true,
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    rating: 4.5,
    reviewCount: 1234,
    showReviewCount: true,
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    rating: 4.8,
    reviewCount: 2547,
    showReviewCount: true,
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    rating: 4.9,
    reviewCount: 5423,
    showReviewCount: true,
    size: 'lg',
  },
};

export const WithoutReviewCount: Story = {
  args: {
    rating: 4.3,
    showReviewCount: false,
    size: 'md',
  },
};

export const PerfectRating: Story = {
  args: {
    rating: 5.0,
    reviewCount: 100,
    showReviewCount: true,
    size: 'md',
  },
};

export const LowRating: Story = {
  args: {
    rating: 2.5,
    reviewCount: 45,
    showReviewCount: true,
    size: 'md',
  },
};

export const HighReviewCount: Story = {
  args: {
    rating: 4.7,
    reviewCount: 12543,
    showReviewCount: true,
    size: 'md',
  },
};

export const AllSizes: Story = {
  render: () => (
    <Flex direction="column" gap="24px" alignItems="flex-start">
      <Rating rating={4.8} reviewCount={2547} showReviewCount size="sm" />
      <Rating rating={4.8} reviewCount={2547} showReviewCount size="md" />
      <Rating rating={4.8} reviewCount={2547} showReviewCount size="lg" />
    </Flex>
  ),
};
