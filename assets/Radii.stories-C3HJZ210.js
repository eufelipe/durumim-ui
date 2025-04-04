import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{a as u,T as l,D as m,d as c,c as h,b as p}from"./Title-DwXxmm5Q.js";import{r as a}from"./radii-fbJ-3mQ3.js";import"./index-CP2yOfOm.js";import"./fonts-a9QyqyBU.js";const R={title:"Design Tokens/Radii",parameters:{layout:"centered",backgrounds:{default:"dark"}}},n=()=>{const o={none:"Elements without rounding",xs:"Elements with subtle rounding, such as small inputs and buttons",sm:"Elements with medium rounding, such as cards and buttons",md:"Elements with more pronounced rounding",lg:"Elements with expressive rounding, such as modals",full:"Elements with full rounding, such as badges or avatars"};return e.jsxs(u,{children:[e.jsx(l,{title:"Radius"}),e.jsxs(m,{children:["Border-radius tokens define the rounding of the corners of elements.",e.jsx("br",{}),"They help create a consistent visual language and affect the perception of smoothness of the interface."]}),e.jsx(c,{tokens:a,title:"Visualization of Border Radius",renderSample:(d,s)=>e.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:h.primary,borderRadius:s}})}),e.jsx(p,{tokens:a,columns:[{id:"name",header:"Name"},{id:"value",header:"Value"},{id:"useCase",header:"Recommended Use"}],title:"Border Radius Tokens",transformers:{useCase:(d,s)=>o[s]||"Generic use case"}})]})};n.__docgenInfo={description:"",methods:[],displayName:"Radii"};var r,t,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const useCases = {
    none: "Elements without rounding",
    xs: "Elements with subtle rounding, such as small inputs and buttons",
    sm: "Elements with medium rounding, such as cards and buttons",
    md: "Elements with more pronounced rounding",
    lg: "Elements with expressive rounding, such as modals",
    full: "Elements with full rounding, such as badges or avatars"
  };
  return <Container>
      <Title title="Radius" />

      <Description>
        Border-radius tokens define the rounding of the corners of elements.
        <br />
        They help create a consistent visual language and affect the perception
        of smoothness of the interface.
      </Description>

      <TokenVisualizer tokens={radii} title="Visualization of Border Radius" renderSample={(_, value) => <div style={{
      width: "100px",
      height: "100px",
      backgroundColor: colors.primary,
      borderRadius: value
    }} />} />

      <Table tokens={radii} columns={[{
      id: "name",
      header: "Name"
    }, {
      id: "value",
      header: "Value"
    }, {
      id: "useCase",
      header: "Recommended Use"
    }]} title="Border Radius Tokens" transformers={{
      useCase: (_, key) => useCases[key] || "Generic use case"
    }} />
    </Container>;
}`,...(i=(t=n.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const w=["Radii"];export{n as Radii,w as __namedExportsOrder,R as default};
