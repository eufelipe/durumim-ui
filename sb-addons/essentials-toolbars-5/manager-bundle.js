try{
var l=__REACT__,{Children:ne,Component:ie,Fragment:se,Profiler:ce,PureComponent:ue,StrictMode:pe,Suspense:me,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:de,cloneElement:be,createContext:Se,createElement:Te,createFactory:ye,createRef:Oe,forwardRef:_e,isValidElement:fe,lazy:ve,memo:Ce,useCallback:v,useContext:Ie,useDebugValue:Ee,useEffect:g,useImperativeHandle:ge,useLayoutEffect:xe,useMemo:he,useReducer:ke,useRef:L,useState:R,version:Ae}=__REACT__;var Pe=__STORYBOOKAPI__,{ActiveTabs:Me,Consumer:we,ManagerContext:Ge,Provider:He,addons:x,combineParameters:Ve,controlOrMetaKey:De,controlOrMetaSymbol:Fe,eventMatchesShortcut:Ke,eventToShortcut:We,isMacLike:Ye,isShortcutTaken:$e,keyToSymbol:ze,merge:Ue,mockChannel:je,optionOrAltSymbol:qe,shortcutMatchesShortcut:Ze,shortcutToHumanString:Je,types:B,useAddonState:Qe,useArgTypes:Xe,useArgs:et,useChannel:tt,useGlobalTypes:N,useGlobals:h,useParameter:ot,useSharedState:rt,useStoryPrepared:at,useStorybookApi:P,useStorybookState:lt}=__STORYBOOKAPI__;var ut=__STORYBOOKCOMPONENTS__,{A:pt,ActionBar:mt,AddonPanel:dt,Badge:bt,Bar:St,Blockquote:Tt,Button:yt,Code:Ot,DL:_t,Div:ft,DocumentWrapper:vt,ErrorFormatter:Ct,FlexBar:It,Form:Et,H1:gt,H2:xt,H3:ht,H4:kt,H5:At,H6:Lt,HR:Rt,IconButton:M,IconButtonSkeleton:Bt,Icons:k,Img:Nt,LI:Pt,Link:Mt,ListItem:wt,Loader:Gt,OL:Ht,P:Vt,Placeholder:Dt,Pre:Ft,ResetWrapper:Kt,ScrollArea:Wt,Separator:w,Spaced:Yt,Span:$t,StorybookIcon:zt,StorybookLogo:Ut,Symbols:jt,SyntaxHighlighter:qt,TT:Zt,TabBar:Jt,TabButton:Qt,TabWrapper:Xt,Table:eo,Tabs:to,TabsState:oo,TooltipLinkList:G,TooltipMessage:ro,TooltipNote:ao,UL:lo,WithTooltip:H,WithTooltipPure:no,Zoom:io,codeCommon:so,components:co,createCopyToClipboardFunction:uo,getStoryHref:po,icons:mo,interleaveSeparators:bo,nameSpaceClassNames:So,resetComponents:To,withReset:yo}=__STORYBOOKCOMPONENTS__;var Co=__STORYBOOKCLIENTLOGGER__,{deprecate:V,logger:Io,once:Eo,pretty:go}=__STORYBOOKCLIENTLOGGER__;var K=({active:o,title:t,icon:e,description:r,onClick:a})=>l.createElement(M,{active:o,title:r,onClick:a},e&&l.createElement(k,{icon:e}),t?`\xA0${t}`:null),W=["reset"],Y=o=>o.filter(t=>!W.includes(t.type)).map(t=>t.value),y="addon-toolbars",$=async(o,t,e)=>{e&&e.next&&await o.setAddonShortcut(y,{label:e.next.label,defaultShortcut:e.next.keys,actionName:`${t}:next`,action:e.next.action}),e&&e.previous&&await o.setAddonShortcut(y,{label:e.previous.label,defaultShortcut:e.previous.keys,actionName:`${t}:previous`,action:e.previous.action}),e&&e.reset&&await o.setAddonShortcut(y,{label:e.reset.label,defaultShortcut:e.reset.keys,actionName:`${t}:reset`,action:e.reset.action})},z=o=>t=>{let{id:e,toolbar:{items:r,shortcuts:a}}=t,d=P(),[O,i]=h(),n=L([]),s=O[e],C=v(()=>{i({[e]:""})},[i]),I=v(()=>{let m=n.current,p=m.indexOf(s),c=p===m.length-1?0:p+1,_=n.current[c];i({[e]:_})},[n,s,i]),u=v(()=>{let m=n.current,p=m.indexOf(s),c=p>-1?p:0,_=c===0?m.length-1:c-1,f=n.current[_];i({[e]:f})},[n,s,i]);return g(()=>{a&&$(d,e,{next:{...a.next,action:I},previous:{...a.previous,action:u},reset:{...a.reset,action:C}})},[d,e,a,I,u,C]),g(()=>{n.current=Y(r)},[]),l.createElement(o,{cycleValues:n.current,...t})},D=({currentValue:o,items:t})=>o!=null&&t.find(e=>e.value===o),U=({currentValue:o,items:t})=>{let e=D({currentValue:o,items:t});if(e)return e.icon},j=({currentValue:o,items:t})=>{let e=D({currentValue:o,items:t});if(e)return e.title},q=({left:o,right:t,title:e,value:r,icon:a,hideIcon:d,onClick:O,currentValue:i})=>{let n=a&&l.createElement(k,{style:{opacity:1},icon:a}),s={id:r||i,active:i===r,right:t,title:e,left:o,onClick:O};return a&&!d&&(s.left=n),s},Z=z(({id:o,name:t,description:e,toolbar:{icon:r,items:a,title:d,preventDynamicIcon:O,dynamicTitle:i}})=>{let[n,s]=h(),[C,I]=R(!1),u=n[o],m=!!u,p=r,c=d;O||(p=U({currentValue:u,items:a})||p),c||(c=t,V("`showName` is deprecated as `name` will stop having dual purposes in the future. Please specify a `title` in `globalTypes` instead.")),i&&(c=j({currentValue:u,items:a})||c);let _=v(f=>{s({[o]:f})},[u,s]);return l.createElement(H,{placement:"top",tooltip:({onHide:f})=>{let F=a.filter(({type:E})=>{let A=!0;return E==="reset"&&!u&&(A=!1),A}).map(E=>q({...E,currentValue:u,onClick:()=>{_(E.value),f()}}));return l.createElement(G,{links:F})},closeOnOutsideClick:!0,onVisibleChange:I},l.createElement(K,{active:C||m,description:e||"",icon:p,title:c||""}))}),J={type:"item",value:""},Q=(o,t)=>({...t,name:t.name||o,description:t.description||o,toolbar:{...t.toolbar,items:t.toolbar.items.map(e=>{let r=typeof e=="string"?{value:e,title:e}:e;return r.type==="reset"&&t.toolbar.icon&&(r.icon=t.toolbar.icon,r.hideIcon=!0),{...J,...r}})}}),X=()=>{let o=N(),t=Object.keys(o).filter(e=>!!o[e].toolbar);return t.length?l.createElement(l.Fragment,null,l.createElement(w,null),t.map(e=>{let r=Q(e,o[e]);return l.createElement(Z,{key:e,id:e,...r})})):null};x.register(y,()=>x.add(y,{title:y,id:"toolbar",type:B.TOOL,match:()=>!0,render:()=>l.createElement(X,null)}));
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=manager-bundle.js.map