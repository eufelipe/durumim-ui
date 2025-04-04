import React from 'react';

import { Title, Text, Overline } from '@durumim-ui/web';

import { Row, Section } from '../ui';

const meta = {
  title: 'Typography/Title',
  component: Title,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
    docs: {
      description: {
        component: 'Title component for displaying section titles or card headings with semi-bold styling.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'The title content',
    },
    as: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'div', 'span'],
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
    children: 'This is a title',
    as: undefined,
    className: '',
  },
  render: (args) => (
    <div style={{ color: '#fff' }}>
      <Title {...args} />
    </div>
  ),
};

export const AllVariations = {
  render: () => (
    <div style={{ padding: '20px', maxWidth: '800px', color: '#fff' }}>
      <Section title="Basic Title">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Title>
            Section Title
          </Title>
          <Text variant="body">
            This is a regular paragraph that follows a title. The title component uses the heading font
            family with semi-bold weight to create visual hierarchy.
          </Text>
        </div>
      </Section>
      
       
      
      <Section title="Custom CSS Class">
        <Title 
          className="custom-title"
          style={{ color: '#64B5F6', borderBottom: '2px solid #64B5F6', paddingBottom: '8px', display: 'inline-block' }}
        >
          Styled Title with Border
        </Title>
      </Section>
    </div>
  ),
}; 