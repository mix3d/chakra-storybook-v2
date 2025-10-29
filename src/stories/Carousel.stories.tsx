import type { Meta, StoryObj } from '@storybook/react-vite';
import { Carousel, CarouselSlide } from '../components/carousel';
import { Box } from '@chakra-ui/react';

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Carousel style={{ height: '400px' }}>
      <CarouselSlide>
        <Box
          bg="blue.100"
          height="400px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="2xl"
          fontWeight="bold"
        >
          Slide 1
        </Box>
      </CarouselSlide>
      <CarouselSlide>
        <Box
          bg="green.100"
          height="400px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="2xl"
          fontWeight="bold"
        >
          Slide 2
        </Box>
      </CarouselSlide>
      <CarouselSlide>
        <Box
          bg="purple.100"
          height="400px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="2xl"
          fontWeight="bold"
        >
          Slide 3
        </Box>
      </CarouselSlide>
    </Carousel>
  ),
};

export const MultipleSlides: Story = {
  render: () => (
    <Carousel style={{ height: '300px' }}>
      {Array.from({ length: 5 }).map((_, idx) => (
        <CarouselSlide key={idx}>
          <Box
            bg={
              ['red.100', 'orange.100', 'yellow.100', 'cyan.100', 'pink.100'][
                idx
              ]
            }
            height="300px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="2xl"
            fontWeight="bold"
          >
            Slide {idx + 1}
          </Box>
        </CarouselSlide>
      ))}
    </Carousel>
  ),
};
