import type { Meta, StoryObj } from '@storybook/react-vite';
import { Section, SectionHeader } from '../components/section';
import { Text, VStack } from '@chakra-ui/react';

const meta = {
  title: 'Components/Section',
  component: Section,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Section>
      <SectionHeader title="Section Title" />
      <Text>
        This is the section content. You can add any content here including
        text, components, or other elements.
      </Text>
    </Section>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Section>
      <SectionHeader
        title="Features"
        boxProps={{ mb: 4 }}
      />
      <VStack
        align="flex-start"
        spacing={3}
      >
        <Text>Feature 1: Responsive design</Text>
        <Text>Feature 2: Easy to customize</Text>
        <Text>Feature 3: Built with Chakra UI</Text>
      </VStack>
    </Section>
  ),
};

export const WithRequiredMark: Story = {
  render: () => (
    <Section>
      <SectionHeader
        title="Personal Information"
        requiredMarkText="* Required fields"
      />
      <VStack
        align="flex-start"
        spacing={4}
      >
        <Text>Name field</Text>
        <Text>Email field</Text>
        <Text>Phone field</Text>
      </VStack>
    </Section>
  ),
};

export const MultipleItems: Story = {
  render: () => (
    <VStack
      align="stretch"
      spacing={0}
    >
      <Section>
        <SectionHeader title="Section One" />
        <Text>Content for section one</Text>
      </Section>
      <Section>
        <SectionHeader title="Section Two" />
        <Text>Content for section two</Text>
      </Section>
      <Section>
        <SectionHeader title="Section Three" />
        <Text>Content for section three</Text>
      </Section>
    </VStack>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <Section
      boxProps={{
        bg: 'blue.50',
        borderRadius: 'md',
        borderLeft: '4px solid',
        borderColor: 'blue.500',
      }}
    >
      <SectionHeader
        title="Important Notice"
        textProps={{ color: 'blue.700' }}
      />
      <Text color="blue.600">
        This is important content with custom styling.
      </Text>
    </Section>
  ),
};
