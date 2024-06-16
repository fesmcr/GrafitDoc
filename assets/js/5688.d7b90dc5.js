"use strict";(self.webpackChunkgrafit_doc=self.webpackChunkgrafit_doc||[]).push([[5688],{5688:(e,t,s)=>{s.d(t,{diagram:()=>V});var o=s(6292),i=s(697),a=s(1093),r=s(6257),n=s(2746);s(4353),s(6750),s(2838),s(1176),s(4075);const d="rect",c="rectWithTitle",l="statediagram",p=`${l}-state`,g="transition",b=`${g} note-edge`,h=`${l}-note`,u=`${l}-cluster`,y=`${l}-cluster-alt`,f="parent",w="note",x="----",$=`${x}${w}`,m=`${x}${f}`,T="fill:none",S="fill: #333",k="text",v="normal";let D={},A=0;function B(e="",t=0,s="",o=x){return`state-${e}${null!==s&&s.length>0?`${o}${s}`:""}-${t}`}const L=(e,t,s,i,a,n)=>{const l=s.id,g=null==(x=i[l])?"":x.classes?x.classes.join(" "):"";var x;if("root"!==l){let t=d;!0===s.start&&(t="start"),!1===s.start&&(t="end"),s.type!==o.D&&(t=s.type),D[l]||(D[l]={id:l,shape:t,description:r.e.sanitizeText(l,(0,r.c)()),classes:`${g} ${p}`});const i=D[l];s.description&&(Array.isArray(i.description)?(i.shape=c,i.description.push(s.description)):i.description.length>0?(i.shape=c,i.description===l?i.description=[s.description]:i.description=[i.description,s.description]):(i.shape=d,i.description=s.description),i.description=r.e.sanitizeTextOrArray(i.description,(0,r.c)())),1===i.description.length&&i.shape===c&&(i.shape=d),!i.type&&s.doc&&(r.l.info("Setting cluster for ",l,E(s)),i.type="group",i.dir=E(s),i.shape=s.type===o.a?"divider":"roundedWithTitle",i.classes=i.classes+" "+u+" "+(n?y:""));const a={labelStyle:"",shape:i.shape,labelText:i.description,classes:i.classes,style:"",id:l,dir:i.dir,domId:B(l,A),type:i.type,padding:15,centerLabel:!0};if(s.note){const t={labelStyle:"",shape:"note",labelText:s.note.text,classes:h,style:"",id:l+$+"-"+A,domId:B(l,A,w),type:i.type,padding:15},o={labelStyle:"",shape:"noteGroup",labelText:s.note.text,classes:i.classes,style:"",id:l+m,domId:B(l,A,f),type:"group",padding:0};A++;const r=l+m;e.setNode(r,o),e.setNode(t.id,t),e.setNode(l,a),e.setParent(l,r),e.setParent(t.id,r);let n=l,d=t.id;"left of"===s.note.position&&(n=t.id,d=l),e.setEdge(n,d,{arrowhead:"none",arrowType:"",style:T,labelStyle:"",classes:b,arrowheadStyle:S,labelpos:"c",labelType:k,thickness:v})}else e.setNode(l,a)}t&&"root"!==t.id&&(r.l.trace("Setting node ",l," to be child of its parent ",t.id),e.setParent(l,t.id)),s.doc&&(r.l.trace("Adding nodes children "),C(e,s,s.doc,i,a,!n))},C=(e,t,s,i,a,n)=>{r.l.trace("items",s),s.forEach((s=>{switch(s.stmt){case o.b:case o.D:L(e,t,s,i,a,n);break;case o.S:{L(e,t,s.state1,i,a,n),L(e,t,s.state2,i,a,n);const o={id:"edge"+A,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:T,labelStyle:"",label:r.e.sanitizeText(s.description,(0,r.c)()),arrowheadStyle:S,labelpos:"c",labelType:k,thickness:v,classes:g};e.setEdge(s.state1.id,s.state2.id,o,A),A++}}}))},E=(e,t=o.c)=>{let s=t;if(e.doc)for(let o=0;o<e.doc.length;o++){const t=e.doc[o];"dir"===t.stmt&&(s=t.value)}return s},R={setConf:function(e){const t=Object.keys(e);for(const s of t)e[s]},getClasses:function(e,t){return t.db.extract(t.db.getRootDocV2()),t.db.getClasses()},draw:async function(e,t,s,o){r.l.info("Drawing state diagram (v2)",t),D={},o.db.getDirection();const{securityLevel:c,state:p}=(0,r.c)(),g=p.nodeSpacing||50,b=p.rankSpacing||50;r.l.info(o.db.getRootDocV2()),o.db.extract(o.db.getRootDocV2()),r.l.info(o.db.getRootDocV2());const h=o.db.getStates(),u=new i.T({multigraph:!0,compound:!0}).setGraph({rankdir:E(o.db.getRootDocV2()),nodesep:g,ranksep:b,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));let y;L(u,void 0,o.db.getRootDocV2(),h,o.db,!0),"sandbox"===c&&(y=(0,a.Ltv)("#i"+t));const f="sandbox"===c?(0,a.Ltv)(y.nodes()[0].contentDocument.body):(0,a.Ltv)("body"),w=f.select(`[id="${t}"]`),x=f.select("#"+t+" g");await(0,n.r)(x,u,["barb"],l,t);r.u.insertTitle(w,"statediagramTitleText",p.titleTopMargin,o.db.getDiagramTitle());const $=w.node().getBBox(),m=$.width+16,T=$.height+16;w.attr("class",l);const S=w.node().getBBox();(0,r.i)(w,T,m,p.useMaxWidth);const k=`${S.x-8} ${S.y-8} ${m} ${T}`;r.l.debug(`viewBox ${k}`),w.attr("viewBox",k);const v=document.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const i of v){const e=i.getBBox(),t=document.createElementNS("http://www.w3.org/2000/svg",d);t.setAttribute("rx",0),t.setAttribute("ry",0),t.setAttribute("width",e.width),t.setAttribute("height",e.height),i.insertBefore(t,i.firstChild)}}},V={parser:o.p,db:o.d,renderer:R,styles:o.s,init:e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,o.d.clear()}}}}]);