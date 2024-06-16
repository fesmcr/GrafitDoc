"use strict";(self.webpackChunkgrafit_doc=self.webpackChunkgrafit_doc||[]).push([[8931],{3947:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var n=t(4848),a=t(8453);t(1470),t(9365);const s={},l="CNode",o={id:"doc-sharp/CNode",title:"CNode",description:"CNode",source:"@site/docs/doc-sharp/CNode.md",sourceDirName:"doc-sharp",slug:"/doc-sharp/CNode",permalink:"/GrafitDoc/docs/doc-sharp/CNode",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CMeasure",permalink:"/GrafitDoc/docs/doc-sharp/CMeasure"},next:{title:"CPrimalDirectedGraph",permalink:"/GrafitDoc/docs/doc-sharp/CPrimalDirectedGraph"}},u={},i=[{value:"CNode",id:"cnode-1",level:2},{value:"Constructor",id:"constructor",level:2}];function c(e){const r={em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"cnode",children:"CNode"}),"\n",(0,n.jsx)(r.h2,{id:"cnode-1",children:"CNode"}),"\n",(0,n.jsx)(r.p,{children:"Represents a node in a graph."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Remarks"})}),"\n",(0,n.jsx)(r.p,{children:"The CNode class."}),"\n",(0,n.jsx)(r.h2,{id:"constructor",children:"Constructor"}),"\n",(0,n.jsx)(r.p,{children:"Dual Node"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"Id"})," - Dual Node Id"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"PrimId1"})," - Primal Edge Id (From)"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"PrimId2"})," - Primal Edge Id (To)"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},9365:(e,r,t)=>{t.d(r,{A:()=>l});t(6540);var n=t(4164);const a={tabItem:"tabItem_Ymn6"};var s=t(4848);function l(e){let{children:r,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,l),hidden:t,children:r})}},1470:(e,r,t)=>{t.d(r,{A:()=>I});var n=t(6540),a=t(4164),s=t(3104),l=t(6347),o=t(205),u=t(7485),i=t(1682),c=t(9466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}(t);return function(e){const r=(0,i.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:t}=e;const a=(0,l.W6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,u.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function m(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,s=h(e),[l,u]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[i,d]=f({queryString:t,groupId:a}),[m,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,c.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),v=(()=>{const e=i??m;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{v&&u(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function x(e){let{className:r,block:t,selectedValue:n,selectValue:l,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),c=e=>{const r=e.currentTarget,t=u.indexOf(r),a=o[t].value;a!==n&&(i(r),l(a))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;r=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;r=u[t]??u[u.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},r),children:o.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function j(e){let{lazy:r,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function C(e){const r=m(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...r}),(0,g.jsx)(j,{...e,...r})]})}function I(e){const r=(0,b.A)();return(0,g.jsx)(C,{...e,children:d(e.children)},String(r))}}}]);