import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  Flex,
  type ModalProps as ChakraModalProps,
} from '@chakra-ui/react';
import type { ReactNode } from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  size?: ChakraModalProps['size'];
  showFooter?: boolean;
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  primaryButtonLabel = 'Checkout',
  secondaryButtonLabel = 'View Cart',
  onPrimaryClick,
  onSecondaryClick,
  size = 'md',
  showFooter = true,
}: ModalProps) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} size={size} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          fontFamily="Raleway"
          fontSize="16px"
          fontWeight={800}
          lineHeight="120%"
          textAlign="center"
          color="shading.900"
          padding="8px 12px"
          borderBottom="1px solid"
          borderColor="shading.200"
        >
          {title}
        </ModalHeader>
        <ModalCloseButton
          top="8px"
          right="12px"
          fontSize="24px"
        />
        <ModalBody
          padding="16px"
          maxHeight="60vh"
          overflowY="auto"
          fontFamily="DM Sans"
        >
          {children}
        </ModalBody>
        {showFooter && (
          <ModalFooter
            padding="16px 24px"
            gap="8px"
            boxShadow="0 -2px 4px 0 rgba(0, 0, 0, 0.10)"
            borderTop="1px solid"
            borderColor="shading.200"
          >
            <Flex
              width="100%"
              justify="flex-end"
              gap="8px"
              direction={{ base: 'column', sm: 'row' }}
            >
              {secondaryButtonLabel && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={onSecondaryClick || onClose}
                  fontFamily="Raleway"
                  fontWeight={800}
                  fontSize="16px"
                  borderColor="primary.500"
                  color="primary.500"
                  _hover={{
                    bg: 'primary.50',
                  }}
                >
                  {secondaryButtonLabel}
                </Button>
              )}
              {primaryButtonLabel && (
                <Button
                  variant="solid"
                  size="lg"
                  onClick={onPrimaryClick || onClose}
                  fontFamily="Raleway"
                  fontWeight={800}
                  fontSize="18px"
                  bg="primary.500"
                  color="white"
                  _hover={{
                    bg: 'primary.600',
                  }}
                >
                  {primaryButtonLabel}
                </Button>
              )}
            </Flex>
          </ModalFooter>
        )}
      </ModalContent>
    </ChakraModal>
  );
};
