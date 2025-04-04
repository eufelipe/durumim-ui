import{j as e}from"./jsx-runtime-BjG_zV1W.js";import"./index-CP2yOfOm.js";import{I as n}from"./Icon-B_KrkbWm.js";import{I as s}from"./Icons-DaGJA4or.js";import{R as v}from"./Title-DwXxmm5Q.js";import"./font-sizes-CdC0_Hig.js";import"./line-height-C7pa8R1a.js";import"./fonts-a9QyqyBU.js";import"./radii-fbJ-3mQ3.js";import"./shadows-BijbvVPh.js";import"./space-DaNnoG_q.js";const A={title:"Components/Icon",component:n,parameters:{layout:"centered",docs:{description:{component:"Icon component that uses React Icons as a base, allowing flexible integration with the design system."}}},tags:["autodocs"],argTypes:{icon:{control:"select",options:Object.keys(s),mapping:s,description:"The icon component to be rendered"},size:{options:["xs","sm","md","lg","xl"],control:{type:"radio"},description:"Icon size",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},color:{options:["inherit","primary","secondary","accent","success","danger","warning","info","white","light","dark","black"],control:{type:"select"},description:"Icon color",table:{type:{summary:"string"},defaultValue:{summary:"inherit"}}}}},t={color:"#fff",marginBottom:"16px"},o={args:{icon:s.User,size:"md",color:"primary"},render:i=>e.jsx(n,{...i})},r={render:()=>e.jsxs("div",{style:{padding:"20px",color:"white"},children:[e.jsx("h3",{style:t,children:"Icon Sizes"}),e.jsxs(v,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(n,{icon:s.User,size:"xs"}),e.jsx("span",{children:"XS"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(n,{icon:s.User,size:"sm"}),e.jsx("span",{children:"SM"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(n,{icon:s.User,size:"md"}),e.jsx("span",{children:"MD"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(n,{icon:s.User,size:"lg"}),e.jsx("span",{children:"LG"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(n,{icon:s.User,size:"xl"}),e.jsx("span",{children:"XL"})]})]})]})},l={render:()=>e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{style:t,children:"Icon Colors"}),e.jsxs(v,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(n,{icon:s.Heart,size:"lg",color:"primary"}),e.jsx("span",{style:{color:"white"},children:"Primary"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(n,{icon:s.Heart,size:"lg",color:"secondary"}),e.jsx("span",{style:{color:"white"},children:"Secondary"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(n,{icon:s.Heart,size:"lg",color:"accent"}),e.jsx("span",{style:{color:"white"},children:"Accent"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(n,{icon:s.Heart,size:"lg",color:"success"}),e.jsx("span",{style:{color:"white"},children:"Success"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(n,{icon:s.Heart,size:"lg",color:"error"}),e.jsx("span",{style:{color:"white"},children:"Danger"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(n,{icon:s.Heart,size:"lg",color:"warning"}),e.jsx("span",{style:{color:"white"},children:"Warning"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(n,{icon:s.Heart,size:"lg",color:"info"}),e.jsx("span",{style:{color:"white"},children:"Info"})]})]})]})},c={render:()=>e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{style:t,children:"Icon Library"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"20px"},children:Object.entries(s).map(([i,z])=>e.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"12px",backgroundColor:"rgba(255, 255, 255, 0.1)",borderRadius:"8px",gap:"10px",minWidth:"130px"},children:[e.jsx(n,{icon:z,size:"md",color:"white"}),e.jsx("span",{style:{color:"white",fontSize:"12px"},children:i})]},i))})]})};var a,p,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    icon: Icons.User,
    size: 'md',
    color: 'primary'
  },
  render: args => <Icon {...args} />
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var x,m,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px',
    color: 'white'
  }}>
      <h3 style={headingStyle}>Icon Sizes</h3>
      <Row>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }}>
          <Icon icon={Icons.User} size="xs" />
          <span>XS</span>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }}>
          <Icon icon={Icons.User} size="sm" />
          <span>SM</span>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }}>
          <Icon icon={Icons.User} size="md" />
          <span>MD</span>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }}>
          <Icon icon={Icons.User} size="lg" />
          <span>LG</span>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }}>
          <Icon icon={Icons.User} size="xl" />
          <span>XL</span>
        </div>
      </Row>
    </div>
}`,...(y=(m=r.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var g,h,I;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px'
  }}>
      <h3 style={headingStyle}>Icon Colors</h3>
      <Row>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }}>
          <Icon icon={Icons.Heart} size="lg" color="primary" />
          <span style={{
          color: 'white'
        }}>Primary</span>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }}>
          <Icon icon={Icons.Heart} size="lg" color="secondary" />
          <span style={{
          color: 'white'
        }}>Secondary</span>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }}>
          <Icon icon={Icons.Heart} size="lg" color="accent" />
          <span style={{
          color: 'white'
        }}>Accent</span>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }}>
          <Icon icon={Icons.Heart} size="lg" color="success" />
          <span style={{
          color: 'white'
        }}>Success</span>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }}>
          <Icon icon={Icons.Heart} size="lg" color="error" />
          <span style={{
          color: 'white'
        }}>Danger</span>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }}>
          <Icon icon={Icons.Heart} size="lg" color="warning" />
          <span style={{
          color: 'white'
        }}>Warning</span>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }}>
          <Icon icon={Icons.Heart} size="lg" color="info" />
          <span style={{
          color: 'white'
        }}>Info</span>
        </div>
      </Row>
    </div>
}`,...(I=(h=l.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var f,u,j;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px'
  }}>
      <h3 style={headingStyle}>Icon Library</h3>
      <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px'
    }}>
        {Object.entries(Icons).map(([name, IconComponent]) => <div key={name} style={{
        display: 'flex',
        alignItems: 'center',
        padding: '12px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '8px',
        gap: '10px',
        minWidth: '130px'
      }}>
            <Icon icon={IconComponent} size="md" color="white" />
            <span style={{
          color: 'white',
          fontSize: '12px'
        }}>
              {name}
            </span>
          </div>)}
      </div>
    </div>
}`,...(j=(u=c.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};const M=["Playground","AllSizes","Colors","IconLibrary"];export{r as AllSizes,l as Colors,c as IconLibrary,o as Playground,M as __namedExportsOrder,A as default};
