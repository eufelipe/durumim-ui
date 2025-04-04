import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{c as o,C as e,a as y,T as f,D as b}from"./Title-DwXxmm5Q.js";import"./fonts-a9QyqyBU.js";const j={title:"Design Tokens/Colors",parameters:{layout:"centered",backgrounds:{default:"dark"}}},r={render:()=>{const i={primary:o.primary,secondary:o.secondary,accent:o.accent,alert:o.alert},g={white:o.white,light:o.light,purify:o.purify,lightness:o.lightness,clean:o.clean,zinc:o.zinc,stone:o.stone,dark:o.dark,slate:o.slate,black:o.black},d={success:o.success,successLight:o.successLight,info:o.info,infoLight:o.infoLight,warning:o.warning,warningLight:o.warningLight,danger:o.danger,dangerLight:o.dangerLight},p={gray:o.gray,green:o.green,red:o.red,blue:o.blue,yellow:o.yellow,orange:o.orange,pink:o.pink},u=Object.entries(p).map(([s,h])=>{const t={};return Object.entries(h).forEach(([C,m])=>{t[C]=m}),n.jsx("div",{children:n.jsx(e,{colors:t,title:s.charAt(0).toUpperCase()+s.slice(1)})},s)});return n.jsxs(y,{children:[n.jsx(f,{title:"Colors"}),n.jsxs(b,{children:["Durumim UI uses a carefully curated color palette to create consistent, accessible, and visually appealing interfaces.",n.jsx("br",{}),"These color tokens provide a foundation for all UI components and can be used directly in your applications."]}),n.jsx(e,{colors:i,title:"Brand Colors"}),n.jsx(e,{colors:g,title:"Neutral Colors"}),n.jsx(e,{colors:d,title:"State Colors"}),n.jsx("h2",{style:{marginTop:"48px",marginBottom:"32px"},children:"Color Scales"}),u]})}};var l,a,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const brandColors: ColorPalette = {
      primary: colors.primary,
      secondary: colors.secondary,
      accent: colors.accent,
      alert: colors.alert
    };
    const neutralColors: ColorPalette = {
      white: colors.white,
      light: colors.light,
      purify: colors.purify,
      lightness: colors.lightness,
      clean: colors.clean,
      zinc: colors.zinc,
      stone: colors.stone,
      dark: colors.dark,
      slate: colors.slate,
      black: colors.black
    };
    const stateColors: ColorPalette = {
      success: colors.success,
      successLight: colors.successLight,
      info: colors.info,
      infoLight: colors.infoLight,
      warning: colors.warning,
      warningLight: colors.warningLight,
      danger: colors.danger,
      dangerLight: colors.dangerLight
    };
    const scales: Record<string, Record<string, string>> = {
      gray: colors.gray,
      green: colors.green,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.yellow,
      orange: colors.orange,
      pink: colors.pink
    };
    const scaleComponents = Object.entries(scales).map(([name, palette]) => {
      const colorMap: Record<string, string> = {};
      Object.entries(palette).forEach(([key, value]) => {
        colorMap[key] = value as string;
      });
      return <div key={name}>
          <ColorSwatches colors={colorMap} title={name.charAt(0).toUpperCase() + name.slice(1)} />
        </div>;
    });
    return <Container>
        <Title title="Colors" />

        <Description>
          Durumim UI uses a carefully curated color palette to create consistent,
          accessible, and visually appealing interfaces.
          <br />
          These color tokens provide a foundation for all UI components and can
          be used directly in your applications.
        </Description>

        <ColorSwatches colors={brandColors} title="Brand Colors" />

        <ColorSwatches colors={neutralColors} title="Neutral Colors" />

        <ColorSwatches colors={stateColors} title="State Colors" />

        <h2 style={{
        marginTop: "48px",
        marginBottom: "32px"
      }}>
          Color Scales
        </h2>

        {scaleComponents}
      </Container>;
  }
}`,...(c=(a=r.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const L=["Colors"];export{r as Colors,L as __namedExportsOrder,j as default};
