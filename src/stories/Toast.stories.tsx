import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toast } from '../components/toast';
import { Box, Flex, Text } from '@chakra-ui/react';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      options: ['success', 'warning', 'error', 'info'],
      control: 'select',
      description: 'The status type of the toast',
    },
    variant: {
      options: ['solid', 'subtle', 'left-accent', 'top-accent'],
      control: 'select',
      description: 'The visual variant of the toast',
    },
    title: {
      control: 'text',
      description: 'The title text',
    },
    description: {
      control: 'text',
      description: 'Optional description text',
    },
    closable: {
      control: 'boolean',
      description: 'Whether the toast can be closed',
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: 'success',
    variant: 'solid',
    title: 'Title',
    description: 'Something happened.',
    closable: true,
  },
};

export const SuccessSolid: Story = {
  args: {
    status: 'success',
    variant: 'solid',
    title: 'Title',
    description: 'Something happened.',
    closable: true,
  },
};

export const WarningSubtle: Story = {
  args: {
    status: 'warning',
    variant: 'subtle',
    title: 'Title',
    description: 'Something happened.',
    closable: true,
  },
};

export const ErrorLeftAccent: Story = {
  args: {
    status: 'error',
    variant: 'left-accent',
    title: 'Title',
    description: 'Something happened.',
    closable: true,
  },
};

export const InfoTopAccent: Story = {
  args: {
    status: 'info',
    variant: 'top-accent',
    title: 'Title',
    description: 'Something happened.',
    closable: true,
  },
};

export const WithoutDescription: Story = {
  args: {
    status: 'success',
    variant: 'subtle',
    title: 'Title',
    closable: true,
  },
};

export const NotClosable: Story = {
  args: {
    status: 'info',
    variant: 'subtle',
    title: 'Title',
    description: 'Something happened.',
    closable: false,
  },
};

export const AllVariants: Story = {
  render: () => (
    <Flex direction="column" gap="48px" padding="24px">
      <Box>
        <Text fontSize="24px" fontWeight="bold" marginBottom="16px">
          Closable: True, Description: True
        </Text>
        <Flex direction="column" gap="24px">
          <Flex gap="16px" flexWrap="wrap">
            <Box>
              <Text fontSize="12px" color="#9747FF" marginBottom="8px">
                Success
              </Text>
              <Flex direction="column" gap="12px">
                <Box>
                  <Text fontSize="10px" color="#9747FF" marginBottom="4px">
                    Solid
                  </Text>
                  <Toast
                    status="success"
                    variant="solid"
                    title="Title"
                    description="Something happened."
                    closable={true}
                  />
                </Box>
                <Box>
                  <Text fontSize="10px" color="#9747FF" marginBottom="4px">
                    Subtle
                  </Text>
                  <Toast
                    status="success"
                    variant="subtle"
                    title="Title"
                    description="Something happened."
                    closable={true}
                  />
                </Box>
                <Box>
                  <Text fontSize="10px" color="#9747FF" marginBottom="4px">
                    Left-accent
                  </Text>
                  <Toast
                    status="success"
                    variant="left-accent"
                    title="Title"
                    description="Something happened."
                    closable={true}
                  />
                </Box>
                <Box>
                  <Text fontSize="10px" color="#9747FF" marginBottom="4px">
                    Top-accent
                  </Text>
                  <Toast
                    status="success"
                    variant="top-accent"
                    title="Title"
                    description="Something happened."
                    closable={true}
                  />
                </Box>
              </Flex>
            </Box>

            <Box>
              <Text fontSize="12px" color="#9747FF" marginBottom="8px">
                Warning
              </Text>
              <Flex direction="column" gap="12px">
                <Box>
                  <Text fontSize="10px" color="#9747FF" marginBottom="4px">
                    Solid
                  </Text>
                  <Toast
                    status="warning"
                    variant="solid"
                    title="Title"
                    description="Something happened."
                    closable={true}
                  />
                </Box>
                <Box>
                  <Text fontSize="10px" color="#9747FF" marginBottom="4px">
                    Subtle
                  </Text>
                  <Toast
                    status="warning"
                    variant="subtle"
                    title="Title"
                    description="Something happened."
                    closable={true}
                  />
                </Box>
                <Box>
                  <Text fontSize="10px" color="#9747FF" marginBottom="4px">
                    Left-accent
                  </Text>
                  <Toast
                    status="warning"
                    variant="left-accent"
                    title="Title"
                    description="Something happened."
                    closable={true}
                  />
                </Box>
                <Box>
                  <Text fontSize="10px" color="#9747FF" marginBottom="4px">
                    Top-accent
                  </Text>
                  <Toast
                    status="warning"
                    variant="top-accent"
                    title="Title"
                    description="Something happened."
                    closable={true}
                  />
                </Box>
              </Flex>
            </Box>

            <Box>
              <Text fontSize="12px" color="#9747FF" marginBottom="8px">
                Error
              </Text>
              <Flex direction="column" gap="12px">
                <Box>
                  <Text fontSize="10px" color="#9747FF" marginBottom="4px">
                    Solid
                  </Text>
                  <Toast
                    status="error"
                    variant="solid"
                    title="Title"
                    description="Something happened."
                    closable={true}
                  />
                </Box>
                <Box>
                  <Text fontSize="10px" color="#9747FF" marginBottom="4px">
                    Subtle
                  </Text>
                  <Toast
                    status="error"
                    variant="subtle"
                    title="Title"
                    description="Something happened."
                    closable={true}
                  />
                </Box>
                <Box>
                  <Text fontSize="10px" color="#9747FF" marginBottom="4px">
                    Left-accent
                  </Text>
                  <Toast
                    status="error"
                    variant="left-accent"
                    title="Title"
                    description="Something happened."
                    closable={true}
                  />
                </Box>
                <Box>
                  <Text fontSize="10px" color="#9747FF" marginBottom="4px">
                    Top-accent
                  </Text>
                  <Toast
                    status="error"
                    variant="top-accent"
                    title="Title"
                    description="Something happened."
                    closable={true}
                  />
                </Box>
              </Flex>
            </Box>

            <Box>
              <Text fontSize="12px" color="#9747FF" marginBottom="8px">
                Info
              </Text>
              <Flex direction="column" gap="12px">
                <Box>
                  <Text fontSize="10px" color="#9747FF" marginBottom="4px">
                    Solid
                  </Text>
                  <Toast
                    status="info"
                    variant="solid"
                    title="Title"
                    description="Something happened."
                    closable={true}
                  />
                </Box>
                <Box>
                  <Text fontSize="10px" color="#9747FF" marginBottom="4px">
                    Subtle
                  </Text>
                  <Toast
                    status="info"
                    variant="subtle"
                    title="Title"
                    description="Something happened."
                    closable={true}
                  />
                </Box>
                <Box>
                  <Text fontSize="10px" color="#9747FF" marginBottom="4px">
                    Left-accent
                  </Text>
                  <Toast
                    status="info"
                    variant="left-accent"
                    title="Title"
                    description="Something happened."
                    closable={true}
                  />
                </Box>
                <Box>
                  <Text fontSize="10px" color="#9747FF" marginBottom="4px">
                    Top-accent
                  </Text>
                  <Toast
                    status="info"
                    variant="top-accent"
                    title="Title"
                    description="Something happened."
                    closable={true}
                  />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Box>

      <Box>
        <Text fontSize="24px" fontWeight="bold" marginBottom="16px">
          Closable: False, Description: True
        </Text>
        <Flex gap="16px" flexWrap="wrap">
          <Toast
            status="success"
            variant="solid"
            title="Title"
            description="Something happened."
            closable={false}
          />
          <Toast
            status="warning"
            variant="subtle"
            title="Title"
            description="Something happened."
            closable={false}
          />
          <Toast
            status="error"
            variant="left-accent"
            title="Title"
            description="Something happened."
            closable={false}
          />
          <Toast
            status="info"
            variant="top-accent"
            title="Title"
            description="Something happened."
            closable={false}
          />
        </Flex>
      </Box>

      <Box>
        <Text fontSize="24px" fontWeight="bold" marginBottom="16px">
          Closable: True, Description: False
        </Text>
        <Flex gap="16px" flexWrap="wrap">
          <Toast status="success" variant="solid" title="Title" closable={true} />
          <Toast status="warning" variant="subtle" title="Title" closable={true} />
          <Toast
            status="error"
            variant="left-accent"
            title="Title"
            closable={true}
          />
          <Toast
            status="info"
            variant="top-accent"
            title="Title"
            closable={true}
          />
        </Flex>
      </Box>

      <Box>
        <Text fontSize="24px" fontWeight="bold" marginBottom="16px">
          Closable: False, Description: False
        </Text>
        <Flex gap="16px" flexWrap="wrap">
          <Toast
            status="success"
            variant="solid"
            title="Title"
            closable={false}
          />
          <Toast
            status="warning"
            variant="subtle"
            title="Title"
            closable={false}
          />
          <Toast
            status="error"
            variant="left-accent"
            title="Title"
            closable={false}
          />
          <Toast
            status="info"
            variant="top-accent"
            title="Title"
            closable={false}
          />
        </Flex>
      </Box>
    </Flex>
  ),
};
