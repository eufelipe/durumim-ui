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
    color: {
      options: ['default', 'success', 'danger', 'warning', 'info'],
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
    fullWidth: {
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
          <Button color="success">Success</Button>
          <Button color="danger">Danger</Button>
          <Button color="warning">Warning</Button>
          <Button color="info">Info</Button>
        </Row>
      </Section>
      
      <Section title="Semantic Colors + Variants" titleStyle={headingStyle}>
        <div>
          <h4 style={{ ...headingStyle, marginBottom: '8px' }}>Success</h4>
          <Row>
            <Button variant="solid" color="success">Solid</Button>
            <Button variant="outlined" color="success">Outlined</Button>
            <Button variant="ghost" color="success">Ghost</Button>
          </Row>
        </div>
        
        <div>
          <h4 style={{ ...headingStyle, marginBottom: '8px' }}>Danger</h4>
          <Row>
            <Button variant="solid" color="danger">Solid</Button>
            <Button variant="outlined" color="danger">Outlined</Button>
            <Button variant="ghost" color="danger">Ghost</Button>
          </Row>
        </div>
        
        <div>
          <h4 style={{ ...headingStyle, marginBottom: '8px' }}>Warning</h4>
          <Row>
            <Button variant="solid" color="warning">Solid</Button>
            <Button variant="outlined" color="warning">Outlined</Button>
            <Button variant="ghost" color="warning">Ghost</Button>
          </Row>
        </div>
        
        <div>
          <h4 style={{ ...headingStyle, marginBottom: '8px' }}>Info</h4>
          <Row>
            <Button variant="solid" color="info">Solid</Button>
            <Button variant="outlined" color="info">Outlined</Button>
            <Button variant="ghost" color="info">Ghost</Button>
          </Row>
        </div>
      </Section>
      
      <Section title="With Icons" titleStyle={headingStyle}>
        <Row>
          <Button icon>Default Icon</Button>
          <Button icon color="success">Success Icon</Button>
          <Button icon color="danger">Danger Icon</Button>
        </Row>
        <Row>
          <Button icon iconPosition="right">Right Icon</Button>
          <Button iconOnly icon />
        </Row>
      </Section>
      
      <Section title="Full Width" titleStyle={headingStyle}>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Button fullWidth>Full Width Button</Button>
          <Button fullWidth size="small">Small Full Width</Button>
          <Button fullWidth size="large" variant="outlined">Large Outlined Full Width</Button>
          <Button fullWidth color="success" icon>Success with Icon Full Width</Button>
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
    color: 'default',
    disabled: false,
    icon: false,
    iconPosition: 'left',
    iconOnly: false,
    fullWidth: false,
  },
  render: (args) => {
    if (args.iconOnly && args.icon) {
      return <Button {...args} iconOnly icon />;
    }
    
    return (
      <div style={{ width: args.fullWidth ? '100%' : 'auto' }}>
        <Button {...args} {...getIconProps(args)}>
          {args.children}
        </Button>
      </div>
    );
  },
};