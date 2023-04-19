"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5397],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,g=p["".concat(l,".").concat(u)]||p[u]||f[u]||o;return n?i.createElement(g,r(r({ref:t},c),{},{components:n})):i.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const o={sidebar_position:13},r="\u7528Stable Diffusion\u753b\u7f8e\u5973",s={unversionedId:"general-ai/Stable-Diffusion",id:"general-ai/Stable-Diffusion",title:"\u7528Stable Diffusion\u753b\u7f8e\u5973",description:"Stable Diffusion\u662f\u4e00\u4e2a\u57fa\u4e8eLatent Diffusion Models\uff08\u6f5c\u5728\u6269\u6563\u6a21\u578b\uff0cLDMs\uff09\u7684\u6587\u56fe\u751f\u6210\uff08text-to-image\uff09\u6a21\u578b\u3002\u5b83\u662f\u7531CompVis\u3001Stability AI\u548cLAION\u5171\u540c\u5f00\u53d1\u7684\u4e00\u4e2a\u6587\u672c\u8f6c\u56fe\u50cf\u6a21\u578b\uff0c\u53ef\u4ee5\u5c06\u6587\u672c\u63cf\u8ff0\u8f6c\u6362\u4e3a\u56fe\u50cf\u3002",source:"@site/docs/general-ai/Stable-Diffusion.md",sourceDirName:"general-ai",slug:"/general-ai/Stable-Diffusion",permalink:"/docs/general-ai/Stable-Diffusion",draft:!1,editUrl:"https://github.com/backendcloud/backendcloud.github.io/tree/main/docs/general-ai/Stable-Diffusion.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"GPT-4\u7684\u65e9\u671f\u5b9e\u9a8c\uff0c\u901a\u7528\u4eba\u5de5\u667a\u80fd\u7684\u706b\u82b1",permalink:"/docs/general-ai/gpt4-microsoft"},next:{title:"\u6d6a\u6f2b\u53e4\u98ce\uff0cAI\u6dfb\u5f69\u2014\u2014ChatGPT \u548c Dall-E 2 \u8054\u624b\u4e3a\u4e2d\u56fd\u53e4\u8bd7\u6ce8\u5165\u751f\u547d\u548c\u8272\u5f69\uff01",permalink:"/docs/general-ai/poetry"}},l={},d=[],c={toc:d},p="wrapper";function f(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7528stable-diffusion\u753b\u7f8e\u5973"},"\u7528Stable Diffusion\u753b\u7f8e\u5973"),(0,a.kt)("p",null,"Stable Diffusion\u662f\u4e00\u4e2a\u57fa\u4e8eLatent Diffusion Models\uff08\u6f5c\u5728\u6269\u6563\u6a21\u578b\uff0cLDMs\uff09\u7684\u6587\u56fe\u751f\u6210\uff08text-to-image\uff09\u6a21\u578b\u3002\u5b83\u662f\u7531CompVis\u3001Stability AI\u548cLAION\u5171\u540c\u5f00\u53d1\u7684\u4e00\u4e2a\u6587\u672c\u8f6c\u56fe\u50cf\u6a21\u578b\uff0c\u53ef\u4ee5\u5c06\u6587\u672c\u63cf\u8ff0\u8f6c\u6362\u4e3a\u56fe\u50cf\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5b89\u88c5 Stable Diffusion \u548c \u6a21\u677f\u5e93")),(0,a.kt)("p",null,"\u8fd9\u91cc\u9009\u4e86\u4e00\u5957\u6bd4\u8f83\u50cf\u771f\u4eba\u7684\u6a21\u677f\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Installing gfpgan\nInstalling clip\nInstalling open_clip\nCloning Stable Diffusion into /content/stable-diffusion-webui/repositories/stable-diffusion-stability-ai...\nCloning Taming Transformers into /content/stable-diffusion-webui/repositories/taming-transformers...\nCloning K-diffusion into /content/stable-diffusion-webui/repositories/k-diffusion...\nCloning CodeFormer into /content/stable-diffusion-webui/repositories/CodeFormer...\nCloning BLIP into /content/stable-diffusion-webui/repositories/BLIP...\nInstalling requirements for CodeFormer\nInstalling requirements for Web UI\nInstalling sd-webui-controlnet requirement: svglib\n\n\nInstalling Deforum requirement: av\nInstalling Deforum requirement: pims\n\n\nInstalling rembg\nInstalling onnxruntime for REMBG extension\nInstalling pymatting for REMBG extension\n\nInstalling pycloudflared\n\n\nLaunching Web UI with arguments: --listen --xformers --enable-insecure-extension-access --theme dark --gradio-queue --multiple\n2023-04-06 02:26:14.767376: I tensorflow/core/platform/cpu_feature_guard.cc:182] This TensorFlow binary is optimized to use available CPU instructions in performance-critical operations.\nTo enable the following instructions: AVX2 AVX512F FMA, in other operations, rebuild TensorFlow with the appropriate compiler flags.\n2023-04-06 02:26:16.773685: W tensorflow/compiler/tf2tensorrt/utils/py_utils.cc:38] TF-TRT Warning: Could not find TensorRT\nAdditional Network extension not installed, Only hijack built-in lora\nLoCon Extension hijack built-in lora successfully\n[AddNet] Updating model hashes...\n0it [00:00, ?it/s]\n[AddNet] Updating model hashes...\n0it [00:00, ?it/s]\nall detected, remote.moe trying to connect...\nWarning: Permanently added 'localhost.run,54.82.85.249' (RSA) to the list of known hosts.\nWarning: Permanently added 'remote.moe,159.69.126.209' (ECDSA) to the list of known hosts.\nall detected, cloudflared trying to connect...\nDownload cloudflared...: 100% 34.0M/34.0M [00:00<00:00, 445MB/s]\nCalculating sha256 for /content/stable-diffusion-webui/models/Stable-diffusion/chilloutmix_NiPrunedFp32Fix.safetensors: fc2511737a54c5e80b89ab03e0ab4b98d051ab187f92860f3cd664dc9d08b271\nLoading weights [fc2511737a] from /content/stable-diffusion-webui/models/Stable-diffusion/chilloutmix_NiPrunedFp32Fix.safetensors\nCreating model from config: /content/stable-diffusion-webui/configs/v1-inference.yaml\nLatentDiffusion: Running in eps-prediction mode\nDiffusionWrapper has 859.52 M params.\nDownloading (\u2026)olve/main/vocab.json: 961kB [00:00, 1.49MB/s]\nDownloading (\u2026)olve/main/merges.txt: 525kB [00:00, 1.21MB/s]\nDownloading (\u2026)cial_tokens_map.json: 100% 389/389 [00:00<00:00, 41.9kB/s]\nDownloading (\u2026)okenizer_config.json: 100% 905/905 [00:00<00:00, 285kB/s]\nDownloading (\u2026)lve/main/config.json: 4.52kB [00:00, 3.55MB/s]\nApplying xformers cross attention optimization.\nTextual inversion embeddings loaded(7): bad_prompt_version2, bad-artist, bad-artist-anime, ng_deepnegative_v1_75t, bad-image-v2-39000, EasyNegative, bad-hands-5\nModel loaded in 54.0s (calculate hash: 23.7s, load weights from disk: 0.6s, create model: 14.8s, apply weights to model: 14.7s).\n*Deforum ControlNet support: enabled*\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7935).Z,width:"1156",height:"915"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4726).Z,width:"1205",height:"931"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5b89\u88c5\u597d\u540e\uff0c\u8fdb\u5165\u754c\u9762\uff1a")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9223).Z,width:"1375",height:"1272"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\u8bcd\uff1a")),(0,a.kt)("p",null,"(8k, RAW photo, best quality, masterpiece:1.2), (realistic, photo-realistic:1.4), ultra-detailed, (Kpop idol),perfect detail ,  looking at viewer,make up,"),(0,a.kt)("p",null,"paintings,sketches, (worst quality:2), (low quality:2), (normal quality:2), lowres, normal quality, ((monochrome)), ((grayscale)), skin spots, acnes, skin blemishes, bad anatomy,(long hair:1.4),DeepNegative,(fat:1.2),facing away, looking away,tilted head, {Multiple people}, lowres,bad anatomy,bad hands, text, error, missing fingers,extra digit, fewer digits, cropped, worstquality, low quality, normal quality,jpegartifacts,signature, watermark, username,blurry,bad feet,cropped,poorly drawn hands,poorly drawn face,mutation,deformed,worst quality,low quality,normal quality,jpeg artifacts,signature,watermark,extra fingers,fewer digits,extra limbs,extra arms,extra legs,malformed limbs,fused fingers,too many fingers,long neck,cross-eyed,mutated hands,polar lowres,bad body,bad proportions,gross proportions,text,error,missing fingers,missing arms,missing legs,extra digit, extra arms, extra leg, extra foot,"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8373).Z,width:"1375",height:"1272"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9644).Z,width:"1375",height:"1272"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5903).Z,width:"1375",height:"1272"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e0b\u9762\u662f \u7528Stable Diffusion AI\u751f\u6210\u7684\u51e0\u5f20\u7167\u7247\uff1a")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4648).Z,width:"512",height:"768"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3659).Z,width:"512",height:"768"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7300).Z,width:"512",height:"768"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4579).Z,width:"512",height:"768"})),(0,a.kt)("p",null,"\u611f\u89c9\u662f\u4e00\u4e2a\u6a21\u5b50\uff0c\u628a\u4eba\u7269\u7684\u7279\u5f81\u586b\u5145\u8fdb\u53bb\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u751f\u6210\u5404\u79cd\u5404\u6837\u7684\u4eba\u7269\u4e86\u3002\u6709\u70b9\u50cf\u771f\u4eba\uff0c\u4f46\u79bb\u771f\u4eba\u8fd8\u662f\u6709\u4e00\u5b9a\u5dee\u8ddd\u7684\uff0c\u4f46\u662f\u8fd9\u4e2a\u6280\u672f\u8fd8\u662f\u5f88\u6709\u610f\u601d\u7684\u3002"),(0,a.kt)("p",null,"\u7b97\u4e86\uff0c\u8fd8\u662f\u76f4\u63a5\u770b\u771f\u4eba\u5427\uff01"))}f.isMDXComponent=!0},4648:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/1-735a05c26bb9e2c5109c26e9422e2b7a.png"},3659:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/2-948f166a0e2bec177076c83e49df18d9.png"},7935:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/2023-04-05-08-06-09-3a0901437a88e9c405eefadae832baf3.png"},4726:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/2023-04-05-08-06-39-d7dd459cf299c7110309ee7669d56dd9.png"},9223:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/2023-04-05-08-06-52-e76698abca65dcd8d86a069a216aca8f.png"},8373:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/2023-04-05-08-09-11-a436c965fbb2afe3143b9743af9642c3.png"},9644:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/2023-04-05-08-09-44-4f4391da91ed772f7725bc9ae2ce2879.png"},5903:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/2023-04-05-08-10-55-31e9acb39eba9bb7985de4dd2f4522c2.png"},7300:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/3-5a825e83618453c2890fafe322096bd0.png"},4579:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/4-a9f03e977e400e14752169e74e5a11fe.png"}}]);