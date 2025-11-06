import { Box, CloseButton, Flex } from '@chakra-ui/react'
import { type ReactNode } from 'react'

export type MessageStatus = 'success' | 'warning' | 'error' | 'info'
export type MessageVariant = 'solid' | 'subtle' | 'left-accent' | 'top-accent'

export interface MessageProps {
  status: MessageStatus
  variant?: MessageVariant
  title: string
  description?: string
  closable?: boolean
  onClose?: () => void
}

const statusConfig = {
  success: {
    solid: {
      bg: '#38A169',
      color: '#FFF',
      iconColor: '#FFF',
    },
    subtle: {
      bg: '#D9FADB',
      color: '#282635',
      iconColor: '#38A169',
    },
    accentColor: '#38A169',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 18.3337C5.39752 18.3337 1.66669 14.6028 1.66669 10.0003C1.66669 5.39783 5.39752 1.66699 10 1.66699C14.6025 1.66699 18.3334 5.39783 18.3334 10.0003C18.3334 14.6028 14.6025 18.3337 10 18.3337ZM9.16919 13.3337L15.0609 7.44116L13.8825 6.26283L9.16919 10.977L6.81169 8.61949L5.63335 9.79783L9.16919 13.3337Z" fill="currentColor"/>
      </svg>
    ),
  },
  warning: {
    solid: {
      bg: '#DD6B20',
      color: '#FFF',
      iconColor: '#FFF',
    },
    subtle: {
      bg: '#FDEDD1',
      color: '#282635',
      iconColor: '#DD6B20',
    },
    accentColor: '#DD6B20',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.99999 18.3337C5.39749 18.3337 1.66666 14.6028 1.66666 10.0003C1.66666 5.39783 5.39749 1.66699 9.99999 1.66699C14.6025 1.66699 18.3333 5.39783 18.3333 10.0003C18.3333 14.6028 14.6025 18.3337 9.99999 18.3337ZM9.16666 12.5003V14.167H10.8333V12.5003H9.16666ZM9.16666 5.83366V10.8337H10.8333V5.83366H9.16666Z" fill="currentColor"/>
      </svg>
    ),
  },
  error: {
    solid: {
      bg: '#E53E3E',
      color: '#FFF',
      iconColor: '#FFF',
    },
    subtle: {
      bg: '#FDE5D8',
      color: '#282635',
      iconColor: '#E53E3E',
    },
    accentColor: '#E53E3E',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 18.3337C5.3975 18.3337 1.66666 14.6028 1.66666 10.0003C1.66666 5.39783 5.3975 1.66699 10 1.66699C14.6025 1.66699 18.3333 5.39783 18.3333 10.0003C18.3333 14.6028 14.6025 18.3337 10 18.3337ZM9.16666 12.5003V14.167H10.8333V12.5003H9.16666ZM9.16666 5.83366V10.8337H10.8333V5.83366H9.16666Z" fill="currentColor"/>
      </svg>
    ),
  },
  info: {
    solid: {
      bg: '#3182CE',
      color: '#FFF',
      iconColor: '#FFF',
    },
    subtle: {
      bg: '#D6F1FC',
      color: '#282635',
      iconColor: '#3182CE',
    },
    accentColor: '#3182CE',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.99999 18.3337C5.39749 18.3337 1.66666 14.6028 1.66666 10.0003C1.66666 5.39783 5.39749 1.66699 9.99999 1.66699C14.6025 1.66699 18.3333 5.39783 18.3333 10.0003C18.3333 14.6028 14.6025 18.3337 9.99999 18.3337ZM9.16666 9.16699V14.167H10.8333V9.16699H9.16666ZM9.16666 5.83366V7.50033H10.8333V5.83366H9.16666Z" fill="currentColor"/>
      </svg>
    ),
  },
}

export const Message = ({
  status,
  variant = 'subtle',
  title,
  description,
  closable = false,
  onClose,
}: MessageProps) => {
  const config = statusConfig[status]
  const isSolid = variant === 'solid'
  const styles = isSolid ? config.solid : config.subtle

  const hasAccent = variant === 'left-accent' || variant === 'top-accent'
  const accentBorder = hasAccent ? {
    ...(variant === 'left-accent' 
      ? { borderLeft: `4px solid ${config.accentColor}` } 
      : { borderTop: `4px solid ${config.accentColor}` })
  } : {}

  return (
    <Flex
      bg={styles.bg}
      color={styles.color}
      borderRadius="6px"
      p="12px 16px"
      gap="12px"
      alignItems={description ? 'flex-start' : 'center'}
      position="relative"
      maxW="100%"
      {...accentBorder}
    >
      <Box
        color={styles.iconColor}
        flexShrink={0}
        w="20px"
        h="20px"
        mt={description ? '2px' : 0}
      >
        {config.icon}
      </Box>

      <Box flex="1">
        <Box
          as="h3"
          fontFamily="Raleway"
          fontSize="16px"
          fontWeight="800"
          lineHeight="120%"
          mb={description ? '2px' : 0}
        >
          {title}
        </Box>
        {description && (
          <Box
            fontFamily="DM Sans"
            fontSize="16px"
            fontWeight="400"
            lineHeight="150%"
          >
            {description}
          </Box>
        )}
      </Box>

      {closable && (
        <CloseButton
          size="sm"
          color={styles.color}
          onClick={onClose}
          alignSelf="flex-start"
          flexShrink={0}
        />
      )}
    </Flex>
  )
}
