import{j as e}from"./jsx-runtime-BjG_zV1W.js";import"./index-CP2yOfOm.js";import{b as o,T as m}from"./Icon-B_KrkbWm.js";import{S as s}from"./Title-DwXxmm5Q.js";import"./font-sizes-CdC0_Hig.js";import"./line-height-C7pa8R1a.js";import"./fonts-a9QyqyBU.js";import"./radii-fbJ-3mQ3.js";import"./shadows-BijbvVPh.js";import"./space-DaNnoG_q.js";const B={title:"Typography/Title",component:o,parameters:{layout:"centered",backgrounds:{default:"dark"},docs:{description:{component:"Title component for displaying section titles or card headings with semi-bold styling."}}},tags:["autodocs"],argTypes:{children:{control:"text",description:"The title content"},as:{options:["h1","h2","h3","h4","h5","div","span"],control:{type:"select"},description:"HTML element to be rendered"},className:{control:"text",description:"Additional CSS classes"}}},t={args:{children:"This is a title",as:void 0,className:""},render:p=>e.jsx("div",{style:{color:"#fff"},children:e.jsx(o,{...p})})},i={render:()=>e.jsxs("div",{style:{padding:"20px",maxWidth:"800px",color:"#fff"},children:[e.jsx(s,{title:"Basic Title",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(o,{children:"Section Title"}),e.jsx(m,{variant:"body",children:"This is a regular paragraph that follows a title. The title component uses the heading font family with semi-bold weight to create visual hierarchy."})]})}),e.jsx(s,{title:"Custom CSS Class",children:e.jsx(o,{className:"custom-title",style:{color:"#64B5F6",borderBottom:"2px solid #64B5F6",paddingBottom:"8px",display:"inline-block"},children:"Styled Title with Border"})})]})};var r,l,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    children: 'This is a title',
    as: undefined,
    className: ''
  },
  render: args => <div style={{
    color: '#fff'
  }}>
      <Title {...args} />
    </div>
}`,...(a=(l=t.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};var n,d,c;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px',
    maxWidth: '800px',
    color: '#fff'
  }}>
      <Section title="Basic Title">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
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
        <Title className="custom-title" style={{
        color: '#64B5F6',
        borderBottom: '2px solid #64B5F6',
        paddingBottom: '8px',
        display: 'inline-block'
      }}>
          Styled Title with Border
        </Title>
      </Section>
    </div>
}`,...(c=(d=i.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const j=["Playground","AllVariations"];export{i as AllVariations,t as Playground,j as __namedExportsOrder,B as default};
