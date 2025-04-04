import React from 'react';

import { Icon, Icons } from '@durumim-ui/web';

import { Row } from '../ui';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Icon component that uses React Icons as a base, allowing flexible integration with the design system.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(Icons),
      mapping: Icons,
      description: 'The icon component to be rendered',
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
      description: 'Icon size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    color: {
      options: ['inherit', 'primary', 'secondary', 'accent', 'success', 'danger', 'warning', 'info', 'white', 'light', 'dark', 'black'],
      control: { type: 'select' },
      description: 'Icon color',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'inherit' },
      },
    },
  },
};

export default meta;

const headingStyle = {
  color: '#fff',
  marginBottom: '16px',
};

export const Playground = {
  args: {
    icon: Icons.User,
    size: 'md',
    color: 'primary',
  },
  render: (args) => <Icon {...args} />
};

export const AllSizes = {
  render: () => (
    <div style={{ padding: '20px', color: 'white' }}>
      <h3 style={headingStyle}>Icon Sizes</h3>
      <Row>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Icon icon={Icons.User} size="xs" />
          <span>XS</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Icon icon={Icons.User} size="sm" />
          <span>SM</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Icon icon={Icons.User} size="md" />
          <span>MD</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Icon icon={Icons.User} size="lg" />
          <span>LG</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Icon icon={Icons.User} size="xl" />
          <span>XL</span>
        </div>
      </Row>
    </div>
  )
};

export const Colors = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <h3 style={headingStyle}>Icon Colors</h3>
      <Row>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Icon icon={Icons.Heart} size="lg" color="primary" />
          <span style={{ color: 'white' }}>Primary</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Icon icon={Icons.Heart} size="lg" color="secondary" />
          <span style={{ color: 'white' }}>Secondary</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Icon icon={Icons.Heart} size="lg" color="accent" />
          <span style={{ color: 'white' }}>Accent</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Icon icon={Icons.Heart} size="lg" color="success" />
          <span style={{ color: 'white' }}>Success</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Icon icon={Icons.Heart} size="lg" color="error" />
          <span style={{ color: 'white' }}>Danger</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Icon icon={Icons.Heart} size="lg" color="warning" />
          <span style={{ color: 'white' }}>Warning</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Icon icon={Icons.Heart} size="lg" color="info" />
          <span style={{ color: 'white' }}>Info</span>
        </div>
      </Row>
    </div>
  )
};

export const IconLibrary = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <h3 style={headingStyle}>Icon Library</h3>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        {Object.entries(Icons).map(([name, IconComponent]) => (
          <div
            key={name}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              gap: '10px',
              minWidth: '130px'
            }}
          >
            <Icon icon={IconComponent} size="md" color="white" />
            <span style={{
              color: 'white',
              fontSize: '12px'
            }}>
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
};
