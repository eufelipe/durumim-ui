import React from 'react';

import { Text } from '@durumim-ui/web';

import { Row, Section } from '../ui';

const meta = {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
    docs: {
      description: {
        component: 'Text component for displaying paragraph content in various scales with optional bold formatting.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['lead', 'big', 'body', 'medium', 'small', 'tiny'],
      control: { type: 'select' },
      description: 'The text scale variant',
    },
    children: {
      control: 'text',
      description: 'The text content',
    },
    bold: {
      control: 'boolean',
      description: 'Whether the text should be displayed in bold',
    },
    as: {
      options: ['p', 'span', 'div', 'label'],
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
    variant: 'body',
    children: 'Customize this text',
    bold: true,
    as: undefined,
    className: '',
  },
  render: (args) => (
    <div style={{ color: '#fff' }}>
      <Text {...args} />
    </div>
  ),
};

export const AllVariations = {
  render: () => (
    <div style={{ padding: '20px', maxWidth: '800px', color: '#fff' }}>
      <Section title="Text variants">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Text variant="lead">Lead text for important paragraphs</Text>
          <Text variant="big">Big text that's larger than the standard body text</Text>
          <Text variant="body">Body text is the standard size for paragraph content</Text>
          <Text variant="medium">Medium text that's slightly smaller than body text</Text>
          <Text variant="small">Small text for less important information</Text>
          <Text variant="tiny">Tiny text for captions or supplementary information</Text>
        </div>
      </Section>
      
      <Section title="Bold formatting">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Text variant="lead" bold>Lead text with bold formatting</Text>
          <Text variant="body" bold>Body text with bold formatting</Text>
          <Text variant="small" bold>Small text with bold formatting</Text>
        </div>
      </Section>
      
      <Section title="Custom elements">
        <Row>
          <Text variant="body" as="div">Body text as DIV</Text>
          <Text variant="body" as="span" bold>Body text as SPAN with bold</Text>
        </Row>
      </Section>
      
      <Section title="Custom CSS class">
        <Text 
          variant="body" 
          className="custom-text"
          style={{ textDecoration: 'underline' }}
        >
          Custom style with underline
        </Text>
      </Section> 
    </div>
  ),
}; 