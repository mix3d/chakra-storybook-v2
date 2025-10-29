import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProductCard, type ProductCardProps } from '../components/product-card';
import { Text, Badge, Box } from '@chakra-ui/react';

const Wrapper = (props: ProductCardProps) => {
  return (
    <Box>
      <ProductCard
        root={{ maxW: '200px' }}
        {...props}
      />
    </Box>
  );
};

const meta = {
  title: 'Components/ProductCard',
  component: Wrapper,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: {
      src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
      alt: 'Product',
      ratio: 1,
    },
    brand: 'Brand Name',
    name: 'Product Name',
    price: '$99.99',
    href: '/product/sample',
  },
};

export const WithButton: Story = {
  args: {
    image: {
      src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
      alt: 'Product',
      ratio: 1,
    },
    brand: 'Premium Brand',
    name: 'Deluxe Product',
    price: '$149.99',
    button: 'Add to Cart',
    href: '/product/sample',
  },
};

export const WithBadge: Story = {
  render: () => (
    <Box maxW="200px">
      <ProductCard
        image={{
          src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
          alt: 'Product',
          ratio: 1,
        }}
        topLeft={
          <Badge
            colorScheme="red"
            fontSize="xs"
          >
            Sale
          </Badge>
        }
        brand="Brand Name"
        name="Sale Product"
        price={
          <>
            <Text
              as="del"
              mr={2}
            >
              $199.99
            </Text>
            <Text
              as="span"
              fontWeight="bold"
            >
              $99.99
            </Text>
          </>
        }
        href="/product/sample"
      />
    </Box>
  ),
};

export const MinimalCard: Story = {
  args: {
    image: {
      src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
      alt: 'Product',
      ratio: 1,
    },
    name: 'Simple Product',
    href: '/product/sample',
  },
};
