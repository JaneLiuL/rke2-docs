"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[264],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return p}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},v=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),v=s(r),p=a,g=v["".concat(u,".").concat(p)]||v[p]||d[p]||o;return r?t.createElement(g,i(i({ref:n},c),{},{components:r})):t.createElement(g,i({ref:n},c))}));function p(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=v;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}v.displayName="MDXCreateElement"},1704:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={title:"Windows Agent Configuration Reference"},u=void 0,s={unversionedId:"reference/windows_agent_config",id:"reference/windows_agent_config",title:"Windows Agent Configuration Reference",description:"This is a reference to all parameters that can be used to configure the Windows RKE2 agent.",source:"@site/docs/reference/windows_agent_config.md",sourceDirName:"reference",slug:"/reference/windows_agent_config",permalink:"/rke2-docs/reference/windows_agent_config",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/reference/windows_agent_config.md",tags:[],version:"current",lastUpdatedAt:1666731726,formattedLastUpdatedAt:"10/25/2022",frontMatter:{title:"Windows Agent Configuration Reference"},sidebar:"mySidebar",previous:{title:"Subcommands",permalink:"/rke2-docs/reference/subcommands"},next:{title:"Known Issues and Limits",permalink:"/rke2-docs/known_issues"}},c={},d=[{value:"Windows RKE2 Agent CLI Help",id:"windows-rke2-agent-cli-help",level:3},{value:"This Windows Agent Configuration Reference was last updated using the v1.22.5+rke2r2 release",id:"this-windows-agent-configuration-reference-was-last-updated-using-the-v1225rke2r2-release",level:4}],v={toc:d};function p(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},v,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is a reference to all parameters that can be used to configure the Windows RKE2 agent.  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Windows Support is currently Experimental as of v1.21.3+rke2r1 and requires choosing Calico as the CNI for the RKE2 cluster"),"  "),(0,o.kt)("h3",{id:"windows-rke2-agent-cli-help"},"Windows RKE2 Agent CLI Help"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'NAME:\n   rke2-windows-amd64.exe agent - Run node agent\n\nUSAGE:\n   rke2-windows-amd64.exe agent command [command options] [arguments...]\n\nCOMMANDS:\n   service  Manage RKE2 as a Windows Service\n\nOPTIONS:\n   --config FILE, -c FILE                        (config) Load configuration from FILE (default: "/etc/rancher/rke2/config.yaml") [%RKE2_CONFIG_FILE%]\n   --debug                                       (logging) Turn on debug logs [%RKE2_DEBUG%]\n   --token value, -t value                       (cluster) Token to use for authentication [%RKE2_TOKEN%]\n   --token-file value                            (cluster) Token file to use for authentication [%RKE2_TOKEN_FILE%]\n   --server value, -s value                      (cluster) Server to connect to [%RKE2_URL%]\n   --data-dir value, -d value                    (data) Folder to hold state (default: "/var/lib/rancher/rke2")\n   --node-name value                             (agent/node) Node name [%RKE2_NODE_NAME%]\n   --node-label value                            (agent/node) Registering and starting kubelet with set of labels\n   --node-taint value                            (agent/node) Registering kubelet with set of taints\n   --image-credential-provider-bin-dir value     (agent/node) The path to the directory where credential provider plugin binaries are located (default: "/var/lib/rancher/credentialprovider/bin")\n   --image-credential-provider-config value      (agent/node) The path to the credential provider plugin config file (default: "/var/lib/rancher/credentialprovider/config.yaml")\n   --container-runtime-endpoint value            (agent/runtime) Disable embedded containerd and use alternative CRI implementation\n   --snapshotter value                           (agent/runtime) Override default containerd snapshotter (default: "native")\n   --private-registry value                      (agent/runtime) Private registry configuration file (default: "/etc/rancher/rke2/registries.yaml")\n   --node-ip value, -i value                     (agent/networking) IPv4/IPv6 addresses to advertise for node\n   --node-external-ip value                      (agent/networking) IPv4/IPv6 external IP addresses to advertise for node\n   --resolv-conf value                           (agent/networking) Kubelet resolv.conf file [%RKE2_RESOLV_CONF%]\n   --kubelet-arg value                           (agent/flags) Customized flag for kubelet process\n   --kube-proxy-arg value                        (agent/flags) Customized flag for kube-proxy process\n   --protect-kernel-defaults                     (agent/node) Kernel tuning behavior. If set, error if kernel tunables are different than kubelet defaults.\n   --selinux                                     (agent/node) Enable SELinux in containerd [%RKE2_SELINUX%]\n   --lb-server-port value                        (agent/node) Local port for supervisor client load-balancer. If the supervisor and apiserver are not colocated an additional port 1 less than this port w\nill also be used for the apiserver client load-balancer. (default: 6444) [%RKE2_LB_SERVER_PORT%]\n   --kube-apiserver-image value                  (image) Override image to use for kube-apiserver [%RKE2_KUBE_APISERVER_IMAGE%]\n   --kube-controller-manager-image value         (image) Override image to use for kube-controller-manager [%RKE2_KUBE_CONTROLLER_MANAGER_IMAGE%]\n   --kube-proxy-image value                      (image) Override image to use for kube-proxy [%RKE2_KUBE_PROXY_IMAGE%]\n   --kube-scheduler-image value                  (image) Override image to use for kube-scheduler [%RKE2_KUBE_SCHEDULER_IMAGE%]\n   --pause-image value                           (image) Override image to use for pause [%RKE2_PAUSE_IMAGE%]\n   --runtime-image value                         (image) Override image to use for runtime binaries (containerd, kubectl, crictl, etc) [%RKE2_RUNTIME_IMAGE%]\n   --etcd-image value                            (image) Override image to use for etcd [%RKE2_ETCD_IMAGE%]\n   --kubelet-path value                          (experimental/agent) Override kubelet binary path [%RKE2_KUBELET_PATH%]\n   --cloud-provider-name value                   (cloud provider) Cloud provider name [%RKE2_CLOUD_PROVIDER_NAME%]\n   --cloud-provider-config value                 (cloud provider) Cloud provider configuration file path [%RKE2_CLOUD_PROVIDER_CONFIG%]\n   --profile value                               (security) Validate system configuration against the selected benchmark (valid items: cis-1.5, cis-1.6 ) [%RKE2_CIS_PROFILE%]\n   --audit-policy-file value                     (security) Path to the file that defines the audit policy configuration [%RKE2_AUDIT_POLICY_FILE%]\n   --control-plane-resource-requests value       (components) Control Plane resource requests [%RKE2_CONTROL_PLANE_RESOURCE_REQUESTS%]\n   --control-plane-resource-limits value         (components) Control Plane resource limits [%RKE2_CONTROL_PLANE_RESOURCE_LIMITS%]\n   --kube-apiserver-extra-mount value            (components) kube-apiserver extra volume mounts [%RKE2_KUBE_APISERVER_EXTRA_MOUNT%]\n   --kube-scheduler-extra-mount value            (components) kube-scheduler extra volume mounts [%RKE2_KUBE_SCHEDULER_EXTRA_MOUNT%]\n   --kube-controller-manager-extra-mount value   (components) kube-controller-manager extra volume mounts [%RKE2_KUBE_CONTROLLER_MANAGER_EXTRA_MOUNT%]\n   --kube-proxy-extra-mount value                (components) kube-proxy extra volume mounts [%RKE2_KUBE_PROXY_EXTRA_MOUNT%]\n   --etcd-extra-mount value                      (components) etcd extra volume mounts [%RKE2_ETCD_EXTRA_MOUNT%]\n   --cloud-controller-manager-extra-mount value  (components) cloud-controller-manager extra volume mounts [%RKE2_CLOUD_CONTROLLER_MANAGER_EXTRA_MOUNT%]\n   --kube-apiserver-extra-env value              (components) kube-apiserver extra environment variables [%RKE2_KUBE_APISERVER_EXTRA_ENV%]\n   --kube-scheduler-extra-env value              (components) kube-scheduler extra environment variables [%RKE2_KUBE_SCHEDULER_EXTRA_ENV%]\n   --kube-controller-manager-extra-env value     (components) kube-controller-manager extra environment variables [%RKE2_KUBE_CONTROLLER_MANAGER_EXTRA_ENV%]\n   --kube-proxy-extra-env value                  (components) kube-proxy extra environment variables [%RKE2_KUBE_PROXY_EXTRA_ENV%]\n   --etcd-extra-env value                        (components) etcd extra environment variables [%RKE2_ETCD_EXTRA_ENV%]\n   --cloud-controller-manager-extra-env value    (components) cloud-controller-manager extra environment variables [%RKE2_CLOUD_CONTROLLER_MANAGER_EXTRA_ENV%]\n   --help, -h                                    show help\n')),(0,o.kt)("h4",{id:"this-windows-agent-configuration-reference-was-last-updated-using-the-v1225rke2r2-release"},"This Windows Agent Configuration Reference was last updated using the v1.22.5+rke2r2 release"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"rke2-windows-amd64.exe version v1.22.5+rke2r2 (b61d4b3cb989b0380aae97fceb9a3e45a35ee2b9)\ngo version go1.16.10b7\n")))}p.isMDXComponent=!0}}]);