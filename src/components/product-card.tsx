import {
  AspectRatio,
  Box,
  type BoxProps,
  Button,
  type ButtonProps,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';

export interface ProductCardProps {
  root?: Omit<BoxProps, 'children'>;
  topLeft?: BoxProps;
  image?: {
    src?: string;
    alt?: string;
    ratio?: number;
  };
  brand?: BoxProps;
  name?: BoxProps;
  href?: string;
  price?: BoxProps;
  button?: ButtonProps;
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
      {topLeft?.children && (
        <Box
          position="absolute"
          top="0"
          left="0"
          {...topLeft}
        />
      )}
      {brand?.children && (
        <Box
          textStyle={['Mobile/Body-XS', null, 'Desktop/Body-XS']}
          textColor="text-muted"
          {...brand}
        />
      )}
      {name?.children && (
        <Box
          textStyle={['Mobile/Body-Default', null, 'Desktop/Body-Default']}
          textColor="text"
          my={1}
        >
          <LinkOverlay href={href ?? ''}>{name.children}</LinkOverlay>
        </Box>
      )}
      {price?.children && (
        <Box
          textStyle={['Mobile/Body-S', null, 'Desktop/Body-S']}
          textColor="text"
          {...price}
        />
      )}
      {button?.children && (
        <Button
          mt={3}
          size="md"
          width="full"
          {...button}
        />
      )}
    </LinkBox>
  );
};
