(this.webpackJsonpcount=this.webpackJsonpcount||[]).push([[0],{105:function(e,t,c){},111:function(e,t,c){},112:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c.n(i),a=c(45),l=c.n(a),s=(c(98),c(69),c(99),c(33)),r=c(9),o=c(27),d=(c(105),c(13)),j=c(4),u=c(134),b={CREATE_COLLECTION:"CREATE_COLLECTION",UPDATE_COLLECTION:"UPDATE_COLLECTION",DELETE_COLLECTION:"DELETE_COLLECTION"},O=c(44),h=c(128),m=c(129),x=c(130),p=c(132),f=c(137),g=c(124),v=c(125),C=c(126),E=c(135),_=c(136),T=c(2);var N=function(){var e=Object(r.g)().id,t=Object(r.f)(),c=Object(i.useState)(!1),n=Object(j.a)(c,2),a=n[0],l=n[1],N=Object(i.useState)(""),k=Object(j.a)(N,2),S=k[0],L=k[1],y=Object(o.b)(),I=Object(i.useState)(""),D=Object(j.a)(I,2),A=D[0],w=D[1],P=Object(i.useState)(""),z=Object(j.a)(P,2),R=z[0],q=z[1],F=Object(i.useState)([]),U=Object(j.a)(F,2),X=U[0],B=U[1],V=Object(i.useState)(""),H=Object(j.a)(V,2),W=H[0],J=H[1],M=Object(i.useState)(""),Y=Object(j.a)(M,2),G=Y[0],Z=Y[1],K=Object(o.c)((function(e){return e.collections.collections}));Object(i.useEffect)((function(){var t,c,i,n=K.filter((function(t){return t.id===e}));w(null===(t=n[0])||void 0===t?void 0:t.name),q(null===(c=n[0])||void 0===c?void 0:c.description),B(null===(i=n[0])||void 0===i?void 0:i.images)}),[]);var Q=function(e,t){switch(t){case"name":w(e.target.value);break;case"description":q(e.target.value);break;case"link":J(e.target.value);break;case"alt":Z(e.target.value)}};return Object(T.jsxs)(g.a,{maxW:"xl",mt:"10",children:[Object(T.jsxs)(f.a,{status:"error",mb:2,hidden:!a,children:[Object(T.jsx)(f.b,{}),S]}),Object(T.jsxs)(v.a,{display:"flex",justifyContent:"space-between",children:[Object(T.jsx)("h2",{children:"Editing Collection"}),Object(T.jsxs)(v.a,{mb:"2",display:"flex",alignItems:"center",children:[Object(T.jsx)(p.a,{mr:"2",type:"submit",size:"xs",onClick:function(c){return c.preventDefault(),A.length<5?(L("Name should be atleast 5 character long"),l(!0),void setTimeout((function(){l(!1)}),3e3)):R.length<5?(L("Longer description atleast 10 characters long"),l(!0),void setTimeout((function(){l(!1)}),3e3)):0===X.length?(L("Please provide image data"),l(!0),void setTimeout((function(){l(!1)}),3e3)):(y({type:b.UPDATE_COLLECTION,payload:{id:e,name:A,description:R,images:X}}),void t.push("/home"))},disabled:a,children:"Update"}),Object(T.jsx)(s.b,{to:"/home",onClick:function(c){c.preventDefault(),y(function(e){return{type:b.DELETE_COLLECTION,payload:e}}(e)),t.push("/home")},children:Object(T.jsx)(C.a,{fontSize:"xs",color:"red.400",children:"Delete"})})]})]}),Object(T.jsx)("hr",{}),Object(T.jsx)("br",{}),Object(T.jsx)("form",{children:Object(T.jsxs)(E.a,{spacing:4,children:[Object(T.jsxs)(O.a,{children:[Object(T.jsx)(h.a,{children:"Collection Id"}),Object(T.jsx)(m.a,{type:"text",value:e,placeholder:"Collection Id",disabled:!0})]}),Object(T.jsxs)(O.a,{isRequired:!0,children:[Object(T.jsx)(h.a,{children:"Collection Name"}),Object(T.jsx)(m.a,{type:"text",onChange:function(e){return Q(e,"name")},value:A,placeholder:"Enter Collection Name"})]}),Object(T.jsxs)(O.a,{isRequired:!0,children:[Object(T.jsx)(h.a,{children:"Collection Description"}),Object(T.jsx)(x.a,{onChange:function(e){return Q(e,"description")},defaultValue:R,id:"collection_description",placeholder:"Enter Description",isRequired:!0})]}),Object(T.jsxs)(O.a,{children:[Object(T.jsx)(h.a,{children:"Add Images "}),Object(T.jsx)(m.a,{type:"url",onChange:function(e){return Q(e,"link")},placeholder:"Image Link",value:W}),Object(T.jsx)(m.a,{mt:2,type:"name",onChange:function(e){return Q(e,"alt")},placeholder:"Alternate Text",value:G}),Object(T.jsx)(p.a,{mt:2,w:"sm",d:"block",verticalAlign:"right",onClick:function(e){if(e.preventDefault(),W.length<8||0===G.length)return L("Please Fill Link Image Fields Properly"),l(!0),void setTimeout((function(){l(!1)}),3e3);var t=Object(u.a)(),c=[].concat(Object(d.a)(X),[{id:t,link:W,alt:G}]);B(c)},colorScheme:"teal",variant:"outline",children:"Add Image"}),Object(T.jsx)("div",{className:"image_preview",children:0!==X.length?X.map((function(e){return Object(T.jsxs)("div",{className:"list_item",children:[Object(T.jsx)(p.a,{backgroundColor:"red.400",size:"xs",position:"absolute",left:"90",top:"1",onClick:function(t){return function(e,t){e.preventDefault();var c=X.filter((function(e){return e.id!==t}));B(c)}(t,e.id)},children:"x"}),Object(T.jsx)(_.a,{boxSize:"100px",objectFit:"cover",src:e.link,fallbackSrc:"https://via.placeholder.com/150"},e.id)]},e.id)})):"No Images to show"})]})]})})]})},k=c(138),S=c(131);var L=function(e){var t=e.name,c=e.description,i=e.id,n=e.images;return Object(T.jsxs)(v.a,{className:"collection_card",children:[Object(T.jsxs)(v.a,{borderBottom:"1px",pb:"2",borderColor:"gray.200",display:"flex",justifyContent:"space-between",alignItems:"center",children:[Object(T.jsx)(S.a,{as:"h3",size:"md",children:t||"Heading"}),Object(T.jsxs)("p",{className:"image_count",children:[n.length," ",n.length>1?"items":"item"]})]}),Object(T.jsxs)(v.a,{mt:"5",children:[Object(T.jsx)(S.a,{as:"h4",size:"sm",children:"Description"}),Object(T.jsx)(C.a,{fontSize:"xs",mt:2,color:"gray.600",isTruncated:!0,children:c||"Description goes here"}),Object(T.jsx)(v.a,{className:"collection_card_image",children:0===n.length?"No Images to Show":n.map((function(e){return Object(T.jsx)(_.a,{p:"1",boxSize:"100px",objectFit:"cover",src:e.link,alt:e.alt},e.id)}))}),Object(T.jsx)(s.b,{to:"/edit/".concat(i),children:Object(T.jsx)(v.a,{display:"flex",alignItems:"center",children:Object(T.jsx)(k.a,{ml:2})})}),Object(T.jsx)(r.a,{path:"/edit/:id",component:N})]})]})};var y=function(){var e=Object(o.c)((function(e){return e.collections.collections}));return Object(T.jsx)("div",{className:"home",children:e.map((function(e){return Object(T.jsx)(L,{name:e.name,description:e.description,id:e.id,images:e.images},e.id)}))})},I=(c(111),Object(u.a)());var D=function(){var e=Object(r.f)(),t=Object(o.b)(),c=Object(i.useState)(!1),n=Object(j.a)(c,2),a=n[0],l=n[1],s=Object(i.useState)(""),C=Object(j.a)(s,2),N=C[0],k=C[1],S=Object(i.useState)(""),L=Object(j.a)(S,2),y=L[0],D=L[1],A=Object(i.useState)(""),w=Object(j.a)(A,2),P=w[0],z=w[1],R=Object(i.useState)([]),q=Object(j.a)(R,2),F=q[0],U=q[1],X=Object(i.useState)(""),B=Object(j.a)(X,2),V=B[0],H=B[1],W=Object(i.useState)(""),J=Object(j.a)(W,2),M=J[0],Y=J[1],G=function(c){return c.preventDefault(),y.length<5?(k("Name should be atleast 5 character long"),l(!0),void setTimeout((function(){l(!1)}),3e3)):P.length<5?(k("Longer description atleast 10 characters long"),l(!0),void setTimeout((function(){l(!1)}),3e3)):0===F.length?(k("Please provide image data"),l(!0),void setTimeout((function(){l(!1)}),3e3)):(t({type:b.CREATE_COLLECTION,payload:{id:I,name:y,description:P,images:F}}),I=Object(u.a)(),void e.push("/home"))},Z=function(e,t){"name"===t?D(e.target.value):"description"===t?z(e.target.value):"link"===t?H(e.target.value):"alt"===t&&Y(e.target.value)};return Object(T.jsxs)(g.a,{maxW:"xl",mt:"4",children:[Object(T.jsxs)(f.a,{status:"error",mb:2,hidden:!a,children:[Object(T.jsx)(f.b,{}),N]}),Object(T.jsx)("form",{children:Object(T.jsxs)(E.a,{spacing:4,children:[Object(T.jsx)(v.a,{display:"flex",alignItems:"center",justifyContent:"flex-end",width:"100%",children:Object(T.jsx)(p.a,{type:"submit",size:"sm",colorScheme:"teal",onClick:function(e){return G(e)},disabled:a,children:"Create Collection"})}),Object(T.jsxs)(O.a,{children:[Object(T.jsx)(h.a,{children:"Collection Id"}),Object(T.jsx)(m.a,{type:"text",value:I,placeholder:"Collection Id",disabled:!0})]}),Object(T.jsxs)(O.a,{isRequired:!0,children:[Object(T.jsx)(h.a,{children:"Collection Name"}),Object(T.jsx)(m.a,{type:"text",onChange:function(e){return Z(e,"name")},value:y,placeholder:"Enter Collection Name",required:!0})]}),Object(T.jsxs)(O.a,{isRequired:!0,children:[Object(T.jsx)(h.a,{children:"Collection Description"}),Object(T.jsx)(x.a,{onChange:function(e){return Z(e,"description")},defaultValue:P,id:"collection_description",placeholder:"Enter Description",isRequired:!0})]}),Object(T.jsxs)(O.a,{children:[Object(T.jsx)(h.a,{children:"Add Images"}),Object(T.jsx)(m.a,{type:"url",onChange:function(e){return Z(e,"link")},placeholder:"Image Link",value:V}),Object(T.jsx)(m.a,{mt:2,type:"name",onChange:function(e){return Z(e,"alt")},placeholder:"Alternate Text",value:M}),Object(T.jsx)(p.a,{mt:2,d:"block",verticalAlign:"right",onClick:function(e){e.preventDefault();var t=Object(u.a)();if(V.length<8||0===M.length)return k("Please Fill Link Image Fields Properly"),l(!0),void setTimeout((function(){l(!1)}),3e3);var c=[].concat(Object(d.a)(F),[{id:t,link:V,alt:M}]);U(c)},colorScheme:"teal",variant:"outline",children:"Add Image"}),Object(T.jsx)("div",{className:"image_preview",mb:"4",children:F.map((function(e){return Object(T.jsxs)("div",{className:"list_item",children:[Object(T.jsx)(p.a,{backgroundColor:"red.400",size:"xs",position:"absolute",left:"90",top:"0",onClick:function(t){return function(e,t){e.preventDefault();var c=F.filter((function(e){return e.id!==t}));U(c)}(t,e.id)},children:"x"}),Object(T.jsx)(_.a,{boxSize:"100px",objectFit:"cover",src:e.link,fallbackSrc:"https://via.placeholder.com/150"},e.id)]},e.id)}))})]})]})})]})};var A=function(){return Object(T.jsx)(s.a,{children:Object(T.jsxs)("div",{children:[Object(T.jsx)("nav",{id:"top_nav",children:Object(T.jsxs)("ul",{id:"nav_list",children:[Object(T.jsx)("li",{className:"nav_list_item",children:Object(T.jsx)(s.b,{to:"/home",children:"Home"})}),Object(T.jsx)("li",{className:"nav_list_item",children:Object(T.jsx)(s.b,{to:"/create_new",children:"Create"})})]})}),Object(T.jsxs)(r.c,{children:[Object(T.jsx)(r.a,{exact:!0,path:"/create_new",children:Object(T.jsx)(D,{})}),Object(T.jsx)(r.a,{exact:!0,path:"/home",children:Object(T.jsx)(y,{})}),Object(T.jsx)(r.a,{exact:!0,path:"/edit/:id",children:Object(T.jsx)(N,{})})]})]})})},w=c(133);var P=function(){return Object(T.jsx)(w.a,{children:Object(T.jsx)("div",{className:"App",children:Object(T.jsx)(A,{})})})},z=c(57),R=c(35),q={collections:[{id:"acd1",name:"Animal Collection",description:"Farhan's Snaps",images:[{id:"121",link:"https://i.picsum.photos/id/367/200/200.jpg?hmac=6NmiWxiENMBIeAXEfu9fN20uigiBudgYzqHfz-eXZYk",alt:"PicSum"}]},{id:"bcd1",name:"Anime Collection",description:"Tokyo Ghoul",images:[{id:"123",link:"https://picsum.photos/200/300?grayscale",alt:"PicSum"}]},{id:"def1",name:"Country Collection",description:"Country Side Collections",images:[{id:"100",link:"https://picsum.photos/200/300/?blur=2",alt:"PicSum"}]},{id:"ghi1",name:"Dog Collection",description:"All breeds of dogs",images:[{id:"99",link:"https://picsum.photos/id/237/200/300",alt:"PicSum"}]}]},F=Object(z.a)({collections:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,c=t.type,i=t.payload;switch(c){case b.CREATE_COLLECTION:return Object(R.a)(Object(R.a)({},e),{},{collections:[].concat(Object(d.a)(e.collections),[i])});case b.UPDATE_COLLECTION:var n=e.collections.findIndex((function(e){return e.id===i.id})),a=e.collections.splice(n,1,i);return Object(R.a)(Object(R.a)({},e),{},{updatedState:a});case b.DELETE_COLLECTION:var l=e.collections.filter((function(e){return e.id!==i}));return Object(R.a)(Object(R.a)({},e),{},{collections:l});default:return e}}}),U=Object(z.b)(F,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(Object(T.jsx)(n.a.StrictMode,{children:Object(T.jsx)(o.a,{store:U,children:Object(T.jsx)(P,{})})}),document.getElementById("root"))},69:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[112,1,2]]]);
//# sourceMappingURL=main.e3b63444.chunk.js.map