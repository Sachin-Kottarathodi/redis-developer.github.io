(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(154)),o={id:"index-install",title:"2. Install Redisearch",sidebar_label:"2. Install Redisearch",slug:"/howtos/moviesdatabase/install"},l={unversionedId:"howtos/moviesdatabase/install/index-install",id:"howtos/moviesdatabase/install/index-install",isDocsHomePage:!1,title:"2. Install Redisearch",description:"You have multiple ways to run RediSearch:",source:"@site/docs/howtos/moviesdatabase/install/index-install.mdx",slug:"/howtos/moviesdatabase/install",permalink:"/howtos/moviesdatabase/install",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/moviesdatabase/install/index-install.mdx",version:"current",sidebar_label:"2. Install Redisearch",sidebar:"docs",previous:{title:"1. Getting Started",permalink:"/howtos/moviesdatabase/getting-started"},next:{title:"3. Create Index",permalink:"/howtos/moviesdatabase/create"}},s=[],c={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You have multiple ways to run RediSearch:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"building from ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/RediSearch/RediSearch"}),"sources")," and installing it inside an existing Redis Instance"),Object(i.b)("li",{parentName:"ul"},"using ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://redislabs.com/redis-enterprise-cloud/"}),"Redis Cloud")," ",Object(i.b)("em",{parentName:"li"},"(when RediSearch module 2.0 available)")),Object(i.b)("li",{parentName:"ul"},"using ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://redislabs.com/redis-enterprise-software/"}),"Redis Enterprise")," ",Object(i.b)("em",{parentName:"li"},"(when RediSearch module 2.0 available)")),Object(i.b)("li",{parentName:"ul"},"using ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://hub.docker.com/r/redislabs/redisearch/"}),"Docker"))),Object(i.b)("p",null,"Let's use Docker for now."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"1.1 Open a terminal an run the following command")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"> docker run -it --rm --name redis-search-2 \\\n   -p 6379:6379 \\\n   redislabs/redisearch:2.0.2\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Note: The container will automatically be removed when it exits (",Object(i.b)("inlineCode",{parentName:"em"},"--rm")," parameter).")),Object(i.b)("p",null,"You have now a Redis instance running with RediSearch installed, let's discover the basics."),Object(i.b)("hr",null))}b.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(n),p=r,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||i;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);