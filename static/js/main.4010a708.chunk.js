(this.webpackJsonpreact_crash_todo=this.webpackJsonpreact_crash_todo||[]).push([[0],{20:function(e,t,n){e.exports=n(31)},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(18),r=n.n(c),l=n(15),d=n(11),i=n(9),u=n(1);var m={background:"#ff0000",color:"#fff",fontWeight:"bold",border:"none",padding:"5px 10px",borderRadius:"10%",cursor:"pointer",float:"right"},p={fontStyle:"italic",color:"#cdcdcd",textDecoration:"line-through"},s=function(e){var t=e.todo,n=t.id,o=t.title,c=t.completed;return a.a.createElement("div",{style:{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted"}},a.a.createElement("p",null,a.a.createElement("label",null,a.a.createElement("input",{type:"checkbox",checked:c&&"checked",onChange:e.markComplete.bind(this,n)})," ",a.a.createElement("span",{style:c?p:null},o)),a.a.createElement("button",{style:m,onClick:e.delTodo.bind(this,n)},"Delete")))};var f=function(e){return e.todos.map((function(t){return a.a.createElement(s,{key:t.id,todo:t,markComplete:e.markComplete,delTodo:e.delTodo})}))};var h=function(e){var t=Object(o.useState)(""),n=Object(d.a)(t,2),c=n[0],r=n[1];return a.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.addTodo(c),r("")},style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",placeholder:" Add Todo...",style:{flex:"10",padding:"5 px"},value:c,onChange:function(e){r(e.target.value)}}),a.a.createElement("input",{type:"submit",value:"Add",className:"btn",style:{flex:"1"}}))};var E={color:"#fff",textDecoration:"none"},b={background:"#333",color:"#fff",padding:"10px",textAlign:"center"},y=function(){return a.a.createElement("header",{style:b},a.a.createElement("h1",null,"TodoList"),a.a.createElement(i.b,{style:E,to:"/react-todo"},"Home")," | ",a.a.createElement(i.b,{style:E,to:"/react-todo/about"},"About"))};var g=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is the TodoList App v1.0.0."))},v=n(33);n(30);var x=function(){var e=Object(o.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1];Object(o.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return console.log(e)}))}),[]);var r=function(e){c(n.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))},m=function(e){fetch("https://jsonplaceholder.typicode.com/todos/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(c(Object(l.a)(n.filter((function(t){return t.id!==e}))))).catch((function(e){return console.log(e)}))},p=function(e){var t={title:e,completed:!1},o={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}};fetch("https://jsonplaceholder.typicode.com/todos",o).then((function(e){return e.json()})).then((function(e){e.id=Object(v.a)(),c([].concat(Object(l.a)(n),[e]))})).catch((function(e){return console.log(e)}))};return a.a.createElement(i.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(y,null),a.a.createElement(u.a,{exact:!0,path:"/react-todo",render:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(h,{addTodo:p}),a.a.createElement(f,{todos:n,markComplete:r,delTodo:m}))}}),a.a.createElement(u.a,{path:"/react-todo/about",component:g}))))};r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(x,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.4010a708.chunk.js.map