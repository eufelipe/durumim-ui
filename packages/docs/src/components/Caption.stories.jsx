import React from 'react';

import { Caption, Text, Label } from '@durumim-ui/web';

import { Row, Section } from '../ui';

const meta = {
  title: 'Typography/Caption',
  component: Caption,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
    docs: {
      description: {
        component: 'Caption component for displaying helper text, captions, and secondary information with smaller font size.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'The caption content',
    },
    as: {
      options: ['p', 'span', 'div', 'figcaption'],
      control: { type: 'select' },
      description: 'HTML element to be rendered',
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
    children: 'This is a caption text',
    as: undefined,
    className: '',
  },
  render: (args) => (
    <div style={{ color: '#fff' }}>
      <Caption {...args} />
    </div>
  ),
};

export const AllVariations = {
  render: () => (
    <div style={{ padding: '20px', maxWidth: '800px', color: '#fff' }}>
      <Section title="Basic Caption">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Caption>
            This is a basic caption text, typically used for helper text or additional information.
          </Caption>
        </div>
      </Section>
      
      <Section title="Form Field Helper Text">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <Label htmlFor="username">Username</Label>
            <input 
              id="username" 
              style={{ 
                display: 'block', 
                width: '100%',
                marginTop: '8px', 
                padding: '8px', 
                borderRadius: '4px', 
                border: '1px solid #ccc' 
              }} 
            />
            <Caption style={{ marginTop: '4px', color: 'rgba(255,255,255,0.6)' }}>
              Username must be between 3-20 characters and contain only letters and numbers.
            </Caption>
          </div>
        </div>
      </Section>
      
      
    </div>
  ),
}; 