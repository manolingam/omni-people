(this["webpackJsonpomni-people"]=this["webpackJsonpomni-people"]||[]).push([[0],{101:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),c=a.n(r),o=(a(64),a(13)),i=a(11),s=a(21),m=a(15),u=a(22),h=a(130),p=a(53),d=a.n(p),g=a(133),f=a(127),E=a(49),b=(a(101),[]),k=function(){return l.a.createElement(f.a,null,b.map((function(e,t){return l.a.createElement(g.a,{button:!0,key:e},l.a.createElement(E.a,{url:"https://twitter.com/".concat(e),size:"small"}))})))},y=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).onChangeHandler=function(t){var a=[];t.target.value?fetch("https://infinite-garden-52200.herokuapp.com/users/".concat(t.target.value)).then((function(e){return e.json()})).then((function(t){t.map((function(e){a.push({id:e.id,name:e.name,screen_name:e.screen_name,url:e.url,profile_pic:e.profile_image_url_https})})),e.setState({people:a})})):(a=[],e.setState({people:a}))},e.state={people:[]},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.people;return l.a.createElement("div",{className:"search-component"},l.a.createElement("p",{className:"title"},l.a.createElement("span",null,"\u2728")," Omni People ",l.a.createElement("span",null,"\u2728"),l.a.createElement("br",null),l.a.createElement("span",{style:{marginTop:"7px",fontSize:"0.8em"}},"Companion for"," ",l.a.createElement("a",{href:"https://www.omni.fyi/"},l.a.createElement("i",null,"Omni Wallet")))),l.a.createElement("input",{type:"search",placeholder:"twitter handle..",onChange:this.onChangeHandler}),l.a.createElement("div",{className:"box"},t.map((function(a){return l.a.createElement("div",{key:a.id,style:{display:"flex",flexDirection:"row"}},l.a.createElement("img",{style:{borderRadius:"50px",padding:"5px"},src:a.profile_pic,alt:""}),l.a.createElement("p",null,a.name),l.a.createElement(h.a,{color:"primary","aria-label":"add",size:"small",id:"fab",onClick:function(){b.push(a.screen_name);var n=t.indexOf(a);t.splice(n,1),e.setState({people:t})}},l.a.createElement(d.a,null)))}))))}}]),t}(l.a.Component),w=a(54),v=a.n(w),S=a(132),C=a(131),N=(a(103),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).toggleThemeChange=function(){!1===e.state.checked?(localStorage.setItem("theme","dark"),document.getElementsByTagName("HTML")[0].setAttribute("data-theme",localStorage.getItem("theme")),e.setState({checked:!0})):(localStorage.setItem("theme","light"),document.getElementsByTagName("HTML")[0].setAttribute("data-theme",localStorage.getItem("theme")),e.setState({checked:!1}))},e.toggleDrawer=function(t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&e.setState({right:t})}},e.sideList=function(){return l.a.createElement("div",{className:"side-drawer",style:{width:300},role:"presentation",onClick:e.toggleDrawer(!1),onKeyDown:e.toggleDrawer(!1)},l.a.createElement(k,null),l.a.createElement(C.a,null))},e.state={checked:"dark"===localStorage.getItem("theme"),theme:localStorage.getItem("theme"),right:!1},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.getElementsByTagName("HTML")[0].setAttribute("data-theme",localStorage.getItem("theme"))}},{key:"render",value:function(){var e=this.state.checked?"white":"black";return l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"nav"},l.a.createElement("label",{className:"switch"},l.a.createElement("input",{type:"checkbox",defaultChecked:this.state.checked,onChange:this.toggleThemeChange}),l.a.createElement("span",{className:"slider round"})),l.a.createElement(v.a,{className:"people-icon",onClick:this.toggleDrawer(!0),style:{color:e}}),this.toggleDrawer(!0),l.a.createElement(S.a,{className:"drawer",anchor:"right",open:this.state.right,onClose:this.toggleDrawer(!1)},this.sideList())),l.a.createElement("hr",null),l.a.createElement(y,null))}}]),t}(l.a.Component));c.a.render(l.a.createElement(N,null),document.getElementById("root"))},59:function(e,t,a){e.exports=a(104)},64:function(e,t,a){},85:function(e,t){}},[[59,1,2]]]);
//# sourceMappingURL=main.73eed9dc.chunk.js.map