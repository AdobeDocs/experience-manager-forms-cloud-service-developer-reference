"use strict";(self.webpackChunkexperience_manager_forms_cloud_service=self.webpackChunkexperience_manager_forms_cloud_service||[]).push([[1206],{91515:function(e,t,n){var l=n(15785),i=n(64572),r=n(15007),o=n(1597),a=n(64983),s=n(95223),d=n(26777),u=n(44264),c=n(42075),p=n(23576),v=n(69679),m=n(56013),h=n(24149),f=n(48261),g=n(31160),b=n(21183),y=n(45553),x=n(47029),Z=n(60325),w=n(1931),P=n(9732);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const C=e=>{let{childrenArray:t,query:n,hasSideNav:l}=e;const i=[];let o=null,a=null;for(;t.length;){const e=t[0];let s=0;Object.keys(P.a).forEach((d=>{var c;if((null==e||null===(c=e.props)||void 0===c?void 0:c.mdxType)===d){s++;let d=[];if(e.props.slots||e.props.repeat){const n=Math.max(parseInt(e.props.repeat)||1,1);for(let l=0;l<n;l++)d=d.concat((e.props.slots||"element").split(",").map(((e,i)=>[""+e.trim()+(1===n?"":l),t[d.length+i+1]])))}if(d.length){s+=d.length;const t=Object.fromEntries(d);"Variant"===e.props.mdxType&&(t.query=n),"Hero"===e.props.mdxType&&l&&(t.width="calc("+u.Av+" - "+u.dP+");");const c=(0,r.cloneElement)(e,j({},t));"Hero"===e.props.mdxType?o=o||c:"Resources"===e.props.mdxType?a=a||c:i.push(c)}else i.push(e)}})),0===s&&(s++,i.push(e)),t=t.splice(s)}return{filteredChildren:i,heroChild:o,resourcesChild:a}};var k={name:"donbax",styles:"display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;margin-bottom:var(--spectrum-global-dimension-size-200);position:sticky;bottom:3px;background:white;border:1px solid;border-color:lightgray;border-radius:4px;padding:.75rem"},q={name:"4zleql",styles:"display:block"},A={name:"1ggp1wf",styles:"margin-right:var(--spectrum-global-dimension-size-400)"},z={name:"zjik7",styles:"display:flex"},_={name:"7wiue4",styles:"align-items:center;justify-content:center;display:flex;flex-direction:column"};t.Z=e=>{var t;let{children:n,pageContext:i,query:O}=e;const{hasSideNav:D,siteMetadata:M,location:N,allSitePage:S,allMdx:E,allGithub:T,allGithubContributors:B}=(0,r.useContext)(d.ZP),L=void 0===i;let I=r.Children.toArray(n);if(L||"none"===(null==i||null===(t=i.frontmatter)||void 0===t?void 0:t.layout)){const{filteredChildren:e}=C({childrenArray:(0,Z.L)(I),query:O,hasSideNav:D});return L?(0,s.tZ)(a.MDXProvider,null,e):(0,s.tZ)(a.MDXProvider,{components:j(j({},w.t),P.a)},e,(0,s.tZ)(c.$,{hasSideNav:D}))}{var X,G,H,Y,J,K,R,$,V,F,Q,U,W,ee,te,ne,le,ie,re,oe;const e=(0,u.kR)(null==N?void 0:N.pathname,null==M?void 0:M.subPages),t=(0,u.P4)(null==N?void 0:N.pathname,null==M?void 0:M.subPages),{nextPage:n,previousPage:r}=(0,u.sl)(null==N?void 0:N.pathname,null==M?void 0:M.subPages),d=null==i||null===(X=i.frontmatter)||void 0===X?void 0:X.contributor_name,O=null==i||null===(G=i.frontmatter)||void 0===G?void 0:G.contributor_link,L=null==i||null===(H=i.frontmatter)||void 0===H?void 0:H.edition,ae=null==S?void 0:S.nodes.find((e=>{let{path:t}=e;return(0,o.dq)(t)===(null==N?void 0:N.pathname)})),se=null!==(Y=null==ae?void 0:ae.component)&&void 0!==Y?Y:"",de=null==E?void 0:E.nodes.find((e=>{let{fileAbsolutePath:t}=e;return t===se})),ue=null!==(J=null==de?void 0:de.tableOfContents)&&void 0!==J?J:{},{repository:ce,default_branch:pe,root:ve}=null==T?void 0:T.nodes[0],me=null==B?void 0:B.nodes.find((e=>{let{path:t}=e;return t===se})),he=null!==(K=null==me?void 0:me.contributors)&&void 0!==K?K:[],fe=se.replace(/.*\/src\/pages\//g,""),ge=void 0!==(null==i||null===(R=i.frontmatter)||void 0===R?void 0:R.hideBreadcrumbNav)&&i.frontmatter.hideBreadcrumbNav;if("boolean"!=typeof ge)throw new Error("hideBreadcrumbNav is not a boolean. Correct use hideBreadcrumbNav: true");const{home:be}=M,ye=(0,u.A6)(N.pathname),xe=(0,u.Gh)(null==M?void 0:M.pages),Ze=(0,u.Yx)(ye,xe),we=(0,u.xH)(ye,Ze),Pe=(0,u.Lh)(null==N?void 0:N.pathname,null==M?void 0:M.subPages);let Oe=[];if(Pe.length){const e=Pe[Pe.length-1].level+1;for(let t=0;t<e;t++){const e=Pe.filter((e=>e.level===t));e.length&&Oe.push(e.pop())}}let je=!1;null!=i&&null!==($=i.frontmatter)&&void 0!==$&&$.jsDoc&&(je=!0,I=(0,Z.L)(I));const{filteredChildren:Ce,heroChild:ke,resourcesChild:qe}=C({childrenArray:I,hasSideNav:D}),Ae=null===ke,ze=null!==ke&&(!ke.props.variant||"default"===ke.props.variant),_e=null!==ke&&ke.props.variant&&"default"!==ke.props.variant,De=null==ue||null===(V=ue.items)||void 0===V||null===(F=V[0])||void 0===F?void 0:F.items,Me=!ke&&(D||je)&&De&&(De.length>1||1===De.length&&(null===(Q=De[0])||void 0===Q||null===(U=Q.items)||void 0===U?void 0:U.length)>1||(null===(W=De[0])||void 0===W?void 0:W.title)),Ne=Boolean(qe),Se=(null==e?void 0:e.pathname)===(null==t||null===(ee=t[0])||void 0===ee?void 0:ee.pathname),Ee=12,Te=[];let Be=0;if(D&&++Be,Me&&++Be,Ne&&++Be,Be>0){const e=(0,u.MY)(Be+1);Te.push(e+" - var(--spectrum-global-dimension-size-400)")}return D&&Te.push(u.dP),(0,s.tZ)(a.MDXProvider,{components:j(j({},w.t),P.a)},(0,s.tZ)("main",{css:_},ke&&ke,(0,s.tZ)("div",{css:(0,s.iv)(_e?"width: var(--spectrum-global-dimension-static-grid-fluid-width);":"\n                max-width: "+u.Av+";\n                margin: 0 var(--spectrum-global-dimension-size-800);\n                "," ",ze&&"\n                h2:first-of-type {\n                  margin-top: 0 !important;\n                }\n              ","@media screen and (max-width: ",u.Av,"){max-width:none;margin:0 var(--spectrum-global-dimension-size-400);}")},(0,s.tZ)("div",{css:z},(0,s.tZ)("div",{css:(0,s.iv)("width:",_e?"\n                      var(--spectrum-global-dimension-static-grid-fluid-width);\n                      text-align: center;\n                      ":(0,u.MY)(Ee,Te),";@media screen and (max-width: ",u.Av,"){width:100%;}")},Ae&&(0,s.tZ)("div",{css:(0,s.iv)("display:flex;margin-top:var(--spectrum-global-dimension-size-500);margin-bottom:var(--spectrum-global-dimension-size-500);@media screen and (max-width: ",u.Av,"){flex-direction:column;}")},!ge&&Ze&&(0,s.tZ)("div",{css:A},!0!==(null==be?void 0:be.hidden)&&null!=be&&be.title&&null!=be&&be.href?(0,s.tZ)(h.O,{pages:[u.JK,be,j(j({},Ze),{},{href:(0,o.dq)(Ze.href)}),we&&j(j({},we),{},{href:(0,o.dq)(we.href)})].concat((0,l.Z)(Oe.map((e=>j(j({},e),{},{href:(0,o.dq)((0,u.Mi)(e.href))})))))}):(0,s.tZ)(h.O,{pages:[u.JK,(null==M||null===(te=M.pages)||void 0===te?void 0:te.length)>1?j(j({},null==M||null===(ne=M.pages)||void 0===ne?void 0:ne[0]),{},{href:(0,o.dq)(null==M||null===(le=M.pages)||void 0===le||null===(ie=le[0])||void 0===ie?void 0:ie.href)}):null,j(j({},Ze),{},{href:(0,o.dq)(Ze.href)}),we&&j(j({},we),{},{href:(0,o.dq)(we.href)})].concat((0,l.Z)(Oe.map((e=>e.title===(null==Ze?void 0:Ze.title)&&e.href===(null==Ze?void 0:Ze.href)?null:j(j({},e),{},{href:(0,o.dq)((0,u.Mi)(e.href))})))))})),(0,s.tZ)("div",{css:(0,s.iv)("margin-left:auto;display:flex;align-items:center;@media screen and (max-width: ",u.Av,"){margin-left:0;margin-top:var(--spectrum-global-dimension-size-200);}")},M&&M.githubIssue&&M.githubIssue.removeLogIssue?null:(0,s.tZ)(m.X,{repository:ce,branch:pe,root:ve,pagePath:fe}))),(0,s.tZ)("div",{css:q},L&&(0,s.tZ)(g.c,{name:L}),O&&(0,s.tZ)(f.x,{name:d,link:O})),Ce,Ae&&Se&&(0,s.tZ)(y.x,{pages:t}),Ae&&(0,s.tZ)(x.m,{nextPage:n,previousPage:r}),!_e&&(0,s.tZ)("div",{css:k},(0,s.tZ)("div",null,(0,s.tZ)(p.T,{repository:ce,branch:pe,root:ve,pagePath:fe,contributors:he,externalContributors:null==i||null===(re=i.frontmatter)||void 0===re?void 0:re.contributors,date:null!==(oe=he[0])&&void 0!==oe&&oe.date?new Date(he[0].date).toLocaleDateString():""})),(0,s.tZ)("div",{css:(0,s.iv)("@media screen and (max-width: ",u.Av,"){margin-top:var(--spectrum-global-dimension-size-200);}")},(0,s.tZ)(v.x,null)))),Me&&(0,s.tZ)(b.m,{tableOfContents:ue}),Ne&&qe)),(0,s.tZ)(c.$,{hasSideNav:D})))}}}}]);
//# sourceMappingURL=2dee68d8-70cef3d7d960540e2350.js.map