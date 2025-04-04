import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{B as n}from"./Icon-B_KrkbWm.js";import"./index-CP2yOfOm.js";import{S as l,R as e}from"./Title-DwXxmm5Q.js";import"./font-sizes-CdC0_Hig.js";import"./line-height-C7pa8R1a.js";import"./fonts-a9QyqyBU.js";import"./radii-fbJ-3mQ3.js";import"./shadows-BijbvVPh.js";import"./space-DaNnoG_q.js";const W={title:"Components/Button",component:n,parameters:{layout:"centered",docs:{description:{component:"The Button component is highly customizable and can be configured through various properties to meet different interface needs."}}},tags:["autodocs"],argTypes:{size:{options:["small","medium","large"],control:{type:"radio"},description:"Defines the button size - small (compact interfaces), medium (default), large (high emphasis)"},variant:{options:["solid","outlined","ghost"],control:{type:"radio"},description:"Controls the visual style - solid (primary actions), outlined (secondary actions), ghost (tertiary actions)"},color:{options:["default","success","danger","warning","info"],control:{type:"select"},description:"Applies contextual meaning through color - success (green), danger (red), warning (yellow), info (blue)"},disabled:{control:"boolean",description:"Disables the button, applying reduced opacity and preventing interactions"},icon:{control:"boolean",description:"Adds an icon to enhance the button label visually"},iconPosition:{options:["left","right"],control:{type:"radio"},description:"Positions the icon either left (default) or right of the text"},iconOnly:{control:"boolean",description:"Creates a square button with only an icon and no text"},fullWidth:{control:"boolean",description:"Makes the button take up the full width of its container"}}},o={color:"#fff",marginBottom:"16px"},x=i=>i.icon?{icon:!0,iconPosition:i.iconPosition||"left",iconOnly:i.iconOnly||!1}:{},r={render:()=>t.jsxs("div",{style:{padding:"20px",maxWidth:"800px"},children:[t.jsx("h2",{style:o,children:"Button Variations"}),t.jsx(l,{title:"Sizes",titleStyle:o,children:t.jsxs(e,{children:[t.jsx(n,{size:"small",children:"Small"}),t.jsx(n,{size:"medium",children:"Medium"}),t.jsx(n,{size:"large",children:"Large"})]})}),t.jsx(l,{title:"Variants",titleStyle:o,children:t.jsxs(e,{children:[t.jsx(n,{variant:"solid",children:"Solid"}),t.jsx(n,{variant:"outlined",children:"Outlined"}),t.jsx(n,{variant:"ghost",children:"Ghost"})]})}),t.jsx(l,{title:"Semantic Colors",titleStyle:o,children:t.jsxs(e,{children:[t.jsx(n,{color:"success",children:"Success"}),t.jsx(n,{color:"danger",children:"Danger"}),t.jsx(n,{color:"warning",children:"Warning"}),t.jsx(n,{color:"info",children:"Info"})]})}),t.jsxs(l,{title:"Semantic Colors + Variants",titleStyle:o,children:[t.jsxs("div",{children:[t.jsx("h4",{style:{...o,marginBottom:"8px"},children:"Success"}),t.jsxs(e,{children:[t.jsx(n,{variant:"solid",color:"success",children:"Solid"}),t.jsx(n,{variant:"outlined",color:"success",children:"Outlined"}),t.jsx(n,{variant:"ghost",color:"success",children:"Ghost"})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{...o,marginBottom:"8px"},children:"Danger"}),t.jsxs(e,{children:[t.jsx(n,{variant:"solid",color:"danger",children:"Solid"}),t.jsx(n,{variant:"outlined",color:"danger",children:"Outlined"}),t.jsx(n,{variant:"ghost",color:"danger",children:"Ghost"})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{...o,marginBottom:"8px"},children:"Warning"}),t.jsxs(e,{children:[t.jsx(n,{variant:"solid",color:"warning",children:"Solid"}),t.jsx(n,{variant:"outlined",color:"warning",children:"Outlined"}),t.jsx(n,{variant:"ghost",color:"warning",children:"Ghost"})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{...o,marginBottom:"8px"},children:"Info"}),t.jsxs(e,{children:[t.jsx(n,{variant:"solid",color:"info",children:"Solid"}),t.jsx(n,{variant:"outlined",color:"info",children:"Outlined"}),t.jsx(n,{variant:"ghost",color:"info",children:"Ghost"})]})]})]}),t.jsxs(l,{title:"With Icons",titleStyle:o,children:[t.jsxs(e,{children:[t.jsx(n,{icon:!0,children:"Default Icon"}),t.jsx(n,{icon:!0,color:"success",children:"Success Icon"}),t.jsx(n,{icon:!0,color:"danger",children:"Danger Icon"})]}),t.jsxs(e,{children:[t.jsx(n,{icon:!0,iconPosition:"right",children:"Right Icon"}),t.jsx(n,{iconOnly:!0,icon:!0})]})]}),t.jsx(l,{title:"Full Width",titleStyle:o,children:t.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:"10px"},children:[t.jsx(n,{fullWidth:!0,children:"Full Width Button"}),t.jsx(n,{fullWidth:!0,size:"small",children:"Small Full Width"}),t.jsx(n,{fullWidth:!0,size:"large",variant:"outlined",children:"Large Outlined Full Width"}),t.jsx(n,{fullWidth:!0,color:"success",icon:!0,children:"Success with Icon Full Width"})]})}),t.jsx(l,{title:"Disabled State",titleStyle:o,children:t.jsxs(e,{children:[t.jsx(n,{disabled:!0,children:"Solid Disabled"}),t.jsx(n,{variant:"outlined",disabled:!0,children:"Outlined Disabled"}),t.jsx(n,{variant:"ghost",disabled:!0,children:"Ghost Disabled"})]})})]})},s={args:{children:"Interactive Button",size:"medium",variant:"solid",color:"default",disabled:!1,icon:!1,iconPosition:"left",iconOnly:!1,fullWidth:!1},render:i=>i.iconOnly&&i.icon?t.jsx(n,{...i,iconOnly:!0,icon:!0}):t.jsx("div",{style:{width:i.fullWidth?"100%":"auto"},children:t.jsx(n,{...i,...x(i),children:i.children})})};var a,c,d;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px',
    maxWidth: '800px'
  }}>
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
          <Button color="success">Success</Button>
          <Button color="danger">Danger</Button>
          <Button color="warning">Warning</Button>
          <Button color="info">Info</Button>
        </Row>
      </Section>
      
      <Section title="Semantic Colors + Variants" titleStyle={headingStyle}>
        <div>
          <h4 style={{
          ...headingStyle,
          marginBottom: '8px'
        }}>Success</h4>
          <Row>
            <Button variant="solid" color="success">Solid</Button>
            <Button variant="outlined" color="success">Outlined</Button>
            <Button variant="ghost" color="success">Ghost</Button>
          </Row>
        </div>
        
        <div>
          <h4 style={{
          ...headingStyle,
          marginBottom: '8px'
        }}>Danger</h4>
          <Row>
            <Button variant="solid" color="danger">Solid</Button>
            <Button variant="outlined" color="danger">Outlined</Button>
            <Button variant="ghost" color="danger">Ghost</Button>
          </Row>
        </div>
        
        <div>
          <h4 style={{
          ...headingStyle,
          marginBottom: '8px'
        }}>Warning</h4>
          <Row>
            <Button variant="solid" color="warning">Solid</Button>
            <Button variant="outlined" color="warning">Outlined</Button>
            <Button variant="ghost" color="warning">Ghost</Button>
          </Row>
        </div>
        
        <div>
          <h4 style={{
          ...headingStyle,
          marginBottom: '8px'
        }}>Info</h4>
          <Row>
            <Button variant="solid" color="info">Solid</Button>
            <Button variant="outlined" color="info">Outlined</Button>
            <Button variant="ghost" color="info">Ghost</Button>
          </Row>
        </div>
      </Section>
      
      <Section title="With Icons" titleStyle={headingStyle}>
        <Row>
          <Button icon>Default Icon</Button>
          <Button icon color="success">Success Icon</Button>
          <Button icon color="danger">Danger Icon</Button>
        </Row>
        <Row>
          <Button icon iconPosition="right">Right Icon</Button>
          <Button iconOnly icon />
        </Row>
      </Section>
      
      <Section title="Full Width" titleStyle={headingStyle}>
        <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
          <Button fullWidth>Full Width Button</Button>
          <Button fullWidth size="small">Small Full Width</Button>
          <Button fullWidth size="large" variant="outlined">Large Outlined Full Width</Button>
          <Button fullWidth color="success" icon>Success with Icon Full Width</Button>
        </div>
      </Section>
      
      <Section title="Disabled State" titleStyle={headingStyle}>
        <Row>
          <Button disabled>Solid Disabled</Button>
          <Button variant="outlined" disabled>Outlined Disabled</Button>
          <Button variant="ghost" disabled>Ghost Disabled</Button>
        </Row>
      </Section>
    </div>
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Interactive Button',
    size: 'medium',
    variant: 'solid',
    color: 'default',
    disabled: false,
    icon: false,
    iconPosition: 'left',
    iconOnly: false,
    fullWidth: false
  },
  render: args => {
    if (args.iconOnly && args.icon) {
      return <Button {...args} iconOnly icon />;
    }
    return <div style={{
      width: args.fullWidth ? '100%' : 'auto'
    }}>
        <Button {...args} {...getIconProps(args)}>
          {args.children}
        </Button>
      </div>;
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const O=["AllVariations","Playground"];export{r as AllVariations,s as Playground,O as __namedExportsOrder,W as default};
