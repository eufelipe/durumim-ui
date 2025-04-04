import{j as e}from"./jsx-runtime-BjG_zV1W.js";import"./index-CP2yOfOm.js";import{C as r,L as m}from"./Icon-B_KrkbWm.js";import{S as o}from"./Title-DwXxmm5Q.js";import"./font-sizes-CdC0_Hig.js";import"./line-height-C7pa8R1a.js";import"./fonts-a9QyqyBU.js";import"./radii-fbJ-3mQ3.js";import"./shadows-BijbvVPh.js";import"./space-DaNnoG_q.js";const C={title:"Typography/Caption",component:r,parameters:{layout:"centered",backgrounds:{default:"dark"},docs:{description:{component:"Caption component for displaying helper text, captions, and secondary information with smaller font size."}}},tags:["autodocs"],argTypes:{children:{control:"text",description:"The caption content"},as:{options:["p","span","div","figcaption"],control:{type:"select"},description:"HTML element to be rendered"},className:{control:"text",description:"Additional CSS classes"}}},i={args:{children:"This is a caption text",as:void 0,className:""},render:c=>e.jsx("div",{style:{color:"#fff"},children:e.jsx(r,{...c})})},t={render:()=>e.jsxs("div",{style:{padding:"20px",maxWidth:"800px",color:"#fff"},children:[e.jsx(o,{title:"Basic Caption",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:e.jsx(r,{children:"This is a basic caption text, typically used for helper text or additional information."})})}),e.jsx(o,{title:"Form Field Helper Text",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:e.jsxs("div",{children:[e.jsx(m,{htmlFor:"username",children:"Username"}),e.jsx("input",{id:"username",style:{display:"block",width:"100%",marginTop:"8px",padding:"8px",borderRadius:"4px",border:"1px solid #ccc"}}),e.jsx(r,{style:{marginTop:"4px",color:"rgba(255,255,255,0.6)"},children:"Username must be between 3-20 characters and contain only letters and numbers."})]})})})]})};var a,n,s;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: 'This is a caption text',
    as: undefined,
    className: ''
  },
  render: args => <div style={{
    color: '#fff'
  }}>
      <Caption {...args} />
    </div>
}`,...(s=(n=i.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var d,l,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px',
    maxWidth: '800px',
    color: '#fff'
  }}>
      <Section title="Basic Caption">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <Caption>
            This is a basic caption text, typically used for helper text or additional information.
          </Caption>
        </div>
      </Section>
      
      <Section title="Form Field Helper Text">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <div>
            <Label htmlFor="username">Username</Label>
            <input id="username" style={{
            display: 'block',
            width: '100%',
            marginTop: '8px',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }} />
            <Caption style={{
            marginTop: '4px',
            color: 'rgba(255,255,255,0.6)'
          }}>
              Username must be between 3-20 characters and contain only letters and numbers.
            </Caption>
          </div>
        </div>
      </Section>
      
      
    </div>
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const S=["Playground","AllVariations"];export{t as AllVariations,i as Playground,S as __namedExportsOrder,C as default};
