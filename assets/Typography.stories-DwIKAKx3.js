import{j as e}from"./jsx-runtime-BjG_zV1W.js";import"./index-CP2yOfOm.js";import{f as o}from"./font-sizes-CdC0_Hig.js";import{f as a,l as p,a as y}from"./line-height-C7pa8R1a.js";import{f as i}from"./fonts-a9QyqyBU.js";import{a as E,T as H,D as z,b as x}from"./Title-DwXxmm5Q.js";const W=({fontFamily:t,children:n})=>e.jsx("span",{style:{fontFamily:t,color:"#f8f8f8"},children:n||"The quick brown fox jumps over the lazy dog"}),F=({fontWeight:t,children:n})=>e.jsx("span",{style:{fontFamily:i.default,fontWeight:t,color:"#f8f8f8"},children:n||"The quick brown fox jumps over the lazy dog"}),k=({lineHeight:t})=>e.jsxs("div",{style:{fontFamily:i.default,lineHeight:t,padding:"8px",backgroundColor:"#1a1a1a",border:"1px solid #333",color:"#f8f8f8"},children:["This is an example text with line height.",e.jsx("br",{}),"It shows how the text is spaced vertically.",e.jsx("br",{}),"Multiple lines help visualize the effect."]}),v=({letterSpacing:t,tokenName:n})=>{const l=n==="wider"||n==="widest";return e.jsx("span",{style:{fontFamily:i.default,letterSpacing:t,fontWeight:l?"bold":"normal",textTransform:l?"uppercase":"none",color:"#f8f8f8"},children:l?"LETTER SPACING EXAMPLE":"Letter spacing example"})},f=({title:t,children:n,marginBottom:l="32px"})=>e.jsxs("div",{style:{marginBottom:l},children:[e.jsx("h2",{style:{marginBottom:"16px"},children:t}),n]}),s=({style:t,children:n})=>e.jsx("div",{style:{...t,marginBottom:"8px",color:"#f8f8f8"},children:n}),c=({title:t,children:n})=>e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"8px",color:"#f8f8f8"},children:t}),n]}),R={title:"Design Tokens/Typography",parameters:{layout:"centered",backgrounds:{default:"dark"}}},d=()=>{const t={example:r=>e.jsx(W,{fontFamily:r})},n={example:r=>e.jsx(F,{fontWeight:r})},l={example:r=>e.jsx(k,{lineHeight:r})},b={example:(r,j)=>e.jsx(v,{letterSpacing:r,tokenName:j})},m=[{id:"name",header:"Token"},{id:"value",header:"Value"},{id:"example",header:"Example"}],g={h1:{fontFamily:i.heading,fontSize:o["4xl"],fontWeight:a.bold,lineHeight:p.tight},h2:{fontFamily:i.heading,fontSize:o["3xl"],fontWeight:a.bold,lineHeight:p.tight},h3:{fontFamily:i.heading,fontSize:o["2xl"],fontWeight:a.bold,lineHeight:p.tight},h4:{fontFamily:i.heading,fontSize:o.xl,fontWeight:a.bold,lineHeight:p.tight}},h={regular:{fontFamily:i.default,fontSize:o.md,fontWeight:a.regular,lineHeight:p.base,marginBottom:"16px"},small:{fontFamily:i.default,fontSize:o.sm,fontWeight:a.regular,lineHeight:p.base,marginBottom:"16px"},bold:{fontFamily:i.default,fontSize:o.md,fontWeight:a.bold},italic:{fontFamily:i.default,fontSize:o.md,fontStyle:"italic"},mono:{fontFamily:i.mono,fontSize:o.sm,backgroundColor:"#1a1a1a",padding:"4px 8px",borderRadius:"4px"},uppercase:{fontFamily:i.default,fontSize:o.md,fontWeight:a.bold,letterSpacing:y.wider,textTransform:"uppercase"}};return e.jsxs(E,{children:[e.jsx(H,{title:"Typography"}),e.jsx(z,{description:"Typography tokens define the font families, sizes, weights, line heights, and letter spacings used throughout the UI. These tokens work together to create a cohesive typographic system."}),e.jsx(f,{title:"Font Families",children:e.jsx(x,{tokens:i,columns:m,transformers:t})}),e.jsx(f,{title:"Font Weights",children:e.jsx(x,{tokens:a,columns:m,transformers:n})}),e.jsx(f,{title:"Line Heights",children:e.jsx(x,{tokens:p,columns:m,transformers:l})}),e.jsx(f,{title:"Letter Spacings",children:e.jsx(x,{tokens:y,columns:m,transformers:b})}),e.jsx(f,{title:"Typography Combinations",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px",backgroundColor:"#242424",borderRadius:"8px"},children:[e.jsxs(c,{title:"Heading Styles",children:[e.jsx(s,{style:g.h1,children:"Heading 1 (4xl)"}),e.jsx(s,{style:g.h2,children:"Heading 2 (3xl)"}),e.jsx(s,{style:g.h3,children:"Heading 3 (2xl)"}),e.jsx(s,{style:g.h4,children:"Heading 4 (xl)"})]}),e.jsxs(c,{title:"Body Text",children:[e.jsx(s,{style:h.regular,children:'This is regular body text using the default font at medium size. The line height is set to "base" to provide comfortable reading. This is typically used for the main content of your application.'}),e.jsx(s,{style:h.small,children:"This is smaller body text, which can be used for less prominent content, secondary information, or in space-constrained areas of the interface."})]}),e.jsxs(c,{title:"Special Text Styles",children:[e.jsx(s,{style:h.bold,children:"Bold text for emphasis"}),e.jsx(s,{style:h.italic,children:"Italic text for emphasis or quotes"}),e.jsx(s,{style:h.mono,children:"Monospace text for code"}),e.jsx(s,{style:h.uppercase,children:"Uppercase with wider spacing"})]})]})})]})};d.__docgenInfo={description:"",methods:[],displayName:"Typography"};var T,u,S;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const fontTransformers = {
    example: value => <FontExample fontFamily={value} />
  };
  const fontWeightTransformers = {
    example: value => <FontWeightExample fontWeight={value} />
  };
  const lineHeightTransformers = {
    example: value => <LineHeightExample lineHeight={value} />
  };
  const letterSpacingTransformers = {
    example: (value, key) => <LetterSpacingExample letterSpacing={value} tokenName={key} />
  };
  const columns = [{
    id: "name",
    header: "Token"
  }, {
    id: "value",
    header: "Value"
  }, {
    id: "example",
    header: "Example"
  }];
  const headingStyles = {
    h1: {
      fontFamily: fonts.heading,
      fontSize: fontSizes["4xl"],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.tight
    },
    h2: {
      fontFamily: fonts.heading,
      fontSize: fontSizes["3xl"],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.tight
    },
    h3: {
      fontFamily: fonts.heading,
      fontSize: fontSizes["2xl"],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.tight
    },
    h4: {
      fontFamily: fonts.heading,
      fontSize: fontSizes.xl,
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.tight
    }
  };
  const textStyles = {
    regular: {
      fontFamily: fonts.default,
      fontSize: fontSizes.md,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.base,
      marginBottom: "16px"
    },
    small: {
      fontFamily: fonts.default,
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.base,
      marginBottom: "16px"
    },
    bold: {
      fontFamily: fonts.default,
      fontSize: fontSizes.md,
      fontWeight: fontWeights.bold
    },
    italic: {
      fontFamily: fonts.default,
      fontSize: fontSizes.md,
      fontStyle: "italic"
    },
    mono: {
      fontFamily: fonts.mono,
      fontSize: fontSizes.sm,
      backgroundColor: "#1a1a1a",
      padding: "4px 8px",
      borderRadius: "4px"
    },
    uppercase: {
      fontFamily: fonts.default,
      fontSize: fontSizes.md,
      fontWeight: fontWeights.bold,
      letterSpacing: letterSpacings.wider,
      textTransform: "uppercase"
    }
  };
  return <Container>
      <Title title="Typography" />

      <Description description="Typography tokens define the font families, sizes, weights, line heights, and letter spacings used throughout the UI. These tokens work together to create a cohesive typographic system." />

      <TypographySection title="Font Families">
        <Table tokens={fonts} columns={columns} transformers={fontTransformers} />
      </TypographySection>

      <TypographySection title="Font Weights">
        <Table tokens={fontWeights} columns={columns} transformers={fontWeightTransformers} />
      </TypographySection>

      <TypographySection title="Line Heights">
        <Table tokens={lineHeights} columns={columns} transformers={lineHeightTransformers} />
      </TypographySection>

      <TypographySection title="Letter Spacings">
        <Table tokens={letterSpacings} columns={columns} transformers={letterSpacingTransformers} />
      </TypographySection>

      <TypographySection title="Typography Combinations">
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        padding: "24px",
        backgroundColor: "#242424",
        borderRadius: "8px"
      }}>
          <TypeExampleCard title="Heading Styles">
            <TypeExampleText style={headingStyles.h1}>
              Heading 1 (4xl)
            </TypeExampleText>
            <TypeExampleText style={headingStyles.h2}>
              Heading 2 (3xl)
            </TypeExampleText>
            <TypeExampleText style={headingStyles.h3}>
              Heading 3 (2xl)
            </TypeExampleText>
            <TypeExampleText style={headingStyles.h4}>
              Heading 4 (xl)
            </TypeExampleText>
          </TypeExampleCard>

          <TypeExampleCard title="Body Text">
            <TypeExampleText style={textStyles.regular}>
              This is regular body text using the default font at medium size.
              The line height is set to "base" to provide comfortable reading.
              This is typically used for the main content of your application.
            </TypeExampleText>
            <TypeExampleText style={textStyles.small}>
              This is smaller body text, which can be used for less prominent
              content, secondary information, or in space-constrained areas of
              the interface.
            </TypeExampleText>
          </TypeExampleCard>

          <TypeExampleCard title="Special Text Styles">
            <TypeExampleText style={textStyles.bold}>
              Bold text for emphasis
            </TypeExampleText>
            <TypeExampleText style={textStyles.italic}>
              Italic text for emphasis or quotes
            </TypeExampleText>
            <TypeExampleText style={textStyles.mono}>
              Monospace text for code
            </TypeExampleText>
            <TypeExampleText style={textStyles.uppercase}>
              Uppercase with wider spacing
            </TypeExampleText>
          </TypeExampleCard>
        </div>
      </TypographySection>
    </Container>;
}`,...(S=(u=d.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};const q=["Typography"];export{d as Typography,q as __namedExportsOrder,R as default};
