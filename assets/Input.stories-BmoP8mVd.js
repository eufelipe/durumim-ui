import{j as e}from"./jsx-runtime-BjG_zV1W.js";import"./index-CP2yOfOm.js";import{a as i,I as t}from"./Icon-B_KrkbWm.js";import{I as o}from"./Icons-DaGJA4or.js";import{S as l}from"./Title-DwXxmm5Q.js";import"./font-sizes-CdC0_Hig.js";import"./line-height-C7pa8R1a.js";import"./fonts-a9QyqyBU.js";import"./radii-fbJ-3mQ3.js";import"./shadows-BijbvVPh.js";import"./space-DaNnoG_q.js";const C={title:"Components/Input",component:i,parameters:{layout:"centered",docs:{description:{component:"Text input field for user data entry with different variants and states."}}},tags:["autodocs"],argTypes:{variant:{options:["solid","outlined","ghost"],control:{type:"radio"},description:"Input visual style - solid (dark background), outlined (with border), ghost (only bottom border)",table:{type:{summary:"string"},defaultValue:{summary:"solid"}}},size:{options:["small","medium","large"],control:{type:"radio"},description:"Input size",table:{type:{summary:"string"},defaultValue:{summary:"medium"}}},error:{control:"text",description:"Error message to be displayed below the input",table:{type:{summary:"string"}}},success:{control:"boolean",description:"Indicates if the input is in success state, applying green border",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},disabled:{control:"boolean",description:"Disables the input, applying disabled style",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},placeholder:{control:"text",description:"Placeholder text displayed when field is empty",table:{type:{summary:"string"}}},leftIcon:{control:"boolean",description:"Adds an icon to the left of the input"},rightIcon:{control:"boolean",description:"Adds an icon to the right of the input"}}},s={color:"#fff",marginBottom:"16px"},g=r=>{switch(r){case"small":return"sm";case"large":return"lg";default:return"md"}},n={args:{placeholder:"Type here...",variant:"solid",size:"medium",disabled:!1,error:"",success:!1},render:r=>{const a={...r},d=g(r.size);return r.leftIcon&&(a.leftIcon=e.jsx(t,{icon:o.Search,size:d,color:"inherit"})),r.rightIcon&&(a.rightIcon=e.jsx(t,{icon:o.Check,size:d,color:"inherit"})),e.jsx(i,{...a})}},c={render:()=>e.jsxs("div",{style:{padding:"20px",maxWidth:"600px"},children:[e.jsx("h2",{style:s,children:"Input Variations"}),e.jsx(l,{title:"Variants",titleStyle:s,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(i,{variant:"solid",placeholder:"Solid input (default)"}),e.jsx(i,{variant:"outlined",placeholder:"Outlined input"}),e.jsx(i,{variant:"ghost",placeholder:"Ghost input"})]})}),e.jsx(l,{title:"Sizes",titleStyle:s,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(i,{size:"small",placeholder:"Small input"}),e.jsx(i,{size:"medium",placeholder:"Medium input (default)"}),e.jsx(i,{size:"large",placeholder:"Large input"})]})}),e.jsx(l,{title:"States",titleStyle:s,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(i,{placeholder:"Default input"}),e.jsx(i,{error:"Error message",placeholder:"Input with error"}),e.jsx(i,{success:!0,placeholder:"Input with success"}),e.jsx(i,{disabled:!0,placeholder:"Disabled input"})]})}),e.jsx(l,{title:"With Icons",titleStyle:s,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(i,{placeholder:"Input with left icon",leftIcon:e.jsx(t,{icon:o.Search,size:"sm",color:"inherit"})}),e.jsx(i,{placeholder:"Input with right icon",rightIcon:e.jsx(t,{icon:o.Check,size:"sm",color:"inherit"})}),e.jsx(i,{placeholder:"Input with both icons",leftIcon:e.jsx(t,{icon:o.Mail,size:"sm",color:"inherit"}),rightIcon:e.jsx(t,{icon:o.Edit,size:"sm",color:"inherit"})})]})}),e.jsx(l,{title:"Icons with States",titleStyle:s,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(i,{placeholder:"Default with icons",leftIcon:e.jsx(t,{icon:o.Search,size:"sm",color:"inherit"}),rightIcon:e.jsx(t,{icon:o.Check,size:"sm",color:"inherit"})}),e.jsx(i,{error:"Error message",placeholder:"Error with icons",leftIcon:e.jsx(t,{icon:o.AlertCircle,size:"sm",color:"error"}),rightIcon:e.jsx(t,{icon:o.X,size:"sm",color:"error"})}),e.jsx(i,{success:!0,placeholder:"Success with icons",leftIcon:e.jsx(t,{icon:o.CheckCircle,size:"sm",color:"success"}),rightIcon:e.jsx(t,{icon:o.Check,size:"sm",color:"success"})}),e.jsx(i,{disabled:!0,placeholder:"Disabled with icons",leftIcon:e.jsx(t,{icon:o.Lock,size:"sm",color:"inherit"}),rightIcon:e.jsx(t,{icon:o.X,size:"sm",color:"inherit"})})]})}),e.jsxs(l,{title:"Variants and States",titleStyle:s,children:[e.jsxs("div",{children:[e.jsx("h4",{style:{...s,marginBottom:"8px"},children:"Solid"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(i,{variant:"solid",placeholder:"Default"}),e.jsx(i,{variant:"solid",error:"Error message",placeholder:"With error"}),e.jsx(i,{variant:"solid",success:!0,placeholder:"With success"}),e.jsx(i,{variant:"solid",disabled:!0,placeholder:"Disabled"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{...s,marginBottom:"8px",marginTop:"16px"},children:"Outlined"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(i,{variant:"outlined",placeholder:"Default"}),e.jsx(i,{variant:"outlined",error:"Error message",placeholder:"With error"}),e.jsx(i,{variant:"outlined",success:!0,placeholder:"With success"}),e.jsx(i,{variant:"outlined",disabled:!0,placeholder:"Disabled"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{...s,marginBottom:"8px",marginTop:"16px"},children:"Ghost"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(i,{variant:"ghost",placeholder:"Default"}),e.jsx(i,{variant:"ghost",error:"Error message",placeholder:"With error"}),e.jsx(i,{variant:"ghost",success:!0,placeholder:"With success"}),e.jsx(i,{variant:"ghost",disabled:!0,placeholder:"Disabled"})]})]})]})]})};var p,h,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type here...',
    variant: 'solid',
    size: 'medium',
    disabled: false,
    error: '',
    success: false
  },
  render: args => {
    const props = {
      ...args
    };
    const iconSize = getIconSize(args.size);
    if (args.leftIcon) {
      props.leftIcon = <Icon icon={Icons.Search} size={iconSize} color="inherit" />;
    }
    if (args.rightIcon) {
      props.rightIcon = <Icon icon={Icons.Check} size={iconSize} color="inherit" />;
    }
    return <Input {...props} />;
  }
}`,...(u=(h=n.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var m,x,I;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px',
    maxWidth: '600px'
  }}>
      <h2 style={headingStyle}>Input Variations</h2>
 
      
      <Section title="Variants" titleStyle={headingStyle}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <Input variant="solid" placeholder="Solid input (default)" />
          <Input variant="outlined" placeholder="Outlined input" />
          <Input variant="ghost" placeholder="Ghost input" />
        </div>
      </Section>
      
      <Section title="Sizes" titleStyle={headingStyle}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <Input size="small" placeholder="Small input" />
          <Input size="medium" placeholder="Medium input (default)" />
          <Input size="large" placeholder="Large input" />
        </div>
      </Section>
      
      <Section title="States" titleStyle={headingStyle}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <Input placeholder="Default input" />
          <Input error="Error message" placeholder="Input with error" />
          <Input success placeholder="Input with success" />
          <Input disabled placeholder="Disabled input" />
        </div>
      </Section>
      
      <Section title="With Icons" titleStyle={headingStyle}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <Input placeholder="Input with left icon" leftIcon={<Icon icon={Icons.Search} size="sm" color="inherit" />} />
          <Input placeholder="Input with right icon" rightIcon={<Icon icon={Icons.Check} size="sm" color="inherit" />} />
          <Input placeholder="Input with both icons" leftIcon={<Icon icon={Icons.Mail} size="sm" color="inherit" />} rightIcon={<Icon icon={Icons.Edit} size="sm" color="inherit" />} />
        </div>
      </Section>
      
      <Section title="Icons with States" titleStyle={headingStyle}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <Input placeholder="Default with icons" leftIcon={<Icon icon={Icons.Search} size="sm" color="inherit" />} rightIcon={<Icon icon={Icons.Check} size="sm" color="inherit" />} />
          <Input error="Error message" placeholder="Error with icons" leftIcon={<Icon icon={Icons.AlertCircle} size="sm" color="error" />} rightIcon={<Icon icon={Icons.X} size="sm" color="error" />} />
          <Input success placeholder="Success with icons" leftIcon={<Icon icon={Icons.CheckCircle} size="sm" color="success" />} rightIcon={<Icon icon={Icons.Check} size="sm" color="success" />} />
          <Input disabled placeholder="Disabled with icons" leftIcon={<Icon icon={Icons.Lock} size="sm" color="inherit" />} rightIcon={<Icon icon={Icons.X} size="sm" color="inherit" />} />
        </div>
      </Section>
      
      <Section title="Variants and States" titleStyle={headingStyle}>
        <div>
          <h4 style={{
          ...headingStyle,
          marginBottom: '8px'
        }}>Solid</h4>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
            <Input variant="solid" placeholder="Default" />
            <Input variant="solid" error="Error message" placeholder="With error" />
            <Input variant="solid" success placeholder="With success" />
            <Input variant="solid" disabled placeholder="Disabled" />
          </div>
        </div>
        
        <div>
          <h4 style={{
          ...headingStyle,
          marginBottom: '8px',
          marginTop: '16px'
        }}>Outlined</h4>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
            <Input variant="outlined" placeholder="Default" />
            <Input variant="outlined" error="Error message" placeholder="With error" />
            <Input variant="outlined" success placeholder="With success" />
            <Input variant="outlined" disabled placeholder="Disabled" />
          </div>
        </div>
        
        <div>
          <h4 style={{
          ...headingStyle,
          marginBottom: '8px',
          marginTop: '16px'
        }}>Ghost</h4>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
            <Input variant="ghost" placeholder="Default" />
            <Input variant="ghost" error="Error message" placeholder="With error" />
            <Input variant="ghost" success placeholder="With success" />
            <Input variant="ghost" disabled placeholder="Disabled" />
          </div>
        </div>
      </Section> 
    </div>
}`,...(I=(x=c.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};const k=["Playground","AllVariations"];export{c as AllVariations,n as Playground,k as __namedExportsOrder,C as default};
