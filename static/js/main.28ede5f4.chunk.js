(this.webpackJsonphw23=this.webpackJsonphw23||[]).push([[0],{12:function(e,t,s){},19:function(e,t,s){},20:function(e,t,s){},26:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),n=s(6),i=s.n(n),o=(s(19),s(9),s(4)),r=(s(20),s(2)),l=s.p+"static/media/avatar.865c7b35.jpg",d=s(13),j=s(3),p=s(14),u=s.p+"static/media/elonPostImg.4cc560ea.jpg",h={postsList:[{userAvatar:l,userName:"Elon Musk",nick:"@elonmusk",date:"4 feb.",userText:"ur welcome",postImg:u,footerRespIconContent:"23.9k",footerRetwIconContent:"170.1k",footerLikeIconContent:"1m"},{userAvatar:"https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",userName:"Anakin Skywalker",nick:"@dart_vader",date:"10 apr",userText:"WTF? Who is Ray? Why she is Skywalker? Luke...?",postImg:"https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",footerRespIconContent:"40k",footerRetwIconContent:"454k",footerLikeIconContent:"1.15m"}]},m=Object(p.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add_post":return Object(j.a)(Object(j.a)({},e),{},{postsList:[].concat(Object(d.a)(e.postsList),[t.payload])});default:return e}})),b=s(1),g=function(){var e=Object(r.b)(),t=Object(a.useState)(""),s=Object(o.a)(t,2),c=s[0],n=s[1],i=Object(a.useState)(l),d=Object(o.a)(i,2),j=d[0],p=d[1],u=Object(a.useState)("@elonmusk"),h=Object(o.a)(u,2),m=h[0],g=h[1],k=Object(a.useState)(""),O=Object(o.a)(k,2),f=O[0],x=O[1],v=Object(a.useState)("elon"),N=Object(o.a)(v,2),w=N[0],I=N[1];return Object(b.jsxs)("div",{className:"add-post-wrapper",children:[Object(b.jsx)("input",{type:"text",placeholder:"Please input publications text",onChange:function(e){n(e.target.value)},className:"text-input"}),Object(b.jsx)("input",{type:"url",placeholder:"Please paste publications image url",onChange:function(e){x(e.target.value)},className:"url-input"}),Object(b.jsxs)("select",{onClick:function(e){switch(I(e.target.value),e.target.value){case"Elon Musk":p(l),g("@elonmusk");break;case"Anakin Skywalker":p("https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg"),g("@dart_vader");break;case"Jhon Shepard":p("https://i.pinimg.com/originals/a7/e8/f3/a7e8f34c2523402796d236120673e0de.jpg"),g("@SPECTR");break;case"Jhonny Silverhand":p("https://i.pinimg.com/originals/85/ad/f8/85adf800892ff6927077a0d54386bfa6.png"),g("@f*ck_arasaka");break;case"Kiki Vhyce":p("https://cs10.pikabu.ru/post_img/big/2020/07/08/12/1594238492247893898.png"),g("@butt-queen");break;default:p(l),g("@elonmusk")}},className:"select-input",children:[Object(b.jsx)("option",{disabled:!0,children:"Choose person"}),Object(b.jsx)("option",{value:"Elon Musk",children:"Elon Musk"}),Object(b.jsx)("option",{value:"Anakin Skywalker",children:"Anakin Skywalker"}),Object(b.jsx)("option",{value:"Jhon Shepard",children:"Jhon Shepard"}),Object(b.jsx)("option",{value:"Jhonny Silverhand",children:"Jhonny Silverhand"}),Object(b.jsx)("option",{value:"Kiki Vhyce",children:"Kiki Vhyce"})]}),Object(b.jsx)("button",{onClick:function(){var t=new Date,s=t.getUTCDate(),a=t.getUTCMonth()+1,n=t.getUTCFullYear(),i="".concat(s,"/").concat(a,"/").concat(n);e(function(e){return{type:"add_post",payload:e}}({userAvatar:j,userName:w,nick:m,date:i,userText:c,postImg:f,footerRespIconContent:"23.9k",footerRetwIconContent:"170.1k",footerLikeIconContent:"1m"}))},style:{marginBottom:20},children:"Add post"})]})},k=(s(12),s.p+"static/media/check.7494a777.svg"),O=s.p+"static/media/dot.0b2975e4.svg",f=s.p+"static/media/dots.d4e11403.svg",x=s.p+"static/media/resp.3384887a.svg",v=s.p+"static/media/retw.d50fe36c.svg",N=s.p+"static/media/like.e3096dbd.svg",w=s.p+"static/media/share.ee81b3b6.svg",I=function(e){var t=e.userAvatar,s=e.userName,a=e.nick,c=e.date,n=e.userText,i=e.postImg,o=e.footerRespIconContent,r=e.footerRetwIconContent,l=e.footerLikeIconContent;return Object(b.jsxs)("section",{className:"page-style",children:[Object(b.jsx)("div",{className:"avatar-wrapper",children:Object(b.jsx)("img",{className:"avatar",src:t,alt:" "})}),Object(b.jsxs)("div",{className:"post-head",children:[Object(b.jsxs)("div",{className:"user-wrapper",children:[Object(b.jsx)("h3",{className:"user-name",children:s}),Object(b.jsx)("img",{className:"sub-icon",src:k,style:{width:15,height:15},alt:" "}),Object(b.jsx)("p",{className:"user-nick",children:a}),Object(b.jsx)("img",{className:"single-dot",src:O,style:{width:15,height:15},alt:" "}),Object(b.jsx)("span",{className:"date",children:c})]}),Object(b.jsx)("img",{className:"dots-menu",src:f,alt:" "})]}),Object(b.jsx)("div",{className:"user-text",children:n}),Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:"postImg",src:i,alt:" "})}),Object(b.jsxs)("div",{className:"posts-footer",children:[Object(b.jsxs)("div",{className:"footer-item",children:[Object(b.jsx)("img",{className:"footerIcon footerRespIcon",src:x,style:{width:15,height:15},alt:" "}),Object(b.jsx)("span",{className:"footerIconContent",children:o})]}),Object(b.jsxs)("div",{className:"footer-item",children:[Object(b.jsx)("img",{className:"footerIcon footerRetwIcon",src:v,style:{width:20,height:20},alt:" "}),Object(b.jsx)("span",{className:"footerIconContent",children:r})]}),Object(b.jsxs)("div",{className:"footer-item",children:[Object(b.jsx)("img",{className:"footerIcon footerLikeIcon",src:N,style:{width:15,height:15},alt:" "}),Object(b.jsx)("span",{className:"footerIconContent",children:l})]}),Object(b.jsx)("div",{className:"footer-item",children:Object(b.jsx)("img",{className:"footerIcon footerShareIcon",src:w,style:{width:15,height:15},alt:" "})})]})]})},y=function(){var e=Object(r.c)((function(e){return e.postsList}));return Object(b.jsx)("div",{className:"App",children:e.map((function(e,t){return Object(a.createElement)(I,Object(j.a)(Object(j.a)({},e),{},{key:t}))}))})},C=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(g,{}),Object(b.jsx)(y,{})]})},S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,27)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(r.a,{store:m,children:Object(b.jsx)(C,{})})}),document.getElementById("root")),S()},9:function(e,t,s){}},[[26,1,2]]]);
//# sourceMappingURL=main.28ede5f4.chunk.js.map