import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@durumim-ui/web';
import { Check, ArrowRight } from '@tamagui/lucide-icons';
import { XStack, YStack } from 'tamagui';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      description: 'The size of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    variant: {
      options: ['solid', 'outlined', 'ghost'],
      control: { type: 'radio' },
      description: 'The visual style of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'solid' },
      },
    },
    semanticColor: {
      options: ['success', 'danger', 'warning', 'info', undefined],
      control: { type: 'select' },
      description: 'Semantic color to apply to the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    iconPosition: {
      options: ['left', 'right'],
      control: { type: 'radio' },
      description: 'The position of the icon relative to the text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'The content of the button',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    onPress: {
      action: 'pressed',
      description: 'Function called when button is pressed',
      table: {
        type: { summary: 'function' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Button component that can be used to trigger actions, submit forms, and more.
It supports different sizes, variants, semantic colors, and can include icons.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Default button
export const Default: Story = {
  args: {
    children: 'Button',
    size: 'medium',
    variant: 'solid',
  },
};

// Size variations
export const Sizes: Story = {
  render: () => (
    <XStack space="$4">
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </XStack>
  ),
};

// Variant variations
export const Variants: Story = {
  render: () => (
    <XStack space="$4">
      <Button variant="solid">Solid</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="ghost">Ghost</Button>
    </XStack>
  ),
};

// Semantic colors
export const SemanticColors: Story = {
  render: () => (
    <XStack space="$4">
      <Button semanticColor="success">Success</Button>
      <Button semanticColor="danger">Danger</Button>
      <Button semanticColor="warning">Warning</Button>
      <Button semanticColor="info">Info</Button>
    </XStack>
  ),
};

// Semantic colors with variants
export const SemanticVariants: Story = {
  render: () => (
    <YStack space="$4">
      <XStack space="$4">
        <Button variant="solid" semanticColor="success">Success</Button>
        <Button variant="outlined" semanticColor="success">Success</Button>
        <Button variant="ghost" semanticColor="success">Success</Button>
      </XStack>
      <XStack space="$4">
        <Button variant="solid" semanticColor="danger">Danger</Button>
        <Button variant="outlined" semanticColor="danger">Danger</Button>
        <Button variant="ghost" semanticColor="danger">Danger</Button>
      </XStack>
    </YStack>
  ),
};

// Disabled state
export const Disabled: Story = {
  render: () => (
    <XStack space="$4">
      <Button disabled>Disabled</Button>
      <Button variant="outlined" disabled>Disabled</Button>
      <Button semanticColor="success" disabled>Disabled</Button>
    </XStack>
  ),
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <YStack space="$4">
      <XStack space="$4">
        <Button icon={<Check />} iconPosition="left">Icon Left</Button>
        <Button icon={<ArrowRight />} iconPosition="right">Icon Right</Button>
      </XStack>
      <XStack space="$4">
        <Button icon={<Check />} iconOnly />
        <Button variant="outlined" icon={<ArrowRight />} iconOnly />
        <Button semanticColor="info" icon={<Check />} iconOnly />
      </XStack>
    </YStack>
  ),
};

// Interactive example
export const Interactive: Story = {
  args: {
    children: 'Interactive Button',
    size: 'medium',
    variant: 'solid',
    semanticColor: undefined,
    disabled: false,
    icon: <Check />,
    iconPosition: 'left',
  },
};