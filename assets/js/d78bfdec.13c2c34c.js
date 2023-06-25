"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[373],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=i(n),g=a,f=p["".concat(s,".").concat(g)]||p[g]||m[g]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={slug:"voice-assistant",title:"\u53d1\u5e03\u4e00\u4e2a\u5f00\u6e90\u5c0f\u9879\u76ee - \u8bed\u97f3\u52a9\u624b",authors:["backendcloud"],tags:["\u901a\u7528\u4eba\u5de5\u667a\u80fd"]},l=void 0,c={permalink:"/blog/voice-assistant",editUrl:"https://github.com/backendcloud/backendcloud.github.io/tree/main/blog/2023-04-25-voice-assistant.md",source:"@site/blog/2023-04-25-voice-assistant.md",title:"\u53d1\u5e03\u4e00\u4e2a\u5f00\u6e90\u5c0f\u9879\u76ee - \u8bed\u97f3\u52a9\u624b",description:"\u5b9e\u73b0\u7684\u529f\u80fd\uff1a\u8bed\u97f3\u52a9\u624b\u3002\u901a\u8fc7\u8c03\u7528OpenAI\u5b98\u65b9API\u5b9e\u73b0\u3002",date:"2023-04-25T00:00:00.000Z",formattedDate:"2023\u5e744\u670825\u65e5",tags:[{label:"\u901a\u7528\u4eba\u5de5\u667a\u80fd",permalink:"/blog/tags/\u901a\u7528\u4eba\u5de5\u667a\u80fd"}],readingTime:1.285,hasTruncateMarker:!1,authors:[{name:"backendcloud",title:"\u540e\u7aef\u4e91",url:"https://www.backendcloud.cn",imageURL:"https://avatars.githubusercontent.com/u/15382060?v=4",key:"backendcloud"}],frontMatter:{slug:"voice-assistant",title:"\u53d1\u5e03\u4e00\u4e2a\u5f00\u6e90\u5c0f\u9879\u76ee - \u8bed\u97f3\u52a9\u624b",authors:["backendcloud"],tags:["\u901a\u7528\u4eba\u5de5\u667a\u80fd"]},nextItem:{title:"\u53d1\u5e03\u4e00\u4e2a\u5f00\u6e90\u5c0f\u9879\u76ee - Hugging Push",permalink:"/blog/Hugging-Push"}},s={authorsImageUrls:[void 0]},i=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2}],u={toc:i},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5b9e\u73b0\u7684\u529f\u80fd\uff1a\u8bed\u97f3\u52a9\u624b\u3002\u901a\u8fc7\u8c03\u7528OpenAI\u5b98\u65b9API\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u5728\u7ebfdemo\uff1a ",(0,a.kt)("a",{parentName:"p",href:"https://huggingface.co/spaces/AutoGeneralAI/voice-assistant"},"https://huggingface.co/spaces/AutoGeneralAI/voice-assistant")),(0,a.kt)("p",null,"\u4ee3\u7801\u4ed3\u5e93\uff1a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AutoGeneralAI/voice-assistant"},"https://github.com/AutoGeneralAI/voice-assistant")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,a.kt)("p",null,"\u5c06\u81ea\u5df1\u7684OpenAI API KEY ",(0,a.kt)("a",{parentName:"p",href:"https://platform.openai.com/"},"https://platform.openai.com/")," \u653e\u5165key\u8f93\u5165\u6846\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u6109\u5feb\u7684\u8bed\u97f3\u5bf9\u8bdd\u4e86\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u521d\u6b21\u4f7f\u7528\uff0c\u6d4f\u89c8\u5668\uff0c\u6bd4\u5982Chrome\u4f1a\u8be2\u95ee\u662f\u5426\u5141\u8bb8\u6253\u5f00\u9ea6\u514b\u98ce\uff0c\u9009\u62e9\u5141\u8bb8\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u4fdd\u5b58\u5bf9\u8bdd\u8bb0\u5f55\u3002\u76ee\u524d\u53ea\u5b9e\u73b0\u4e86\u5bf9\u8bdd\u3002\u4eba\u7c7b\u7684\u89d2\u8272\u53ef\u4ee5\u8bed\u97f3\uff0cAI\u89d2\u8272\u8fd8\u662f\u4ee5\u6587\u5b57\u8f93\u51fa\u3002\u6587\u5b57\u6717\u8bfb\u51fa\u6765\u7684\u529f\u80fd\u7559\u5f85\u4e0b\u6b21\u5b9e\u73b0\u6216\u8005\u6b22\u8fce\u63d0pr\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/105260427/234028574-eeb218f9-363a-4fee-88bf-8170b677e2e1.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"input:")),(0,a.kt)("p",null,"\u70b9\u51fb\u5f00\u59cb\u5f55\u97f3\uff0c\u7136\u540e\u8bf4\u8bdd\uff0c\u8bf4\u5b8c\u70b9\u51fb\u505c\u6b62\u5f55\u97f3\uff0c\u70b9\u51fb\u53d1\u9001\u6309\u94ae\uff0c\u7136\u540eAI\u4f1a\u56de\u590d\u3002\u518d\u6b21\u5f55\u5236\u8bed\u97f3\uff0cAI\u4f1a\u7ee7\u7eed\u56de\u590d\u3002\uff08\u518d\u6b21\u5f55\u5236\u8bed\u97f3\uff0c\u8981\u70b9\u51fb\u53c9\u6309\u94ae\u540e\u624d\u53ef\u4ee5\u5f55\u4e0b\u4e00\u6761\u8bed\u97f3\uff09"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"output:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"user: How to be a qualified programmer?\n\nassistant: Get an education, learn different programming languages, build projects, and practice coding regularly. Also, stay up-to-date with industry trends and technology advancements.\n\nuser: \u4f60\u597d,\u4f60\u4f1a\u8bf4\u4e2d\u6587\u5417?\n\nassistant: \u662f\u7684\uff0c\u6211\u80fd\u8bf4\u4e2d\u6587\u3002\n")))}m.isMDXComponent=!0}}]);