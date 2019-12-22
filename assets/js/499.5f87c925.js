(window.webpackJsonp=window.webpackJsonp||[]).push([[499],{672:function(e,t,r){"use strict";r.r(t);var a=r(2),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"安裝"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安裝"}},[e._v("#")]),e._v(" 安裝")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("Testing Is Documentation")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/hunzhiwange/framework/blob/master/tests/Docs/Started/InstallDoc.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("tests/Docs/Started/InstallDoc.php"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("QueryPHP 是一个渐进式 PHP 常驻框架，我们强调的是一个渐进式，它既可以运行在 PHP-FPM 场景，同时还支持在 Swoole 服务中运行。")]),e._v(" "),r("h2",{attrs:{id:"环境要求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#环境要求"}},[e._v("#")]),e._v(" 环境要求")]),e._v(" "),r("p",[e._v("事实上，QueryPHP 也是一个普通的 PHP 框架，目前最低版本要求 PHP 7.4.0，我们对环境并没有特别的要求。")]),e._v(" "),r("p",[e._v("PHP ^7.4.0\next-mbstring "),r("a",{attrs:{href:"https://github.com/hunzhiwange/framework/blob/master/src/Leevel/Support/Str.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("字符处理"),r("OutboundLink")],1),e._v("\next-openssl "),r("a",{attrs:{href:"https://github.com/hunzhiwange/framework/blob/master/src/Leevel/Encryption/Encryption.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("加密组件"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("我们系统依赖的组件可以通过 "),r("a",{attrs:{href:"https://github.com/hunzhiwange/queryphp/blob/master/composer.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("composer.json"),r("OutboundLink")],1),e._v(" 找到，我们提供了大量开箱即用的功能。")]),e._v(" "),r("p",[e._v("实际上，QueryPHP 对于环境来说"),r("code",[e._v("只需要")]),e._v("安装一个 "),r("code",[e._v("PHP 7.4.0")]),e._v(" 及以上版本即可，这个时候甚至无需安装 Nginx 而使用 PHP 内置 WebServer 即可将 QueryPHP 跑起来。")]),e._v(" "),r("p",[e._v("对于每位 PHP 工程师来说，您的电脑早已经运行着一个 PHP 7 版本，接着您可以进行安装了。")]),e._v(" "),r("h2",{attrs:{id:"国内镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#国内镜像"}},[e._v("#")]),e._v(" 国内镜像")]),e._v(" "),r("p",[e._v("QueryPHP 使用 "),r("a",{attrs:{href:"https://developer.aliyun.com/composer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Composer"),r("OutboundLink")],1),e._v(" 来管理整个项目依赖，因此确保您已经安装了 Composer。")]),e._v(" "),r("p",[e._v("国外镜像访问速度很慢，我们建议使用国内阿里云镜像。")]),e._v(" "),r("p",[e._v("镜像 1 "),r("a",{attrs:{href:"https://developer.aliyun.com/composer",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developer.aliyun.com/composer"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/\n")])])]),r("h2",{attrs:{id:"composer-安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#composer-安装"}},[e._v("#")]),e._v(" Composer 安装")]),e._v(" "),r("p",[e._v("你可以在终端中运行 "),r("code",[e._v("create-project")]),e._v(" 命令来安装 QueryPHP.")]),e._v(" "),r("h3",{attrs:{id:"安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("composer create-project --prefer-dist hunzhiwange/queryphp myapp\n")])])]),r("p",[e._v("或者体验开发版本")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("composer create-project hunzhiwange/queryphp myapp dev-master\n")])])]),r("h3",{attrs:{id:"运行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[e._v("#")]),e._v(" 运行")]),e._v(" "),r("p",[e._v("你也可以简单实用 PHP 内置的服务器来运行 QueryPHP,当然更好的选择配置 Nginx 站点。")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("php leevel server "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Visite http://127.0.0.1:9527/"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),r("ul",[r("li",[e._v("首页 "),r("a",{attrs:{href:"http://127.0.0.1:9527/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://127.0.0.1:9527/"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("MVC 路由 "),r("a",{attrs:{href:"http://127.0.0.1:9527/api/test",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://127.0.0.1:9527/api/test"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("MVC restful 路由 http://127.0.0.1:9527/restful/123")]),e._v(" "),r("li",[e._v("指定方法的 MVC restful 路由 http://127.0.0.1:9527/restful/123/show")]),e._v(" "),r("li",[e._v("注解路由 http://127.0.0.1:9527/api/v1/petLeevelForApi/helloworld")]),e._v(" "),r("li",[e._v("带有绑定的注解路由 http://127.0.0.1:9527/api/v2/withBind/foobar")]),e._v(" "),r("li",[e._v("php leevel link:public "),r("a",{attrs:{href:"http://127.0.0.1:9527/public/css/page.css",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://127.0.0.1:9527/public/css/page.css"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("php leevel link:storage "),r("a",{attrs:{href:"http://127.0.0.1:9527/storage/logo.png",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://127.0.0.1:9527/storage/logo.png"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("php leevel link:apis "),r("a",{attrs:{href:"http://127.0.0.1:9527/apis/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://127.0.0.1:9527/apis/"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("php leevel link:debugbar "),r("a",{attrs:{href:"http://127.0.0.1:9527/debugbar/debugbar.css",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://127.0.0.1:9527/debugbar/debugbar.css"),r("OutboundLink")],1)])]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("QueryPHP 在 composer 安装过程中自动运行了创建软连接的命令将一些非 Web 根目录的站点映射到根目录，\n这样我们可以使用内置的服务来访问这些链接。这些服务包含: 公共资源（public）、上传文件（storage）、\nSwagger Api（apis）、Debugbar 调试（debugbar）。")])]),e._v(" "),r("h2",{attrs:{id:"基础配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基础配置"}},[e._v("#")]),e._v(" 基础配置")]),e._v(" "),r("p",[e._v("QueryPHP 在初始化应用程序会自动帮您创建 "),r("code",[e._v(".env")]),e._v("、"),r("code",[e._v(".env.phpunit")]),e._v(" 和 "),r("code",[e._v("phinx.yml")]),e._v(" 文件。")]),e._v(" "),r("p",[e._v(".env (系统配置文件)\n.env.phpunit (单元测试配置文件)\nphinx.yml (Phinx 数据库迁移命令配置，他会读取 .env 或者 .env.phpunit 中的数据库配置)")]),e._v(" "),r("h3",{attrs:{id:"入口目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#入口目录"}},[e._v("#")]),e._v(" 入口目录")]),e._v(" "),r("p",[e._v("您必须将 Web 站点的根目录指向 "),r("code",[e._v("www")]),e._v(" 目录，其中 "),r("code",[e._v("index.php")]),e._v(" 是整个应用的单一入口文件，例如 Nginx。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("root /data/codes/queryphp/www;\nindex index.html index.php;\n")])])]),r("h3",{attrs:{id:"目录权限"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#目录权限"}},[e._v("#")]),e._v(" 目录权限")]),e._v(" "),r("p",[e._v("系统有几个目录需要配置写入权限 "),r("code",[e._v("storage")]),e._v("、"),r("code",[e._v("bootstrap")]),e._v(" 和 "),r("code",[e._v("runtime")]),e._v(",一个是资源上传目录，例外的是系统运行过程中的缓存。")]),e._v(" "),r("h2",{attrs:{id:"搭建站点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#搭建站点"}},[e._v("#")]),e._v(" 搭建站点")]),e._v(" "),r("p",[e._v("笔者的 QueryPHP 项目采用 VirtualBox + Vagrant 搭建的开发环境，可以运行在各种环境。")]),e._v(" "),r("ul",[r("li",[e._v("Macos High Sierra 10.13.2")]),e._v(" "),r("li",[e._v("Atom with vim plugin、Subtime text3")]),e._v(" "),r("li",[e._v("VirtualBox 5.2.8")]),e._v(" "),r("li",[e._v("Vagrant")]),e._v(" "),r("li",[e._v("ubuntu-16.04-LTS")]),e._v(" "),r("li",[e._v("mysql-5.6.28")]),e._v(" "),r("li",[e._v("nginx-1.6.2")]),e._v(" "),r("li",[e._v("php-5.6.23")]),e._v(" "),r("li",[e._v("php-7.1.6")]),e._v(" "),r("li",[e._v("php-7.2.1")]),e._v(" "),r("li",[e._v("php-7.4.0")]),e._v(" "),r("li",[e._v("redis-2.8.17")])]),e._v(" "),r("p",[e._v("Windows 开发者如果不需要 Swoole 则可以按照其他普通的 PHP 项目来搭建就是了，如果依赖 Swoole 可以采用上面这种虚拟机的方式来搭建环境。")]),e._v(" "),r("h3",{attrs:{id:"nginx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[e._v("#")]),e._v(" Nginx")]),e._v(" "),r("p",[e._v("首先需要在 Ubuntu 虚拟机创建一个站点的配置文件,例如 "),r("code",[e._v("/server/nginx-1.6.2/vhosts/queryphp.conf")]),e._v(":")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("server {\n    add_header HostName php7.2.1-app1;\n    listen 8080;\n    server_name queryphp.cn  *.queryphp.cn;\n    error_log  /var/log/nginx/queryphp.error.log;\n    access_log /var/log/nginx/queryphp.access.log main;\n    root /data/codes/queryphp/www;\n    index  index.html index.php;\n\n    location / {\n       try_files $uri $uri/ /index.php?$query_string;\n    }\n\n    location ~ \\.php$ {\n        fastcgi_split_path_info ^(.+\\.php)(/.+)$;\n        fastcgi_pass 127.0.0.1:9000;\n        fastcgi_index index.php;\n        include fastcgi_params;\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n    }\n\n    location ~ /nginx_status$ {\n        stub_status on;\n        access_log off;\n        allow  all;\n    }\n}\n")])])]),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("笔者因为会在 Mac 中将端口转发到虚拟机中的 8080 端口，您的开发环境直接配置 80 端口即可。")])]),e._v(" "),r("p",[e._v("修改虚拟机 "),r("code",[e._v("/etc/hosts")]),e._v(",添加几个测试域名，后面 "),r("code",[e._v("vip")]),e._v(" 这些主要用于调试路由域名匹配，可以不要 。\nMac 系统的 "),r("code",[e._v("/etc/hosts")]),e._v(" 也需要添加这些如下域名。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("127.0.0.1      queryphp.cn\n127.0.0.1      www.queryphp.cn\n127.0.0.1      test.queryphp.cn\n127.0.0.1      vip.queryphp.cn\n127.0.0.1      x.vip.queryphp.cn\n")])])]),r("p",[e._v("刷新虚拟机 Ubuntu 网络使域名生效")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("/etc/rc.d/init.d/network restart\n")])])]),r("p",[e._v("重启 "),r("code",[e._v("Nginx")])]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("service")]),e._v(" nginx restart\n")])])]),r("p",[e._v("访问地址")]),e._v(" "),r("ul",[r("li",[e._v("首页 "),r("a",{attrs:{href:"http://queryphp.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://queryphp.cn/"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("MVC 路由 "),r("a",{attrs:{href:"http://queryphp.cn/api/test",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://queryphp.cn/api/test"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("MVC restful 路由 http://queryphp.cn/restful/123")]),e._v(" "),r("li",[e._v("指定方法的 MVC restful 路由 http://queryphp.cn/restful/123/show")]),e._v(" "),r("li",[e._v("注解路由 http://queryphp.cn/api/v1/petLeevelForApi/helloworld")]),e._v(" "),r("li",[e._v("带有绑定的注解路由 http://queryphp.cn/api/v2/withBind/foobar")]),e._v(" "),r("li",[e._v("php leevel link:public "),r("a",{attrs:{href:"http://queryphp.cn/public/css/page.css",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://queryphp.cn/public/css/page.css"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("php leevel link:storage "),r("a",{attrs:{href:"http://queryphp.cn/storage/logo.png",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://queryphp.cn/storage/logo.png"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("php leevel link:apis "),r("a",{attrs:{href:"http://queryphp.cn/apis/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://queryphp.cn/apis/"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("php leevel link:debugbar "),r("a",{attrs:{href:"http://queryphp.cn/debugbar/debugbar.css",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://queryphp.cn/debugbar/debugbar.css"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"apache"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#apache"}},[e._v("#")]),e._v(" Apache")]),e._v(" "),r("p",[e._v("Web 根目录已经内置了 "),r("code",[e._v("www/.htaccess")]),e._v(" 文件来为隐藏 index.php,需要启用 mod_rewrite 模块。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("<IfModule mod_rewrite.c>\n    <IfModule mod_negotiation.c>\n        Options -MultiViews -Indexes\n    </IfModule>\n\n    RewriteEngine On\n\n    RewriteCond %{HTTP:Authorization} .\n    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]\n\n    RewriteCond %{REQUEST_FILENAME} !-d\n    RewriteCond %{REQUEST_FILENAME} !-f\n    RewriteRule ^(.*)$ index.php/$1 [QSA,PT,L]\n</IfModule>\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);