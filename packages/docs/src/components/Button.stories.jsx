import { Button } from '@durumim-ui/web';
import React from 'react';

import { Row, Section } from '../ui';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The Button component is highly customizable and can be configured through various properties to meet different interface needs.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      description: 'Defines the button size - small (compact interfaces), medium (default), large (high emphasis)',
    },
    variant: {
      options: ['solid', 'outlined', 'ghost'],
      control: { type: 'radio' },
      description: 'Controls the visual style - solid (primary actions), outlined (secondary actions), ghost (tertiary actions)',
    },
    semanticColor: {
      options: ['success', 'danger', 'warning', 'info', undefined],
      control: { type: 'select' },
      description: 'Applies contextual meaning through color - success (green), danger (red), warning (yellow), info (blue)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button, applying reduced opacity and preventing interactions',
    },
    icon: {
      control: 'boolean',
      description: 'Adds an icon to enhance the button label visually',
    },
    iconPosition: {
      options: ['left', 'right'],
      control: { type: 'radio' },
      description: 'Positions the icon either left (default) or right of the text',
    },
    iconOnly: {
      control: 'boolean',
      description: 'Creates a square button with only an icon and no text',
    },
    full: {
      control: 'boolean',
      description: 'Makes the button take up the full width of its container',
    },
  },
};

export default meta;

const headingStyle = {
  color: '#fff',
  marginBottom: '16px',
};

const getIconProps = (props) => {
  if (!props.icon) return {};
  
  return {
    icon: true,
    iconPosition: props.iconPosition || 'left',
    iconOnly: props.iconOnly || false,
  };
};

export const Default = {
  args: {
    children: 'Button',
    size: 'medium',
    variant: 'solid',
    icon: false,
    iconPosition: 'left',
    full: false,
  },
  render: (args) => (
    <Button {...args} {...getIconProps(args)}>
      {args.children}
    </Button>
  ),
};

export const AllVariations = {
  render: () => (
    <div style={{ padding: '20px', maxWidth: '800px' }}>
      <h2 style={headingStyle}>Button Variations</h2>
      
      <Section title="Sizes" titleStyle={headingStyle}>
        <Row>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </Row>
      </Section>
      
      <Section title="Variants" titleStyle={headingStyle}>
        <Row>
          <Button variant="solid">Solid</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="ghost">Ghost</Button>
        </Row>
      </Section>
      
      <Section title="Semantic Colors" titleStyle={headingStyle}>
        <Row>
          <Button semanticColor="success">Success</Button>
          <Button semanticColor="danger">Danger</Button>
          <Button semanticColor="warning">Warning</Button>
          <Button semanticColor="info">Info</Button>
        </Row>
      </Section>
      
      <Section title="Semantic Colors + Variants" titleStyle={headingStyle}>
        <div>
          <h4 style={{ ...headingStyle, marginBottom: '8px' }}>Success</h4>
          <Row>
            <Button variant="solid" semanticColor="success">Solid</Button>
            <Button variant="outlined" semanticColor="success">Outlined</Button>
            <Button variant="ghost" semanticColor="success">Ghost</Button>
          </Row>
        </div>
        
        <div>
          <h4 style={{ ...headingStyle, marginBottom: '8px' }}>Danger</h4>
          <Row>
            <Button variant="solid" semanticColor="danger">Solid</Button>
            <Button variant="outlined" semanticColor="danger">Outlined</Button>
            <Button variant="ghost" semanticColor="danger">Ghost</Button>
          </Row>
        </div>
        
        <div>
          <h4 style={{ ...headingStyle, marginBottom: '8px' }}>Warning</h4>
          <Row>
            <Button variant="solid" semanticColor="warning">Solid</Button>
            <Button variant="outlined" semanticColor="warning">Outlined</Button>
            <Button variant="ghost" semanticColor="warning">Ghost</Button>
          </Row>
        </div>
        
        <div>
          <h4 style={{ ...headingStyle, marginBottom: '8px' }}>Info</h4>
          <Row>
            <Button variant="solid" semanticColor="info">Solid</Button>
            <Button variant="outlined" semanticColor="info">Outlined</Button>
            <Button variant="ghost" semanticColor="info">Ghost</Button>
          </Row>
        </div>
      </Section>
      
      <Section title="With Icons" titleStyle={headingStyle}>
        <Row>
          <Button icon>Default Icon</Button>
          <Button icon semanticColor="success">Success Icon</Button>
          <Button icon semanticColor="danger">Danger Icon</Button>
        </Row>
        <Row>
          <Button icon iconPosition="right">Right Icon</Button>
          <Button iconOnly icon />
        </Row>
      </Section>
      
      <Section title="Full Width" titleStyle={headingStyle}>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Button full>Full Width Button</Button>
          <Button full size="small">Small Full Width</Button>
          <Button full size="large" variant="outlined">Large Outlined Full Width</Button>
          <Button full semanticColor="success" icon>Success with Icon Full Width</Button>
        </div>
      </Section>
      
      <Section title="Disabled State" titleStyle={headingStyle}>
        <Row>
          <Button disabled>Solid Disabled</Button>
          <Button variant="outlined" disabled>Outlined Disabled</Button>
          <Button variant="ghost" disabled>Ghost Disabled</Button>
        </Row>
      </Section>
    </div>
  ),
};

export const Playground = {
  args: {
    children: 'Interactive Button',
    size: 'medium',
    variant: 'solid',
    semanticColor: undefined,
    disabled: false,
    icon: false,
    iconPosition: 'left',
    iconOnly: false,
    full: false,
  },
  render: (args) => {
    if (args.iconOnly && args.icon) {
      return <Button {...args} iconOnly icon />;
    }
    
    return (
      <div style={{ width: args.full ? '100%' : 'auto' }}>
        <Button {...args} {...getIconProps(args)}>
          {args.children}
        </Button>
      </div>
    );
  },
};