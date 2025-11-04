import type { ReactNode } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  type BoxProps,
} from '@chakra-ui/react';
import { ArrowForwardIcon, CheckIcon } from '@chakra-ui/icons';

export interface ProductHeroFeature {
  label: string;
  icon?: ReactNode;
}

export interface ProductHeroProps {
  root?: Omit<BoxProps, 'children'>;
  image?: {
    src: string;
    alt?: string;
  };
  title: string;
  description: string;
  price: string;
  primaryButton?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  secondaryButton?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  features?: ProductHeroFeature[];
}

const defaultFeatures: ProductHeroFeature[] = [
  { label: 'Free shipping' },
  { label: '30-day returns' },
  { label: '2-year warranty' },
];

export const ProductHero = ({
  root,
  image,
  title,
  description,
  price,
  primaryButton,
  secondaryButton,
  features = defaultFeatures,
}: ProductHeroProps) => {
  return (
    <Box
      display="flex"
      width="100%"
      padding={{ base: '40px 16px', md: '80px 32px' }}
      alignItems="center"
      gap={{ base: '32px', md: '64px' }}
      bg="white"
      // flexDirection={{ base: 'column', lg: 'row' }}
      {...root}
    >
      {/* Left Content Section */}
      <Flex
        direction="column"
        alignItems="flex-start"
        gap={{ base: '24px', md: '32px' }}
        flex={{ base: '1', lg: '3 0 0' }}
        width={{ base: '100%', lg: 'auto' }}
      >
        {/* Title */}
        <Heading
          as="h1"
          color="#0F172A"
          fontFamily="Raleway"
          fontSize={{ base: '36px', md: '48px', lg: '60px' }}
          fontWeight="900"
          lineHeight="120%"
          letterSpacing={{ base: '-0.72px', md: '-1.2px' }}
        >
          {title}
        </Heading>

        {/* Description */}
        <Text
          color="#475569"
          fontFamily="DM Sans"
          fontSize={{ base: '16px', md: '18px', lg: '20px' }}
          fontWeight="400"
          lineHeight="150%"
        >
          {description}
        </Text>

        {/* Pricing */}
        <Flex alignItems="flex-end" gap="13px">
          <Text
            color="#0F172A"
            fontFamily="Raleway"
            fontSize={{ base: '32px', md: '38px', lg: '44px' }}
            fontWeight="900"
            lineHeight="120%"
          >
            {price}
          </Text>
        </Flex>

        {/* CTA Buttons */}
        <Flex
          paddingTop="16px"
          alignItems="center"
          gap="16px"
          width="100%"
          flexDirection={{ base: 'column', sm: 'row' }}
        >
          {primaryButton && (
            <Button
              variant="solid"
              size="lg"
              rightIcon={<ArrowForwardIcon />}
              onClick={primaryButton.onClick}
              as={primaryButton.href ? 'a' : 'button'}
              href={primaryButton.href}
              width={{ base: '100%', sm: 'auto' }}
            >
              {primaryButton.label}
            </Button>
          )}
          {secondaryButton && (
            <Button
              variant="outline"
              size="lg"
              onClick={secondaryButton.onClick}
              as={secondaryButton.href ? 'a' : 'button'}
              href={secondaryButton.href}
              width={{ base: '100%', sm: 'auto' }}
            >
              {secondaryButton.label}
            </Button>
          )}
        </Flex>

        {/* Features */}
        {features && features.length > 0 && (
          <Flex
            paddingTop="24px"
            alignItems="flex-end"
            gap={{ base: '16px', md: '24px' }}
            borderTop="0.83px solid #282635"
            width="100%"
            flexWrap="wrap"
          >
            {features.map((feature, index) => (
              <Flex key={index} alignItems="center" gap="8px">
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  width="24px"
                  height="24px"
                  borderRadius="100px"
                  bg="#DCFCE7"
                  flexShrink={0}
                >
                  {feature.icon || <CheckIcon width="16px" height="16px" color="#15803D" />}
                </Flex>
                <Text
                  color="#475569"
                  fontFamily="DM Sans"
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="150%"
                  whiteSpace="nowrap"
                >
                  {feature.label}
                </Text>
              </Flex>
            ))}
          </Flex>
        )}
      </Flex>

      {/* Right Image Section */}
      {image && (
        <Box
          width={{ base: '100%', lg: '528px' }}
          maxWidth="700px"
          maxHeight="700px"
          aspectRatio="1/1"
          position="relative"
          flex={2}
        >
          <Box
            as="img"
            src={image.src}
            alt={image.alt || title}
            width="100%"
            height="100%"
            borderRadius="16px"
            boxShadow="0 25px 50px -13px rgba(0, 0, 0, 0.25)"
            objectFit="cover"
          />
        </Box>
      )}
    </Box>
  );
};
