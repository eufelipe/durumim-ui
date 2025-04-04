import{j as e}from"./jsx-runtime-BjG_zV1W.js";import"./index-CP2yOfOm.js";import{L as l,T as r}from"./Icon-B_KrkbWm.js";import{S as s,R as x}from"./Title-DwXxmm5Q.js";import"./font-sizes-CdC0_Hig.js";import"./line-height-C7pa8R1a.js";import"./fonts-a9QyqyBU.js";import"./radii-fbJ-3mQ3.js";import"./shadows-BijbvVPh.js";import"./space-DaNnoG_q.js";const S={title:"Typography/Label",component:l,parameters:{layout:"centered",backgrounds:{default:"dark"},docs:{description:{component:"Label component for form fields and other UI elements that need labels."}}},tags:["autodocs"],argTypes:{children:{control:"text",description:"The label content"},as:{options:["label","span","div"],control:{type:"select"},description:"HTML element to be rendered"},htmlFor:{control:"text",description:"ID of the form element this label is associated with"},className:{control:"text",description:"Additional CSS classes"}}},a={args:{children:"Form Label",as:void 0,htmlFor:"example-input",className:""},render:m=>e.jsxs("div",{style:{color:"#fff"},children:[e.jsx(l,{...m}),e.jsx("input",{id:"example-input",style:{display:"block",marginTop:"8px",padding:"8px",borderRadius:"4px",border:"1px solid #ccc"}})]})},i={render:()=>e.jsxs("div",{style:{padding:"20px",maxWidth:"800px",color:"#fff"},children:[e.jsx(s,{title:"Default Label",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:e.jsxs("div",{children:[e.jsx(l,{htmlFor:"username",children:"Username"}),e.jsx("input",{id:"username",style:{display:"block",marginTop:"8px",padding:"8px",borderRadius:"4px",border:"1px solid #ccc"}})]})})}),e.jsx(s,{title:"Custom elements",children:e.jsxs(x,{children:[e.jsxs("div",{children:[e.jsx(l,{as:"div",children:"Label as DIV"}),e.jsx(r,{variant:"small",style:{color:"rgba(255,255,255,0.6)"},children:"This label is rendered as a div element"})]}),e.jsxs("div",{children:[e.jsx(l,{as:"span",children:"Label as SPAN"}),e.jsx(r,{variant:"small",style:{color:"rgba(255,255,255,0.6)"},children:"This label is rendered as a span element"})]})]})}),e.jsx(s,{title:"Form examples",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"email",children:"Email address"}),e.jsx("input",{id:"email",type:"email",placeholder:"example@email.com",style:{display:"block",width:"100%",marginTop:"8px",padding:"8px",borderRadius:"4px",border:"1px solid #ccc"}}),e.jsx(r,{variant:"small",style:{marginTop:"4px",color:"rgba(255,255,255,0.6)"},children:"We'll never share your email with anyone else."})]}),e.jsx("div",{children:e.jsxs(l,{htmlFor:"terms",children:[e.jsx("input",{id:"terms",type:"checkbox",style:{marginRight:"8px"}}),"I agree to the terms and conditions"]})})]})}),e.jsxs(s,{title:"Custom CSS class",children:[e.jsx(l,{htmlFor:"custom",className:"custom-label",style:{textDecoration:"underline",color:"#64B5F6"},children:"Custom styled label"}),e.jsx("input",{id:"custom",style:{display:"block",marginTop:"8px",padding:"8px",borderRadius:"4px",border:"1px solid #64B5F6"}})]})]})};var t,o,d;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: 'Form Label',
    as: undefined,
    htmlFor: 'example-input',
    className: ''
  },
  render: args => <div style={{
    color: '#fff'
  }}>
      <Label {...args} />
      <input id="example-input" style={{
      display: 'block',
      marginTop: '8px',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc'
    }} />
    </div>
}`,...(d=(o=a.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var n,p,c;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px',
    maxWidth: '800px',
    color: '#fff'
  }}>
      <Section title="Default Label">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <div>
            <Label htmlFor="username">Username</Label>
            <input id="username" style={{
            display: 'block',
            marginTop: '8px',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }} />
          </div>
        </div>
      </Section>
      
      <Section title="Custom elements">
        <Row>
          <div>
            <Label as="div">Label as DIV</Label>
            <Text variant="small" style={{
            color: 'rgba(255,255,255,0.6)'
          }}>This label is rendered as a div element</Text>
          </div>
          <div>
            <Label as="span">Label as SPAN</Label>
            <Text variant="small" style={{
            color: 'rgba(255,255,255,0.6)'
          }}>This label is rendered as a span element</Text>
          </div>
        </Row>
      </Section>
      
      <Section title="Form examples">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <div>
            <Label htmlFor="email">Email address</Label>
            <input id="email" type="email" placeholder="example@email.com" style={{
            display: 'block',
            width: '100%',
            marginTop: '8px',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }} />
            <Text variant="small" style={{
            marginTop: '4px',
            color: 'rgba(255,255,255,0.6)'
          }}>
              We'll never share your email with anyone else.
            </Text>
          </div>
          
          <div>
            <Label htmlFor="terms">
              <input id="terms" type="checkbox" style={{
              marginRight: '8px'
            }} />
              I agree to the terms and conditions
            </Label>
          </div>
        </div>
      </Section>
      
      <Section title="Custom CSS class">
        <Label htmlFor="custom" className="custom-label" style={{
        textDecoration: 'underline',
        color: '#64B5F6'
      }}>
          Custom styled label
        </Label>
        <input id="custom" style={{
        display: 'block',
        marginTop: '8px',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #64B5F6'
      }} />
      </Section>
    </div>
}`,...(c=(p=i.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const F=["Playground","AllVariations"];export{i as AllVariations,a as Playground,F as __namedExportsOrder,S as default};
