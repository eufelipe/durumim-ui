import React from 'react';
import { Input, Icon, Icons } from '@durumim-ui/web';
import { Section } from '../ui';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Text input field for user data entry with different variants and states.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['solid', 'outlined', 'ghost'],
      control: { type: 'radio' },
      description: 'Input visual style - solid (dark background), outlined (with border), ghost (only bottom border)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'solid' },
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      description: 'Input size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    error: {
      control: 'text',
      description: 'Error message to be displayed below the input',
      table: {
        type: { summary: 'string' },
      },
    },
    success: {
      control: 'boolean',
      description: 'Indicates if the input is in success state, applying green border',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input, applying disabled style',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed when field is empty',
      table: {
        type: { summary: 'string' },
      },
    },
    leftIcon: {
      control: 'boolean',
      description: 'Adds an icon to the left of the input',
    },
    rightIcon: {
      control: 'boolean',
      description: 'Adds an icon to the right of the input',
    },
  },
};

export default meta;

const headingStyle = {
  color: '#fff',
  marginBottom: '16px',
};
 
const getIconSize = (inputSize) => {
  switch (inputSize) {
    case 'small':
      return 'sm';
    case 'large':
      return 'lg';
    default:
      return 'md';
  }
};

export const Playground = {
  args: {
    placeholder: 'Type here...',
    variant: 'solid',
    size: 'medium',
    disabled: false,
    error: '',
    success: false,
  },
  render: (args) => {
    const props = { ...args };
    const iconSize = getIconSize(args.size);
    
    if (args.leftIcon) {
      props.leftIcon = <Icon icon={Icons.Search} size={iconSize} color="inherit" />;
    }
    
    if (args.rightIcon) {
      props.rightIcon = <Icon icon={Icons.Check} size={iconSize} color="inherit" />;
    }
    
    return <Input {...props} />;
  }
};

export const AllVariations = {
  render: () => (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <h2 style={headingStyle}>Input Variations</h2>
 
      
      <Section title="Variants" titleStyle={headingStyle}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px'}}>
          <Input variant="solid" placeholder="Solid input (default)" />
          <Input variant="outlined" placeholder="Outlined input" />
          <Input variant="ghost" placeholder="Ghost input" />
        </div>
      </Section>
      
      <Section title="Sizes" titleStyle={headingStyle}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input size="small" placeholder="Small input" />
          <Input size="medium" placeholder="Medium input (default)" />
          <Input size="large" placeholder="Large input" />
        </div>
      </Section>
      
      <Section title="States" titleStyle={headingStyle}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input placeholder="Default input" />
          <Input error="Error message" placeholder="Input with error" />
          <Input success placeholder="Input with success" />
          <Input disabled placeholder="Disabled input" />
        </div>
      </Section>
      
      <Section title="With Icons" titleStyle={headingStyle}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input
            placeholder="Input with left icon"
            leftIcon={<Icon icon={Icons.Search} size="sm" color="inherit" />}
          />
          <Input
            placeholder="Input with right icon"
            rightIcon={<Icon icon={Icons.Check} size="sm" color="inherit" />}
          />
          <Input
            placeholder="Input with both icons"
            leftIcon={<Icon icon={Icons.Mail} size="sm" color="inherit" />}
            rightIcon={<Icon icon={Icons.Edit} size="sm" color="inherit" />}
          />
        </div>
      </Section>
      
      <Section title="Icons with States" titleStyle={headingStyle}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input 
            placeholder="Default with icons" 
            leftIcon={<Icon icon={Icons.Search} size="sm" color="inherit" />}
            rightIcon={<Icon icon={Icons.Check} size="sm" color="inherit" />}
          />
          <Input 
            error="Error message" 
            placeholder="Error with icons" 
            leftIcon={<Icon icon={Icons.AlertCircle} size="sm" color="error" />}
            rightIcon={<Icon icon={Icons.X} size="sm" color="error" />}
          />
          <Input 
            success 
            placeholder="Success with icons" 
            leftIcon={<Icon icon={Icons.CheckCircle} size="sm" color="success" />}
            rightIcon={<Icon icon={Icons.Check} size="sm" color="success" />}
          />
          <Input 
            disabled 
            placeholder="Disabled with icons" 
            leftIcon={<Icon icon={Icons.Lock} size="sm" color="inherit" />}
            rightIcon={<Icon icon={Icons.X} size="sm" color="inherit" />}
          />
        </div>
      </Section>
      
      <Section title="Variants and States" titleStyle={headingStyle}>
        <div>
          <h4 style={{ ...headingStyle, marginBottom: '8px' }}>Solid</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Input variant="solid" placeholder="Default" />
            <Input variant="solid" error="Error message" placeholder="With error" />
            <Input variant="solid" success placeholder="With success" />
            <Input variant="solid" disabled placeholder="Disabled" />
          </div>
        </div>
        
        <div>
          <h4 style={{ ...headingStyle, marginBottom: '8px', marginTop: '16px' }}>Outlined</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Input variant="outlined" placeholder="Default" />
            <Input variant="outlined" error="Error message" placeholder="With error" />
            <Input variant="outlined" success placeholder="With success" />
            <Input variant="outlined" disabled placeholder="Disabled" />
          </div>
        </div>
        
        <div>
          <h4 style={{ ...headingStyle, marginBottom: '8px', marginTop: '16px' }}>Ghost</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Input variant="ghost" placeholder="Default" />
            <Input variant="ghost" error="Error message" placeholder="With error" />
            <Input variant="ghost" success placeholder="With success" />
            <Input variant="ghost" disabled placeholder="Disabled" />
          </div>
        </div>
      </Section> 
    </div>
  ),
};

 