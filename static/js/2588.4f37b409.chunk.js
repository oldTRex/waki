"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2588],{62588:function(e,t,n){n.r(t);var o=n(36222),r=n(18489),a=n(27853),l=n(84531),i=n(78932),s=n(38128),u=n(72791),d=n(71939),c=n.n(d),f=n(80184),h=function(e){(0,i.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;(0,a.Z)(this,n);for(var l=arguments.length,i=new Array(l),s=0;s<l;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={form:{method:"GET",url:"",queryParams:"",body:[]},baseUrl:"",token:"",data:{},loading:!1,bodyType:"application/json",collection:[]},e.toggle=function(){e.setState((function(e){return{loading:!e.loading}}))},e.handleChange=function(t){var n=t.target.value,a=t.target.name;e.setState((function(e){return{form:(0,r.Z)((0,r.Z)({},e.form),{},(0,o.Z)({},a,n))}}))},e.handleVariablesChange=function(t){var n=t.target.value,r=t.target.name;e.setState((function(e){return(0,o.Z)({},r,n)}),(function(){localStorage.setItem(r,n)}))},e.handleSubmit=function(t){e.toggle(),t.preventDefault();var n=e.state,o=n.form,r=n.bodyType,a=n.token,l=function(e){var t=new FormData;return e.forEach((function(e,n){var o=e.key,r=e.value;t.append(o,r)})),t},i=function(e){var t={};e.forEach((function(e){var n=e.key,o=e.value;t[n]=o}))};fetch(o.url,"post"==o.method?{method:o.method.toUpperCase(),body:"application/json"==r?JSON.stringify(i(o.body)):l(o.body),headers:{"Content-Type":"json"==r?"application/json":"application/x-www-form-urlencoded",Authorization:"Bearer "+a}}:{headers:{Authorization:"Bearer "+a}}).then((function(e){return e.json()})).then((function(t){return e.setState({data:t})})).finally(e.toggle),console.log("form",e.state.form)},e.formBody=function(t){if("GET"===t){var n="",o="";e.state.form.queryParams;return(0,f.jsxs)("div",{style:{marginTop:30,borderTop:"1px solid #ddd",paddingTop:10},children:[(0,f.jsx)("h3",{style:{width:"100%",display:"block"},children:" query params"}),(0,f.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=new URLSearchParams(e.state.form.queryParams);a.has(n)?a.set(n,o):a.append(n,o),e.setState((function(e){return{form:(0,r.Z)((0,r.Z)({},e.form),{},{queryParams:a.toString()})}}),(function(){return e.setState((function(e){var t=new URL(e.form.url);return t.search=a,{form:(0,r.Z)((0,r.Z)({},e.form),{},{url:t.toString()})}}))}))},style:{display:"flex"},children:[(0,f.jsx)("input",{type:"text",onChange:function(e){return n=e.target.value},style:{flexGrow:"1",marginRight:5},placeholder:"key"}),(0,f.jsx)("input",{type:"text",onChange:function(e){return o=e.target.value},style:{flexGrow:"1",marginRight:5},placeholder:"key"}),(0,f.jsx)("button",{style:{flexGrow:1},type:"submit",children:"add"})]})]})}var a=function(e){e.target.name;var t=e.target.value;"key"==e.target.name?n=t:o=t};return(0,f.jsxs)("div",{style:{marginTop:30,borderTop:"1px solid #ddd",paddingTop:10},children:[(0,f.jsx)("h3",{style:{width:"100%",display:"block"},children:"body"}),(0,f.jsxs)("select",{onChange:function(t){return e.setState({bodyType:t.target.value})},children:[(0,f.jsx)("option",{value:"application/json",children:"json"}),(0,f.jsx)("option",{value:"application/x-www-form-urlencoded",children:"formdata"})]}),(0,f.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[e.state.form.body.map((function(t,n){return(0,f.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between"},children:[(0,f.jsx)("input",{type:"text",value:t.key,onChange:function(n){var o=n.target.value;e.setState((function(e){return{form:(0,r.Z)((0,r.Z)({},e.form),{},{body:e.form.body.map((function(e){return e.key==t.key&&e.value==t.value?{key:o,value:e.value}:e}))})}}))},placeholder:"key",style:{flexGrow:1,marginRight:5,marginBottom:5}}),(0,f.jsx)("input",{type:"text",value:t.value,onChange:function(n){var o=n.target.value;e.setState((function(e){return{form:(0,r.Z)((0,r.Z)({},e.form),{},{body:e.form.body.map((function(e){return e.key==t.key&&e.value==t.value?{key:e.key,value:o}:e}))})}}))},placeholder:"value",style:{flexGrow:1,marginRight:5,marginBottom:5}})]},"body"+n)})),(0,f.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between"},children:[(0,f.jsx)("input",{type:"text",name:"key",onChange:a,placeholder:"key",style:{flexGrow:1,marginRight:5}}),(0,f.jsx)("input",{type:"text",name:"value",onChange:a,placeholder:"value",style:{flexGrow:1,marginRight:5}}),(0,f.jsx)("button",{style:{flexGrow:1},onClick:function(){e.setState((function(e){return{form:(0,r.Z)((0,r.Z)({},e.form),{},{body:e.form.body.concat({key:n,value:o})})}}))},children:"add"})]})]})]})},e.changeFile=function(t){var n=new FileReader;n.onload=e.onReaderLoad,n.readAsText(t.target.files[0])},e.onReaderLoad=function(e){console.log(e.target.result);var t=JSON.parse(e.target.result);localStorage.setItem("collection",JSON.stringify(t)),console.log("obj",t)},e.clickCollection=function(t){console.log(t),e.setState((function(e){return{form:(0,r.Z)((0,r.Z)({},e.form),{},{url:t.request.url.raw,method:t.request.method})}}))},e}return(0,l.Z)(n,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("baseUrl"),n=localStorage.getItem("token"),o=JSON.parse(localStorage.getItem("collection")).item;o&&this.setState({collection:o}),t&&this.setState({baseUrl:t},(function(){return e.setState({form:(0,r.Z)((0,r.Z)({},e.state.form),{},{url:t})})})),n&&this.setState({token:n})}},{key:"render",value:function(){var e=this,t=this.state,n=t.form,o=t.baseUrl,r=t.token,a=t.loading,l=t.collection;return(0,f.jsxs)("div",{style:{direction:"ltr",textAlign:"left",display:"flex"},children:[(0,f.jsx)("div",{style:{width:"20%"},children:l&&l.map((function(t,n){return(0,f.jsx)("a",{style:{display:"block",borderBottom:"1px solid #ddd",cursor:"pointer",width:"80%",marginTop:10},onClick:function(){return e.clickCollection(t)},children:t.name},"item"+n)}))}),(0,f.jsxs)("div",{style:{width:"80%"},children:[(0,f.jsx)("div",{children:(0,f.jsxs)("label",{children:["import file",(0,f.jsx)("input",{type:"file",onChange:this.changeFile})]})}),(0,f.jsxs)("div",{style:{display:"flex",marginBottom:"20px"},children:[(0,f.jsx)("input",{type:"text",value:o,onChange:this.handleVariablesChange,name:"baseUrl",style:{flexGrow:"1",marginRight:5},placeholder:"baseUrl"}),(0,f.jsx)("input",{type:"text",value:r,onChange:this.handleVariablesChange,name:"token",style:{flexGrow:"1"},placeholder:"token"})]}),(0,f.jsx)("form",{onSubmit:this.handleSubmit,style:{direction:"ltr",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:(0,f.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,f.jsxs)("select",{onChange:this.handleChange,value:n.method,name:"method",children:[(0,f.jsx)("option",{value:"get",children:"get"}),(0,f.jsx)("option",{value:"post",children:"post"})]}),(0,f.jsx)("input",{type:"text",value:n.url,onChange:this.handleChange,name:"url",style:{flexGrow:"1"}}),(0,f.jsx)("button",{type:"submit",children:"send"})]})}),this.formBody(n.method),(0,f.jsxs)("div",{style:{borderTop:"1px solid #ddd",marginTop:30,paddingTop:10},children:[(0,f.jsx)("h3",{children:"response"}),a?"loading":(0,f.jsx)(c(),{src:this.state.data})]})]})]})}}]),n}(u.Component);t.default=h}}]);
//# sourceMappingURL=2588.4f37b409.chunk.js.map