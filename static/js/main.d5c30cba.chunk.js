(this.webpackJsonpiteration_in_the_real_world=this.webpackJsonpiteration_in_the_real_world||[]).push([[0],[,,,,,,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},,function(e,t,r){"use strict";r.r(t);var c=r(1),i=r.n(c),n=r(4),a=r.n(n),s=(r(9),r(10),[{name:"Hearty beans",price:"1.99\u20ac",market:"Local Market"},{name:"Humble pizza",price:"3.99\u20ac",market:"Local Market"},{name:"Biodegradable beans",price:"7.00\u20ac",market:"Great Mall"},{name:"Posh Pizza",price:"16.05\u20ac",market:"Great Mall"},{name:"Just beans",price:"0.50\u20ac",market:"Corner Shop"},{name:"Just Pizza",price:"3.50\u20ac",market:"Corner Shop"}]),o=r(3),l=(r(11),{ALL:{code:"",description:"// Show all products"},FILTER:{type:"array.filter()",code:'products.filter( (product) => product.market === "Great Mall")',description:"// Show only products from the Great Mall",href:{github:"https://github.com/Syknapse/iteration_in_the_real_world/blob/main/src/components/ProductList/ProductList.jsx#L16",article:"https://cult.honeypot.io/contributors/syk-houdeib"}}}),d=r(0),h=function(e){var t=e.products,r=Object(c.useState)(t),i=Object(o.a)(r,2),n=i[0],a=i[1],s=Object(c.useState)(l.ALL),h=Object(o.a)(s,2),j=h[0],b=h[1];return Object(d.jsxs)("div",{className:"product-list",children:[Object(d.jsxs)("div",{className:"buttons-container",children:[Object(d.jsx)("button",{onClick:function(){return a(t),void b(l.ALL)},children:"Show All"}),Object(d.jsx)("button",{onClick:function(){return function(){var e=t.filter((function(e){return"Great Mall"===e.market}));a(e),b(l.FILTER)}()},children:"array.filter()"})]}),Object(d.jsxs)("div",{className:"info-container",children:[j.description&&Object(d.jsx)("p",{children:j.description}),j.code&&Object(d.jsx)("code",{children:j.code})]}),Object(d.jsx)("div",{className:"cards-container",children:n.map((function(e){return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsx)("p",{children:e.price}),Object(d.jsx)("p",{children:e.market})]},e.name)}))}),j.href&&Object(d.jsxs)("div",{className:"links-container",children:[Object(d.jsxs)("h3",{children:["**",j.type,"**"]}),Object(d.jsxs)("div",{className:"links",children:[Object(d.jsx)("a",{href:j.href.github,target:"_blank",rel:"noreferrer",children:"View this line on GitHub"}),Object(d.jsx)("a",{href:j.href.article,target:"_blank",rel:"noreferrer",children:"Read the article"})]})]})]})};var j=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"App-header",children:Object(d.jsx)("h1",{children:"JavaScript iteration in the real world"})}),Object(d.jsx)(h,{products:s}),Object(d.jsxs)("footer",{children:[Object(d.jsxs)("p",{children:["Project by Syk Houdeib"," ",Object(d.jsx)("a",{href:"https://twitter.com/Syknapse",children:"@Syknapse"})," for a series of articles on"," ",Object(d.jsx)("a",{href:"https://cult.honeypot.io/contributors/syk-houdeib",children:".cult by Honeypot"})]}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:"https://github.com/Syknapse/iteration_in_the_real_world",children:"View project on GitHub"})})]})]})};a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.d5c30cba.chunk.js.map