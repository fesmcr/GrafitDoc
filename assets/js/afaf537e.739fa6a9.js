"use strict";(self.webpackChunkgrafit_doc=self.webpackChunkgrafit_doc||[]).push([[6163],{9763:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>f});var a=r(4848),n=r(8453),i=r(6540),s=r(1093);const o=function(){const t=(0,i.useRef)(null);var e=null,r=0,n=0,o=20,l=10,c=10,d=1e4,h=[];function f(t,e){return[(t-e)*o,(t+e)*o/2]}function u(t,a){const[i,s]=f(a,t),[o,l]=f(a+1,t),[c,d]=f(a+1,t+1),[h,u]=f(a,t+1);e.append("polygon").attr("points",`${i+r/2},${s+n/4} ${o+r/2},${l+n/4} ${c+r/2},${d+n/4} ${h+r/2},${u+n/4}`).attr("stroke","white").attr("stroke-width",1).attr("fill","#87cbc0").attr("id",`square-${t}-${a}`);const p=(i+c)/2+r/2,y=(s+d)/2+n/4,x=Math.sqrt((c-i)**2+(d-s)**2)/2,g=Math.sqrt((h-o)**2+(u-l)**2)/2;e.append("ellipse").attr("cx",p).attr("cy",y).attr("rx",g/2).attr("ry",x/2).attr("stroke","hsl(7, 100%, 72%)").attr("stroke-width",1).attr("fill","hsl(7, 100%, 72%)").style("opacity",0).attr("id",`oval-${t}-${a}`)}function p(t,a){const i=e.select(`#oval-${t}-${a}`),s=i.attr("fill");let o=+i.style("opacity");const l=s.match(/hsl\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\)/);if(null==l){const t=s.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);if(t){let[e,r,a,n,i]=t;r=parseInt(r),a=parseInt(a),n=parseInt(n),l=function(t,e,r){t/=255,e/=255,r/=255;let a=Math.max(t,e,r),n=Math.min(t,e,r),i=a-n,s=0;s=0===i?0:a===t?(e-r)/i%6:a===e?(r-t)/i+2:(t-e)/i+4;s=Math.round(60*s),s<0&&(s+=360);let o=(a+n)/2,l=0;0!==i&&(l=i/(1-Math.abs(2*o-.05)));return s=Math.round(s),l=Math.round(100*l),o=Math.round(100*o),[[],s,l,o]}(r,a,n)}}if(l){let[s,c,d,h]=l;c=parseInt(c),d=parseInt(d),h=parseInt(h),o=Math.min(1,o+.05),1==o&&(h=Math.max(0,h-.05)),i.attr("stroke",`hsl(${c}, ${d}%, ${h}%)`).attr("fill",`hsl(${c}, ${d}%, ${h}%)`),i.transition().delay(200).style("opacity",o+.1).on("end",(function(){!function(t,a){const[i,s]=f(a,t),[o,l]=f(a+1,t),[c,d]=f(a+1,t+1),[h,u]=f(a,t+1),p=(i+c)/2+r/2,y=(s+d)/2+n/4;e.append("text").attr("x",p).attr("y",y).attr("fill","rgb(80 80 80 / 58%)").attr("font-size","14px").attr("text-anchor","middle").attr("opacity",1).text("+1").transition().duration(500).attr("y",y-15).attr("opacity",0).remove()}(t,a)}))}}function y(t,a){const[i,s]=f(a,t),[o,l]=f(a+1,t),[c,d]=f(a+1,t+1),[h,u]=f(a,t+1),p=(i+c)/2+r/2,y=(s+d)/2+n/4;e.append("rect").attr("x",p-1).attr("y",y-7.5).attr("width",2).attr("height",10).attr("stroke","#fbf4de").attr("stroke-width",1).attr("fill","#fbf4de"),e.append("line").attr("x1",p-1).attr("y1",y-5).attr("x2",p-5).attr("y2",y-10).attr("stroke","#fbf4de").attr("stroke-width",1),e.append("line").attr("x1",p+1).attr("y1",y-5).attr("x2",p+5).attr("y2",y-10).attr("stroke","#fbf4de").attr("stroke-width",1),e.append("circle").attr("cx",p-2.5).attr("cy",y-12.5).attr("r",4).attr("stroke","#fbf4de").attr("stroke-width",1).attr("fill","#fbf4de"),e.append("circle").attr("cx",p+2.5).attr("cy",y-12.5).attr("r",4).attr("stroke","#fbf4de").attr("stroke-width",1).attr("fill","#fbf4de"),e.append("circle").attr("cx",p).attr("cy",y-17.5).attr("r",4).attr("stroke","#fbf4de").attr("stroke-width",1).attr("fill","#fbf4de")}function x(t){return new Promise((a=>{if(s.Ltv("#person").empty()){const[a,i]=t[0];!function(){const t=e.append("g").attr("id","person");t.append("circle").attr("cx",1).attr("cy",-11).attr("r",5).attr("fill","white").style("opacity",.7),t.append("rect").attr("x",-2).attr("y",-6).attr("width",6).attr("height",10).attr("fill","white").style("opacity",.7),t.append("line").attr("x1",-2).attr("y1",-6).attr("x2",-5).attr("y2",-1).attr("stroke","white").attr("stroke-width",2).style("opacity",.7),t.append("line").attr("x1",4).attr("y1",-6).attr("x2",7).attr("y2",-1).attr("stroke","white").attr("stroke-width",2).style("opacity",.7),t.append("line").attr("x1",-1).attr("y1",4).attr("x2",-2).attr("y2",9).attr("stroke","white").attr("stroke-width",2).style("opacity",.7),t.append("line").attr("x1",3).attr("y1",4).attr("x2",4).attr("y2",9).attr("stroke","white").attr("stroke-width",2).style("opacity",.7),t.append("circle").attr("cx",0).attr("cy",-10).attr("r",5).attr("fill","#ff846d"),t.append("rect").attr("x",-3).attr("y",-5).attr("width",6).attr("height",10).attr("fill","#ff846d"),t.append("line").attr("x1",-3).attr("y1",-5).attr("x2",-6).attr("y2",0).attr("stroke","#ff846d").attr("stroke-width",2),t.append("line").attr("x1",3).attr("y1",-5).attr("x2",6).attr("y2",0).attr("stroke","#ff846d").attr("stroke-width",2),t.append("line").attr("x1",-2).attr("y1",5).attr("x2",-3).attr("y2",10).attr("stroke","#ff846d").attr("stroke-width",2),t.append("line").attr("x1",2).attr("y1",5).attr("x2",3).attr("y2",10).attr("stroke","#ff846d").attr("stroke-width",2)}();const[o,l]=f(i,a),[c,d]=f(i+1,a+1),h=(o+c)/2+r/2,u=(l+d)/2+n/4-10;p(a,i),s.Ltv("#person").attr("transform",`translate(${h},${u})`),s.Ltv("#person").transition().duration(300).style("opacity",1)}let i=0;!function e(){if(i>=t.length){const[e,r]=t[i-1];return function(t,e){s.Ltv(`#flag-pole-${t}-${e}`).transition().duration(300).style("opacity",0).remove(),s.Ltv(`#flag-${t}-${e}`).transition().duration(300).style("opacity",0).remove()}(e,r),void s.Ltv("#person").transition().duration(300).style("opacity",0).on("end",a).remove()}const[o,l]=t[i],[c,d]=f(l,o),[h,u]=f(l+1,o+1),y=(c+h)/2+r/2,x=(d+u)/2+n/4-10;i++,p(o,l),s.Ltv("#person").transition().duration(200).attr("transform",`translate(${y},${x})`).on("end",e)}()}))}function g(t,e,r){if(-1===r[t][e])return[];const a=[t];for(h[t]++;t!==e;)t=r[t][e],h[t]++,a.push(t);return a}function m(t,e){return t.map((t=>[Math.floor(t/e),t%e]))}function w(t,a){const[i,s]=f(a,t),[o,l]=f(a+1,t),[c,d]=f(a+1,t+1),[h,u]=f(a,t+1),p=(i+c)/2+r/2,y=(s+d)/2+n/4;e.append("rect").attr("x",p-1).attr("y",y-20).attr("width",2).attr("height",20).attr("fill","rgb(80 80 80 / 58%)").attr("id",`flag-pole-${t}-${a}`),e.append("polygon").attr("points",`${p},${y-20} ${p+10},${y-15} ${p},${y-10}`).attr("fill","rgb(80 80 80 / 58%)").attr("id",`flag-${t}-${a}`)}function b(){e.selectAll("ellipse").on("mouseover",(function(t){const r=s.Ltv(this).attr("id"),[a,n]=s.WnM(t),[i,o]=function(t){const e=/^oval-(\d+)-(\d+)$/,r=t.match(e);if(r){return[parseInt(r[1],10),parseInt(r[2],10)]}return[0,0]}(r);e.append("text").attr("id","hover-id").attr("x",a).attr("y",n-10).attr("fill","black").attr("font-size","12px").attr("text-anchor","middle").text(h[i*l+o])})).on("mousemove",(function(t){const[r,a]=s.WnM(t);e.select("#hover-id").attr("x",r).attr("y",a-10)})).on("mouseout",(function(){e.select("#hover-id").remove()}))}async function v(){for(let s=0;s<c;s++)for(let t=0;t<l;t++)u(s,t);b();var t=function(t){const e=new Set;for(;e.size<t;){const t=Math.floor(Math.random()*c),r=Math.floor(Math.random()*l),a=`${t}-${r}`;t*l+r!=0&&t*l+r!=99&&(e.has(a)||(y(t,r),e.add(a)))}return e}(10);const{adjMatrix:e,matrixTree:r}=function(t,e,r){const a=[];let n=[];const i=t*e;n=Array(i).fill(!1),h=Array(i).fill(0);for(let s=0;s<i;s++)a[s]=Array(i).fill(0);for(const s of r){const[t,r]=s.split("-").map(Number);n[t*e+r]=!0}for(let s=0;s<t;s++)for(let r=0;r<e;r++){const i=s*e+r;if(!n[i]){if(r<e-1){const t=s*e+r+1;let o=1;n[t]&&(o=d),a[i][t]=o,a[t][i]=o}if(s<t-1){const t=(s+1)*e+r;let o=1;n[t]&&(o=d),a[i][t]=o,a[t][i]=o}if(r<e-1&&s<t-1){const t=(s+1)*e+r+1;let o=1.41;n[t]&&(o=d),a[i][t]=o,a[t][i]=o}if(r>0&&s<t-1){const t=(s+1)*e+r-1;let o=1.41;n[t]&&(o=d),a[i][t]=o,a[t][i]=o}}}return{adjMatrix:a,matrixTree:n}}(l,c,t),{dist:a,next:n}=function(t,e){const r=t.length,a=[],n=[];for(let i=0;i<r;i++){a[i]=[],n[i]=[];for(let s=0;s<r;s++)a[i][s]=t[i][s],n[i][s]=s,0==t[i][s]&&(a[i][s]=1/0),e[i*l+s]&&(a[i][s]=d)}for(let i=0;i<r;i++)for(let t=0;t<r;t++)for(let s=0;s<r;s++)e[i]||e[n[t][i]]||a[t][i]!==1/0&&a[i][s]!==1/0&&a[t][i]!==d&&a[i][s]!==d&&a[t][i]+a[i][s]<a[t][s]&&(a[t][s]=a[t][i]+a[i][s],n[t][s]=n[t][i]);return{dist:a,next:n}}(e,r),i=function(t,e){const r=[];for(let n=0;n<t;n++)for(let t=0;t<e;t++)r.push([n,t]);const a=[];for(let n=0;n<r.length;n++)for(let t=0;t<r.length;t++)n!==t&&a.push([r[n],r[t]]);return function(t){for(let e=t.length-1;e>0;e--){const r=Math.floor(Math.random()*(e+1));[t[e],t[r]]=[t[r],t[e]]}}(a),a}(c,l);for(let s=0;s<i.length;s++){const t=i[s],e=t[0][0]*l+t[0][1],a=t[1][0]*l+t[1][1];if(r[e]||r[a])continue;const o=g(e,a,n);w(t[1][0],t[1][1]),await x(m(o,l))}}return(0,i.useEffect)((()=>{e=s.Ltv(t.current),r=+e.attr("width"),n=+e.attr("height"),o=20,l=10,c=10,d=1e4,h=[],v()}),[]),(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,a.jsx)("svg",{ref:t,width:"500",height:"300"})})},l={},c="Betweenness Centralty",d={id:"tutorial-basics/Betweenness Centralty",title:"Betweenness Centralty",description:"Betweenness centrality is a key metric in network analysis used to determine the importance of nodes and edges based on their participation in shortest paths. There are four primary methods in Grafit to calculate or utilize betweenness centrality, each suited to different scenarios.",source:"@site/docs/tutorial-basics/Betweenness Centralty.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/Betweenness Centralty",permalink:"/GrafitDoc/docs/tutorial-basics/Betweenness Centralty",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/GrafitDoc/docs/category/examples"},next:{title:"API Documentation",permalink:"/GrafitDoc/docs/category/api-documentation"}},h={},f=[{value:"Methods and Their Differences",id:"methods-and-their-differences",level:2},{value:"CalculateBC",id:"calculatebc",level:3},{value:"CalculateBCGroup",id:"calculatebcgroup",level:3},{value:"CalculateBCWithAttractors",id:"calculatebcwithattractors",level:3},{value:"CalculateBCVisibility",id:"calculatebcvisibility",level:3},{value:"Summary",id:"summary",level:2}];function u(t){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"betweenness-centralty",children:"Betweenness Centralty"}),"\n",(0,a.jsx)(o,{}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Betweenness centrality"})," is a key metric in network analysis used to determine the importance of nodes and edges based on their participation in shortest paths. There are four primary methods in Grafit to calculate or utilize betweenness centrality, each suited to different scenarios."]}),"\n",(0,a.jsx)(e.h2,{id:"methods-and-their-differences",children:"Methods and Their Differences"}),"\n",(0,a.jsx)(e.h3,{id:"calculatebc",children:(0,a.jsx)(e.a,{href:"/docs/doc-sharp/CMeasure#calculatebc",children:"CalculateBC"})}),"\n",(0,a.jsx)(e.p,{children:"Use Case: This method is used when you need to determine the overall importance of both nodes and edges in the network. It provides a straightforward calculation of betweenness centrality by considering all shortest paths."}),"\n",(0,a.jsx)(e.p,{children:"Difference: This is the most comprehensive method, suitable for general analysis of node and edge centrality across the entire network. It can also leverage GPU acceleration for enhanced performance."}),"\n",(0,a.jsx)(e.h3,{id:"calculatebcgroup",children:(0,a.jsx)(e.a,{href:"/docs/doc-sharp/CMeasure#calculatebcgroup",children:"CalculateBCGroup"})}),"\n",(0,a.jsx)(e.p,{children:"Use Case: Use this method when you are interested in the centrality of specific groups of edges rather than individual edges. It is useful for analyzing how certain edge groups contribute to the network's flow."}),"\n",(0,a.jsx)(e.p,{children:"Difference: Unlike CalculateBC, this method focuses on edge groups and counts the number of unique shortest paths passing through any edge in a group."}),"\n",(0,a.jsx)(e.h3,{id:"calculatebcwithattractors",children:(0,a.jsx)(e.a,{href:"/docs/doc-sharp/CMeasure#calculatebcwithattractors",children:"CalculateBCWithAttractors"})}),"\n",(0,a.jsx)(e.p,{children:"Use Case: This method is ideal when certain edges have varying levels of influence or attractiveness within the network. It allows for a more nuanced analysis by incorporating attractor weights, which reflect the relative importance of edges."}),"\n",(0,a.jsx)(e.p,{children:"Difference: This method modifies traditional betweenness centrality by factoring in edge attractiveness, providing a weighted contribution to centrality based on each edge's relative influence."}),"\n",(0,a.jsx)(e.h3,{id:"calculatebcvisibility",children:(0,a.jsx)(e.a,{href:"/docs/doc-sharp/CMeasure#calculatebcvisibility",children:"CalculateBCVisibility"})}),"\n",(0,a.jsx)(e.p,{children:"Use Case: This method assess the visibility of objects within the network, particularly useful in scenarios where visual connectivity or observational influence is crucial (e.g., in surveillance or network monitoring applications)."}),"\n",(0,a.jsx)(e.p,{children:'Difference: This method uniquely measures the visibility of network paths from specified objects, quantifying how many paths can "see" each object. It differs from the other methods by focusing on visual rather than structural centrality, considering the visibility from vantage points.'}),"\n",(0,a.jsx)(e.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(e.p,{children:"Each method for calculating betweenness centrality serves different analytical purposes:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"CalculateBC"})," - provides a general measure for nodes and edges."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"CalculateBCGroup"})," - focuses on edge groups and path counts."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"CalculateBCWithAttractors"})," - incorporates edge influence through attractor weights."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"CalculateBCVisibility"})," - evaluates object visibility within the network."]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"Selecting the appropriate method depends on the specific goals of network analysis, whether it be general centrality, group influence, edge attractiveness, or visibility."})]})}function p(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(u,{...t})}):u(t)}}}]);