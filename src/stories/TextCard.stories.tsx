import type { Meta, StoryObj } from "@storybook/react";
import { TextCard } from "../components/text-card";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";

const meta = {
  title: "Components/TextCard",
  component: TextCard,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "large"],
      description: "Size of the card",
    },
    background: {
      control: "select",
      options: ["dark", "light", "accent"],
      description: "Background color variant",
    },
    textAlign: {
      control: "select",
      options: ["left", "center"],
      description: "Text alignment",
    },
    showIcon: {
      control: "boolean",
      description: "Show or hide the icon",
    },
  },
} satisfies Meta<typeof TextCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "large",
    background: "light",
    textAlign: "center",
    showIcon: true,
    icon: (
      <SunIcon
        w="100%"
        h="100%"
        borderRadius="8px"
        border="3px solid"
        padding="8px"
      />
    ),
    title: {
      children: "Durable, premium materials",
    },
    description: {
      children: "Description for free shipping & returns",
    },
    cta: {
      children: "Read More",
      href: "#",
    },
  },
};

export const LargeDarkCentered: Story = {
  args: {
    size: "large",
    background: "dark",
    textAlign: "center",
    showIcon: true,
    title: {
      children: "Durable, premium materials",
    },
    description: {
      children: "Description for free shipping & returns",
    },
    cta: {
      children: "Read More",
      href: "#",
    },
  },
};

export const LargeLightCentered: Story = {
  args: {
    size: "large",
    background: "light",
    textAlign: "center",
    showIcon: true,
    title: {
      children: "Durable, premium materials",
    },
    description: {
      children: "Description for free shipping & returns",
    },
    cta: {
      children: "Read More",
      href: "#",
    },
  },
};

export const LargeAccentCentered: Story = {
  args: {
    size: "large",
    background: "accent",
    textAlign: "center",
    showIcon: true,
    title: {
      children: "Durable, premium materials",
    },
    description: {
      children: "Description for free shipping & returns",
    },
    cta: {
      children: "Read More",
      href: "#",
    },
  },
};

export const LargeDarkLeft: Story = {
  args: {
    size: "large",
    background: "dark",
    textAlign: "left",
    showIcon: true,
    title: {
      children: "Durable, premium materials",
    },
    description: {
      children: "Description for free shipping & returns",
    },
    cta: {
      children: "Read More",
      href: "#",
    },
  },
};

export const LargeLightLeft: Story = {
  args: {
    size: "large",
    background: "light",
    textAlign: "left",
    showIcon: true,
    title: {
      children: "Durable, premium materials",
    },
    description: {
      children: "Description for free shipping & returns",
    },
    cta: {
      children: "Read More",
      href: "#",
    },
  },
};

export const SmallDarkCentered: Story = {
  args: {
    size: "small",
    background: "dark",
    textAlign: "center",
    showIcon: true,
    title: {
      children: "Durable, premium materials",
    },
    description: {
      children: "Description for free shipping & returns",
    },
    cta: {
      children: "Read More",
      href: "#",
    },
  },
};

export const SmallLightCentered: Story = {
  args: {
    size: "small",
    background: "light",
    textAlign: "center",
    showIcon: true,
    title: {
      children: "Durable, premium materials",
    },
    description: {
      children: "Description for free shipping & returns",
    },
    cta: {
      children: "Read More",
      href: "#",
    },
  },
};

export const SmallDarkLeft: Story = {
  args: {
    size: "small",
    background: "dark",
    textAlign: "left",
    showIcon: true,
    title: {
      children: "Durable, premium materials",
    },
    description: {
      children: "Description for free shipping & returns",
    },
    cta: {
      children: "Read More",
      href: "#",
    },
  },
};

export const SmallLightLeft: Story = {
  args: {
    size: "small",
    background: "light",
    textAlign: "left",
    showIcon: true,
    title: {
      children: "Durable, premium materials",
    },
    description: {
      children: "Description for free shipping & returns",
    },
    cta: {
      children: "Read More",
      href: "#",
    },
  },
};

export const WithoutIcon: Story = {
  args: {
    size: "large",
    background: "light",
    textAlign: "center",
    showIcon: false,
    title: {
      children: "Durable, premium materials",
    },
    description: {
      children: "Description for free shipping & returns",
    },
    cta: {
      children: "Read More",
      href: "#",
    },
  },
};

export const WithoutCta: Story = {
  args: {
    size: "large",
    background: "light",
    textAlign: "center",
    showIcon: true,
    title: {
      children: "Durable, premium materials",
    },
    description: {
      children: "Description for free shipping & returns",
    },
  },
};

export const CustomContent: Story = {
  args: {
    size: "large",
    background: "accent",
    textAlign: "center",
    showIcon: true,
    title: {
      children: "Premium Quality Materials",
      fontWeight: "black",
    },
    description: {
      children:
        "We source only the finest materials for our products, ensuring durability and style.",
      color: "shading.700",
    },
    cta: {
      children: "Learn More →",
      href: "#learn",
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <SimpleGrid columns={[1, 2, 3]} spacing={6} p={6}>
      <Box>
        <TextCard
          size="large"
          background="dark"
          textAlign="center"
          showIcon={true}
          title={{ children: "Durable, premium materials" }}
          description={{ children: "Description for free shipping & returns" }}
          cta={{ children: "Read More", href: "#" }}
        />
      </Box>
      <Box>
        <TextCard
          size="large"
          background="dark"
          textAlign="center"
          showIcon={false}
          title={{ children: "Durable, premium materials" }}
          description={{ children: "Description for free shipping & returns" }}
          cta={{ children: "Read More", href: "#" }}
        />
      </Box>
      <Box>
        <TextCard
          size="large"
          background="light"
          textAlign="center"
          showIcon={true}
          title={{ children: "Durable, premium materials" }}
          description={{ children: "Description for free shipping & returns" }}
          cta={{ children: "Read More", href: "#" }}
        />
      </Box>
      <Box>
        <TextCard
          size="large"
          background="light"
          textAlign="center"
          showIcon={false}
          title={{ children: "Durable, premium materials" }}
          description={{ children: "Description for free shipping & returns" }}
          cta={{ children: "Read More", href: "#" }}
        />
      </Box>
      <Box>
        <TextCard
          size="large"
          background="accent"
          textAlign="center"
          showIcon={true}
          title={{ children: "Durable, premium materials" }}
          description={{ children: "Description for free shipping & returns" }}
          cta={{ children: "Read More", href: "#" }}
        />
      </Box>
      <Box>
        <TextCard
          size="large"
          background="accent"
          textAlign="center"
          showIcon={false}
          title={{ children: "Durable, premium materials" }}
          description={{ children: "Description for free shipping & returns" }}
          cta={{ children: "Read More", href: "#" }}
        />
      </Box>
      <Box>
        <TextCard
          size="small"
          background="dark"
          textAlign="center"
          showIcon={true}
          title={{ children: "Durable, premium materials" }}
          description={{ children: "Description for free shipping & returns" }}
          cta={{ children: "Read More", href: "#" }}
        />
      </Box>
      <Box>
        <TextCard
          size="small"
          background="dark"
          textAlign="center"
          showIcon={false}
          title={{ children: "Durable, premium materials" }}
          description={{ children: "Description for free shipping & returns" }}
          cta={{ children: "Read More", href: "#" }}
        />
      </Box>
      <Box>
        <TextCard
          size="small"
          background="light"
          textAlign="center"
          showIcon={true}
          title={{ children: "Durable, premium materials" }}
          description={{ children: "Description for free shipping & returns" }}
          cta={{ children: "Read More", href: "#" }}
        />
      </Box>
      <Box>
        <TextCard
          size="small"
          background="light"
          textAlign="center"
          showIcon={false}
          title={{ children: "Durable, premium materials" }}
          description={{ children: "Description for free shipping & returns" }}
          cta={{ children: "Read More", href: "#" }}
        />
      </Box>
      <Box>
        <TextCard
          size="small"
          background="accent"
          textAlign="center"
          showIcon={true}
          title={{ children: "Durable, premium materials" }}
          description={{ children: "Description for free shipping & returns" }}
          cta={{ children: "Read More", href: "#" }}
        />
      </Box>
      <Box>
        <TextCard
          size="small"
          background="accent"
          textAlign="center"
          showIcon={false}
          title={{ children: "Durable, premium materials" }}
          description={{ children: "Description for free shipping & returns" }}
          cta={{ children: "Read More", href: "#" }}
        />
      </Box>
      <Box>
        <TextCard
          size="large"
          background="dark"
          textAlign="left"
          showIcon={true}
          title={{ children: "Durable, premium materials" }}
          description={{ children: "Description for free shipping & returns" }}
          cta={{ children: "Read More", href: "#" }}
        />
      </Box>
      <Box>
        <TextCard
          size="large"
          background="dark"
          textAlign="left"
          showIcon={false}
          title={{ children: "Durable, premium materials" }}
          description={{ children: "Description for free shipping & returns" }}
          cta={{ children: "Read More", href: "#" }}
        />
      </Box>
      <Box>
        <TextCard
          size="large"
          background="light"
          textAlign="left"
          showIcon={true}
          title={{ children: "Durable, premium materials" }}
          description={{ children: "Description for free shipping & returns" }}
          cta={{ children: "Read More", href: "#" }}
        />
      </Box>
      <Box>
        <TextCard
          size="large"
          background="light"
          textAlign="left"
          showIcon={false}
          title={{ children: "Durable, premium materials" }}
          description={{ children: "Description for free shipping & returns" }}
          cta={{ children: "Read More", href: "#" }}
        />
      </Box>
      <Box>
        <TextCard
          size="large"
          background="accent"
          textAlign="left"
          showIcon={true}
          title={{ children: "Durable, premium materials" }}
          description={{ children: "Description for free shipping & returns" }}
          cta={{ children: "Read More", href: "#" }}
        />
      </Box>
      <Box>
        <TextCard
          size="large"
          background="accent"
          textAlign="left"
          showIcon={false}
          title={{ children: "Durable, premium materials" }}
          description={{ children: "Description for free shipping & returns" }}
          cta={{ children: "Read More", href: "#" }}
        />
      </Box>
      <Box>
        <TextCard
          size="small"
          background="dark"
          textAlign="left"
          showIcon={true}
          title={{ children: "Durable, premium materials" }}
          description={{ children: "Description for free shipping & returns" }}
          cta={{ children: "Read More", href: "#" }}
        />
      </Box>
      <Box>
        <TextCard
          size="small"
          background="dark"
          textAlign="left"
          showIcon={false}
          title={{ children: "Durable, premium materials" }}
          description={{ children: "Description for free shipping & returns" }}
          cta={{ children: "Read More", href: "#" }}
        />
      </Box>
      <Box>
        <TextCard
          size="small"
          background="light"
          textAlign="left"
          showIcon={true}
          title={{ children: "Durable, premium materials" }}
          description={{ children: "Description for free shipping & returns" }}
          cta={{ children: "Read More", href: "#" }}
        />
      </Box>
      <Box>
        <TextCard
          size="small"
          background="light"
          textAlign="left"
          showIcon={false}
          title={{ children: "Durable, premium materials" }}
          description={{ children: "Description for free shipping & returns" }}
          cta={{ children: "Read More", href: "#" }}
        />
      </Box>
      <Box>
        <TextCard
          size="small"
          background="accent"
          textAlign="left"
          showIcon={true}
          title={{ children: "Durable, premium materials" }}
          description={{ children: "Description for free shipping & returns" }}
          cta={{ children: "Read More", href: "#" }}
        />
      </Box>
      <Box>
        <TextCard
          size="small"
          background="accent"
          textAlign="left"
          showIcon={false}
          title={{ children: "Durable, premium materials" }}
          description={{ children: "Description for free shipping & returns" }}
          cta={{ children: "Read More", href: "#" }}
        />
      </Box>
    </SimpleGrid>
  ),
};
