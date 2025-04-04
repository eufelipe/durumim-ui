import{j as t}from"./jsx-runtime-BjG_zV1W.js";import"./index-CP2yOfOm.js";import{T as e}from"./Icon-B_KrkbWm.js";import{S as a,R as m}from"./Title-DwXxmm5Q.js";import"./font-sizes-CdC0_Hig.js";import"./line-height-C7pa8R1a.js";import"./fonts-a9QyqyBU.js";import"./radii-fbJ-3mQ3.js";import"./shadows-BijbvVPh.js";import"./space-DaNnoG_q.js";const S={title:"Typography/Text",component:e,parameters:{layout:"centered",backgrounds:{default:"dark"},docs:{description:{component:"Text component for displaying paragraph content in various scales with optional bold formatting."}}},tags:["autodocs"],argTypes:{variant:{options:["lead","big","body","medium","small","tiny"],control:{type:"select"},description:"The text scale variant"},children:{control:"text",description:"The text content"},bold:{control:"boolean",description:"Whether the text should be displayed in bold"},as:{options:["p","span","div","label"],control:{type:"select"},description:"HTML element to be rendered"},className:{control:"text",description:"Additional CSS classes"}}},i={args:{variant:"body",children:"Customize this text",bold:!0,as:void 0,className:""},render:c=>t.jsx("div",{style:{color:"#fff"},children:t.jsx(e,{...c})})},o={render:()=>t.jsxs("div",{style:{padding:"20px",maxWidth:"800px",color:"#fff"},children:[t.jsx(a,{title:"Text variants",children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[t.jsx(e,{variant:"lead",children:"Lead text for important paragraphs"}),t.jsx(e,{variant:"big",children:"Big text that's larger than the standard body text"}),t.jsx(e,{variant:"body",children:"Body text is the standard size for paragraph content"}),t.jsx(e,{variant:"medium",children:"Medium text that's slightly smaller than body text"}),t.jsx(e,{variant:"small",children:"Small text for less important information"}),t.jsx(e,{variant:"tiny",children:"Tiny text for captions or supplementary information"})]})}),t.jsx(a,{title:"Bold formatting",children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[t.jsx(e,{variant:"lead",bold:!0,children:"Lead text with bold formatting"}),t.jsx(e,{variant:"body",bold:!0,children:"Body text with bold formatting"}),t.jsx(e,{variant:"small",bold:!0,children:"Small text with bold formatting"})]})}),t.jsx(a,{title:"Custom elements",children:t.jsxs(m,{children:[t.jsx(e,{variant:"body",as:"div",children:"Body text as DIV"}),t.jsx(e,{variant:"body",as:"span",bold:!0,children:"Body text as SPAN with bold"})]})}),t.jsx(a,{title:"Custom CSS class",children:t.jsx(e,{variant:"body",className:"custom-text",style:{textDecoration:"underline"},children:"Custom style with underline"})})]})};var r,n,s;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    variant: 'body',
    children: 'Customize this text',
    bold: true,
    as: undefined,
    className: ''
  },
  render: args => <div style={{
    color: '#fff'
  }}>
      <Text {...args} />
    </div>
}`,...(s=(n=i.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var l,d,x;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px',
    maxWidth: '800px',
    color: '#fff'
  }}>
      <Section title="Text variants">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <Text variant="lead">Lead text for important paragraphs</Text>
          <Text variant="big">Big text that's larger than the standard body text</Text>
          <Text variant="body">Body text is the standard size for paragraph content</Text>
          <Text variant="medium">Medium text that's slightly smaller than body text</Text>
          <Text variant="small">Small text for less important information</Text>
          <Text variant="tiny">Tiny text for captions or supplementary information</Text>
        </div>
      </Section>
      
      <Section title="Bold formatting">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
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
        <Text variant="body" className="custom-text" style={{
        textDecoration: 'underline'
      }}>
          Custom style with underline
        </Text>
      </Section> 
    </div>
}`,...(x=(d=o.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const w=["Playground","AllVariations"];export{o as AllVariations,i as Playground,w as __namedExportsOrder,S as default};
