import { Box, type BoxProps } from '@chakra-ui/react';

export interface ImageBannerProps {
  rootProps?: Omit<BoxProps, 'children'>;
  priority?: boolean;
  image?: {
    src?: string;
    alt?: string;
  };
  imageMobile?: {
    src?: string;
    alt?: string;
  };
}

export const ImageBanner = ({
  image,
  imageMobile,
  priority,
  rootProps,
}: ImageBannerProps) => {
  if (!image?.src && !imageMobile?.src) {
    return null;
  }

  return (
    <>
      <Box
        {...rootProps}
        position="relative"
        width="100%"
        height="300px"
        overflow="hidden"
        display={['none', 'none', 'block']}
      >
        <img
          src={image?.src ?? imageMobile?.src ?? ''}
          alt={image?.alt ?? imageMobile?.alt ?? ''}
          style={{
            objectFit: 'cover',
          }}
        />
      </Box>
      <Box
        {...rootProps}
        position="relative"
        width="100%"
        height="300px"
        overflow="hidden"
        display={['block', 'block', 'none']}
      >
        <img
          src={imageMobile?.src ?? image?.src ?? ''}
          alt={imageMobile?.alt ?? image?.alt ?? ''}
          style={{
            objectFit: 'cover',
          }}
        />
      </Box>
    </>
  );
};
