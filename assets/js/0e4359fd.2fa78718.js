"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[751],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||l;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9272:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={title:"Helm Integration"},s=void 0,m={unversionedId:"helm",id:"helm",title:"Helm Integration",description:"Helm is the package management tool of choice for Kubernetes. Helm charts provide templating syntax for Kubernetes YAML manifest documents. With Helm we can create configurable deployments instead of just using static files. For more information about creating your own catalog of deployments, check out the docs at https://helm.sh/docs/intro/quickstart/.",source:"@site/docs/helm.md",sourceDirName:".",slug:"/helm",permalink:"/rke2-docs/helm",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/helm.md",tags:[],version:"current",lastUpdatedAt:1666974001,formattedLastUpdatedAt:"10/28/2022",frontMatter:{title:"Helm Integration"},sidebar:"mySidebar",previous:{title:"Networking",permalink:"/rke2-docs/networking"},next:{title:"Advanced Options and Configuration",permalink:"/rke2-docs/advanced"}},p={},c=[{value:"Automatically Deploying Manifests and Helm Charts",id:"automatically-deploying-manifests-and-helm-charts",level:3},{value:"Using the Helm CRD",id:"using-the-helm-crd",level:3},{value:"HelmChart Field Definitions",id:"helmchart-field-definitions",level:4},{value:"Customizing Packaged Components with HelmChartConfig",id:"customizing-packaged-components-with-helmchartconfig",level:3}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Helm is the package management tool of choice for Kubernetes. Helm charts provide templating syntax for Kubernetes YAML manifest documents. With Helm we can create configurable deployments instead of just using static files. For more information about creating your own catalog of deployments, check out the docs at ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/quickstart/"},"https://helm.sh/docs/intro/quickstart/"),"."),(0,l.kt)("p",null,"RKE2 does not require any special configuration to use with Helm command-line tools. Just be sure you have properly set up your kubeconfig as per the section about ",(0,l.kt)("a",{parentName:"p",href:"/rke2-docs/cluster_access"},"cluster access"),". RKE2 does include some extra functionality to make deploying both traditional Kubernetes resource manifests and Helm Charts even easier with the ",(0,l.kt)("a",{parentName:"p",href:"#using-the-helm-crd"},"rancher/helm-release CRD.")),(0,l.kt)("p",null,"This section covers the following topics:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#automatically-deploying-manifests-and-helm-charts"},"Automatically Deploying Manifests and Helm Charts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#using-the-helm-crd"},"Using the Helm CRD")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#customizing-packaged-components-with-helmchartconfig"},"Customizing Packaged Components with HelmChartConfig"))),(0,l.kt)("h3",{id:"automatically-deploying-manifests-and-helm-charts"},"Automatically Deploying Manifests and Helm Charts"),(0,l.kt)("p",null,"Any Kubernetes manifests found in ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/manifests")," will automatically be deployed to RKE2 in a manner similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl apply"),". Manifests deployed in this manner are managed as AddOn custom resources, and can be viewed by running ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get addon -A"),". You will find AddOns for packaged components such as CoreDNS, Local-Storage, Nginx-Ingress, etc. AddOns are created automatically by the deploy controller, and are named based on their filename in the manifests directory."),(0,l.kt)("p",null,"It is also possible to deploy Helm charts as AddOns. RKE2 includes a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/helm-controller/"},"Helm Controller")," that manages Helm charts using a HelmChart Custom Resource Definition (CRD)."),(0,l.kt)("h3",{id:"using-the-helm-crd"},"Using the Helm CRD"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/helm-controller#helm-controller"},"HelmChart resource definition")," captures most of the options you would normally pass to the ",(0,l.kt)("inlineCode",{parentName:"p"},"helm")," command-line tool. Here's an example of how you might deploy Grafana from the default chart repository, overriding some of the default chart values. Note that the HelmChart resource itself is in the ",(0,l.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace, but the chart's resources will be deployed to the ",(0,l.kt)("inlineCode",{parentName:"p"},"monitoring")," namespace."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: helm.cattle.io/v1\nkind: HelmChart\nmetadata:\n  name: grafana\n  namespace: kube-system\nspec:\n  chart: stable/grafana\n  targetNamespace: monitoring\n  set:\n    adminPassword: "NotVerySafePassword"\n  valuesContent: |-\n    image:\n      tag: master\n    env:\n      GF_EXPLORE_ENABLED: true\n    adminUser: admin\n    sidecar:\n      datasources:\n        enabled: true\n')),(0,l.kt)("h4",{id:"helmchart-field-definitions"},"HelmChart Field Definitions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Helm Argument / Flag Equivalent"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Helm Chart name"),(0,l.kt)("td",{parentName:"tr",align:null},"NAME")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.chart"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Helm Chart name in repository, or complete HTTPS URL to chart archive (.tgz)"),(0,l.kt)("td",{parentName:"tr",align:null},"CHART")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.targetNamespace"),(0,l.kt)("td",{parentName:"tr",align:null},"default"),(0,l.kt)("td",{parentName:"tr",align:null},"Helm Chart target namespace"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--namespace"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.version"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Helm Chart version (when installing from repository)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--version"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.repo"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Helm Chart repository URL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--repo"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.helmVersion"),(0,l.kt)("td",{parentName:"tr",align:null},"v3"),(0,l.kt)("td",{parentName:"tr",align:null},"Helm version to use (",(0,l.kt)("inlineCode",{parentName:"td"},"v2")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"v3"),")"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.bootstrap"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"Set to True if this chart is needed to bootstrap the cluster (Cloud Controller Manager, etc)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.set"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Override simple default Chart values. These take precedence over options set via valuesContent."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--set")," / ",(0,l.kt)("inlineCode",{parentName:"td"},"--set-string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.valuesContent"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Override complex default Chart values via YAML file content"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--values"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec.chartContent"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Base64-encoded chart archive .tgz - overrides spec.chart"),(0,l.kt)("td",{parentName:"tr",align:null},"CHART")))),(0,l.kt)("h3",{id:"customizing-packaged-components-with-helmchartconfig"},"Customizing Packaged Components with HelmChartConfig"),(0,l.kt)("p",null,"To allow overriding values for packaged components that are deployed as HelmCharts (such as Canal, CoreDNS, Nginx-Ingress, etc), RKE2 supports customizing deployments via a ",(0,l.kt)("inlineCode",{parentName:"p"},"HelmChartConfig")," resources. The ",(0,l.kt)("inlineCode",{parentName:"p"},"HelmChartConfig")," resource must match the name and namespace of its corresponding HelmChart, and supports providing additional ",(0,l.kt)("inlineCode",{parentName:"p"},"valuesContent"),", which is passed to the ",(0,l.kt)("inlineCode",{parentName:"p"},"helm")," command as an additional value file."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," HelmChart ",(0,l.kt)("inlineCode",{parentName:"p"},"spec.set")," values override HelmChart and HelmChartConfig ",(0,l.kt)("inlineCode",{parentName:"p"},"spec.valuesContent")," settings.")),(0,l.kt)("p",null,"For example, to customize the packaged CoreDNS configuration, you can create a file named ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/manifests/rke2-coredns-config.yaml")," and populate it with the following content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-coredns\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    image: coredns/coredns\n    imageTag: v1.7.1\n")))}u.isMDXComponent=!0}}]);