import type { Meta, StoryObj } from '@storybook/react';
import { TextCard } from '../components/cms/text-card';
import { Box, SimpleGrid } from '@chakra-ui/react';

const meta = {
  title: 'Components/TextCardCMS',
  component: TextCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: ['dark', 'light', 'highlight'],
      description: 'Color theme of the card',
    },
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment',
    },
  },
} satisfies Meta<typeof TextCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    theme: 'light',
    textAlign: 'center',
    title: {
      children: 'Premium Materials',
    },
    description: {
      children: 'Crafted with the finest materials for lasting quality.',
    },
    button: {
      children: 'Learn More',
      href: '#',
    },
  },
};

export const DarkTheme: Story = {
  args: {
    theme: 'dark',
    textAlign: 'center',
    title: {
      children: 'Premium Materials',
    },
    description: {
      children: 'Crafted with the finest materials for lasting quality.',
    },
    button: {
      children: 'Learn More',
      href: '#',
    },
  },
};

export const HighlightTheme: Story = {
  args: {
    theme: 'highlight',
    textAlign: 'center',
    title: {
      children: 'Premium Materials',
    },
    description: {
      children: 'Crafted with the finest materials for lasting quality.',
    },
    button: {
      children: 'Learn More',
      href: '#',
    },
  },
};

export const LeftAligned: Story = {
  args: {
    theme: 'light',
    textAlign: 'left',
    title: {
      children: 'Premium Materials',
    },
    description: {
      children: 'Crafted with the finest materials for lasting quality.',
    },
    button: {
      children: 'Learn More',
      href: '#',
    },
  },
};

export const RightAligned: Story = {
  args: {
    theme: 'light',
    textAlign: 'right',
    title: {
      children: 'Premium Materials',
    },
    description: {
      children: 'Crafted with the finest materials for lasting quality.',
    },
    button: {
      children: 'Learn More',
      href: '#',
    },
  },
};

export const WithImage: Story = {
  args: {
    theme: 'light',
    textAlign: 'center',
    image: {
      src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=100&h=100&fit=crop',
      alt: 'Feature icon',
    },
    title: {
      children: 'Quality Assurance',
    },
    description: {
      children: 'Every product undergoes rigorous testing.',
    },
    button: {
      children: 'Discover More',
      href: '#',
    },
  },
};

export const WithoutButton: Story = {
  args: {
    theme: 'light',
    textAlign: 'center',
    title: {
      children: 'Premium Materials',
    },
    description: {
      children: 'Crafted with the finest materials for lasting quality.',
    },
  },
};

export const CustomStyling: Story = {
  args: {
    theme: 'dark',
    textAlign: 'center',
    title: {
      children: 'Sustainable Fashion',
      fontWeight: 'bold',
      fontSize: 'xl',
    },
    description: {
      children: 'Made from 100% organic cotton and recycled materials.',
      fontSize: 'sm',
    },
    button: {
      children: 'Shop Now →',
      href: '#shop',
    },
  },
};

export const AllThemes: Story = {
  render: () => (
    <SimpleGrid columns={[1, 2, 3]} spacing={6} p={6}>
      <Box>
        <TextCard 
          theme="dark"
          textAlign="center"
          title={{ children: 'Dark Theme' }}
          description={{ children: 'Premium quality materials' }}
          button={{ children: 'Learn More', href: '#' }}
        />
      </Box>
      <Box>
        <TextCard 
          theme="light"
          textAlign="center"
          title={{ children: 'Light Theme' }}
          description={{ children: 'Premium quality materials' }}
          button={{ children: 'Learn More', href: '#' }}
        />
      </Box>
      <Box>
        <TextCard 
          theme="highlight"
          textAlign="center"
          title={{ children: 'Highlight Theme' }}
          description={{ children: 'Premium quality materials' }}
          button={{ children: 'Learn More', href: '#' }}
        />
      </Box>
      <Box>
        <TextCard 
          theme="dark"
          textAlign="left"
          title={{ children: 'Dark + Left' }}
          description={{ children: 'Premium quality materials' }}
          button={{ children: 'Learn More', href: '#' }}
        />
      </Box>
      <Box>
        <TextCard 
          theme="light"
          textAlign="left"
          title={{ children: 'Light + Left' }}
          description={{ children: 'Premium quality materials' }}
          button={{ children: 'Learn More', href: '#' }}
        />
      </Box>
      <Box>
        <TextCard 
          theme="highlight"
          textAlign="left"
          title={{ children: 'Highlight + Left' }}
          description={{ children: 'Premium quality materials' }}
          button={{ children: 'Learn More', href: '#' }}
        />
      </Box>
    </SimpleGrid>
  ),
};
