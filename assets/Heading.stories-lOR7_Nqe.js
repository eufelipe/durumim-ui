import{j as e}from"./jsx-runtime-BjG_zV1W.js";import"./index-CP2yOfOm.js";import{H as i}from"./Icon-B_KrkbWm.js";import{S as l,R as g}from"./Title-DwXxmm5Q.js";import"./font-sizes-CdC0_Hig.js";import"./line-height-C7pa8R1a.js";import"./fonts-a9QyqyBU.js";import"./radii-fbJ-3mQ3.js";import"./shadows-BijbvVPh.js";import"./space-DaNnoG_q.js";const C={title:"Typography/Heading",component:i,parameters:{layout:"centered",backgrounds:{default:"dark"},docs:{description:{component:"Heading component for displaying titles in various levels (h1-h5)."}}},tags:["autodocs"],argTypes:{level:{options:["h1","h2","h3","h4","h5"],control:{type:"select"},description:"The heading level (h1-h5)"},children:{control:"text",description:"The heading content"},as:{options:["h1","h2","h3","h4","h5","div","span"],control:{type:"select"},description:"HTML element to be rendered"},className:{control:"text",description:"Additional CSS classes"}}},n={args:{level:"h2",children:"Customize this heading",as:void 0,className:""},render:h=>e.jsx("div",{style:{color:"#fff"},children:e.jsx(i,{...h})})},s={render:()=>e.jsxs("div",{style:{padding:"20px",maxWidth:"800px",color:"#fff"},children:[e.jsx(l,{title:"Heading levels",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(i,{level:"h1",children:"Heading H1"}),e.jsx(i,{level:"h2",children:"Heading H2"}),e.jsx(i,{level:"h3",children:"Heading H3"}),e.jsx(i,{level:"h4",children:"Heading H4"}),e.jsx(i,{level:"h5",children:"Heading H5"})]})}),e.jsx(l,{title:"Custom elements",children:e.jsxs(g,{children:[e.jsx(i,{level:"h2",as:"div",children:"H2 as DIV"}),e.jsx(i,{level:"h3",as:"span",children:"H3 as SPAN"})]})}),e.jsx(l,{title:"Custom CSS class",children:e.jsx(i,{level:"h2",className:"custom-heading",style:{textDecoration:"underline"},children:"Custom style"})})]})};var a,t,d;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    level: 'h2',
    children: 'Customize this heading',
    as: undefined,
    className: ''
  },
  render: args => <div style={{
    color: '#fff'
  }}>
      <Heading {...args} />
    </div>
}`,...(d=(t=n.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var o,r,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px',
    maxWidth: '800px',
    color: '#fff'
  }}>
      <Section title="Heading levels">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
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
        <Heading level="h2" className="custom-heading" style={{
        textDecoration: 'underline'
      }}>
          Custom style
        </Heading>
      </Section>
    </div>
}`,...(c=(r=s.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const N=["Playground","AllVariations"];export{s as AllVariations,n as Playground,N as __namedExportsOrder,C as default};
