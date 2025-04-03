import React from 'react';

import { Label, Text } from '@durumim-ui/web';

import { Row, Section } from '../ui';

const meta = {
  title: 'Typography/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
    docs: {
      description: {
        component: 'Label component for form fields and other UI elements that need labels.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'The label content',
    },
    as: {
      options: ['label', 'span', 'div'],
      control: { type: 'select' },
      description: 'HTML element to be rendered',
    },
    htmlFor: {
      control: 'text',
      description: 'ID of the form element this label is associated with',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;


export const Playground = {
  args: {
    children: 'Form Label',
    as: undefined,
    htmlFor: 'example-input',
    className: '',
  },
  render: (args) => (
    <div style={{ color: '#fff' }}>
      <Label {...args} />
      <input 
        id="example-input" 
        style={{ 
          display: 'block', 
          marginTop: '8px', 
          padding: '8px', 
          borderRadius: '4px', 
          border: '1px solid #ccc' 
        }} 
      />
    </div>
  ),
};

export const AllVariations = {
  render: () => (
    <div style={{ padding: '20px', maxWidth: '800px', color: '#fff' }}>
      <Section title="Default Label">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <Label htmlFor="username">Username</Label>
            <input 
              id="username" 
              style={{ 
                display: 'block', 
                marginTop: '8px', 
                padding: '8px', 
                borderRadius: '4px', 
                border: '1px solid #ccc' 
              }} 
            />
          </div>
        </div>
      </Section>
      
      <Section title="Custom elements">
        <Row>
          <div>
            <Label as="div">Label as DIV</Label>
            <Text variant="small" style={{ color: 'rgba(255,255,255,0.6)' }}>This label is rendered as a div element</Text>
          </div>
          <div>
            <Label as="span">Label as SPAN</Label>
            <Text variant="small" style={{ color: 'rgba(255,255,255,0.6)' }}>This label is rendered as a span element</Text>
          </div>
        </Row>
      </Section>
      
      <Section title="Form examples">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <Label htmlFor="email">Email address</Label>
            <input 
              id="email" 
              type="email"
              placeholder="example@email.com"
              style={{ 
                display: 'block', 
                width: '100%',
                marginTop: '8px', 
                padding: '8px', 
                borderRadius: '4px', 
                border: '1px solid #ccc' 
              }} 
            />
            <Text variant="small" style={{ marginTop: '4px', color: 'rgba(255,255,255,0.6)' }}>
              We'll never share your email with anyone else.
            </Text>
          </div>
          
          <div>
            <Label htmlFor="terms">
              <input 
                id="terms" 
                type="checkbox"
                style={{ 
                  marginRight: '8px',
                }} 
              />
              I agree to the terms and conditions
            </Label>
          </div>
        </div>
      </Section>
      
      <Section title="Custom CSS class">
        <Label 
          htmlFor="custom" 
          className="custom-label"
          style={{ textDecoration: 'underline', color: '#64B5F6' }}
        >
          Custom styled label
        </Label>
        <input 
          id="custom" 
          style={{ 
            display: 'block', 
            marginTop: '8px', 
            padding: '8px', 
            borderRadius: '4px', 
            border: '1px solid #64B5F6' 
          }} 
        />
      </Section>
    </div>
  ),
}; 