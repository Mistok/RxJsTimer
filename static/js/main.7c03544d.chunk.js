(this.webpackJsonptest_task_timer=this.webpackJsonptest_task_timer||[]).push([[0],{21:function(t,e,n){},22:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var c=n(5),s=n.n(c),i=n(16),a=n.n(i),r=(n(21),n(14)),o=(n(22),n(23),n(30)),b=n(29),u=n(28),l=n(1);var j=function(){var t=Object(c.useState)(!1),e=Object(r.a)(t,2),n=e[0],s=e[1],i=Object(c.useState)(0),a=Object(r.a)(i,2),j=a[0],d=a[1],O=Object(c.useState)(0),f=Object(r.a)(O,2),h=f[0],m=f[1];return Object(c.useEffect)((function(){var t=new o.a;return Object(b.a)(1e3).pipe(Object(u.a)(t)).subscribe((function(){return n?d((function(t){return t+1e3})):null})),function(){t.next(),t.complete()}}),[n]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"App-header",children:"testing task timer"}),Object(l.jsx)("div",{className:"time_desk",children:Object(l.jsx)("span",{children:new Date(j).toISOString().slice(11,19)})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){s(!0)},children:"start"}),Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(){s(!1),d(0)},children:"stop"}),Object(l.jsx)("button",{className:"btn btn-info",onClick:function(){if(!h){var t=Date.now();return m(t),null}Date.now()-h<300&&(console.log("waiting"),s(!1),m(0)),m(0)},children:"wait"}),Object(l.jsx)("button",{className:"btn btn-success",onClick:function(){d(0)},children:"reset"})]})]})},d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),c(t),s(t),i(t),a(t)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),d()}},[[25,1,2]]]);
//# sourceMappingURL=main.7c03544d.chunk.js.map