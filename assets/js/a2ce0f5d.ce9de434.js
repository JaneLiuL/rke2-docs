"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[673],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return t?n.createElement(g,o(o({ref:r},p),{},{components:t})):n.createElement(g,o({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1660:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={title:"Windows Air-Gap Install"},s=void 0,d={unversionedId:"install/windows_airgap",id:"install/windows_airgap",title:"Windows Air-Gap Install",description:"Windows Support is currently Experimental as of v1.21.3+rke2r1",source:"@site/docs/install/windows_airgap.md",sourceDirName:"install",slug:"/install/windows_airgap",permalink:"/rke2-docs/install/windows_airgap",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/windows_airgap.md",tags:[],version:"current",lastUpdatedAt:1666731726,formattedLastUpdatedAt:"10/25/2022",frontMatter:{title:"Windows Air-Gap Install"},sidebar:"mySidebar",previous:{title:"Air-Gap Install",permalink:"/rke2-docs/install/airgap"},next:{title:"Linux Uninstall",permalink:"/rke2-docs/install/linux_uninstall"}},p={},c=[{value:"Prepare the Windows Agent Node",id:"prepare-the-windows-agent-node",level:4},{value:"Windows Tarball Method",id:"windows-tarball-method",level:2},{value:"Private Registry Method",id:"private-registry-method",level:2},{value:"Install Windows RKE2",id:"install-windows-rke2",level:2}],u={toc:c};function m(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Windows Support is currently Experimental as of v1.21.3+rke2r1"),"\n",(0,i.kt)("strong",{parentName:"p"},"Windows Support requires choosing Calico as the CNI for the RKE2 cluster")),(0,i.kt)("p",null,"RKE2 Windows Agent (Worker) Nodes can be used in an air-gapped environment with two different methods. This requires first completing the RKE2 ",(0,i.kt)("a",{parentName:"p",href:"/rke2-docs/install/airgap"},"airgap setup")),(0,i.kt)("p",null,"You can either deploy using the ",(0,i.kt)("inlineCode",{parentName:"p"},"rke2-windows-<BUILD_VERSION>-amd64-images.tar.gz")," tarball release artifact, or by using a private registry. There are currently three tarball artifacts released for Windows in accordance with our validated ",(0,i.kt)("a",{parentName:"p",href:"./requirements/#windows"},"Windows versions"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"rke2-windows-1809-amd64-images.tar.gz"),(0,i.kt)("li",{parentName:"ul"},"rke2-windows-2004-amd64-images.tar.gz"),(0,i.kt)("li",{parentName:"ul"},"rke2-windows-20H2-amd64-images.tar.gz")),(0,i.kt)("p",null,"All files mentioned in the steps can be obtained from the assets of the desired released rke2 version ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2/releases"},"here"),"."),(0,i.kt)("h4",{id:"prepare-the-windows-agent-node"},"Prepare the Windows Agent Node"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note")," The Windows Server Containers feature needs to be enabled for the RKE2 agent to work."),(0,i.kt)("p",null,"Open a new Powershell window with Administrator privileges"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},'powershell -Command "Start-Process PowerShell -Verb RunAs"\n')),(0,i.kt)("p",null,"In the new Powershell window, run the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"Enable-WindowsOptionalFeature -Online -FeatureName containers \u2013All\n")),(0,i.kt)("p",null,"This will require a reboot for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Containers")," feature to properly function."),(0,i.kt)("h2",{id:"windows-tarball-method"},"Windows Tarball Method"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download the Windows images tarballs and binary from the RKE2 release artifacts list for the version of RKE2 that you are using."),(0,i.kt)("h4",{parentName:"li",id:"using-targz-image-tarballs"},"Using tar.gz image tarballs"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Windows Server 2019 LTSC (amd64) (OS Build 17763.2061)"))),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"$ProgressPreference = 'SilentlyContinue'\nInvoke-WebRequest https://github.com/rancher/rke2/releases/download/v1.21.4%2Brke2r2/rke2-windows-1809-amd64-images.tar.gz -OutFile /var/lib/rancher/rke2/agent/images/rke2-windows-1809-amd64-images.tar.gz \n")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- **Windows Server SAC 2004 (amd64) (OS Build 19041.1110)**\n\n``` powershell\n$ProgressPreference = 'SilentlyContinue'  \nInvoke-WebRequest https://github.com/rancher/rke2/releases/download/v1.21.4%2Brke2r2/rke2-windows-2004-amd64-images.tar.gz -OutFile c:/var/lib/rancher/rke2/agent/images/rke2-windows-2004-amd64-images.tar.gz\n```\n\n- **Windows Server SAC 20H2 (amd64) (OS Build 19042.1110)**\n\n``` powershell\n$ProgressPreference = 'SilentlyContinue'  \nInvoke-WebRequest https://github.com/rancher/rke2/releases/download/v1.21.4%2Brke2r2/rke2-windows-20H2-amd64-images.tar.gz -OutFile c:/var/lib/rancher/rke2/agent/images/rke2-windows-20H2-amd64-images.tar.gz \n```\n\n#### Using tar.zst image tarballs\n\n- **Windows Server 2019 LTSC (amd64) (OS Build 17763.2061)**\n\n``` powershell\n$ProgressPreference = 'SilentlyContinue'  \nInvoke-WebRequest https://github.com/rancher/rke2/releases/download/v1.21.4%2Brke2r2/rke2-windows-1809-amd64-images.tar.zst -OutFile /var/lib/rancher/rke2/agent/images/rke2-windows-1809-amd64-images.tar.zst \n```\n\n\n- **Windows Server SAC 2004 (amd64) (OS Build 19041.1110)**\n\n``` powershell\n$ProgressPreference = 'SilentlyContinue'  \nInvoke-WebRequest https://github.com/rancher/rke2/releases/download/v1.21.4%2Brke2r2/rke2-windows-2004-amd64-images.tar.zst -OutFile c:/var/lib/rancher/rke2/agent/images/rke2-windows-2004-amd64-images.tar.zst \n```\n\n- **Windows Server SAC 20H2 (amd64) (OS Build 19042.1110)**\n\n``` powershell\n$ProgressPreference = 'SilentlyContinue'\nInvoke-WebRequest hhttps://github.com/rancher/rke2/releases/download/v1.21.4%2Brke2r2/rke2-windows-20H2-amd64-images.tar.zst -OutFile c:/var/lib/rancher/rke2/agent/images/rke2-windows-20H2-amd64-images.tar.zst\n```\n\n- Use `rke2-windows-<BUILD_VERSION>-amd64.tar.gz` or `rke2-windows-<BUILD_VERSION>-amd64.tar.zst`. Zstandard offers better compression ratios and faster decompression speeds compared to pigz.\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ensure that the ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/agent/images/")," directory exists on the node."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"New-Item -Type Directory c:\\usr\\local\\bin -Force\nNew-Item -Type Directory c:\\var\\lib\\rancher\\rke2\\bin -Force\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy the compressed archive to ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/agent/images/")," on the node, ensuring that the file extension is retained.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#install-windows-rke2"},"Install RKE2")))),(0,i.kt)("h2",{id:"private-registry-method"},"Private Registry Method"),(0,i.kt)("p",null,"As of RKE2 v1.20, private registry support honors all settings from the ",(0,i.kt)("a",{parentName:"p",href:"/rke2-docs/install/containerd_registry_configuration"},"containerd registry configuration"),". This includes endpoint override and transport protocol (HTTP/HTTPS), authentication, certificate verification, etc."),(0,i.kt)("p",null,"Prior to RKE2 v1.20, private registries must use TLS, with a cert trusted by the host CA bundle. If the registry is using a self-signed cert, you can add the cert to the host CA bundle with ",(0,i.kt)("inlineCode",{parentName:"p"},"update-ca-certificates"),". The registry must also allow anonymous (unauthenticated) access."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add all the required system images to your private registry. A list of images can be obtained from the ",(0,i.kt)("inlineCode",{parentName:"li"},".txt")," file corresponding to each tarball referenced above, or you may ",(0,i.kt)("inlineCode",{parentName:"li"},"docker load")," the airgap image tarballs, then tag and push the loaded images."),(0,i.kt)("li",{parentName:"ol"},"If using a private or self-signed certificate on the registry, add the registry's CA cert to the containerd registry configuration, or operating system's trusted certs for releases prior to v1.20."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#install-windows-rke2"},"Install RKE2")," using the ",(0,i.kt)("inlineCode",{parentName:"li"},"system-default-registry")," parameter, or use the ",(0,i.kt)("a",{parentName:"li",href:"/rke2-docs/install/containerd_registry_configuration"},"containerd registry configuration")," to use your registry as a mirror for docker.io.")),(0,i.kt)("h2",{id:"install-windows-rke2"},"Install Windows RKE2"),(0,i.kt)("p",null,"These steps should only be performed after completing one of either the ",(0,i.kt)("a",{parentName:"p",href:"#windows-tarball-method"},"Tarball Method")," or ",(0,i.kt)("a",{parentName:"p",href:"#private-registry-method"},"Private Registry Method"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Obtain the Windows RKE2 binary file ",(0,i.kt)("inlineCode",{parentName:"li"},"rke2-windows-amd64.exe"),". Ensure the binary is named ",(0,i.kt)("inlineCode",{parentName:"li"},"rke2.exe")," and place it in ",(0,i.kt)("inlineCode",{parentName:"li"},"c:/usr/local/bin"),". ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"Invoke-WebRequest https://github.com/rancher/rke2/releases/download/v1.21.4%2Brke2r2/rke2-windows-amd64.exe -OutFile c:/usr/local/bin/rke2.exe\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Configure the rke2-agent for Windows")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},'New-Item -Type Directory c:/etc/rancher/rke2 -Force\nSet-Content -Path c:/etc/rancher/rke2/config.yaml -Value @"\nserver: https://<server>:9345\ntoken: <token from server node>\n"@\n')),(0,i.kt)("p",null,"To read more about the config.yaml file, see the ",(0,i.kt)("a",{parentName:"p",href:"/rke2-docs/install/configuration#configuration-file"},"Install Options documentation.")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Configure your PATH")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:PATH+=";c:\\var\\lib\\rancher\\rke2\\bin;c:\\usr\\local\\bin"\n\n[Environment]::SetEnvironmentVariable(\n    "Path",\n    [Environment]::GetEnvironmentVariable("Path", [EnvironmentVariableTarget]::Machine) + ";c:\\var\\lib\\rancher\\rke2\\bin;c:\\usr\\local\\bin",\n    [EnvironmentVariableTarget]::Machine)\n')),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Start the RKE2 Windows service by running the binary with the desired parameters. Please see the ",(0,i.kt)("a",{parentName:"li",href:"/rke2-docs/reference/windows_agent_config"},"Windows Agent Configuration reference")," for additional parameters.  ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"c:\\usr\\local\\bin\\rke2.exe agent service --add\n")),(0,i.kt)("p",null,"For example, if using the Private Registry Method, your config file would have the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'system-default-registry: "registry.example.com:5000"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," The ",(0,i.kt)("inlineCode",{parentName:"p"},"system-default-registry")," parameter must specify only valid RFC 3986 URI authorities, i.e. a host and optional port."),(0,i.kt)("p",null,"If you would prefer to use CLI parameters only instead, run the binary with the desired parameters. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"c:/usr/local/bin/rke2.exe agent --token <> --server <>\n")))}m.isMDXComponent=!0}}]);