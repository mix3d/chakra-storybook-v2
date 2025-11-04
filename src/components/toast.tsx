import { Box, Flex, IconButton } from '@chakra-ui/react';
import {
  RiCheckboxCircleFill,
  RiErrorWarningFill,
  RiInformationFill,
  RiCloseLine,
} from 'react-icons/ri';

export type ToastStatus = 'success' | 'warning' | 'error' | 'info';
export type ToastVariant = 'solid' | 'subtle' | 'left-accent' | 'top-accent';

export interface ToastProps {
  status: ToastStatus;
  variant: ToastVariant;
  title: string;
  description?: string;
  closable?: boolean;
  onClose?: () => void;
}

const statusConfig = {
  success: {
    icon: RiCheckboxCircleFill,
    solidBg: '#38A169',
    subtleBg: '#D9FADB',
    accentColor: '#38A169',
  },
  warning: {
    icon: RiErrorWarningFill,
    solidBg: '#DD6B20',
    subtleBg: '#FDEDD1',
    accentColor: '#DD6B20',
  },
  error: {
    icon: RiErrorWarningFill,
    solidBg: '#E53E3E',
    subtleBg: '#FDE5D8',
    accentColor: '#E53E3E',
  },
  info: {
    icon: RiInformationFill,
    solidBg: '#3182CE',
    subtleBg: '#D6F1FC',
    accentColor: '#3182CE',
  },
};

export const Toast = ({
  status,
  variant,
  title,
  description,
  closable = true,
  onClose,
}: ToastProps) => {
  const config = statusConfig[status];
  const Icon = config.icon;
  const isSolid = variant === 'solid';
  const isLeftAccent = variant === 'left-accent';
  const isTopAccent = variant === 'top-accent';

  const backgroundColor = isSolid ? config.solidBg : config.subtleBg;
  const textColor = isSolid ? '#FFF' : '#282635';
  const iconColor = isSolid ? '#FFF' : config.accentColor;

  return (
    <Box
      position="relative"
      display="flex"
      alignItems="flex-start"
      gap="12px"
      padding={description ? '12px 16px' : '12px 16px'}
      borderRadius="6px"
      background={backgroundColor}
      width="356px"
      minHeight={description ? '72px' : '48px'}
    >
      {isLeftAccent && (
        <Box
          position="absolute"
          left="0"
          top="0"
          width="4px"
          height="100%"
          background={config.accentColor}
          borderRadius="6px 0 0 6px"
        />
      )}

      {isTopAccent && (
        <Box
          position="absolute"
          left="0"
          top="0"
          width="100%"
          height="4px"
          background={config.accentColor}
          borderRadius="6px 6px 0 0"
        />
      )}

      <Flex
        width="20px"
        height="24px"
        padding="2px 0"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        flexShrink={0}
      >
        <Icon size={20} color={iconColor} />
      </Flex>

      <Flex
        flex="1"
        flexDirection="column"
        alignItems="flex-start"
        gap={description ? '0px' : undefined}
      >
        <Box
          color={textColor}
          fontFamily="Raleway"
          fontSize="16px"
          fontWeight="800"
          lineHeight="120%"
        >
          {title}
        </Box>

        {description && (
          <Box
            color={textColor}
            fontFamily="DM Sans"
            fontSize="16px"
            fontWeight="400"
            lineHeight="150%"
          >
            {description}
          </Box>
        )}
      </Flex>

      {closable && (
        <IconButton
          aria-label="Close"
          icon={<RiCloseLine size={16} />}
          size="sm"
          variant="ghost"
          minWidth="24px"
          height="24px"
          padding="4px"
          borderRadius="6px"
          color={isSolid ? '#FFF' : '#111111'}
          _hover={{
            background: isSolid
              ? 'rgba(255, 255, 255, 0.1)'
              : 'rgba(0, 0, 0, 0.05)',
          }}
          onClick={onClose}
        />
      )}
    </Box>
  );
};
