import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{a as l,T as p,D as m,b as x,c as k}from"./Title-DwXxmm5Q.js";import"./fonts-a9QyqyBU.js";const u={xs:"320px",sm:"480px",md:"768px",lg:"1024px",xl:"1280px",xxl:"1440px"},f={title:"Design Tokens/Breakpoints",parameters:{layout:"centered",backgrounds:{default:"dark"}}},s={render:()=>{const a={xs:"Extra small devices (portrait mode smartphones)",sm:"Small devices (landscape mode smartphones)",md:"Medium devices (tablets)",lg:"Large devices (desktops)",xl:"Extra large devices (large desktops)",xxl:"Extra extra large devices (very large desktops)"},o={color:k.secondary},i=[{id:"name",header:"Name"},{id:"value",header:"Value"},{id:"description",header:"Description"}],d={description:(g,c)=>a[c]||"Generic breakpoint"};return e.jsxs(l,{children:[e.jsx(p,{title:"Breakpoint"}),e.jsx(m,{children:"Breakpoint tokens define the limits used in media queries to adapt the layout to different screen sizes in responsive designs."}),e.jsx(x,{tokens:u,columns:i,transformers:d,headerStyle:o})]})}};var n,r,t;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const descriptions: Record<string, string> = {
      xs: "Extra small devices (portrait mode smartphones)",
      sm: "Small devices (landscape mode smartphones)",
      md: "Medium devices (tablets)",
      lg: "Large devices (desktops)",
      xl: "Extra large devices (large desktops)",
      xxl: "Extra extra large devices (very large desktops)"
    };
    const headerStyle = {
      color: colors.secondary
    };
    const columns = [{
      id: "name",
      header: "Name"
    }, {
      id: "value",
      header: "Value"
    }, {
      id: "description",
      header: "Description"
    }];
    const transformers: Record<string, (value: any, key: string) => any> = {
      description: (_, key) => descriptions[key] || "Generic breakpoint"
    };
    return <Container>
        <Title title="Breakpoint" />

        <Description>
          Breakpoint tokens define the limits used in media queries to adapt the
          layout to different screen sizes in responsive designs.
        </Description>

        <Table tokens={breakpoints} columns={columns} transformers={transformers} headerStyle={headerStyle} />
      </Container>;
  }
}`,...(t=(r=s.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const b=["Breakpoints"];export{s as Breakpoints,b as __namedExportsOrder,f as default};
