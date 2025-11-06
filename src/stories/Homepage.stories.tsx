import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Flex, Heading, Text, VStack, HStack, Container } from '@chakra-ui/react';
import { ProductHero } from '../components/product-hero';
import { Accordion } from '../components/accordion';
import { TextCard } from '../components/text-card';
import { StarIcon } from '@chakra-ui/icons';

const HomepageComponent = () => {
  const faqItems = [
    {
      id: '1',
      label: 'What is included in my purchase?',
      content:
        'Your purchase includes the premium product, comprehensive documentation, lifetime access to updates, and our world-class customer support. We want to ensure you get the most out of your investment.',
      defaultOpen: true,
    },
    {
      id: '2',
      label: 'What is your return policy?',
      content:
        'We offer a hassle-free 30-day money-back guarantee. If you are not completely satisfied with your purchase, simply contact our support team and we will process a full refund, no questions asked.',
      defaultOpen: false,
    },
    {
      id: '3',
      label: 'How long does shipping take?',
      content:
        'We offer free standard shipping which typically takes 3-5 business days. Express shipping options are also available at checkout for faster delivery. All orders are tracked so you can monitor your package in real-time.',
      defaultOpen: false,
    },
    {
      id: '4',
      label: 'Is customer support available 24/7?',
      content:
        'Yes! Our dedicated support team is available around the clock to help you. You can reach us via email, live chat, or phone. Most inquiries are responded to within 2 hours.',
      defaultOpen: false,
    },
    {
      id: '5',
      label: 'Do you offer bulk discounts?',
      content:
        'Absolutely! We offer special pricing for bulk orders. If you are interested in ordering multiple units or for business purposes, please contact our sales team for a custom quote.',
      defaultOpen: false,
    },
    {
      id: '6',
      label: 'How do I know if this product is right for me?',
      content:
        'We have detailed product specifications, video demonstrations, and customer reviews on our product page. You can also schedule a personalized consultation with one of our product experts to discuss your specific needs.',
      defaultOpen: false,
    },
  ];

  return (
    <Box width="100%" bg="white">
      {/* Hero Section */}
      <ProductHero
        useBadge={true}
        badge={{
          text: 'New Product Launch',
          variant: 'blue',
          showDot: true,
        }}
        rating={{
          rating: 4.9,
          reviewCount: 3245,
          showReviewCount: true,
        }}
        image={{
          src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80',
          alt: 'Premium Wireless Headphones',
        }}
        title="Premium Wireless Headphones Pro"
        description="Experience crystal-clear sound with our latest premium wireless headphones. Featuring advanced active noise cancellation, 40-hour battery life, and premium comfort engineering for all-day wear."
        price="$399"
        primaryButton={{
          label: 'Add to Cart',
          onClick: () => console.log('Add to cart clicked'),
        }}
        secondaryButton={{
          label: 'View Details',
          onClick: () => console.log('View details clicked'),
        }}
        features={[
          { label: 'Free shipping' },
          { label: '60-day returns' },
          { label: '3-year warranty' },
        ]}
      />

      {/* Features Section */}
      <Box padding={{ base: '40px 16px', md: '80px 32px', lg: '90px 52px' }} bg="#F8FAFC">
        <VStack spacing={{ base: '32px', md: '64px' }} width="100%">
          <VStack spacing="12px" width="100%" textAlign="center">
            <Heading
              as="h2"
              fontSize={{ base: '32px', md: '40px', lg: '48px' }}
              fontWeight="900"
              color="#0F172A"
              fontFamily="Raleway"
            >
              Why Choose Us
            </Heading>
            <Text
              fontSize={{ base: '16px', md: '18px', lg: '20px' }}
              color="#475569"
              fontFamily="DM Sans"
              maxWidth="600px"
            >
              Discover what makes our products the choice of thousands of satisfied customers worldwide
            </Text>
          </VStack>

          <Flex
            width="100%"
            gap={{ base: '16px', md: '24px' }}
            justifyContent="center"
            alignItems="stretch"
          >
              <TextCard
                size="large"
                background="light"
                textAlign="center"
                showIcon={true}
                icon={<StarIcon width="40px" height="40px" color="#3B82F6" />}
                title={{ children: 'Premium Quality' }}
                description={{
                  children: 'Crafted with the finest materials and precision engineering for exceptional durability and performance.',
                }}
                root={{ borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
              />
              <TextCard
                size="large"
                background="light"
                textAlign="center"
                showIcon={true}
                icon={<StarIcon width="40px" height="40px" color="#10B981" />}
                title={{ children: 'Lifetime Support' }}
                description={{
                  children: 'Our dedicated support team is available 24/7 to help you get the most out of your purchase.',
                }}
                root={{ borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
              />
              <TextCard
                size="large"
                background="light"
                textAlign="center"
                showIcon={true}
                icon={<StarIcon width="40px" height="40px" color="#F59E0B" />}
                title={{ children: 'Best Value' }}
                description={{
                  children: 'Unbeatable prices with premium features. We promise competitive pricing on all our products.',
                }}
                root={{ borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
              />
          </Flex>
        </VStack>
      </Box>

      {/* FAQ Section */}
      <Box padding={{ base: '40px 16px', md: '80px 32px', lg: '90px 52px' }} bg="white">
        <VStack spacing={{ base: '32px', md: '48px' }} width="100%">
          <VStack spacing="12px" width="100%" textAlign="center">
            <Heading
              as="h2"
              fontSize={{ base: '32px', md: '40px', lg: '48px' }}
              fontWeight="900"
              color="#0F172A"
              fontFamily="Raleway"
            >
              Frequently Asked Questions
            </Heading>
            <Text
              fontSize={{ base: '16px', md: '18px', lg: '20px' }}
              color="#475569"
              fontFamily="DM Sans"
              maxWidth="600px"
            >
              Get answers to common questions about our products and services
            </Text>
          </VStack>

          <Box width="100%" maxWidth="800px" margin="0 auto">
            <Accordion
              items={faqItems}
              size="medium"
              showLeftIcon={false}
              showRightIcon={true}
              accordionButtonProps={{
                _hover: {
                  bg: '#F1F5F9',
                },
              }}
              accordionItemProps={{
                borderColor: '#E2E8F0',
              }}
            />
          </Box>
        </VStack>
      </Box>

      {/* Testimonials/Social Proof Section */}
      <Box padding={{ base: '40px 16px', md: '80px 32px', lg: '90px 52px' }} bg="#F8FAFC">
        <VStack spacing={{ base: '32px', md: '64px' }} width="100%">
          <VStack spacing="12px" width="100%" textAlign="center">
            <Heading
              as="h2"
              fontSize={{ base: '32px', md: '40px', lg: '48px' }}
              fontWeight="900"
              color="#0F172A"
              fontFamily="Raleway"
            >
              Trusted by Thousands
            </Heading>
            <Text
              fontSize={{ base: '16px', md: '18px', lg: '20px' }}
              color="#475569"
              fontFamily="DM Sans"
              maxWidth="600px"
            >
              Join thousands of satisfied customers who have experienced the difference
            </Text>
          </VStack>

          <Flex
            width="100%"
            gap={{ base: '16px', md: '24px' }}
            flexWrap="wrap"
            justifyContent="center"
          >
            <Box flex={{ base: '1 1 100%', sm: '1 1 calc(50% - 12px)', lg: '1 1 calc(33.333% - 16px)' }} minW="0">
              <TextCard
                size="large"
                background="accent"
                textAlign="left"
                root={{
                  borderRadius: '12px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                }}
                title={{
                  children: '"Exceeded my expectations"',
                  fontSize: '16px',
                }}
                description={{
                  children: 'The quality is outstanding. This product has completely transformed my daily routine.',
                }}
              />
            </Box>

            <Box flex={{ base: '1 1 100%', sm: '1 1 calc(50% - 12px)', lg: '1 1 calc(33.333% - 16px)' }} minW="0">
              <TextCard
                size="large"
                background="accent"
                textAlign="left"
                root={{
                  borderRadius: '12px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                }}
                title={{
                  children: '"Best purchase ever"',
                  fontSize: '16px',
                }}
                description={{
                  children: 'Fast shipping, excellent quality, and the customer service was incredibly helpful.',
                }}
              />
            </Box>

            <Box flex={{ base: '1 1 100%', sm: '1 1 calc(50% - 12px)', lg: '1 1 calc(33.333% - 16px)' }} minW="0">
              <TextCard
                size="large"
                background="accent"
                textAlign="left"
                root={{
                  borderRadius: '12px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                }}
                title={{
                  children: '"Highly recommend"',
                  fontSize: '16px',
                }}
                description={{
                  children: 'I have already recommended this to all my friends. Definitely worth every penny.',
                }}
              />
            </Box>
          </Flex>
        </VStack>
      </Box>

      {/* CTA Section */}
      <Box padding={{ base: '40px 16px', md: '80px 32px', lg: '90px 52px' }} bg="#0F172A" textAlign="center">
        <VStack spacing="24px" width="100%">
          <VStack spacing="12px">
            <Heading
              as="h2"
              fontSize={{ base: '32px', md: '40px', lg: '48px' }}
              fontWeight="900"
              color="white"
              fontFamily="Raleway"
            >
              Ready to Experience the Difference?
            </Heading>
            <Text
              fontSize={{ base: '16px', md: '18px', lg: '20px' }}
              color="#CBD5E1"
              fontFamily="DM Sans"
              maxWidth="600px"
            >
              Join thousands of happy customers. Limited-time offer – grab yours today with free shipping!
            </Text>
          </VStack>

          <HStack gap="16px" flexWrap="wrap" justifyContent="center">
            <button
              onClick={() => console.log('Get Started clicked')}
              style={{
                padding: '14px 32px',
                borderRadius: '8px',
                background: '#3B82F6',
                color: 'white',
                border: 'none',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                fontFamily: 'DM Sans',
              }}
              onMouseOver={(e) => {
                (e.target as HTMLButtonElement).style.background = '#2563EB';
              }}
              onMouseOut={(e) => {
                (e.target as HTMLButtonElement).style.background = '#3B82F6';
              }}
            >
              Get Started Now
            </button>
            <button
              onClick={() => console.log('Learn More clicked')}
              style={{
                padding: '14px 32px',
                borderRadius: '8px',
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                fontFamily: 'DM Sans',
              }}
              onMouseOver={(e) => {
                (e.target as HTMLButtonElement).style.background = 'rgba(255,255,255,0.1)';
              }}
              onMouseOut={(e) => {
                (e.target as HTMLButtonElement).style.background = 'transparent';
              }}
            >
              Learn More
            </button>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

const meta = {
  title: 'Pages/Homepage',
  component: HomepageComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HomepageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// export const Compact: Story = {
//   render: () => (
//     <Box width="100%" bg="white">
//       <ProductHero
//         useBadge={false}
//         image={{
//           src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80',
//           alt: 'Product',
//         }}
//         title="Compact Product Showcase"
//         description="A simplified version of our landing page perfect for mobile or quick browsing."
//         price="$299"
//         primaryButton={{
//           label: 'Shop Now',
//           onClick: () => console.log('Shop clicked'),
//         }}
//         features={[{ label: 'Free shipping' }, { label: '30-day returns' }]}
//       />

//       <Box padding={{ base: '40px 16px', md: '60px 32px' }} bg="#F8FAFC">
//         <VStack spacing="24px" width="100%">
//           <VStack spacing="8px" width="100%" textAlign="center">
//             <Heading as="h2" fontSize={{ base: '28px', md: '36px' }} fontWeight="900" color="#0F172A" fontFamily="Raleway">
//               Why We're Different
//             </Heading>
//             <Text fontSize={{ base: '14px', md: '16px' }} color="#475569" fontFamily="DM Sans">
//               Quality, reliability, and customer satisfaction guaranteed
//             </Text>
//           </VStack>

//           <Flex
//             width="100%"
//             gap={{ base: '12px', md: '16px' }}
//             flexWrap="wrap"
//             justifyContent="center"
//           >
//             <Box flex={{ base: '1 1 100%', sm: '1 1 calc(50% - 8px)' }} minW="0">
//               <TextCard
//                 size="small"
//                 background="light"
//                 textAlign="center"
//                 icon={<StarIcon width="32px" height="32px" color="#3B82F6" />}
//                 showIcon={true}
//                 title={{ children: 'Premium Quality' }}
//               />
//             </Box>

//             <Box flex={{ base: '1 1 100%', sm: '1 1 calc(50% - 8px)' }} minW="0">
//               <TextCard
//                 size="small"
//                 background="light"
//                 textAlign="center"
//                 icon={<StarIcon width="32px" height="32px" color="#10B981" />}
//                 showIcon={true}
//                 title={{ children: '24/7 Support' }}
//               />
//             </Box>
//           </Flex>
//         </VStack>
//       </Box>

//       <Box padding={{ base: '40px 16px', md: '60px 32px' }} bg="white">
//         <VStack spacing="24px" width="100%">
//           <Heading as="h2" fontSize={{ base: '28px', md: '36px' }} fontWeight="900" color="#0F172A" fontFamily="Raleway" textAlign="center">
//             FAQ
//           </Heading>

//           <Box width="100%" maxWidth="700px" margin="0 auto">
//             <Accordion
//               items={[
//                 {
//                   id: '1',
//                   label: 'What is included?',
//                   content: 'Everything you need to get started, including product, documentation, and lifetime support.',
//                   defaultOpen: true,
//                 },
//                 {
//                   id: '2',
//                   label: 'How long does shipping take?',
//                   content: 'Standard shipping takes 3-5 business days with free tracking.',
//                   defaultOpen: false,
//                 },
//                 {
//                   id: '3',
//                   label: 'What about returns?',
//                   content: 'Full 30-day money-back guarantee. No questions asked.',
//                   defaultOpen: false,
//                 },
//               ]}
//               size="medium"
//               showRightIcon={true}
//             />
//           </Box>
//         </VStack>
//       </Box>
//     </Box>
//   ),
// };
