import type { Meta, StoryObj } from '@storybook/react'
import { Message } from '../components/message'
import { Box, VStack, HStack, Text } from '@chakra-ui/react'

const meta: Meta<typeof Message> = {
  title: 'Components/Message',
  component: Message,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['success', 'warning', 'error', 'info'],
      description: 'The status type of the message',
    },
    variant: {
      control: 'select',
      options: ['solid', 'subtle', 'left-accent', 'top-accent'],
      description: 'The visual variant of the message',
    },
    title: {
      control: 'text',
      description: 'The title text of the message',
    },
    description: {
      control: 'text',
      description: 'Optional description text',
    },
    closable: {
      control: 'boolean',
      description: 'Whether the message can be closed',
    },
  },
}

export default meta
type Story = StoryObj<typeof Message>

export const Success: Story = {
  args: {
    status: 'success',
    variant: 'subtle',
    title: 'Title',
    description: 'Something happened.',
    closable: true,
  },
}

export const Warning: Story = {
  args: {
    status: 'warning',
    variant: 'subtle',
    title: 'Title',
    description: 'Something happened.',
    closable: true,
  },
}

export const Error: Story = {
  args: {
    status: 'error',
    variant: 'subtle',
    title: 'Title',
    description: 'Something happened.',
    closable: true,
  },
}

export const Info: Story = {
  args: {
    status: 'info',
    variant: 'subtle',
    title: 'Title',
    description: 'Something happened.',
    closable: true,
  },
}

export const Solid: Story = {
  args: {
    status: 'success',
    variant: 'solid',
    title: 'Title',
    description: 'Something happened.',
    closable: true,
  },
}

export const Subtle: Story = {
  args: {
    status: 'success',
    variant: 'subtle',
    title: 'Title',
    description: 'Something happened.',
    closable: true,
  },
}

export const LeftAccent: Story = {
  args: {
    status: 'success',
    variant: 'left-accent',
    title: 'Title',
    description: 'Something happened.',
    closable: true,
  },
}

export const TopAccent: Story = {
  args: {
    status: 'success',
    variant: 'top-accent',
    title: 'Title',
    description: 'Something happened.',
    closable: true,
  },
}

export const WithoutDescription: Story = {
  args: {
    status: 'info',
    variant: 'subtle',
    title: 'Title',
    closable: true,
  },
}

export const NotClosable: Story = {
  args: {
    status: 'warning',
    variant: 'subtle',
    title: 'Title',
    description: 'Something happened.',
    closable: false,
  },
}

export const AllVariants: Story = {
  render: () => (
    <VStack spacing={8} align="stretch" maxW="800px">
      <Box>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>Success Status</Text>
        <VStack spacing={3} align="stretch">
          <Message status="success" variant="solid" title="Title" description="Something happened." closable />
          <Message status="success" variant="subtle" title="Title" description="Something happened." closable />
          <Message status="success" variant="left-accent" title="Title" description="Something happened." closable />
          <Message status="success" variant="top-accent" title="Title" description="Something happened." closable />
        </VStack>
      </Box>

      <Box>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>Warning Status</Text>
        <VStack spacing={3} align="stretch">
          <Message status="warning" variant="solid" title="Title" description="Something happened." closable />
          <Message status="warning" variant="subtle" title="Title" description="Something happened." closable />
          <Message status="warning" variant="left-accent" title="Title" description="Something happened." closable />
          <Message status="warning" variant="top-accent" title="Title" description="Something happened." closable />
        </VStack>
      </Box>

      <Box>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>Error Status</Text>
        <VStack spacing={3} align="stretch">
          <Message status="error" variant="solid" title="Title" description="Something happened." closable />
          <Message status="error" variant="subtle" title="Title" description="Something happened." closable />
          <Message status="error" variant="left-accent" title="Title" description="Something happened." closable />
          <Message status="error" variant="top-accent" title="Title" description="Something happened." closable />
        </VStack>
      </Box>

      <Box>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>Info Status</Text>
        <VStack spacing={3} align="stretch">
          <Message status="info" variant="solid" title="Title" description="Something happened." closable />
          <Message status="info" variant="subtle" title="Title" description="Something happened." closable />
          <Message status="info" variant="left-accent" title="Title" description="Something happened." closable />
          <Message status="info" variant="top-accent" title="Title" description="Something happened." closable />
        </VStack>
      </Box>

      <Box>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>Without Description</Text>
        <VStack spacing={3} align="stretch">
          <Message status="success" variant="solid" title="Title" closable />
          <Message status="warning" variant="subtle" title="Title" closable />
          <Message status="error" variant="left-accent" title="Title" closable />
          <Message status="info" variant="top-accent" title="Title" closable />
        </VStack>
      </Box>

      <Box>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>Not Closable</Text>
        <VStack spacing={3} align="stretch">
          <Message status="success" variant="solid" title="Title" description="Something happened." />
          <Message status="warning" variant="subtle" title="Title" description="Something happened." />
          <Message status="error" variant="left-accent" title="Title" />
          <Message status="info" variant="top-accent" title="Title" />
        </VStack>
      </Box>
    </VStack>
  ),
}

export const ResponsiveLayout: Story = {
  render: () => (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb={4}>Responsive Test - Resize Your Browser</Text>
      <VStack spacing={3} align="stretch">
        <Message 
          status="success" 
          variant="subtle" 
          title="Success Message" 
          description="This message component is fully responsive and will adapt to different screen sizes." 
          closable 
        />
        <Message 
          status="warning" 
          variant="left-accent" 
          title="Warning" 
          description="The text will wrap naturally on smaller screens while maintaining proper spacing and alignment." 
          closable 
        />
        <Message 
          status="info" 
          variant="solid" 
          title="Information" 
          description="All elements use flexbox for proper alignment across all screen sizes." 
          closable 
        />
      </VStack>
    </Box>
  ),
}
