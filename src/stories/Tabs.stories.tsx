import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from '@chakra-ui/react';

const meta = {
  title: 'Primitives/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LineVariant: Story = {
  render: () => (
    <Tabs variant="line">
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Text>Content for Tab 1</Text>
        </TabPanel>
        <TabPanel>
          <Text>Content for Tab 2</Text>
        </TabPanel>
        <TabPanel>
          <Text>Content for Tab 3</Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  ),
};

export const SoftRoundedVariant: Story = {
  render: () => (
    <Tabs variant="soft-rounded">
      <TabList>
        <Tab>Overview</Tab>
        <Tab>Details</Tab>
        <Tab>Reviews</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Text>Overview content goes here</Text>
        </TabPanel>
        <TabPanel>
          <Text>Details content goes here</Text>
        </TabPanel>
        <TabPanel>
          <Text>Reviews content goes here</Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  ),
};

export const SolidRoundedVariant: Story = {
  render: () => (
    <Tabs variant="solid-rounded">
      <TabList>
        <Tab>Home</Tab>
        <Tab>About</Tab>
        <Tab>Contact</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Text>Home page content</Text>
        </TabPanel>
        <TabPanel>
          <Text>About page content</Text>
        </TabPanel>
        <TabPanel>
          <Text>Contact page content</Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  ),
};

export const HighlightVariant: Story = {
  render: () => (
    <Tabs variant="highlight">
      <TabList>
        <Tab>Featured</Tab>
        <Tab>New</Tab>
        <Tab>Popular</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Text>Featured products</Text>
        </TabPanel>
        <TabPanel>
          <Text>New arrivals</Text>
        </TabPanel>
        <TabPanel>
          <Text>Popular items</Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  ),
};

export const DefaultTab: Story = {
  render: () => (
    <Tabs
      variant="line"
      defaultIndex={1}
    >
      <TabList>
        <Tab>First</Tab>
        <Tab>Second (Default)</Tab>
        <Tab>Third</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Text>First tab content</Text>
        </TabPanel>
        <TabPanel>
          <Text>Second tab is selected by default</Text>
        </TabPanel>
        <TabPanel>
          <Text>Third tab content</Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  ),
};

export const DisabledTab: Story = {
  render: () => (
    <Tabs variant="line">
      <TabList>
        <Tab>Enabled</Tab>
        <Tab isDisabled>Disabled</Tab>
        <Tab>Also Enabled</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Text>This tab is enabled</Text>
        </TabPanel>
        <TabPanel>
          <Text>This tab is disabled and cannot be selected</Text>
        </TabPanel>
        <TabPanel>
          <Text>This tab is also enabled</Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  ),
};
