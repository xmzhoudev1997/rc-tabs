"use strict";(self.webpackChunk_tant_tabs=self.webpackChunk_tant_tabs||[]).push([[433],{21924:function(Me,W,d){d.r(W),d.d(W,{default:function(){return Ke}});var X=d(48305),$=d.n(X),V=d(4695),D=d(50959),Y=d(58199),H=d(96591),w=d(26068),S=d.n(w),q=d(67825),_=d.n(q),ee=function(e,a){var n=e.tabKey,o=e.tabList,l=e.panel,s=e.onTabAdd,u=e.onTabClose,r=u===void 0?function(){return!0}:u,i=e.onChange,m=i===void 0?function(){}:i,f=(0,V.xb)(n||"",o,m,l),h={update:f.update,add:f.add,close:function(b){return f.close(b,r)},closeAll:function(){return f.closeAll(r)},closeOther:function(b){return f.closeOther(b,r)},closeRight:function(b){return f.closeRight(b,r)},closeSaved:f.closeSaved,fixed:f.fixed,edited:f.edited};return(0,D.useImperativeHandle)(a,function(){return h},[]),{func:h}},ne=d(82187),z=d.n(ne),B=d(51147),te=d(31876),ae=function(e){var a=(0,D.useState)(""),n=$()(a,2),o=n[0],l=n[1],s=function(r,i){if(l(""),i==="fixed"&&e.fixed){e.fixed(r.key,!r.fixed);return}if(i==="close-all"&&e.closeAll){e.closeAll();return}if(i==="close-other"&&e.closeOther){e.closeOther(r);return}if(i==="close-right"&&e.closeRight){e.closeRight(r);return}if(i==="close"&&e.close){e.close(r);return}if(i==="close-saved"&&e.closeSaved){e.closeSaved();return}};return{key:o,setKey:l,handleClick:s}},t=d(11527),re=function(a){var n=a.tab,o=a.children,l=a.func,s=a.contextMenus,u=s===void 0?function(){return[]}:s,r=a.tooltip,i=ae(l),m=i.key,f=i.setKey,h=i.handleClick;return m===n.key?(0,t.jsx)(B.Z,{trigger:["contextMenu"],menu:{items:u(n),onClick:function(b){var j=b.key;return h(n,j)}},visible:m===n.key,onVisibleChange:function(b){f(b?n.key:"")},children:o},n.key):(0,t.jsx)(te.Z,{placement:"bottomLeft",className:"tant-tab-tooltip",mouseLeaveDelay:0,mouseEnterDelay:.5,title:r?r(n):"".concat(n.label).concat(n.label).concat(n.label).concat(n.label).concat(n.label).concat(n.label).concat(n.label),children:(0,t.jsx)(B.Z,{trigger:["contextMenu"],menu:{items:u(n),onClick:function(b){var j=b.key;return h(n,j)}},placement:"bottom",visible:m===n.key,onVisibleChange:function(b){f(b?n.key:"")},children:o},n.key)})},le=re,oe=function(e,a,n,o,l){return(0,t.jsx)(le,{tab:e,func:n,contextMenus:o,tooltip:l,children:a})},K=d(73394),se=d(90228),F=d.n(se),de=d(87999),J=d.n(de),ie=function(e,a){var n=function(){var o=J()(F()().mark(function l(){var s;return F()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!a){r.next=6;break}return r.next=3,a();case 3:r.t0=r.sent,r.next=7;break;case 6:r.t0=null;case 7:s=r.t0,s&&e.add&&e.add(s);case 9:case"end":return r.stop()}},l)}));return function(){return o.apply(this,arguments)}}();return{handleAdd:n}},ue=d(72499),ce=function(a){var n=a.func,o=a.onTabAdd,l=a.disabled,s=ie(n,o),u=s.handleAdd;return(0,t.jsx)(K.Z,{onClick:u,icon:(0,t.jsx)(ue.Z,{}),type:"text",disabled:l})},ve=ce,fe=function(e,a,n){return(0,t.jsx)(ve,{func:e,onTabAdd:a,disabled:n})},Q=d(55346),O=d(38845),E=d(18500),P=d(18602),be=function(a){var n=a.tab,o=a.func;return n.fixed?n.edited?(0,t.jsx)(Q.Z,{className:"tant-tab-fixed-unsave",onClick:function(){return o.fixed(n.key,!1)}}):(0,t.jsx)(O.Z,{className:"tant-tab-fixed",onClick:function(){return o.fixed(n.key,!1)}}):n.edited?n.closeable?(0,t.jsxs)("div",{className:"tant-tab-unsave-hover",children:[(0,t.jsx)(E.Z,{className:"tant-tab-unsave"}),(0,t.jsx)(P.Z,{className:"tant-tab-close",onClick:function(){return o.close(n)}})]}):(0,t.jsx)(E.Z,{className:"tant-tab-unsave"}):n.closeable?(0,t.jsx)(P.Z,{className:"tant-tab-close",onClick:function(){return o.close(n)}}):(0,t.jsx)("div",{})},xe=be,me=function(e,a){return(0,t.jsx)(xe,{func:a,tab:e})},he=d(15558),U=d.n(he),ge=d(36536),Ce=d(55743),ye=d(2225),je=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){},n=arguments.length>2?arguments[2]:void 0,o=(0,D.useState)(""),l=$()(o,2),s=l[0],u=l[1],r=(0,D.useState)(!1),i=$()(r,2),m=i[0],f=i[1],h=(0,D.useMemo)(function(){return s.length?e==null?void 0:e.filter(function(b){return ye.Z.match(b.label,s)}):e},[s,e]),C=function(){var b=J()(F()().mark(function j(x){var Z,I,N,A,k,v,R,c,y,g,T,p;return F()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:if(R=(Z=x==null||(I=x.source)===null||I===void 0?void 0:I.index)!==null&&Z!==void 0?Z:-1,c=(N=x==null||(A=x.destination)===null||A===void 0?void 0:A.index)!==null&&N!==void 0?N:-1,y=x==null||(k=x.source)===null||k===void 0?void 0:k.droppableId,g=e[R],T=(x==null||(v=x.destination)===null||v===void 0?void 0:v.droppableId)||"",p=e[c],!(!y||!g||!T||!p)){M.next=8;break}return M.abrupt("return");case 8:e.splice(R,1),e.splice(c,0,g),g.fixed&&e[c-1]&&(p.fixed=e[c-1].fixed),!g.fixed&&e[c+1]&&(p.fixed=e[c+1].fixed),a(n,U()(e));case 13:case"end":return M.stop()}},j)}));return function(x){return b.apply(this,arguments)}}();return{kwd:s,setKwd:u,filterList:h,disable:!!s.length,open:m,setOpen:f,handleDragEnd:C}},Re=d(32352),ke=d(53365),G=d(9689),Ne=function(a){var n=a.tab,o=a.func;return n.fixed?n.edited?(0,t.jsx)(Q.Z,{className:"tant-more-tab-fixed-unsave",onClick:function(){return o.fixed(n.key,!1)}}):(0,t.jsx)(O.Z,{className:"tant-more-tab-fixed",onClick:function(){return o.fixed(n.key,!1)}}):n.edited?n.closeable?(0,t.jsxs)("div",{className:"tant-more-tab-unsave-hover",children:[(0,t.jsx)(E.Z,{className:"tant-more-tab-unsave"}),(0,t.jsx)(K.Z,{type:"text",icon:(0,t.jsx)(O.Z,{}),className:"tant-more-tab-unfixed",size:"small",onClick:function(s){o.fixed(n.key,!0),s.stopPropagation()}}),!!n.closeable&&(0,t.jsx)(K.Z,{type:"text",icon:(0,t.jsx)(P.Z,{}),className:"tant-more-tab-close",size:"small",onClick:function(s){o.close(n),s.stopPropagation()}})]}):(0,t.jsx)(E.Z,{className:"tant-more-tab-unsave"}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(K.Z,{type:"text",icon:(0,t.jsx)(O.Z,{}),className:"tant-more-tab-unfixed",size:"small",onClick:function(s){o.fixed(n.key,!0),s.stopPropagation()}}),!!n.closeable&&(0,t.jsx)(K.Z,{type:"text",icon:(0,t.jsx)(P.Z,{}),className:"tant-more-tab-close",size:"small",onClick:function(s){o.close(n),s.stopPropagation()}})]})},pe=Ne,De=function(a){var n=a.func,o=a.tabKey,l=a.tabList,s=a.tabIconRender,u=a.tabRender,r=a.dragDisabled,i=a.onChange,m=i===void 0?function(){}:i,f=je(l,m,o),h=f.kwd,C=f.setKwd,b=f.disable,j=f.filterList,x=f.open,Z=f.setOpen,I=f.handleDragEnd,N=function(v,R,c){var y=s?s(v):null,g=(0,t.jsxs)("div",S()(S()(S()({className:z()("tant-more-tab",o===v.key?"tant-more-tab-active":"",R?"tant-more-tab-dragging":""),ref:c==null?void 0:c.innerRef},(c==null?void 0:c.dragHandleProps)||{}),(c==null?void 0:c.draggableProps)||{}),{},{onClick:function(){return o===v.key?null:m(v.key,U()(l))},children:[!r&&!b&&(0,t.jsx)(Re.Z,{className:"tant-more-tab-drag"}),!!y&&(0,t.jsx)("div",{className:"tant-more-tab-icon",onMouseDown:function(p){return p.stopPropagation()},children:y}),(0,t.jsx)("div",{className:"tant-more-tab-name",children:u?u(v):v.label}),(0,t.jsx)("div",{className:"xm-tab-oper",children:(0,t.jsx)(pe,{tab:v,func:n})})]}),v.key);return g},A=(0,t.jsxs)("div",{className:"tant-more-dropdown",children:[(0,t.jsx)(ge.Z,{value:h,onChange:C,size:"middle",bordered:!1,allowClear:!0}),(0,t.jsx)("div",{className:"tant-more-dropdown-split"}),j.length?(0,t.jsx)(G.Z5,{onDragEnd:I,children:(0,t.jsx)(G.bK,{droppableId:"more",isDropDisabled:r||b,renderClone:function(v,R,c){var y,g,T=c==null||(y=c.source)===null||y===void 0?void 0:y.index,p=l[T];if(!p)return null;if((g=v.draggableProps.style)!==null&&g!==void 0&&g.transform){var L;v.draggableProps.style.transform=(L=v.draggableProps.style)===null||L===void 0?void 0:L.transform.replace(/\([\-0-9]+px/,"(0px")}return N(p,!0,v)},children:function(v){return(0,t.jsxs)("div",S()(S()({className:"tant-more-scroll",ref:v.innerRef},v.droppableProps),{},{children:[j==null?void 0:j.map(function(R,c){return(0,t.jsx)(G._l,{draggableId:R.key,index:c,isDragDisabled:r||b,children:function(g,T){return N(R,T.isDragging,g)}},R.key)}),v.placeholder]}))}})}):(0,t.jsx)(Ce.Z,{})]});return(0,t.jsx)(B.Z,{trigger:["click"],menu:{items:[]},open:x,onVisibleChange:function(v){Z(v),v&&C("")},dropdownRender:function(){return A},children:(0,t.jsx)(K.Z,{icon:(0,t.jsx)(ke.Z,{}),type:"text"})})},Ze=De,Ie=function(e,a,n,o,l,s,u){return(0,t.jsx)(Ze,{func:e,tabKey:n,tabList:a,tabIconRender:o,tabRender:l,onChange:u,dragDisabled:s})},Ae=["maxTabNum","className","tabList","tabClassName","tabContextMenus","tabRender","tabContextMenuRender","tabOperRender","addRender","moreRender","onTabAdd","tabKey","tabIconRender","onChange","dragDisabled","tabTipRender"],Te=(0,D.forwardRef)(function(e,a){var n=e.maxTabNum,o=n===void 0?9999:n,l=e.className,s=e.tabList,u=s===void 0?[]:s,r=e.tabClassName,i=e.tabContextMenus,m=e.tabRender,f=e.tabContextMenuRender,h=e.tabOperRender,C=e.addRender,b=e.moreRender,j=e.onTabAdd,x=e.tabKey,Z=e.tabIconRender,I=e.onChange,N=e.dragDisabled,A=N===void 0?!1:N,k=e.tabTipRender,v=_()(e,Ae),R=ee(e,a),c=R.func;return(0,t.jsx)(V.gB,S()({tabKey:x,tabList:u,className:z()(l,"tant-tabs\u2014nav"),tabClassName:z()(r,"tant-tab"),tabContextMenuRender:f||function(y,g){return oe(y,g,c,i,k)},tabOperRender:h||function(y){return me(y,c)},addRender:C||function(){return fe(c,j,(u==null?void 0:u.length)>=o)},moreRender:b||function(){return Ie(c,u,x||"",Z,m,A,I)},tabIconRender:Z,tabRender:m,onChange:I,dragDisabled:A},v))}),Se=Te,Ke=function(){var e=(0,Y.Z)({tabList:[],tabKey:""}),a=$()(e,2),n=a[0],o=a[1],l=(0,D.useRef)(null),s=(0,D.useRef)(null);return(0,t.jsxs)("div",{style:{display:"flex",height:400,flexDirection:"column"},children:[(0,t.jsx)(Se,{tabKey:n.tabKey,tabList:n.tabList,onChange:function(r,i){console.log(r,i),o({tabKey:r,tabList:i})},onTabAdd:function(){return{label:"\u7A7A\u767D\u6807\u7B7E\u9875".concat(Date.now()),closeable:!0,fixed:!1,key:String(Date.now())}},tabIconRender:function(){return(0,t.jsx)(H.Z,{style:{display:"flex"}})},tabContextMenus:function(r){var i=[{key:"fixed",label:r.fixed?"\u53D6\u6D88\u56FA\u5B9A":"\u56FA\u5B9A\u6807\u7B7E\u9875"},{node:"divider"},{key:"close-other",label:"\u5173\u95ED\u5176\u4ED6"},{key:"close-right",label:"\u5173\u95ED\u53F3\u4FA7"},{key:"close-all",label:"\u5173\u95ED\u6240\u6709"},{key:"close-saved",label:"\u5173\u95ED\u5DF2\u4FDD\u5B58"}];return r.closeable&&i.splice(2,0,{key:"close",label:"\u5173\u95ED"}),i},tabTipRender:function(r){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",columnGap:4,color:"var(--tant-text-white-color-text2-1)"},children:[(0,t.jsx)(H.Z,{style:{color:"#1E76F0"}}),r.label]}),(0,t.jsx)("div",{style:{color:"#FFFFFFB2",font:"var(    --tant-description-font-description-regular)"},children:"\u6700\u8FD1\u7F16\u8F91\uFF1A03/28 19:00"})]})},ref:s,panel:l.current}),(0,t.jsx)(V.AA,{ref:l,children:function(r){var i=n.tabList.find(function(m){return m.key===r});return(0,t.jsx)("div",{style:{height:"100%"},suppressContentEditableWarning:!0,contentEditable:!0,onInput:function(f){var h;(h=s.current)===null||h===void 0||h.edited(r,!0)},children:i==null?void 0:i.label})}})]})}}}]);
