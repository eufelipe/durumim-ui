import React from 'react';
import { Heading } from '@durumim-ui/web';
import { Row, Section } from '../ui';

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
    docs: {
      description: {
        component: 'Heading component for displaying titles in various levels (h1-h5).'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5'],
      control: { type: 'select' },
      description: 'The heading level (h1-h5)',
    },
    children: {
      control: 'text',
      description: 'The heading content',
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
    level: 'h2',
    children: 'Customize this heading',
    as: undefined,
    className: '',
  },
  render: (args) => (
    <div style={{ color: '#fff' }}>
      <Heading {...args} />
    </div>
  ),
};

export const AllVariations = {
  render: () => (
    <div style={{ padding: '20px', maxWidth: '800px', color: '#fff' }}>
      <Section title="Heading levels">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Heading level="h1">Heading H1</Heading>
          <Heading level="h2">Heading H2</Heading>
          <Heading level="h3">Heading H3</Heading>
          <Heading level="h4">Heading H4</Heading>
          <Heading level="h5">Heading H5</Heading>
        </div>
      </Section>
      
      <Section title="Custom elements">
        <Row>
          <Heading level="h2" as="div">H2 as DIV</Heading>
          <Heading level="h3" as="span">H3 as SPAN</Heading>
        </Row>
      </Section>
      
      <Section title="Custom CSS class">
        <Heading 
          level="h2" 
          className="custom-heading"
          style={{ textDecoration: 'underline' }}
        >
          Custom style
        </Heading>
      </Section>
    </div>
  ),
}; 