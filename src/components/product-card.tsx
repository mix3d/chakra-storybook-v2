import type { ReactNode } from 'react';
import {
  AspectRatio,
  Box,
  type BoxProps,
  Button,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';

export interface ProductCardProps {
  root?: Omit<BoxProps, 'children'>;
  topLeft?: ReactNode;
  image?: {
    src?: string;
    alt?: string;
    ratio?: number;
  };
  brand?: ReactNode;
  name?: ReactNode;
  href?: string;
  price?: ReactNode;
  button?: ReactNode;
}

export const ProductCard = ({
  root,
  topLeft,
  image,
  brand,
  name,
  href,
  price,
  button,
}: ProductCardProps) => {
  return (
    <LinkBox
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      px={{ base: 4, md: 0 }}
      {...root}
    >
      {image?.src && (
        <AspectRatio
          ratio={image?.ratio ?? 1}
          position="relative"
          width="100%"
          overflow="hidden"
          mb={3}
        >
          <img
            src={image.src ?? ''}
            alt={image?.alt ?? ''}
            style={{
              objectFit: 'contain',
            }}
          />
        </AspectRatio>
      )}
      {topLeft && (
        <Box
          position="absolute"
          top="0"
          left="0"
        >
          {topLeft}
        </Box>
      )}
      {brand && (
        <Box
          textStyle={['Mobile/Body-XS', null, 'Desktop/Body-XS']}
          textColor="text-muted"
        >
          {brand}
        </Box>
      )}
      {name && (
        <Box
          textStyle={['Mobile/Body-Default', null, 'Desktop/Body-Default']}
          textColor="text"
          my={1}
        >
          <LinkOverlay href={href ?? ''}>{name}</LinkOverlay>
        </Box>
      )}
      {price && (
        <Box
          textStyle={['Mobile/Body-S', null, 'Desktop/Body-S']}
          textColor="text"
        >
          {price}
        </Box>
      )}
      {button && (
        <Button
          mt={3}
          size="md"
          width="full"
        >
          {button}
        </Button>
      )}
    </LinkBox>
  );
};
