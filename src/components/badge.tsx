import { Box, Flex, Text, type BoxProps } from '@chakra-ui/react';

export interface BadgeProps extends Omit<BoxProps, 'children'> {
  text: string;
  variant?: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'gray';
  showDot?: boolean;
}

const variantStyles = {
  blue: {
    bg: '#DBEAFE',
    dotColor: '#2563EB',
    textColor: '#1D4ED8',
  },
  green: {
    bg: '#DCFCE7',
    dotColor: '#16A34A',
    textColor: '#15803D',
  },
  red: {
    bg: '#FEE2E2',
    dotColor: '#DC2626',
    textColor: '#991B1B',
  },
  yellow: {
    bg: '#FEF3C7',
    dotColor: '#F59E0B',
    textColor: '#B45309',
  },
  purple: {
    bg: '#F3E8FF',
    dotColor: '#9333EA',
    textColor: '#7E22CE',
  },
  gray: {
    bg: '#F1F5F9',
    dotColor: '#64748B',
    textColor: '#475569',
  },
};

export const Badge = ({
  text,
  variant = 'blue',
  showDot = true,
  ...props
}: BadgeProps) => {
  const styles = variantStyles[variant];

  return (
    <Flex
      display="inline-flex"
      minHeight="28px"
      padding="4px 12px"
      alignItems="center"
      gap="8px"
      borderRadius="9999px"
      bg={styles.bg}
      {...props}
    >
      {showDot && (
        <Box
          width="8px"
          height="8px"
          borderRadius="9999px"
          bg={styles.dotColor}
          flexShrink={0}
        />
      )}
      <Text
        color={styles.textColor}
        fontFamily="DM Sans"
        fontSize="14px"
        fontWeight="700"
        lineHeight="normal"
        letterSpacing="0.56px"
        textTransform="uppercase"
      >
        {text}
      </Text>
    </Flex>
  );
};
