import { Button } from '@durumim-ui/web';
import React from 'react';

import { Row, Section } from '../ui';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['solid', 'outlined', 'ghost'],
      control: { type: 'radio' },
    },
    semanticColor: {
      options: ['success', 'danger', 'warning', 'info', undefined],
      control: { type: 'select' },
    },
    disabled: {
      control: 'boolean',
    },
    icon: {
      control: 'boolean',
      description: 'Whether to show an icon',
    },
    iconPosition: {
      options: ['left', 'right'],
      control: { type: 'radio' },
    },
    iconOnly: {
      control: 'boolean',
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
  },
  render: (args) => {
    if (args.iconOnly && args.icon) {
      return <Button {...args} iconOnly icon />;
    }
    
    return (
      <Button {...args} {...getIconProps(args)}>
        {args.children}
      </Button>
    );
  },
};