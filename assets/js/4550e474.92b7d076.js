"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8281],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>f});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=t.createContext({}),l=function(e){var r=t.useContext(a),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=l(e.components);return t.createElement(a.Provider,{value:r},e.children)},d="mdxType",v={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=o,f=d["".concat(a,".").concat(p)]||d[p]||v[p]||i;return n?t.createElement(f,c(c({ref:r},u),{},{components:n})):t.createElement(f,c({ref:r},u))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=p;var s={};for(var a in r)hasOwnProperty.call(r,a)&&(s[a]=r[a]);s.originalType=e,s[d]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<i;l++)c[l]=n[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2522:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>v,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=n(7462),o=(n(7294),n(3905));const i={title:"client-go \u6e90\u7801\u5206\u6790\uff082\uff09 - discovery\u6a21\u5757\uff1adiscovery cache",readmore:!0,date:new Date("2022-11-25T10:06:45.000Z"),categories:"\u4e91\u539f\u751f",tags:["client-go"]},c=void 0,s={unversionedId:"cloud-native/client-go/client-go-02",id:"cloud-native/client-go/client-go-02",title:"client-go \u6e90\u7801\u5206\u6790\uff082\uff09 - discovery\u6a21\u5757\uff1adiscovery cache",description:"DiscoveryClient\u53ef\u4ee5\u5c06\u8d44\u6e90\u76f8\u5173\u4fe1\u606f\u5b58\u50a8\u4e8e\u672c\u5730\uff0c\u9ed8\u8ba4\u5b58\u50a8\u4f4d\u7f6e\u4e3a\uff5e/.kube/cache\u548c\uff5e/.kube/http-cache\u3002\u7f13\u5b58\u53ef\u4ee5\u51cf\u8f7bclient-go\u5bf9KubernetesAPI Server\u7684\u8bbf\u95ee\u538b\u529b\u3002\u9ed8\u8ba4\u6bcf10\u5206\u949f\u4e0eKubernetes API Server\u540c\u6b65\u4e00\u6b21\uff0c\u540c\u6b65\u5468\u671f\u8f83\u957f\uff0c\u56e0\u4e3a\u8d44\u6e90\u7ec4\u3001\u6e90\u7248\u672c\u3001\u8d44\u6e90\u4fe1\u606f\u4e00\u822c\u5f88\u5c11\u53d8\u52a8\u3002DiscoveryClient\u7b2c\u4e00\u6b21\u83b7\u53d6\u8d44\u6e90\u7ec4\u3001\u8d44\u6e90\u7248\u672c\u3001\u8d44\u6e90\u4fe1\u606f\u65f6\uff0c\u9996\u5148\u4f1a\u67e5\u8be2\u672c\u5730\u7f13\u5b58\uff0c\u5982\u679c\u6570\u636e\u4e0d\u5b58\u5728\uff08\u6ca1\u6709\u547d\u4e2d\uff09\u5219\u8bf7\u6c42Kubernetes API Server\u63a5\u53e3\uff08\u56de\u6e90\uff09\uff0cCache\u5c06Kubernetes API Server\u54cd\u5e94\u7684\u6570\u636e\u5b58\u50a8\u5728\u672c\u5730\u4e00\u4efd\u5e76\u8fd4\u56de\u7ed9DiscoveryClient\u3002\u5f53\u4e0b\u4e00\u6b21DiscoveryClient\u518d\u6b21\u83b7\u53d6\u8d44\u6e90\u4fe1\u606f\u65f6\uff0c\u4f1a\u5c06\u6570\u636e\u76f4\u63a5\u4ece\u672c\u5730\u7f13\u5b58\u8fd4\u56de\uff08\u547d\u4e2d\uff09\u7ed9DiscoveryClient\u3002\u672c\u5730\u7f13\u5b58\u7684\u9ed8\u8ba4\u5b58\u50a8\u5468\u671f\u4e3a10\u5206\u949f\uff08\u5bf9\u5e94CachedDiscoveryClient \u7ed3\u6784\u4f53\u7684ttl\u5c5e\u6027\uff0c\u8d85\u65f6\u65f6\u95f4\uff09\u3002\u4ee3\u7801\u793a\u4f8b\u5982\u4e0b\uff1a",source:"@site/docs/cloud-native/client-go/client-go-02.md",sourceDirName:"cloud-native/client-go",slug:"/cloud-native/client-go/client-go-02",permalink:"/docs/cloud-native/client-go/client-go-02",draft:!1,editUrl:"https://github.com/backendcloud/docusaurus/tree/main/docs/cloud-native/client-go/client-go-02.md",tags:[{label:"client-go",permalink:"/docs/tags/client-go"}],version:"current",frontMatter:{title:"client-go \u6e90\u7801\u5206\u6790\uff082\uff09 - discovery\u6a21\u5757\uff1adiscovery cache",readmore:!0,date:"2022-11-25T10:06:45.000Z",categories:"\u4e91\u539f\u751f",tags:["client-go"]},sidebar:"tutorialSidebar",previous:{title:"client-go \u6e90\u7801\u5206\u6790\uff081\uff09 - discovery\u6a21\u5757\uff1adiscoveryclient\u83b7\u53d6\u6240\u6709\u7684gv\u548cgvr",permalink:"/docs/cloud-native/client-go/client-go-01"},next:{title:"client-go \u6e90\u7801\u5206\u6790\uff083\uff09 - rest\u6a21\u5757",permalink:"/docs/cloud-native/client-go/client-go-03"}},a={},l=[],u={toc:l},d="wrapper";function v(e){let{components:r,...i}=e;return(0,o.kt)(d,(0,t.Z)({},u,i,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"DiscoveryClient\u53ef\u4ee5\u5c06\u8d44\u6e90\u76f8\u5173\u4fe1\u606f\u5b58\u50a8\u4e8e\u672c\u5730\uff0c\u9ed8\u8ba4\u5b58\u50a8\u4f4d\u7f6e\u4e3a\uff5e/.kube/cache\u548c\uff5e/.kube/http-cache\u3002\u7f13\u5b58\u53ef\u4ee5\u51cf\u8f7bclient-go\u5bf9KubernetesAPI Server\u7684\u8bbf\u95ee\u538b\u529b\u3002\u9ed8\u8ba4\u6bcf10\u5206\u949f\u4e0eKubernetes API Server\u540c\u6b65\u4e00\u6b21\uff0c\u540c\u6b65\u5468\u671f\u8f83\u957f\uff0c\u56e0\u4e3a\u8d44\u6e90\u7ec4\u3001\u6e90\u7248\u672c\u3001\u8d44\u6e90\u4fe1\u606f\u4e00\u822c\u5f88\u5c11\u53d8\u52a8\u3002DiscoveryClient\u7b2c\u4e00\u6b21\u83b7\u53d6\u8d44\u6e90\u7ec4\u3001\u8d44\u6e90\u7248\u672c\u3001\u8d44\u6e90\u4fe1\u606f\u65f6\uff0c\u9996\u5148\u4f1a\u67e5\u8be2\u672c\u5730\u7f13\u5b58\uff0c\u5982\u679c\u6570\u636e\u4e0d\u5b58\u5728\uff08\u6ca1\u6709\u547d\u4e2d\uff09\u5219\u8bf7\u6c42Kubernetes API Server\u63a5\u53e3\uff08\u56de\u6e90\uff09\uff0cCache\u5c06Kubernetes API Server\u54cd\u5e94\u7684\u6570\u636e\u5b58\u50a8\u5728\u672c\u5730\u4e00\u4efd\u5e76\u8fd4\u56de\u7ed9DiscoveryClient\u3002\u5f53\u4e0b\u4e00\u6b21DiscoveryClient\u518d\u6b21\u83b7\u53d6\u8d44\u6e90\u4fe1\u606f\u65f6\uff0c\u4f1a\u5c06\u6570\u636e\u76f4\u63a5\u4ece\u672c\u5730\u7f13\u5b58\u8fd4\u56de\uff08\u547d\u4e2d\uff09\u7ed9DiscoveryClient\u3002\u672c\u5730\u7f13\u5b58\u7684\u9ed8\u8ba4\u5b58\u50a8\u5468\u671f\u4e3a10\u5206\u949f\uff08\u5bf9\u5e94CachedDiscoveryClient \u7ed3\u6784\u4f53\u7684ttl\u5c5e\u6027\uff0c\u8d85\u65f6\u65f6\u95f4\uff09\u3002\u4ee3\u7801\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type CachedDiscoveryClient struct {\n    delegate discovery.DiscoveryInterface\n\n    // cacheDirectory is the directory where discovery docs are held.  It must be unique per host:port combination to work well.\n    cacheDirectory string\n\n    // ttl is how long the cache should be considered valid\n    ttl time.Duration\n\n    // mutex protects the variables below\n    mutex sync.Mutex\n\n    // ourFiles are all filenames of cache files created by this process\n    ourFiles map[string]struct{}\n    // invalidated is true if all cache files should be ignored that are not ours (e.g. after Invalidate() was called)\n    invalidated bool\n    // fresh is true if all used cache files were ours\n    fresh bool\n\n    // caching openapi v3 client which wraps the delegate\'s client\n    openapiClient openapi.Client\n}\n\nvar _ discovery.CachedDiscoveryInterface = &CachedDiscoveryClient{}\n\n// ServerResourcesForGroupVersion returns the supported resources for a group and version.\nfunc (d *CachedDiscoveryClient) ServerResourcesForGroupVersion(groupVersion string) (*metav1.APIResourceList, error) {\n    filename := filepath.Join(d.cacheDirectory, groupVersion, "serverresources.json")\n    cachedBytes, err := d.getCachedFile(filename)\n    // don\'t fail on errors, we either don\'t have a file or won\'t be able to run the cached check. Either way we can fallback.\n    if err == nil {\n        cachedResources := &metav1.APIResourceList{}\n        if err := runtime.DecodeInto(scheme.Codecs.UniversalDecoder(), cachedBytes, cachedResources); err == nil {\n            klog.V(10).Infof("returning cached discovery info from %v", filename)\n            return cachedResources, nil\n        }\n    }\n\n    liveResources, err := d.delegate.ServerResourcesForGroupVersion(groupVersion)\n    if err != nil {\n        klog.V(3).Infof("skipped caching discovery info due to %v", err)\n        return liveResources, err\n    }\n    if liveResources == nil || len(liveResources.APIResources) == 0 {\n        klog.V(3).Infof("skipped caching discovery info, no resources found")\n        return liveResources, err\n    }\n\n    if err := d.writeCachedFile(filename, liveResources); err != nil {\n        klog.V(1).Infof("failed to write cache to %v due to %v", filename, err)\n    }\n\n    return liveResources, nil\n}\n')),(0,o.kt)("p",null,'\u7ed3\u6784\u4f53CachedDiscoveryClient\u7684\u65b9\u6cd5ServerResourcesForGroupVersion\uff0c\u9996\u5148\u8bfb\u53d6\u653e\u5728 filepath.Join(d.cacheDirectory, groupVersion, "serverresources.json") \u8def\u5f84\u4e0b\u7684\u7f13\u5b58\u3002'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4388).Z,width:"572",height:"635"})),(0,o.kt)("p",null,"\u5c1d\u8bd5\u8c03\u7528k8s.io/apimachinery/pkg/runtime/DecodeInto \u5bf9\u6587\u4ef6\u8bfb\u53d6\u7684\u5185\u5bb9\u89e3\u7801\u5230\u7ed3\u6784\u4f53metav1.APIResourceList\u4e2d\u3002\u82e5\u89e3\u7801\u6210\u529f\uff0c\u8fd4\u56de\u7ed3\u6784\u4f53metav1.APIResourceList\u5185\u5bb9\uff1b\u82e5\u89e3\u7801\u4e0d\u6210\u529f\uff0c\u7ee7\u7eed\u4e0b\u9762\u7684\u8bed\u53e5\uff0c\u5373d.delegate.ServerResourcesForGroupVersion(groupVersion)\uff0c\u8fd9\u91cc\u7279\u522b\u7684\u5730\u65b9\u662f\uff0c\u7ed3\u6784\u4f53\u5c5e\u6027delegate\uff0c\u4e2d\u6587\u610f\u601d\u662f\u59d4\u6258\uff0c\u56e0\u4e3a\u4f7f\u7528\u63a5\u53e3DiscoveryInterface\u7684CachedDiscoveryClient\u4e2d\u7684ServerResourcesForGroupVersion\u53bb\u8bfb\u53d6\u7f13\u5b58\u5931\u8d25\u4e86\uff0c\u9700\u8981\u53bbkubernetes API\u5b9e\u65f6\u53bb\u53d6\u6570\u636e\u4e86\uff0c\u8fd9\u4ef6\u4e8b\u5c31\u59d4\u6258\u8fd9\u4e2a\u63a5\u53e3DiscoveryInterface\u53bb\u5b9e\u73b0\u591a\u6001\u4e2d\u7684DiscoveryClient\u4e2d\u7684ServerResourcesForGroupVersion\u65b9\u6cd5\u53bb\u5b9e\u73b0\u3002\u8be5\u65b9\u6cd5\u7684\u4ee3\u7801\u5206\u6790\u53c2\u8003 {% post_link client-go-1 %}"),(0,o.kt)("p",null,"\u7528\u4e0b\u9762\u7684\u6784\u9020\u65b9\u6cd5\u6784\u9020CachedDiscoveryClient\u7ed3\u6784\u4f53\u7684\u65f6\u5019\uff0c\u5c06\u5c5e\u6027delegate\u8d4b\u503c\u7ed9\u5b9e\u73b0\u4e86\u63a5\u53e3\u7684discovery.DiscoveryInterface\u7684DiscoveryClient\u7ed3\u6784\u4f53\u5373\u53ef\u5b9e\u73b0\u4e0a\u9762\u7684\u591a\u6001\u6216\u8005\u5f62\u8c61\u8bf4\u662f\u59d4\u6258\u884c\u4e3a\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func newCachedDiscoveryClient(delegate discovery.DiscoveryInterface, cacheDirectory string, ttl time.Duration) *CachedDiscoveryClient {\n    return &CachedDiscoveryClient{\n        delegate:       delegate,\n        cacheDirectory: cacheDirectory,\n        ttl:            ttl,\n        ourFiles:       map[string]struct{}{},\n        fresh:          true,\n    }\n}\n")),(0,o.kt)("p",null,"\u4e0a\u9762\u7684 func (d ",(0,o.kt)("em",{parentName:"p"},"CachedDiscoveryClient) ServerResourcesForGroupVersion(groupVersion string) ("),"metav1.APIResourceList, error) \u65b9\u6cd5\u8fd8\u6709\u4e2a\u91cd\u8981\u7684\u5730\u65b9\uff0c\u5c31\u662f\u8bfb\u53d6\u7f13\u5b58\u5931\u8d25\uff0c\u53bb\u5b9e\u65f6\u8c03\u7528Kubernetes API\u83b7\u53d6\u4fe1\u606f\u540e\uff0c\u8fd8\u8981\u5199\u5165\u7f13\u5b58\u4e2d d.writeCachedFile\uff0c\u8fd9\u6837\u4e0b\u6b21\u518d\u83b7\u53d6gvr\u4fe1\u606f\u65f6\u5019\uff0c\u8bfb\u53d6\u7f13\u5b58\u8fd9\u4e00\u6b65\u5c31\u80fd\u8bfb\u53d6\u5230\u4fe1\u606f\uff0c\u4e0d\u7528\u8c03\u7528Kubernetes API\u63a5\u53e3\u4e86\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func (d *CachedDiscoveryClient) writeCachedFile(filename string, obj runtime.Object) error {\n    if err := os.MkdirAll(filepath.Dir(filename), 0750); err != nil {\n        return err\n    }\n\n    bytes, err := runtime.Encode(scheme.Codecs.LegacyCodec(), obj)\n    if err != nil {\n        return err\n    }\n\n    f, err := os.CreateTemp(filepath.Dir(filename), filepath.Base(filename)+".")\n    if err != nil {\n        return err\n    }\n    defer os.Remove(f.Name())\n    _, err = f.Write(bytes)\n    if err != nil {\n        return err\n    }\n\n    err = os.Chmod(f.Name(), 0660)\n    if err != nil {\n        return err\n    }\n\n    name := f.Name()\n    err = f.Close()\n    if err != nil {\n        return err\n    }\n\n    // atomic rename\n    d.mutex.Lock()\n    defer d.mutex.Unlock()\n    err = os.Rename(name, filename)\n    if err == nil {\n        d.ourFiles[filename] = struct{}{}\n    }\n    return err\n}\n')),(0,o.kt)("p",null,"discovery cache\u662fclient-go\u4e2d\u76f8\u5bf9\u7b80\u5355\u7684\u7f13\u5b58\u673a\u5236\uff0c\u901a\u8fc7\u7f13\u5b58\u8bbe\u8ba1\uff0c\u5b9e\u65f6\u53d1\u9001rest api\u8bf7\u6c42\uff0c\u7f13\u5b58\u8d85\u65f6\uff0c\u5b9e\u73b0\u4e86\u5373\u80fd\u83b7\u53d6\u76f8\u5bf9\u8f83\u65b0\u7684\u4fe1\u606f\uff0c\u53c8\u51cf\u8f7brest api\u8bf7\u6c42\u7684\u538b\u529b\uff0c\u8fd9\u79cd\u901a\u8fc7\u7f13\u5b58\u548crest API\u8bf7\u6c42\u7ed3\u5408\u7684\u65b9\u5f0f\u4e5f\u662fKubernetes\u67b6\u6784\u8bbe\u8ba1\u7684\u91cd\u8981\u601d\u60f3\uff0c\u540e\u9762\u4f1a\u5206\u6790\u76f8\u5bf9\u590d\u6742\u7684list-watch\u673a\u5236\uff0c\u76ee\u7684\u90fd\u662f\u4e3a\u4e86\u51cf\u8f7bKubernetes API\u8bf7\u6c42\u7684\u538b\u529b\u3002"))}v.isMDXComponent=!0},4388:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/2022-11-25-10-12-23-756be854878ed7448bc241f2a571023e.png"}}]);