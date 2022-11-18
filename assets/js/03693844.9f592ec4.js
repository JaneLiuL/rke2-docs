"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[57],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?i.createElement(f,a(a({ref:t},p),{},{components:n})):i.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9025:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],s={title:"Default Pod Security Standards"},l=void 0,c={unversionedId:"security/pod_security_standards",id:"security/pod_security_standards",title:"Default Pod Security Standards",description:"This document describes how RKE2 configures PodSecurityStandards and NetworkPolicies in order to be secure-by-default while also providing operators with maximum configuration flexibility.",source:"@site/docs/security/pod_security_standards.md",sourceDirName:"security",slug:"/security/pod_security_standards",permalink:"/rke2-docs/security/pod_security_standards",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/security/pod_security_standards.md",tags:[],version:"current",lastUpdatedAt:1668792627,formattedLastUpdatedAt:"11/18/2022",frontMatter:{title:"Default Pod Security Standards"},sidebar:"mySidebar",previous:{title:"Default Policy Configuration",permalink:"/rke2-docs/security/pod_security_policies"},next:{title:"SELinux",permalink:"/rke2-docs/security/selinux"}},p={},d=[{value:"Pod Security Standards",id:"pod-security-standards",level:4},{value:"Network Policies",id:"network-policies",level:4}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document describes how RKE2 configures ",(0,o.kt)("inlineCode",{parentName:"p"},"PodSecurityStandards")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkPolicies")," in order to be secure-by-default while also providing operators with maximum configuration flexibility."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Version Gate")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This document applies to RKE2 v1.25 and higher, which uses Pod Security Standards. For information on Pod Security Policies present in prior releases, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/rke2-docs/security/pod_security_policies"},"Default Policies Documentation"),"."))),(0,o.kt)("h4",{id:"pod-security-standards"},"Pod Security Standards"),(0,o.kt)("p",null,"Starting from Kubernetes version v1.25.0, Pod Security Policies (PSP) are totally removed from Kubernetes, and replaced by ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-admission/"},"Pod Security Admission (PSA)"),". A default Pod Security Admission config file will be added to the cluster upon startup as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If running with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--profile=cis-1.23")," option, RKE2 will apply a restricted pod security standard via a configuration file which will enforce ",(0,o.kt)("inlineCode",{parentName:"p"},"restricted")," mode throughout the cluster with an exception to the ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-system")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cis-operator-system")," namespaces to ensure successful operation of system pods.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If running without the ",(0,o.kt)("inlineCode",{parentName:"p"},"--profile=cis-1.23")," option, RKE2 will apply a nonrestricted pod security standard via a configuration file which will enforce ",(0,o.kt)("inlineCode",{parentName:"p"},"privileged")," mode throughout the cluster which allows a completely unrestricted mode to all pods in the cluster."))),(0,o.kt)("p",null,"RKE2 will put this configuration file at ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/rke2-pss.yaml"),", the content of the configuration file varries according to the cis mode which you started rke2:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CIS Mode")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apiserver.config.k8s.io/v1\nkind: AdmissionConfiguration\nplugins:\n- name: PodSecurity\n  configuration:\n    apiVersion: pod-security.admission.config.k8s.io/v1beta1\n    kind: PodSecurityConfiguration\n    defaults:\n      enforce: "restricted"\n      enforce-version: "latest"\n      audit: "restricted"\n      audit-version: "latest"\n      warn: "restricted"\n      warn-version: "latest"\n    exemptions:\n      usernames: []\n      runtimeClasses: []\n      namespaces: [kube-system, cis-operator-system]\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Non CIS Mode")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apiserver.config.k8s.io/v1\nkind: AdmissionConfiguration\nplugins:\n- name: PodSecurity\n  configuration:\n    apiVersion: pod-security.admission.config.k8s.io/v1beta1\n    kind: PodSecurityConfiguration\n    defaults:\n      enforce: "privileged"\n      enforce-version: "latest"\n    exemptions:\n      usernames: []\n      runtimeClasses: []\n      namespaces: []\n')),(0,o.kt)("p",null,"After placing this configuration file, rke2 will start the kube-apiserver with the following flag ",(0,o.kt)("inlineCode",{parentName:"p"},"--admission-control-config-file")," which will be set to the path of the PSA config file."),(0,o.kt)("p",null,"If you want to override the default pod security standard configuration file, you can pass ",(0,o.kt)("inlineCode",{parentName:"p"},"pod-security-admission-config-file: <path-to-custom-psa-config-file>")," to the RKE2 config file."),(0,o.kt)("h4",{id:"network-policies"},"Network Policies"),(0,o.kt)("p",null,"When RKE2 is run with the ",(0,o.kt)("inlineCode",{parentName:"p"},"profile: cis-1.23")," parameter, it will apply 2 network policies to the ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-system"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-public"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," namespaces and applies associated annotations. The same logic applies to these policies and annotations as the PSPs. On start, the annotations for each namespace are checked for existence and if they exist, RKE2 takes no action. If the annotation doesn't exist, RKE2 checks to see if the policy exists and if it does, recreates it."),(0,o.kt)("p",null,"The first policy applied is to restrict network traffic to only the namespace itself. See below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  managedFields:\n  - apiVersion: networking.k8s.io/v1\n    fieldsType: FieldsV1\n    fieldsV1:\n      f:spec:\n        f:ingress: {}\n        f:policyTypes: {}\n  name: default-network-policy\n  namespace: default\nspec:\n  ingress:\n  - from:\n    - podSelector: {}\n  podSelector: {}\n  policyTypes:\n  - Ingress\n")),(0,o.kt)("p",null,"The second policy applied is to the ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace and allows for DNS traffic. See below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  managedFields:\n  - apiVersion: networking.k8s.io/v1\n    fieldsV1:\n      f:spec:\n        f:ingress: {}\n        f:podSelector:\n          f:matchLabels:\n        f:policyTypes: {}\n  name: default-network-dns-policy\n  namespace: kube-system\nspec:\n  ingress:\n  - ports:\n    - port: 53\n      protocol: TCP\n    - port: 53\n      protocol: UDP\n  podSelector:\n    matchLabels:\n  policyTypes:\n  - Ingress\n")),(0,o.kt)("p",null,"RKE2 applies the ",(0,o.kt)("inlineCode",{parentName:"p"},"default-network-policy")," policy and ",(0,o.kt)("inlineCode",{parentName:"p"},"np.rke2.io")," annotation to all built-in namespaces. The ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace additionally gets the ",(0,o.kt)("inlineCode",{parentName:"p"},"default-network-dns-policy")," policy and ",(0,o.kt)("inlineCode",{parentName:"p"},"np.rke2.io/dns")," annotation applied to it."),(0,o.kt)("p",null,"To view the network policies currently deployed on your system, run the below command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get networkpolicies -A\n")))}m.isMDXComponent=!0}}]);