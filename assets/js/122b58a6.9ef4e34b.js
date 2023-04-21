"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8092],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>f});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),g=o,f=p["".concat(c,".").concat(g)]||p[g]||d[g]||s;return r?t.createElement(f,a(a({ref:n},u),{},{components:r})):t.createElement(f,a({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=g;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9336:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=r(7462),o=(r(7294),r(3905));const s={title:"client-go \u6e90\u7801\u5206\u6790\uff083\uff09 - rest\u6a21\u5757",readmore:!0,date:new Date("2022-11-25T18:40:38.000Z"),categories:"\u4e91\u539f\u751f",tags:["client-go"]},a=void 0,i={unversionedId:"cloud-native/client-go/client-go-03",id:"cloud-native/client-go/client-go-03",title:"client-go \u6e90\u7801\u5206\u6790\uff083\uff09 - rest\u6a21\u5757",description:"client-go\u7684\u5ba2\u6237\u7aef\u5bf9\u8c61\u67094\u4e2a\uff0c\u4f5c\u7528\u5404\u6709\u4e0d\u540c\uff1a",source:"@site/docs/cloud-native/client-go/client-go-03.md",sourceDirName:"cloud-native/client-go",slug:"/cloud-native/client-go/client-go-03",permalink:"/docs/cloud-native/client-go/client-go-03",draft:!1,editUrl:"https://github.com/backendcloud/backendcloud.github.io/tree/main/docs/cloud-native/client-go/client-go-03.md",tags:[{label:"client-go",permalink:"/docs/tags/client-go"}],version:"current",frontMatter:{title:"client-go \u6e90\u7801\u5206\u6790\uff083\uff09 - rest\u6a21\u5757",readmore:!0,date:"2022-11-25T18:40:38.000Z",categories:"\u4e91\u539f\u751f",tags:["client-go"]},sidebar:"tutorialSidebar",previous:{title:"client-go \u6e90\u7801\u5206\u6790\uff082\uff09 - discovery\u6a21\u5757\uff1adiscovery cache",permalink:"/docs/cloud-native/client-go/client-go-02"},next:{title:"client-go \u6e90\u7801\u5206\u6790\uff084\uff09 - ClientSet\u5ba2\u6237\u7aef \u548c DynamicClient\u5ba2\u6237\u7aef",permalink:"/docs/cloud-native/client-go/client-go-04"}},c={},l=[],u={toc:l},p="wrapper";function d(e){let{components:n,...s}=e;return(0,o.kt)(p,(0,t.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"client-go\u7684\u5ba2\u6237\u7aef\u5bf9\u8c61\u67094\u4e2a\uff0c\u4f5c\u7528\u5404\u6709\u4e0d\u540c\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"RESTClient\uff1a \u662f\u5bf9HTTP Request\u8fdb\u884c\u4e86\u5c01\u88c5\uff0c\u5b9e\u73b0\u4e86RESTful\u98ce\u683c\u7684API\u3002\u5176\u4ed6\u5ba2\u6237\u7aef\u90fd\u662f\u5728RESTClient\u57fa\u7840\u4e0a\u7684\u5b9e\u73b0\u3002\u53ef\u4e0e\u7528\u4e8ek8s\u5185\u7f6e\u8d44\u6e90\u548cCRD\u8d44\u6e90"),(0,o.kt)("li",{parentName:"ul"},"ClientSet:\u662f\u5bf9k8s\u5185\u7f6e\u8d44\u6e90\u5bf9\u8c61\u7684\u5ba2\u6237\u7aef\u7684\u96c6\u5408\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e0d\u80fd\u64cd\u4f5cCRD\u8d44\u6e90\uff0c\u4f46\u662f\u901a\u8fc7client-gen\u4ee3\u7801\u751f\u6210\u7684\u8bdd\uff0c\u4e5f\u662f\u53ef\u4ee5\u64cd\u4f5cCRD\u8d44\u6e90\u7684\u3002"),(0,o.kt)("li",{parentName:"ul"},"DynamicClient:\u4e0d\u4ec5\u80fd\u5bf9K8S\u5185\u7f6e\u8d44\u6e90\u8fdb\u884c\u5904\u7406\uff0c\u8fd8\u53ef\u4ee5\u5bf9CRD\u8d44\u6e90\u8fdb\u884c\u5904\u7406\uff0c\u4e0d\u9700\u8981client-gen\u751f\u6210\u4ee3\u7801\u5373\u53ef\u5b9e\u73b0\u3002"),(0,o.kt)("li",{parentName:"ul"},"DiscoveryClient\uff1a\u7528\u4e8e\u53d1\u73b0kube-apiserver\u6240\u652f\u6301\u7684\u8d44\u6e90\u7ec4\u3001\u8d44\u6e90\u7248\u672c\u3001\u8d44\u6e90\u4fe1\u606f\uff08\u5373Group\u3001Version\u3001Resources\uff09\u3002")),(0,o.kt)("p",null,"\u672c\u7bc7\u7684\u4e3b\u9898restclient\uff0c\u662f\u5176\u4ed63\u4e2a\u7684\u8c03\u7528\u5bf9\u8c61\uff0c\u5173\u7cfb\u5982\u4e0b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(2230).Z,width:"830",height:"371"})),(0,o.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u8c03\u7528restclient\uff0c\u67e5\u8be2default namespace\u4e0b\u6240\u6709pod\u7684\u4f8b\u5b50\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "fmt"\n\n    corev1 "k8s.io/api/core/v1"\n    metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"\n    "k8s.io/client-go/kubernetes/scheme"\n    "k8s.io/client-go/rest"\n    "k8s.io/client-go/tools/clientcmd"\n)\n\nfunc main() {\n    // \u52a0\u8f7dkubeconfig\u6587\u4ef6\uff0c\u751f\u6210config\u5bf9\u8c61\n    config, err := clientcmd.BuildConfigFromFlags("", "C:\\\\Users\\\\hanwei\\\\config")\n\n    if err != nil {\n        panic(err)\n    }\n    // \u914d\u7f6eAPI\u8def\u5f84\u548c\u8bf7\u6c42\u7684\u8d44\u6e90\u7ec4/\u8d44\u6e90\u7248\u672c\u4fe1\u606f\n    config.APIPath = "api"\n    config.GroupVersion = &corev1.SchemeGroupVersion\n    config.NegotiatedSerializer = scheme.Codecs\n\n    // \u901a\u8fc7rest.RESTClientFor()\u751f\u6210RESTClient\u5bf9\u8c61\u3002 RESTClientFor\u901a\u8fc7\u4ee4\u724c\u6876\u7b97\u6cd5\uff0c\u6709\u9650\u5236\u7684\u8bf4\u6cd5\u3002\n    restClient, err := rest.RESTClientFor(config)\n    if err != nil {\n        panic(err)\n    }\n\n    // \u901a\u8fc7RESTClient\u6784\u5efa\u8bf7\u6c42\u53c2\u6570\uff0c\u67e5\u8be2default\u7a7a\u95f4\u4e0b\u6240\u6709pod\u8d44\u6e90\n    result := &corev1.PodList{}\n    err = restClient.Get().\n        Namespace("default").\n        Resource("pods").\n        VersionedParams(&metav1.ListOptions{Limit: 500}, scheme.ParameterCodec).\n        Do(context.TODO()).\n        Into(result)\n\n    if err != nil {\n        panic(err)\n    }\n\n    for _, d := range result.Items {\n        fmt.Printf("NAMESPACE:%v \\t NAME: %v \\t STATUS: %v\\n", d.Namespace, d.Name, d.Status.Phase)\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"GOROOT=C:\\go\\go1.19 #gosetup\nGOPATH=C:\\Users\\hanwei\\go #gosetup\nC:\\go\\go1.19\\bin\\go.exe build -o C:\\Users\\hanwei\\AppData\\Local\\Temp\\GoLand\\___1go_build_lab.exe lab #gosetup\nC:\\Users\\hanwei\\AppData\\Local\\Temp\\GoLand\\___1go_build_lab.exe\nNAMESPACE:default        NAME: cdi-upload-windows-2003-001       STATUS: Running\nNAMESPACE:default        NAME: tomcat-deployment-5b689c848f-2jprs        STATUS: Running\nNAMESPACE:default        NAME: virt-launcher-bc-2003-0907-001-vkd8f      STATUS: Running\nNAMESPACE:default        NAME: virt-launcher-test-sg-111-lc9kf   STATUS: Running\nNAMESPACE:default        NAME: virt-launcher-test-sg-v98xt       STATUS: Running\nNAMESPACE:default        NAME: virt-launcher-test-vpc-hdnxc      STATUS: Pending\nNAMESPACE:default        NAME: virt-launcher-vm-centos-jphml     STATUS: Running\n\nProcess finished with the exit code 0\n")),(0,o.kt)("p",null,"main\u65b9\u6cd5\u5206\u4e3a\u4ee5\u4e0b\u51e0\u4e2a\u6b65\u9aa4\uff1a\nstep 1 \u52a0\u8f7dkubeconfig\u6587\u4ef6\uff0c\u751f\u6210config\u5bf9\u8c61\uff0c\u5e76\u5145\u5b9econfig\u5bf9\u8c61\u5c5e\u6027\u5185\u5bb9\u3002\nstep 2 \u7528config\u5bf9\u8c61\uff0c\u751f\u6210RESTClient\u5bf9\u8c61\u3002\nstep 3 RESTClient\u5ba2\u6237\u7aef\u53bb\u67e5\u8be2default namespace\u4e0b\u6240\u6709pod\u3002\nstep 4 \u5e76\u6253\u5370\u7ed3\u679c\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u8fd9\u6761\u8bed\u53e5\u662f\u4e0a\u9762\u7684main\u65b9\u6cd5\u6700\u6838\u5fc3\u7684\u8bed\u53e5\uff0crest\u8bf7\u6c42\u4e5f\u662f\u8be5\u8bed\u53e5\u53d1\u51fa\u7684\uff0c\u4e0b\u9762\u5c06\u8be5\u6761\u8bed\u53e5\u52064\u6b65\uff08step 3-1\uff0c3-2\uff0c3-3\uff0c3-4\uff09\u5206\u89e3\u8bf4\u660e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'    err = restClient.Get().\n        Namespace("default").\n        Resource("pods").\n        VersionedParams(&metav1.ListOptions{Limit: 500}, scheme.ParameterCodec).\n        Do(context.TODO()).\n        Into(result)\n')),(0,o.kt)("p",null,"step 3-1 restClient.Get(). \u521b\u5efa\u7ed3\u6784\u4f53Request\uff0c\u5e76\u7ec4\u88c5\u7ed3\u6784\u4f53Request\uff0c\u6bd4\u5982\u5c06Get\u65b9\u6cd5\u653e\u5728\u7ed3\u6784\u4f53Request\u7684verb\u5c5e\u6027\u4e2d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func (c *RESTClient) Get() *Request {\n    return c.Verb("GET")\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (c *RESTClient) Verb(verb string) *Request {\n    return NewRequest(c).Verb(verb)\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (r *Request) Verb(verb string) *Request {\n    r.verb = verb\n    return r\n}\n")),(0,o.kt)("p",null,'step 3-2 Namespace("default").Resource("pods").VersionedParams(&metav1.ListOptions{Limit: 500}, scheme.ParameterCodec). \u662f\u94fe\u5f0f\u8c03\u7528\uff08\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u662f\u8be5\u65b9\u6cd5\u7684\u65b9\u6cd5\u63a5\u6536\u5668\u672c\u8eab\uff09\uff0c\u7528\u4e8e\u7ee7\u7eed\u7ec4\u88c5\u7ed3\u6784\u4f53Request\u3002'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func (r *Request) Namespace(namespace string) *Request {\n    if r.err != nil {\n        return r\n    }\n    if r.namespaceSet {\n        r.err = fmt.Errorf("namespace already set to %q, cannot change to %q", r.namespace, namespace)\n        return r\n    }\n    if msgs := IsValidPathSegmentName(namespace); len(msgs) != 0 {\n        r.err = fmt.Errorf("invalid namespace %q: %v", namespace, msgs)\n        return r\n    }\n    r.namespaceSet = true\n    r.namespace = namespace\n    return r\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func (r *Request) Resource(resource string) *Request {\n    if r.err != nil {\n        return r\n    }\n    if len(r.resource) != 0 {\n        r.err = fmt.Errorf("resource already set to %q, cannot change to %q", r.resource, resource)\n        return r\n    }\n    if msgs := IsValidPathSegmentName(resource); len(msgs) != 0 {\n        r.err = fmt.Errorf("invalid resource %q: %v", resource, msgs)\n        return r\n    }\n    r.resource = resource\n    return r\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (r *Request) VersionedParams(obj runtime.Object, codec runtime.ParameterCodec) *Request {\n    return r.SpecificallyVersionedParams(obj, codec, r.c.content.GroupVersion)\n}\n")),(0,o.kt)("p",null,"step 3-3 Do(context.TODO()). \u6267\u884crequest rest\u8bf7\u6c42\uff08\u5bf9Request\u7ed3\u6784\u4f53\u7684\u5c5e\u6027\u505a\u4e86\u4e00\u4e9b\u9a8c\u8bc1\uff0c\u5e76\u5904\u7406\u4e86\u91cd\u8bd5\u52a8\u4f5c\uff09\uff0c\u5e76\u5728response\u6536\u5230\u540e\u6267\u884c\u56de\u8c03\u51fd\u6570 result = r.transformResponse(resp, req) \u83b7\u5f97\u7ed3\u6784\u4f53Result\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (r *Request) Do(ctx context.Context) Result {\n    var result Result\n    err := r.request(ctx, func(req *http.Request, resp *http.Response) {\n        result = r.transformResponse(resp, req)\n    })\n    if err != nil {\n        return Result{err: err}\n    }\n    if result.err == nil || len(result.body) > 0 {\n        metrics.ResponseSize.Observe(ctx, r.verb, r.URL().Host, float64(len(result.body)))\n    }\n    return result\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func (r *Request) request(ctx context.Context, fn func(*http.Request, *http.Response)) error {\n    // Metrics for total request latency\n    start := time.Now()\n    defer func() {\n        metrics.RequestLatency.Observe(ctx, r.verb, r.finalURLTemplate(), time.Since(start))\n    }()\n\n    if r.err != nil {\n        klog.V(4).Infof("Error in request: %v", r.err)\n        return r.err\n    }\n\n    if err := r.requestPreflightCheck(); err != nil {\n        return err\n    }\n\n    client := r.c.Client\n    if client == nil {\n        client = http.DefaultClient\n    }\n\n    // Throttle the first try before setting up the timeout configured on the\n    // client. We don\'t want a throttled client to return timeouts to callers\n    // before it makes a single request.\n    if err := r.tryThrottle(ctx); err != nil {\n        return err\n    }\n\n    if r.timeout > 0 {\n        var cancel context.CancelFunc\n        ctx, cancel = context.WithTimeout(ctx, r.timeout)\n        defer cancel()\n    }\n\n    isErrRetryableFunc := func(req *http.Request, err error) bool {\n        // "Connection reset by peer" or "apiserver is shutting down" are usually a transient errors.\n        // Thus in case of "GET" operations, we simply retry it.\n        // We are not automatically retrying "write" operations, as they are not idempotent.\n        if req.Method != "GET" {\n            return false\n        }\n        // For connection errors and apiserver shutdown errors retry.\n        if net.IsConnectionReset(err) || net.IsProbableEOF(err) {\n            return true\n        }\n        return false\n    }\n\n    // Right now we make about ten retry attempts if we get a Retry-After response.\n    retry := r.retryFn(r.maxRetries)\n    for {\n        if err := retry.Before(ctx, r); err != nil {\n            return retry.WrapPreviousError(err)\n        }\n        req, err := r.newHTTPRequest(ctx)\n        if err != nil {\n            return err\n        }\n        resp, err := client.Do(req)\n        updateURLMetrics(ctx, r, resp, err)\n        // The value -1 or a value of 0 with a non-nil Body indicates that the length is unknown.\n        // https://pkg.go.dev/net/http#Request\n        if req.ContentLength >= 0 && !(req.Body != nil && req.ContentLength == 0) {\n            metrics.RequestSize.Observe(ctx, r.verb, r.URL().Host, float64(req.ContentLength))\n        }\n        retry.After(ctx, r, resp, err)\n\n        done := func() bool {\n            defer readAndCloseResponseBody(resp)\n\n            // if the server returns an error in err, the response will be nil.\n            f := func(req *http.Request, resp *http.Response) {\n                if resp == nil {\n                    return\n                }\n                fn(req, resp)\n            }\n\n            if retry.IsNextRetry(ctx, r, req, resp, err, isErrRetryableFunc) {\n                return false\n            }\n\n            f(req, resp)\n            return true\n        }()\n        if done {\n            return retry.WrapPreviousError(err)\n        }\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func (r *Request) transformResponse(resp *http.Response, req *http.Request) Result {\n    var body []byte\n    if resp.Body != nil {\n        data, err := ioutil.ReadAll(resp.Body)\n        switch err.(type) {\n        case nil:\n            body = data\n        case http2.StreamError:\n            // This is trying to catch the scenario that the server may close the connection when sending the\n            // response body. This can be caused by server timeout due to a slow network connection.\n            // TODO: Add test for this. Steps may be:\n            // 1. client-go (or kubectl) sends a GET request.\n            // 2. Apiserver sends back the headers and then part of the body\n            // 3. Apiserver closes connection.\n            // 4. client-go should catch this and return an error.\n            klog.V(2).Infof("Stream error %#v when reading response body, may be caused by closed connection.", err)\n            streamErr := fmt.Errorf("stream error when reading response body, may be caused by closed connection. Please retry. Original error: %w", err)\n            return Result{\n                err: streamErr,\n            }\n        default:\n            klog.Errorf("Unexpected error when reading response body: %v", err)\n            unexpectedErr := fmt.Errorf("unexpected error when reading response body. Please retry. Original error: %w", err)\n            return Result{\n                err: unexpectedErr,\n            }\n        }\n    }\n\n    glogBody("Response Body", body)\n\n    // verify the content type is accurate\n    var decoder runtime.Decoder\n    contentType := resp.Header.Get("Content-Type")\n    if len(contentType) == 0 {\n        contentType = r.c.content.ContentType\n    }\n    if len(contentType) > 0 {\n        var err error\n        mediaType, params, err := mime.ParseMediaType(contentType)\n        if err != nil {\n            return Result{err: errors.NewInternalError(err)}\n        }\n        decoder, err = r.c.content.Negotiator.Decoder(mediaType, params)\n        if err != nil {\n            // if we fail to negotiate a decoder, treat this as an unstructured error\n            switch {\n            case resp.StatusCode == http.StatusSwitchingProtocols:\n                // no-op, we\'ve been upgraded\n            case resp.StatusCode < http.StatusOK || resp.StatusCode > http.StatusPartialContent:\n                return Result{err: r.transformUnstructuredResponseError(resp, req, body)}\n            }\n            return Result{\n                body:        body,\n                contentType: contentType,\n                statusCode:  resp.StatusCode,\n                warnings:    handleWarnings(resp.Header, r.warningHandler),\n            }\n        }\n    }\n\n    switch {\n    case resp.StatusCode == http.StatusSwitchingProtocols:\n        // no-op, we\'ve been upgraded\n    case resp.StatusCode < http.StatusOK || resp.StatusCode > http.StatusPartialContent:\n        // calculate an unstructured error from the response which the Result object may use if the caller\n        // did not return a structured error.\n        retryAfter, _ := retryAfterSeconds(resp)\n        err := r.newUnstructuredResponseError(body, isTextResponse(resp), resp.StatusCode, req.Method, retryAfter)\n        return Result{\n            body:        body,\n            contentType: contentType,\n            statusCode:  resp.StatusCode,\n            decoder:     decoder,\n            err:         err,\n            warnings:    handleWarnings(resp.Header, r.warningHandler),\n        }\n    }\n\n    return Result{\n        body:        body,\n        contentType: contentType,\n        statusCode:  resp.StatusCode,\n        decoder:     decoder,\n        warnings:    handleWarnings(resp.Header, r.warningHandler),\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type Result struct {\n    body        []byte\n    warnings    []net.WarningHeader\n    contentType string\n    err         error\n    statusCode  int\n\n    decoder runtime.Decoder\n}\n")),(0,o.kt)("p",null,"step 3-4 Into(result) \u5c06Result\u7ed3\u6784\u4f53\u89e3\u7801\u6210\u7c7b\u578b\u4e3a&corev1.PodList{}\u7684\u53d8\u91cfresult\u4e2d\u53bb\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func (r Result) Into(obj runtime.Object) error {\n    if r.err != nil {\n        // Check whether the result has a Status object in the body and prefer that.\n        return r.Error()\n    }\n    if r.decoder == nil {\n        return fmt.Errorf("serializer for %s doesn\'t exist", r.contentType)\n    }\n    if len(r.body) == 0 {\n        return fmt.Errorf("0-length response with status code: %d and content type: %s",\n            r.statusCode, r.contentType)\n    }\n\n    out, _, err := r.decoder.Decode(r.body, nil, obj)\n    if err != nil || out == obj {\n        return err\n    }\n    // if a different object is returned, see if it is Status and avoid double decoding\n    // the object.\n    switch t := out.(type) {\n    case *metav1.Status:\n        // any status besides StatusSuccess is considered an error.\n        if t.Status != metav1.StatusSuccess {\n            return errors.FromObject(t)\n        }\n    }\n    return nil\n}\n')))}d.isMDXComponent=!0},2230:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/2022-11-25-14-27-58-08ac6c9a284ee125e30686f589210c17.png"}}]);