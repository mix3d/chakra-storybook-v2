import {
  Box,
  type BoxProps,
  Button,
  type ButtonProps,
  HStack,
  type StackProps,
} from '@chakra-ui/react';

export interface BannerTextProps {
  root?: BoxProps;
  eyebrow?: BoxProps;
  title?: BoxProps;
  body?: BoxProps;
  ctaButtonBox?: StackProps;
  ctaButtonPrimary?: ButtonProps & { href?: string };
  ctaButtonSecondary?: ButtonProps & { href?: string };
  ctaLinkBox?: BoxProps;
  ctaLinkItems?: (ButtonProps & { href?: string })[];
}

export const BannerText = ({
  root,
  eyebrow,
  title,
  body,
  ctaButtonBox,
  ctaButtonPrimary,
  ctaButtonSecondary,
  ctaLinkBox,
  ctaLinkItems,
}: BannerTextProps) => {
  const { children: ctaButtonBoxChildren, ...ctaButtonBoxProps } =
    ctaButtonBox ?? {};
  const renderCtaButtonBox = Boolean(
    ctaButtonBox?.children ||
      ctaButtonPrimary?.children ||
      ctaButtonSecondary?.children
  );

  const renderCtaLinkBox = Boolean(
    ctaLinkBox?.children || ctaLinkItems?.length
  );
  const { children: ctaLinkBoxChildren, ...ctaLinkBoxProps } = ctaLinkBox ?? {};

  return (
    <Box {...root}>
      {eyebrow?.children && <Box {...eyebrow} />}
      {title?.children && (
        <Box
          my={2}
          {...title}
        />
      )}
      {body?.children && <Box {...body} />}

      {renderCtaButtonBox && (
        <HStack
          mt={6}
          spacing={4}
          display="flex"
          flexWrap="wrap"
          {...ctaButtonBoxProps}
        >
          {ctaButtonBox?.children ? (
            <div>{ctaButtonBoxChildren}</div>
          ) : (
            <>
              {ctaButtonPrimary?.children && (
                <Button
                  href={ctaButtonPrimary.href ?? ''}
                  as="a"
                  {...ctaButtonPrimary}
                />
              )}
              {ctaButtonSecondary?.children && (
                <Button
                  href={ctaButtonSecondary.href ?? ''}
                  as="a"
                  {...ctaButtonSecondary}
                />
              )}
            </>
          )}
        </HStack>
      )}

      {renderCtaLinkBox && (
        <Box
          mt={6}
          display={['grid', null, 'flex']}
          gridTemplateColumns="1fr 1fr"
          gridGap={4}
          flexWrap="wrap"
          {...ctaLinkBoxProps}
        >
          {ctaLinkBoxChildren ? (
            ctaLinkBoxChildren
          ) : (
            <>
              {ctaLinkItems?.map((buttonProps, i) => {
                const { href = '', ...__buttonProps } = buttonProps;
                return (
                  <Button
                    key={`${href}-${i}`}
                    as="a"
                    href={href}
                    {...__buttonProps}
                  />
                );
              })}
            </>
          )}
        </Box>
      )}
    </Box>
  );
};
