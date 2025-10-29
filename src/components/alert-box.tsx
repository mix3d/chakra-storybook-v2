import {
  Alert,
  AlertDescription,
  type AlertDescriptionProps,
  AlertIcon,
  type AlertProps,
  AlertTitle,
  Box,
  CloseButton,
  type CloseButtonProps,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'

interface AlertBoxProps {
  alertDescriptionProps?: AlertDescriptionProps
  closeButtonProps?: CloseButtonProps
  description?: string | JSX.Element
  onClick?: () => void
  rootProps?: AlertProps
  title?: string
}

export const AlertBox = (props: AlertBoxProps) => {
  const {
    type alertDescriptionProps,
    type closeButtonProps,
    description,
    onClick,
    type rootProps,
    title,
  } = props

  const bgValue = useColorModeValue('info.100', 'info.700')
  const { isOpen: isVisible, onClose } = useDisclosure({ defaultIsOpen: true })

  return isVisible ? (
    <Alert status="info" bg={bgValue} {...rootProps}>
      <AlertIcon aria-hidden={'true'} />
      <Box>
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription
          textStyle={'Body-S'}
          color={'text'}
          onClick={() => onClick?.()}
          {...alertDescriptionProps}
        >
          {description}
        </AlertDescription>
      </Box>
      <CloseButton
        alignSelf="center"
        position="relative"
        fontSize={'11.25px'}
        onClick={onClose}
        {...closeButtonProps}
      />
    </Alert>
  ) : null
}
