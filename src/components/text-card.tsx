import { Box, type BoxProps } from '@chakra-ui/react';
import type { ReactNode } from 'react';

export type TextCardSize = 'small' | 'large';
export type TextCardBackground = 'dark' | 'light' | 'accent';
export type TextCardAlignment = 'left' | 'center';

export interface TextCardProps {
  size?: TextCardSize;
  background?: TextCardBackground;
  textAlign?: TextCardAlignment;
  showIcon?: boolean;
  root?: Omit<BoxProps, 'children'>;
  icon?: ReactNode;
  title?: BoxProps;
  description?: BoxProps;
  cta?: BoxProps & { href?: string };
}

export const TextCard = ({
  size = 'large',
  background = 'light',
  textAlign = 'center',
  showIcon = false,
  root,
  icon,
  title,
  description,
  cta,
}: TextCardProps) => {
  const isLarge = size === 'large';
  const isDark = background === 'dark';
  const isAccent = background === 'accent';
  const isCentered = textAlign === 'center';

  const textColor = isDark ? 'white' : 'shading.900';
  const iconSize = isLarge ? '64px' : '40px';

  const getPadding = () => {
    if (showIcon) {
      return isLarge ? 6 : isCentered ? '16px 24px' : 6;
    }
    return isLarge ? '48px 24px' : '32px 24px';
  };

  const getBackgroundColor = (): string => {
    if (isDark) return 'shading.900';
    if (isAccent) return 'primary.200';
    return 'white';
  };

  const getTitleTextStyle = () => {
    if (isLarge) return ['Mobile/M', null, 'Desktop/M'];
    if (showIcon) return ['Mobile/Default', null, 'Desktop/Default'];
    return ['Mobile/M', null, 'Desktop/M'];
  };

  const getDescriptionTextStyle = () => {
    if (textAlign === 'left' && size === 'small' && showIcon) {
      return ['Mobile/Body-S', null, 'Desktop/Body-S'];
    }
    return ['Mobile/Body-Default', null, 'Desktop/Body-Default'];
  };

  const getCtaTextStyle = () => {
    return isLarge
      ? ['Mobile/Default', null, 'Desktop/Default']
      : ['Mobile/S', null, 'Desktop/S'];
  };

  const ctaPadding = isCentered
    ? (isLarge ? '10px 16px' : '10px 12px')
    : '10px 0';
  const ctaHeight = isLarge ? '40px' : '32px';
  const iconGap = isLarge ? '24px' : '16px';

  const contentProps: BoxProps = {
    display: 'flex',
    padding: getPadding(),
    flexDirection: 'column',
    alignItems: isCentered ? 'center' : 'flex-start',
    gap: iconGap,
    position: 'relative',
    backgroundColor: getBackgroundColor(),
    height: '100%',
    ...root,
  };

  return (
    <Box {...contentProps}>
      {showIcon && (
        <Box
          display="flex"
          width={iconSize}
          height={iconSize}
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          {icon || (
            <Box
              width={iconSize}
              height={iconSize}
              borderRadius="8px"
              border="3px solid"
              borderColor={textColor}
            />
          )}
        </Box>
      )}

      <Box
        display="flex"
        flexDirection="column"
        gap="16px"
        width="100%"
      >
        {title?.children && (
          <Box
            textStyle={getTitleTextStyle()}
            textColor={textColor}
            textAlign={isCentered ? 'center' : 'left'}
            {...title}
          />
        )}

        {description?.children && (
          <Box
            textStyle={getDescriptionTextStyle()}
            textColor={textColor}
            textAlign={isCentered ? 'center' : 'left'}
            {...description}
          />
        )}
      </Box>

      {cta?.children && (
        <Box
          as={cta.href ? 'a' : 'button'}
          href={cta.href}
          display="flex"
          height={ctaHeight}
          padding={ctaPadding}
          justifyContent="center"
          alignItems="center"
          gap="8px"
          borderRadius="60px"
          background="transparent"
          border="none"
          cursor="pointer"
          textStyle={getCtaTextStyle()}
          textColor={textColor}
          textDecoration="underline"
          _hover={{
            opacity: 0.8,
          }}
          {...cta}
        />
      )}
    </Box>
  );
};
