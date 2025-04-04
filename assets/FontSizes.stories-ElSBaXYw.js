import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{f as l}from"./font-sizes-CdC0_Hig.js";import{f as m}from"./fonts-a9QyqyBU.js";import{a as p,T as f,D as c,b as u}from"./Title-DwXxmm5Q.js";const T={title:"Design Tokens/FontSizes",parameters:{layout:"centered",backgrounds:{default:"dark"}}},n={render:()=>{const a=[{id:"name",header:"Name"},{id:"value",header:"Value"},{id:"pixels",header:"Pixels"},{id:"example",header:"Example"}],i={pixels:s=>`${Number(s.replace("rem",""))*16}px`,example:s=>e.jsx("span",{style:{fontFamily:m.default,fontSize:s,color:"#f8f8f8"},children:"Example text"})};return e.jsxs(p,{children:[e.jsx(f,{title:"Font Sizes Tokens"}),e.jsx(c,{children:"Font size tokens ensure consistent typography across the interface. These values define the size of text elements throughout your application."}),e.jsx(u,{tokens:l,columns:a,transformers:i})]})}};var t,o,r;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const BASE_FONT_SIZE = 16;
    const fontSizeColumns = [{
      id: "name",
      header: "Name"
    }, {
      id: "value",
      header: "Value"
    }, {
      id: "pixels",
      header: "Pixels"
    }, {
      id: "example",
      header: "Example"
    }];
    const fontSizeTransformers: Record<string, (value: any, key: string) => any> = {
      pixels: value => \`\${Number(value.replace("rem", "")) * BASE_FONT_SIZE}px\`,
      example: value => <span style={{
        fontFamily: fonts.default,
        fontSize: value,
        color: "#f8f8f8"
      }}>
          Example text
        </span>
    };
    return <Container>
        <Title title="Font Sizes Tokens" />

        <Description>
          Font size tokens ensure consistent typography across the interface.
          These values define the size of text elements throughout your
          application.
        </Description>

        <Table tokens={fontSizes} columns={fontSizeColumns} transformers={fontSizeTransformers} />
      </Container>;
  }
}`,...(r=(o=n.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const y=["FontSizes"];export{n as FontSizes,y as __namedExportsOrder,T as default};
