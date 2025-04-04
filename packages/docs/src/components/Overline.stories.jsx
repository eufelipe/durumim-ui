import React from 'react';

import { Overline, Text, Heading } from '@durumim-ui/web';

import { Row, Section } from '../ui';

const meta = {
  title: 'Typography/Overline',
  component: Overline,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
    docs: {
      description: {
        component: 'Overline component for displaying category labels, section headers, and other small, uppercase text elements.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'The overline content',
    },
    as: {
      options: ['span', 'div', 'p'],
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
    children: 'OVERLINE TEXT',
    as: undefined,
    className: '',
  },
  render: (args) => (
    <div style={{ color: '#fff' }}>
      <Overline {...args} />
    </div>
  ),
};

export const AllVariations = {
  render: () => (
    <div style={{ padding: '20px', maxWidth: '800px', color: '#fff' }}>
      <Section title="Basic Overline">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Overline>
            CATEGORY LABEL
          </Overline>
        </div>
      </Section>

  

      <Section title="With Headings">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <Overline style={{ marginBottom: '8px', color: '#64B5F6' }}>FEATURED ARTICLE</Overline>
            <Heading level="h3">Title of the article</Heading>
            <Text variant="body" style={{ marginTop: '8px' }}>
              example of the content of the article
            </Text>
          </div>
        </div>
      </Section>



      <Section title="Usage Examples">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
              <Overline style={{ minWidth: '120px' }}>MAY 2023</Overline>
              <Text variant="body">Project kickoff meeting and initial planning phase.</Text>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', marginTop: '12px' }}>
              <Overline style={{ minWidth: '120px' }}>JUNE 2023</Overline>
              <Text variant="body">Design phase completion and development start.</Text>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', marginTop: '12px' }}>
              <Overline style={{ minWidth: '120px' }}>JULY 2023</Overline>
              <Text variant="body">Beta testing and final revisions.</Text>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Custom CSS Class">
        <Overline
          className="custom-overline"
          style={{ color: '#64B5F6', letterSpacing: '0.2em' }}
        >
          ENHANCED SPACING
        </Overline>
      </Section>
    </div>
  ),
}; 