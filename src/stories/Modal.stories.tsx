import type { Meta, StoryObj } from '@storybook/react-vite';
import { BasicModal } from '../components/modal';
import { useDisclosure, Button, Box, Text, VStack } from '@chakra-ui/react';

const meta = {
  title: 'Components/Modal',
  component: BasicModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Modal header title',
    },
    primaryButtonLabel: {
      control: 'text',
      description: 'Label for primary action button',
    },
    secondaryButtonLabel: {
      control: 'text',
      description: 'Label for secondary action button',
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', 'full'],
      control: 'select',
      description: 'Modal size',
    },
    showFooter: {
      control: 'boolean',
      description: 'Whether to show the footer with action buttons',
    },
  },
} satisfies Meta<typeof BasicModal>;

export default meta;
type Story = StoryObj<typeof meta>;

const ModalWrapper = (args: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <BasicModal {...args} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export const Default: Story = {
  args: {
    title: 'Modal Title',
    primaryButtonLabel: 'Checkout',
    secondaryButtonLabel: 'View Cart',
    children: (
      <Text fontFamily="DM Sans" fontSize="14px">
        This is the modal content. You can put any content here.
      </Text>
    ),
    size: 'md',
    showFooter: true,
  },
  render: (args) => <ModalWrapper {...args} />,
};

export const WithContent: Story = {
  args: {
    title: 'Cart Summary (2)',
    primaryButtonLabel: 'Checkout',
    secondaryButtonLabel: 'View Cart',
    children: (
      <VStack spacing={4} align="stretch">
        <Box>
          <Text fontFamily="DM Sans" fontSize="14px" fontWeight="bold">
            Product 1
          </Text>
          <Text fontFamily="DM Sans" fontSize="12px" color="shading.400">
            Quantity: 1 - $200
          </Text>
        </Box>
        <Box>
          <Text fontFamily="DM Sans" fontSize="14px" fontWeight="bold">
            Product 2
          </Text>
          <Text fontFamily="DM Sans" fontSize="12px" color="shading.400">
            Quantity: 1 - $129
          </Text>
        </Box>
        <Box borderTop="1px solid" borderColor="shading.200" pt={4}>
          <Text fontFamily="Raleway" fontSize="14px" fontWeight={800}>
            Estimated Total: $329
          </Text>
        </Box>
      </VStack>
    ),
    size: 'md',
    showFooter: true,
  },
  render: (args) => <ModalWrapper {...args} />,
};

export const SingleButton: Story = {
  args: {
    title: 'Confirmation',
    primaryButtonLabel: 'Confirm',
    secondaryButtonLabel: undefined,
    children: (
      <Text fontFamily="DM Sans" fontSize="14px">
        Are you sure you want to proceed with this action?
      </Text>
    ),
    size: 'md',
    showFooter: true,
  },
  render: (args) => <ModalWrapper {...args} />,
};

export const LargeContent: Story = {
  args: {
    title: 'Terms and Conditions',
    primaryButtonLabel: 'Accept',
    secondaryButtonLabel: 'Decline',
    children: (
      <VStack spacing={3} align="stretch">
        {Array.from({ length: 20 }).map((_, i) => (
          <Text key={i} fontFamily="DM Sans" fontSize="14px">
            {i + 1}. This is a long paragraph of text that demonstrates scrollable content
            within the modal. The modal body will become scrollable when the content
            exceeds the maximum height.
          </Text>
        ))}
      </VStack>
    ),
    size: 'lg',
    showFooter: true,
  },
  render: (args) => <ModalWrapper {...args} />,
};

export const NoFooter: Story = {
  args: {
    title: 'Information',
    children: (
      <Text fontFamily="DM Sans" fontSize="14px">
        This modal has no footer buttons. You can close it using the X button.
      </Text>
    ),
    size: 'md',
    showFooter: false,
  },
  render: (args) => <ModalWrapper {...args} />,
};

export const AllSizes: Story = {
  render: () => {
    const sizes = ['sm', 'md', 'lg', 'xl'] as const;
    
    return (
      <Box padding="24px">
        <Text fontSize="24px" fontWeight="bold" marginBottom="16px">
          Modal Sizes
        </Text>
        <VStack spacing={4} align="stretch">
          {sizes.map((size) => {
            const SizeDemo = () => {
              const { isOpen, onOpen, onClose } = useDisclosure();
              return (
                <Box>
                  <Button onClick={onOpen} width="200px">
                    Open {size.toUpperCase()} Modal
                  </Button>
                  <BasicModal
                    isOpen={isOpen}
                    onClose={onClose}
                    title={`${size.toUpperCase()} Modal`}
                    size={size}
                    primaryButtonLabel="Checkout"
                    secondaryButtonLabel="View Cart"
                  >
                    <Text fontFamily="DM Sans" fontSize="14px">
                      This is a {size} sized modal with example content.
                    </Text>
                  </BasicModal>
                </Box>
              );
            };
            return <SizeDemo key={size} />;
          })}
        </VStack>
      </Box>
    );
  },
};
