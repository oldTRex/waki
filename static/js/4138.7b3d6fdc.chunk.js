"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[4138],{64138:function(e,s,n){n.r(s);var t=n(23430),o=n(72791),r=n(56153),i=n(27988),a=n(82357),l=n(44517),c=n(53638),u=n(48284),f=n(73002),d=n(54555),p=n(29902),m=n(81815),g=n(80184);s.default=function(e){var s=o.useState(""),n=(0,t.Z)(s,2),b=n[0],h=n[1];return(0,g.jsx)("div",{children:(0,g.jsx)(r.Z,{children:(0,g.jsx)(i.Z,{xs:"12",children:(0,g.jsx)(a.Z,{children:(0,g.jsxs)(l.Z,{onSubmit:function(e){e.preventDefault(),console.log("messages",b)},children:[(0,g.jsx)(c.Z,{children:"\u0627\u06cc\u062c\u0627\u062f \u062e\u0628\u0631\u0646\u0627\u0645\u0647"}),(0,g.jsx)(u.Z,{children:(0,g.jsx)(r.Z,{children:(0,g.jsxs)(i.Z,{xs:"12",md:"8",children:[(0,g.jsx)(f.Z,{children:"\u0645\u062a\u0646 \u062e\u0628\u0631\u0646\u0627\u0645\u0647 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"}),(0,g.jsx)(d.Z,{name:"message",type:"textarea",maxlength:"180",onChange:function(e){h(e.target.value)},value:b})]})})}),(0,g.jsx)(p.Z,{children:(0,g.jsx)(m.Z,{color:"success",type:"submit",children:"\u0627\u06cc\u062c\u0627\u062f \u062e\u0628\u0631\u0646\u0627\u0645\u0647"})})]})})})})})}},81815:function(e,s,n){var t=n(50102),o=n(29640),r=n(2249),i=n(11674),a=n(72791),l=n(52007),c=n.n(l),u=n(81694),f=n.n(u),d=n(15489),p=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],m={active:c().bool,"aria-label":c().string,block:c().bool,color:c().string,disabled:c().bool,outline:c().bool,tag:d.iC,innerRef:c().oneOfType([c().object,c().func,c().string]),onClick:c().func,size:c().string,children:c().node,className:c().string,cssModule:c().object,close:c().bool},g=function(e){function s(s){var n;return(n=e.call(this,s)||this).onClick=n.onClick.bind((0,r.Z)(n)),n}(0,i.Z)(s,e);var n=s.prototype;return n.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},n.render=function(){var e=this.props,s=e.active,n=e["aria-label"],r=e.block,i=e.className,l=e.close,c=e.cssModule,u=e.color,m=e.outline,g=e.size,b=e.tag,h=e.innerRef,v=(0,o.Z)(e,p);l&&"undefined"===typeof v.children&&(v.children=a.createElement("span",{"aria-hidden":!0},"\xd7"));var x="btn"+(m?"-outline":"")+"-"+u,Z=(0,d.mx)(f()(i,{close:l},l||"btn",l||x,!!g&&"btn-"+g,!!r&&"btn-block",{active:s,disabled:this.props.disabled}),c);v.href&&"button"===b&&(b="a");var y=l?"Close":null;return a.createElement(b,(0,t.Z)({type:"button"===b&&v.onClick?"button":void 0},v,{className:Z,ref:h,onClick:this.onClick,"aria-label":n||y}))},s}(a.Component);g.propTypes=m,g.defaultProps={color:"secondary",tag:"button"},s.Z=g},82357:function(e,s,n){var t=n(50102),o=n(29640),r=n(72791),i=n(52007),a=n.n(i),l=n(81694),c=n.n(l),u=n(15489),f=["className","cssModule","color","body","inverse","outline","tag","innerRef"],d={tag:u.iC,inverse:a().bool,color:a().string,body:a().bool,outline:a().bool,className:a().string,cssModule:a().object,innerRef:a().oneOfType([a().object,a().string,a().func])},p=function(e){var s=e.className,n=e.cssModule,i=e.color,a=e.body,l=e.inverse,d=e.outline,p=e.tag,m=e.innerRef,g=(0,o.Z)(e,f),b=(0,u.mx)(c()(s,"card",!!l&&"text-white",!!a&&"card-body",!!i&&(d?"border":"bg")+"-"+i),n);return r.createElement(p,(0,t.Z)({},g,{className:b,ref:m}))};p.propTypes=d,p.defaultProps={tag:"div"},s.Z=p},48284:function(e,s,n){var t=n(50102),o=n(29640),r=n(72791),i=n(52007),a=n.n(i),l=n(81694),c=n.n(l),u=n(15489),f=["className","cssModule","innerRef","tag"],d={tag:u.iC,className:a().string,cssModule:a().object,innerRef:a().oneOfType([a().object,a().string,a().func])},p=function(e){var s=e.className,n=e.cssModule,i=e.innerRef,a=e.tag,l=(0,o.Z)(e,f),d=(0,u.mx)(c()(s,"card-body"),n);return r.createElement(a,(0,t.Z)({},l,{className:d,ref:i}))};p.propTypes=d,p.defaultProps={tag:"div"},s.Z=p},29902:function(e,s,n){var t=n(50102),o=n(29640),r=n(72791),i=n(52007),a=n.n(i),l=n(81694),c=n.n(l),u=n(15489),f=["className","cssModule","tag"],d={tag:u.iC,className:a().string,cssModule:a().object},p=function(e){var s=e.className,n=e.cssModule,i=e.tag,a=(0,o.Z)(e,f),l=(0,u.mx)(c()(s,"card-footer"),n);return r.createElement(i,(0,t.Z)({},a,{className:l}))};p.propTypes=d,p.defaultProps={tag:"div"},s.Z=p},53638:function(e,s,n){var t=n(50102),o=n(29640),r=n(72791),i=n(52007),a=n.n(i),l=n(81694),c=n.n(l),u=n(15489),f=["className","cssModule","tag"],d={tag:u.iC,className:a().string,cssModule:a().object},p=function(e){var s=e.className,n=e.cssModule,i=e.tag,a=(0,o.Z)(e,f),l=(0,u.mx)(c()(s,"card-header"),n);return r.createElement(i,(0,t.Z)({},a,{className:l}))};p.propTypes=d,p.defaultProps={tag:"div"},s.Z=p},27988:function(e,s,n){var t=n(50102),o=n(29640),r=n(72791),i=n(52007),a=n.n(i),l=n(81694),c=n.n(l),u=n(15489),f=["className","cssModule","widths","tag"],d=a().oneOfType([a().number,a().string]),p=a().oneOfType([a().bool,a().number,a().string,a().shape({size:a().oneOfType([a().bool,a().number,a().string]),order:d,offset:d})]),m={tag:u.iC,xs:p,sm:p,md:p,lg:p,xl:p,className:a().string,cssModule:a().object,widths:a().array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,s,n){return!0===n||""===n?e?"col":"col-"+s:"auto"===n?e?"col-auto":"col-"+s+"-auto":e?"col-"+n:"col-"+s+"-"+n},h=function(e){var s=e.className,n=e.cssModule,i=e.widths,a=e.tag,l=(0,o.Z)(e,f),d=[];i.forEach((function(s,t){var o=e[s];if(delete l[s],o||""===o){var r=!t;if((0,u.Kn)(o)){var i,a=r?"-":"-"+s+"-",f=b(r,s,o.size);d.push((0,u.mx)(c()(((i={})[f]=o.size||""===o.size,i["order"+a+o.order]=o.order||0===o.order,i["offset"+a+o.offset]=o.offset||0===o.offset,i)),n))}else{var p=b(r,s,o);d.push(p)}}})),d.length||d.push("col");var p=(0,u.mx)(c()(s,d),n);return r.createElement(a,(0,t.Z)({},l,{className:p}))};h.propTypes=m,h.defaultProps=g,s.Z=h},44517:function(e,s,n){var t=n(50102),o=n(29640),r=n(2249),i=n(11674),a=n(72791),l=n(52007),c=n.n(l),u=n(81694),f=n.n(u),d=n(15489),p=["className","cssModule","inline","tag","innerRef"],m={children:c().node,inline:c().bool,tag:d.iC,innerRef:c().oneOfType([c().object,c().func,c().string]),className:c().string,cssModule:c().object},g=function(e){function s(s){var n;return(n=e.call(this,s)||this).getRef=n.getRef.bind((0,r.Z)(n)),n.submit=n.submit.bind((0,r.Z)(n)),n}(0,i.Z)(s,e);var n=s.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,s=e.className,n=e.cssModule,r=e.inline,i=e.tag,l=e.innerRef,c=(0,o.Z)(e,p),u=(0,d.mx)(f()(s,!!r&&"form-inline"),n);return a.createElement(i,(0,t.Z)({},c,{ref:l,className:u}))},s}(a.Component);g.propTypes=m,g.defaultProps={tag:"form"},s.Z=g},54555:function(e,s,n){var t=n(50102),o=n(29640),r=n(2249),i=n(11674),a=n(72791),l=n(52007),c=n.n(l),u=n(81694),f=n.n(u),d=n(15489),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],m={children:c().node,type:c().string,size:c().oneOfType([c().number,c().string]),bsSize:c().string,valid:c().bool,invalid:c().bool,tag:d.iC,innerRef:c().oneOfType([c().object,c().func,c().string]),plaintext:c().bool,addon:c().bool,className:c().string,cssModule:c().object},g=function(e){function s(s){var n;return(n=e.call(this,s)||this).getRef=n.getRef.bind((0,r.Z)(n)),n.focus=n.focus.bind((0,r.Z)(n)),n}(0,i.Z)(s,e);var n=s.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,s=e.className,n=e.cssModule,r=e.type,i=e.bsSize,l=e.valid,c=e.invalid,u=e.tag,m=e.addon,g=e.plaintext,b=e.innerRef,h=(0,o.Z)(e,p),v=["radio","checkbox"].indexOf(r)>-1,x=new RegExp("\\D","g"),Z=u||("select"===r||"textarea"===r?r:"input"),y="form-control";g?(y+="-plaintext",Z=u||"input"):"file"===r?y+="-file":"range"===r?y+="-range":v&&(y=m?null:"form-check-input"),h.size&&x.test(h.size)&&((0,d.O4)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=h.size,delete h.size);var N=(0,d.mx)(f()(s,c&&"is-invalid",l&&"is-valid",!!i&&"form-control-"+i,y),n);return("input"===Z||u&&"function"===typeof u)&&(h.type=r),h.children&&!g&&"select"!==r&&"string"===typeof Z&&"select"!==Z&&((0,d.O4)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),a.createElement(Z,(0,t.Z)({},h,{ref:b,className:N,"aria-invalid":c}))},s}(a.Component);g.propTypes=m,g.defaultProps={type:"text"},s.Z=g},73002:function(e,s,n){var t=n(50102),o=n(29640),r=n(72791),i=n(52007),a=n.n(i),l=n(81694),c=n.n(l),u=n(15489),f=["className","cssModule","hidden","widths","tag","check","size","for"],d=a().oneOfType([a().number,a().string]),p=a().oneOfType([a().bool,a().string,a().number,a().shape({size:d,order:d,offset:d})]),m={children:a().node,hidden:a().bool,check:a().bool,size:a().string,for:a().string,tag:u.iC,className:a().string,cssModule:a().object,xs:p,sm:p,md:p,lg:p,xl:p,widths:a().array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,s,n){return!0===n||""===n?e?"col":"col-"+s:"auto"===n?e?"col-auto":"col-"+s+"-auto":e?"col-"+n:"col-"+s+"-"+n},h=function(e){var s=e.className,n=e.cssModule,i=e.hidden,a=e.widths,l=e.tag,d=e.check,p=e.size,m=e.for,g=(0,o.Z)(e,f),h=[];a.forEach((function(s,t){var o=e[s];if(delete g[s],o||""===o){var r,i=!t;if((0,u.Kn)(o)){var a,l=i?"-":"-"+s+"-";r=b(i,s,o.size),h.push((0,u.mx)(c()(((a={})[r]=o.size||""===o.size,a["order"+l+o.order]=o.order||0===o.order,a["offset"+l+o.offset]=o.offset||0===o.offset,a))),n)}else r=b(i,s,o),h.push(r)}}));var v=(0,u.mx)(c()(s,!!i&&"sr-only",!!d&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),n);return r.createElement(l,(0,t.Z)({htmlFor:m},g,{className:v}))};h.propTypes=m,h.defaultProps=g,s.Z=h},56153:function(e,s,n){var t=n(50102),o=n(29640),r=n(72791),i=n(52007),a=n.n(i),l=n(81694),c=n.n(l),u=n(15489),f=["className","cssModule","noGutters","tag","form","widths"],d=a().oneOfType([a().number,a().string]),p={tag:u.iC,noGutters:a().bool,className:a().string,cssModule:a().object,form:a().bool,xs:d,sm:d,md:d,lg:d,xl:d},m={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var s=e.className,n=e.cssModule,i=e.noGutters,a=e.tag,l=e.form,d=e.widths,p=(0,o.Z)(e,f),m=[];d.forEach((function(s,n){var t=e[s];if(delete p[s],t){var o=!n;m.push(o?"row-cols-"+t:"row-cols-"+s+"-"+t)}}));var g=(0,u.mx)(c()(s,i?"no-gutters":null,l?"form-row":"row",m),n);return r.createElement(a,(0,t.Z)({},p,{className:g}))};g.propTypes=p,g.defaultProps=m,s.Z=g}}]);
//# sourceMappingURL=4138.7b3d6fdc.chunk.js.map