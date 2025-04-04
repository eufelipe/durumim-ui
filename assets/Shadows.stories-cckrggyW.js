import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{s as o}from"./shadows-BijbvVPh.js";import"./index-CP2yOfOm.js";import{a as l,T as c,D as h,b as m}from"./Title-DwXxmm5Q.js";import"./fonts-a9QyqyBU.js";const p=({title:s,children:n})=>e.jsxs("div",{style:{backgroundColor:"#E0E0E0",padding:"32px",borderRadius:"8px",marginBottom:"32px"},children:[e.jsx("h3",{style:{color:"#121212",marginBottom:"24px"},children:s}),e.jsx("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap"},children:n})]}),u=({name:s,shadow:n})=>e.jsxs("div",{children:[e.jsx("div",{style:{width:"120px",height:"80px",backgroundColor:"#FFFFFF",borderRadius:"4px",boxShadow:n,marginBottom:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"#333"},children:s}),e.jsx("div",{style:{fontSize:"12px",textAlign:"center",color:"#121212"},children:s})]},s),f={title:"Design Tokens/Shadows",parameters:{layout:"centered",backgrounds:{default:"dark"}}},t=()=>{const s={none:"Elements without shadow",xs:"Elements subtle like inactive buttons",sm:"Interactive elements, cards",md:"Cards in focus, hover buttons",lg:"Floating elements, dropdowns",xl:"Modals, dialogs",inset:"Pressed elements, active buttons"};return e.jsxs(l,{children:[e.jsx(c,{title:"Shadow"}),e.jsx(h,{description:`Shadow tokens create depth and hierarchy in the interface. 
        They help establish relationships between elements and indicate interactive states.`}),e.jsx(p,{title:"Visualization of Shadows",children:Object.entries(o).map(([n,a])=>e.jsx(u,{name:n,shadow:a},n))}),e.jsx(m,{tokens:o,columns:[{id:"name",header:"Name"},{id:"value",header:"Value"},{id:"useCase",header:"Recommended Use"}],title:"Shadow Tokens",transformers:{useCase:(n,a)=>s[a]||"Generic use case"}})]})};t.__docgenInfo={description:"",methods:[],displayName:"Shadows"};var i,r,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const useCases = {
    none: "Elements without shadow",
    xs: "Elements subtle like inactive buttons",
    sm: "Interactive elements, cards",
    md: "Cards in focus, hover buttons",
    lg: "Floating elements, dropdowns",
    xl: "Modals, dialogs",
    inset: "Pressed elements, active buttons"
  };
  return <Container>
      <Title title="Shadow" />

      <Description description="Shadow tokens create depth and hierarchy in the interface. 
        They help establish relationships between elements and indicate interactive states." />

      <ShadowsShowcase title="Visualization of Shadows">
        {Object.entries(shadows).map(([key, value]) => <ShadowExample key={key} name={key} shadow={value} />)}
      </ShadowsShowcase>

      <Table tokens={shadows} columns={[{
      id: "name",
      header: "Name"
    }, {
      id: "value",
      header: "Value"
    }, {
      id: "useCase",
      header: "Recommended Use"
    }]} title="Shadow Tokens" transformers={{
      useCase: (_, key) => useCases[key] || "Generic use case"
    }} />
    </Container>;
}`,...(d=(r=t.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const v=["Shadows"];export{t as Shadows,v as __namedExportsOrder,f as default};
