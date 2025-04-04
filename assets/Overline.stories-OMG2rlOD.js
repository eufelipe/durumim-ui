import{j as e}from"./jsx-runtime-BjG_zV1W.js";import"./index-CP2yOfOm.js";import{O as i,H as m,T as t}from"./Icon-B_KrkbWm.js";import{S as n}from"./Title-DwXxmm5Q.js";import"./font-sizes-CdC0_Hig.js";import"./line-height-C7pa8R1a.js";import"./fonts-a9QyqyBU.js";import"./radii-fbJ-3mQ3.js";import"./shadows-BijbvVPh.js";import"./space-DaNnoG_q.js";const S={title:"Typography/Overline",component:i,parameters:{layout:"centered",backgrounds:{default:"dark"},docs:{description:{component:"Overline component for displaying category labels, section headers, and other small, uppercase text elements."}}},tags:["autodocs"],argTypes:{children:{control:"text",description:"The overline content"},as:{options:["span","div","p"],control:{type:"select"},description:"HTML element to be rendered"},className:{control:"text",description:"Additional CSS classes"}}},l={args:{children:"OVERLINE TEXT",as:void 0,className:""},render:x=>e.jsx("div",{style:{color:"#fff"},children:e.jsx(i,{...x})})},s={render:()=>e.jsxs("div",{style:{padding:"20px",maxWidth:"800px",color:"#fff"},children:[e.jsx(n,{title:"Basic Overline",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:e.jsx(i,{children:"CATEGORY LABEL"})})}),e.jsx(n,{title:"With Headings",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:e.jsxs("div",{children:[e.jsx(i,{style:{marginBottom:"8px",color:"#64B5F6"},children:"FEATURED ARTICLE"}),e.jsx(m,{level:"h3",children:"Title of the article"}),e.jsx(t,{variant:"body",style:{marginTop:"8px"},children:"example of the content of the article"})]})})}),e.jsx(n,{title:"Usage Examples",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",alignItems:"baseline"},children:[e.jsx(i,{style:{minWidth:"120px"},children:"MAY 2023"}),e.jsx(t,{variant:"body",children:"Project kickoff meeting and initial planning phase."})]}),e.jsxs("div",{style:{display:"flex",alignItems:"baseline",marginTop:"12px"},children:[e.jsx(i,{style:{minWidth:"120px"},children:"JUNE 2023"}),e.jsx(t,{variant:"body",children:"Design phase completion and development start."})]}),e.jsxs("div",{style:{display:"flex",alignItems:"baseline",marginTop:"12px"},children:[e.jsx(i,{style:{minWidth:"120px"},children:"JULY 2023"}),e.jsx(t,{variant:"body",children:"Beta testing and final revisions."})]})]})})}),e.jsx(n,{title:"Custom CSS Class",children:e.jsx(i,{className:"custom-overline",style:{color:"#64B5F6",letterSpacing:"0.2em"},children:"ENHANCED SPACING"})})]})};var r,a,o;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    children: 'OVERLINE TEXT',
    as: undefined,
    className: ''
  },
  render: args => <div style={{
    color: '#fff'
  }}>
      <Overline {...args} />
    </div>
}`,...(o=(a=l.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var d,c,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px',
    maxWidth: '800px',
    color: '#fff'
  }}>
      <Section title="Basic Overline">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <Overline>
            CATEGORY LABEL
          </Overline>
        </div>
      </Section>

  

      <Section title="With Headings">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <div>
            <Overline style={{
            marginBottom: '8px',
            color: '#64B5F6'
          }}>FEATURED ARTICLE</Overline>
            <Heading level="h3">Title of the article</Heading>
            <Text variant="body" style={{
            marginTop: '8px'
          }}>
              example of the content of the article
            </Text>
          </div>
        </div>
      </Section>



      <Section title="Usage Examples">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <div>
            <div style={{
            display: 'flex',
            alignItems: 'baseline'
          }}>
              <Overline style={{
              minWidth: '120px'
            }}>MAY 2023</Overline>
              <Text variant="body">Project kickoff meeting and initial planning phase.</Text>
            </div>
            <div style={{
            display: 'flex',
            alignItems: 'baseline',
            marginTop: '12px'
          }}>
              <Overline style={{
              minWidth: '120px'
            }}>JUNE 2023</Overline>
              <Text variant="body">Design phase completion and development start.</Text>
            </div>
            <div style={{
            display: 'flex',
            alignItems: 'baseline',
            marginTop: '12px'
          }}>
              <Overline style={{
              minWidth: '120px'
            }}>JULY 2023</Overline>
              <Text variant="body">Beta testing and final revisions.</Text>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Custom CSS Class">
        <Overline className="custom-overline" style={{
        color: '#64B5F6',
        letterSpacing: '0.2em'
      }}>
          ENHANCED SPACING
        </Overline>
      </Section>
    </div>
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const b=["Playground","AllVariations"];export{s as AllVariations,l as Playground,b as __namedExportsOrder,S as default};
