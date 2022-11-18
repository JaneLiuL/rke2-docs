"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[186],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(y,o(o({ref:t},c),{},{components:n})):i.createElement(y,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2368:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],l={title:"Default Policy Configuration"},s=void 0,p={unversionedId:"security/pod_security_policies",id:"security/pod_security_policies",title:"Default Policy Configuration",description:"This document describes how RKE2 configures PodSecurityPolicies and NetworkPolicies in order to be secure-by-default while also providing operators with maximum configuration flexibility.",source:"@site/docs/security/pod_security_policies.md",sourceDirName:"security",slug:"/security/pod_security_policies",permalink:"/rke2-docs/security/pod_security_policies",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/security/pod_security_policies.md",tags:[],version:"current",lastUpdatedAt:1668792627,formattedLastUpdatedAt:"11/18/2022",frontMatter:{title:"Default Policy Configuration"},sidebar:"mySidebar",previous:{title:"FIPS 140-2 Enablement",permalink:"/rke2-docs/security/fips_support"},next:{title:"Default Pod Security Standards",permalink:"/rke2-docs/security/pod_security_standards"}},c={},u=[{value:"Pod Security Policies",id:"pod-security-policies",level:4},{value:"Network Policies",id:"network-policies",level:4}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes how RKE2 configures ",(0,r.kt)("inlineCode",{parentName:"p"},"PodSecurityPolicies")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"NetworkPolicies")," in order to be secure-by-default while also providing operators with maximum configuration flexibility."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Version Gate")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This document applies to RKE2 v1.24 and older, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/rke2-docs/security/pod_security_standards"},"Pod Security Standards Documentation")," for the default policy information for RKE2 v1.25 and higher."))),(0,r.kt)("h4",{id:"pod-security-policies"},"Pod Security Policies"),(0,r.kt)("p",null,"RKE2 can be ran with or without the ",(0,r.kt)("inlineCode",{parentName:"p"},"profile: cis-1.6")," configuration parameter. This will cause it to apply different ",(0,r.kt)("inlineCode",{parentName:"p"},"PodSecurityPolicies")," (PSPs) at start-up."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If running with the ",(0,r.kt)("inlineCode",{parentName:"li"},"cis-1.6")," profile, RKE2 will apply a restrictive policy called ",(0,r.kt)("inlineCode",{parentName:"li"},"global-restricted-psp")," to all namespaces except ",(0,r.kt)("inlineCode",{parentName:"li"},"kube-system"),". The ",(0,r.kt)("inlineCode",{parentName:"li"},"kube-system")," namespace needs a less restrictive policy named ",(0,r.kt)("inlineCode",{parentName:"li"},"system-unrestricted-psp")," in order to launch critical components."),(0,r.kt)("li",{parentName:"ul"},"If running without the ",(0,r.kt)("inlineCode",{parentName:"li"},"cis-1.6")," profile, RKE2 will apply a completely unrestricted policy called ",(0,r.kt)("inlineCode",{parentName:"li"},"global-unrestricted-psp"),", which is the equivalent of running without the PSP admission controller enabled.")),(0,r.kt)("p",null,"RKE2 will put these policies in place upon initial startup, but will not modify them after that, unless explicitly triggered by the cluster operator as described below. This is to allow the operator to fully control the PSPs without RKE2's defaults adding interference."),(0,r.kt)("p",null,"The creation and application of the PSPs are controlled by the presence or absence of certain annotations on the ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace. These map directly to the PSPs which can be created and are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"psp.rke2.io/global-restricted")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"psp.rke2.io/system-unrestricted")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"psp.rke2.io/global-unrestricted"))),(0,r.kt)("p",null,"The following logic is performed at startup for the policies and their annotations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the annotation exists, RKE2 continues without further action."),(0,r.kt)("li",{parentName:"ul"},"If the annotation doesn't exist, RKE2 checks to see if the associated policy exists and if so, deletes and recreates it, along with adding the annotation to the namespace."),(0,r.kt)("li",{parentName:"ul"},"In the case of the ",(0,r.kt)("inlineCode",{parentName:"li"},"global-unrestricted-psp"),", the policy is not recreated. This is to account for moving between CIS and non-CIS modes without making the cluster less secure."),(0,r.kt)("li",{parentName:"ul"},"At the time of creating a policy, cluster roles and cluster role bindings are also created to ensure the appropriate policies are put into use by default.")),(0,r.kt)("p",null,'So, after the initial start-up, operators can modify or delete RKE2\'s policies and RKE2 will respect those changes. Additionally, to "reset" a policy, an operator just needs to delete the associated annotation from the ',(0,r.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace and restart RKE2."),(0,r.kt)("p",null,"The policies are outlined below, starting with the most restrictive ",(0,r.kt)("inlineCode",{parentName:"p"},"global-restricted")," PSP."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: policy/v1beta1\nkind: PodSecurityPolicy\nmetadata:\n  name: global-restricted-psp\nspec:\n  privileged: false                # CIS - 5.2.1\n  allowPrivilegeEscalation: false  # CIS - 5.2.5\n  requiredDropCapabilities:        # CIS - 5.2.7/8/9\n    - ALL\n  volumes:\n    - 'configMap'\n    - 'emptyDir'\n    - 'projected'\n    - 'secret'\n    - 'downwardAPI'\n    - 'persistentVolumeClaim'\n  hostNetwork: false               # CIS - 5.2.4\n  hostIPC: false                   # CIS - 5.2.3\n  hostPID: false                   # CIS - 5.2.2\n  runAsUser:\n    rule: 'MustRunAsNonRoot'       # CIS - 5.2.6\n  seLinux:\n    rule: 'RunAsAny'\n  supplementalGroups:\n    rule: 'MustRunAs'\n    ranges:\n      - min: 1\n        max: 65535\n  fsGroup:\n    rule: 'MustRunAs'\n    ranges:\n      - min: 1\n        max: 65535\n  readOnlyRootFilesystem: false\n")),(0,r.kt)("p",null,"If RKE2 is started in non CIS mode, annotations are checked like above however the resulting application of pod security policies is a permissive one. See below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: policy/v1beta1\nkind: PodSecurityPolicy\nmetadata:\n  name: global-unrestricted-psp\nspec:\n  privileged: true\n  allowPrivilegeEscalation: true\n  allowedCapabilities:\n  - '*'\n  volumes:\n  - '*'\n  hostNetwork: true\n  hostPorts:\n  - min: 0\n    max: 65535\n  hostIPC: true\n  hostPID: true\n  runAsUser:\n    rule: 'RunAsAny'\n  seLinux:\n    rule: 'RunAsAny'\n  supplementalGroups:\n    rule: 'RunAsAny'\n  fsGroup:\n    rule: 'RunAsAny'\n")),(0,r.kt)("p",null,'In both cases, the "system unrestricted policy" is applied. See below.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: policy/v1beta1\nkind: PodSecurityPolicy\nmetadata:\n  name: system-unrestricted-psp\nspec:\n  privileged: true\n  allowPrivilegeEscalation: true\n  allowedCapabilities:\n  - '*'\n  volumes:\n  - '*'\n  hostNetwork: true\n  hostPorts:\n  - min: 0\n    max: 65535\n  hostIPC: true\n  hostPID: true\n  runAsUser:\n    rule: 'RunAsAny'\n  seLinux:\n    rule: 'RunAsAny'\n  supplementalGroups:\n    rule: 'RunAsAny'\n  fsGroup:\n    rule: 'RunAsAny'\n")),(0,r.kt)("p",null,"To view the pod security policies currently deployed on your system, run the below command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get psp -A\n")),(0,r.kt)("h4",{id:"network-policies"},"Network Policies"),(0,r.kt)("p",null,"When RKE2 is run with the ",(0,r.kt)("inlineCode",{parentName:"p"},"profile: cis-1.6")," parameter, it will apply 2 network policies to the ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-system"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-public"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," namespaces and applies associated annotations. The same logic applies to these policies and annotations as the PSPs. On start, the annotations for each namespace are checked for existence and if they exist, RKE2 takes no action. If the annotation doesn't exist, RKE2 checks to see if the policy exists and if it does, recreates it."),(0,r.kt)("p",null,"The first policy applied is to restrict network traffic to only the namespace itself. See below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  managedFields:\n  - apiVersion: networking.k8s.io/v1\n    fieldsType: FieldsV1\n    fieldsV1:\n      f:spec:\n        f:ingress: {}\n        f:policyTypes: {}\n  name: default-network-policy\n  namespace: default\nspec:\n  ingress:\n  - from:\n    - podSelector: {}\n  podSelector: {}\n  policyTypes:\n  - Ingress\n")),(0,r.kt)("p",null,"The second policy applied is to the ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace and allows for DNS traffic. See below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  managedFields:\n  - apiVersion: networking.k8s.io/v1\n    fieldsV1:\n      f:spec:\n        f:ingress: {}\n        f:podSelector:\n          f:matchLabels:\n        f:policyTypes: {}\n  name: default-network-dns-policy\n  namespace: kube-system\nspec:\n  ingress:\n  - ports:\n    - port: 53\n      protocol: TCP\n    - port: 53\n      protocol: UDP\n  podSelector:\n    matchLabels:\n  policyTypes:\n  - Ingress\n")),(0,r.kt)("p",null,"RKE2 applies the ",(0,r.kt)("inlineCode",{parentName:"p"},"default-network-policy")," policy and ",(0,r.kt)("inlineCode",{parentName:"p"},"np.rke2.io")," annotation to all built-in namespaces. The ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace additionally gets the ",(0,r.kt)("inlineCode",{parentName:"p"},"default-network-dns-policy")," policy and ",(0,r.kt)("inlineCode",{parentName:"p"},"np.rke2.io/dns")," annotation applied to it."),(0,r.kt)("p",null,"To view the network policies currently deployed on your system, run the below command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get networkpolicies -A\n")))}m.isMDXComponent=!0}}]);