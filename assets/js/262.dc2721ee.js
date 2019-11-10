(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{564:function(e,t,r){"use strict";r.r(t);var a=r(12),n=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("The PHP Framework For Code Poem As Free As Wind")]),e._v(" "),r("p",[e._v("始于二零一零，八年磨一剑")])]),e._v(" "),r("p",[e._v("QueryPHP 是一款现代化的高性能 PHP 渐进式协程框架, 我们还是主要面向传统 PHP-FPM 开发者，以工程师用户体验为历史使命，让每一个 PHP 应用都有一个好框架。")]),e._v(" "),r("p",[e._v("百分之百单元测试覆盖直面 Bug，基于 Zephir 实现框架核心常驻，依托 Swoole 协程提升业务性能，此刻未来逐步渐进。我们的愿景是 USE "),r("span",{staticStyle:{color:"#f80378"}},[e._v("LEEVEL")]),e._v(" WITH "),r("span",{staticStyle:{color:"#008ee6"}},[e._v("SWOOLE")]),e._v(" DO "),r("span",{staticStyle:{color:"#02d629"}},[e._v("BETTER")]),e._v("，让您的业务撑起更多的用户服务。")]),e._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("两年重构，只为更好的自己")]),e._v(" "),r("p",[e._v("QueryPHP 基于一款成立于 2010 年的 PHP 框架 "),r("a",{attrs:{href:"https://raw.githubusercontent.com/hunzhiwange/framework/master/doyouhaobaby-googlecode.jpg/",target:"_blank",rel:"noopener noreferrer"}},[e._v("DoYouHaoBaby"),r("OutboundLink")],1),e._v(" 开发，继承了上一代产品的优秀之处，彻底革新并进行了长达 2 年重构.")]),e._v(" "),r("p",[e._v("在这个基础上，我们引入了 Laravel、Symfony 等框架现代化先进特性，站在巨人的肩膀上保持创新。")])]),e._v(" "),r("h2",{attrs:{id:"它是如何工作的？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#它是如何工作的？","aria-hidden":"true"}},[e._v("#")]),e._v(" 它是如何工作的？")]),e._v(" "),r("p",[e._v("QueryPHP 是一个渐进式 PHP 常驻框架，我们强调的是一个渐进式，它既可以运行在 PHP-FPM 场景，也可以将框架核心编译成 C 扩展，同时还支持在 Swoole 服务中运行。")]),e._v(" "),r("h3",{attrs:{id:"运行在-php-fpm-场景或者-php-内置-webserver"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运行在-php-fpm-场景或者-php-内置-webserver","aria-hidden":"true"}},[e._v("#")]),e._v(" 运行在 PHP-FPM 场景或者 PHP 内置 webserver")]),e._v(" "),r("p",[e._v("事实上，QueryPHP 也是一个普通的 PHP 框架，目前最低版本要求 PHP 7.3.2，我们对环境并没有特别的要求。")]),e._v(" "),r("ul",[r("li",[e._v("PHP ^7.3.2")]),e._v(" "),r("li",[e._v("ext-mbstring "),r("a",{attrs:{href:"https://github.com/hunzhiwange/framework/blob/master/src/Leevel/Support/Str.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("字符处理"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("ext-openssl "),r("a",{attrs:{href:"https://github.com/hunzhiwange/framework/blob/master/src/Leevel/Encryption/Encryption.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("加密组件"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("我们系统依赖的组件可以通过 "),r("a",{attrs:{href:"https://github.com/hunzhiwange/queryphp/blob/master/composer.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("composer.json"),r("OutboundLink")],1),e._v(" 找到，我们提供了大量开箱即用的功能。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("~ $ php leevel server\n# => Now visite http://127.0.0.1:9527/\n")])])]),r("p",[e._v("上面就是运行在 PHP 内置 WebServer 中，也可以用 Nginx 搭建站点。")]),e._v(" "),r("h3",{attrs:{id:"框架编译成-c-扩展"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#框架编译成-c-扩展","aria-hidden":"true"}},[e._v("#")]),e._v(" 框架编译成 C 扩展")]),e._v(" "),r("p",[e._v("我们为了更好的性能，为整个 QueryPHP 的核心开发了一套可选的 C 扩展，它不是必须要安装的。")]),e._v(" "),r("p",[e._v("Leevel 是一个开源 PHP C 扩展开发框架，采用 zephir 编写，是为了解决使用框架带来性能下降的经典矛盾，Leevel 是为了解决 QueryPHP 性能而开发，可以与同版本的 QueryPHP 混合使用，将接管 composer 中的 PHP 版本功能。")]),e._v(" "),r("p",[e._v("它是如何做到接管 composer 中的底层核心的呢。")]),e._v(" "),r("p",[e._v("我们访问一个类, composer 根据 psr4 规则去搜索到我们文件而载入，如下的脚本会被载入。")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/hunzhiwange/framework/blob/master/src/Leevel/Di/Container.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("Leevel/Di/Container.php"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("<?php\n\nuse Leevel\\Di\\Container;\n\n...\n$container = new Container();\n$container->instance('foo', 'bar');\nvar_dump($container->make('foo')); // bar\n...\n")])])]),r("p",[e._v("如果我们存在一个扩展就提供了这样一个类并随着 PHP 常驻，是不是性能不错，实际上是可以，QueryPHP 选择了 zephir 来实现。")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/hunzhiwange/leevel/blob/master/leevel/di/container.zep",target:"_blank",rel:"noopener noreferrer"}},[e._v("leevel/di/container.zep"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("实际上会被编译成 C，被最终被编译成 PHP 扩展。")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/hunzhiwange/leevel/blob/master/ext/leevel/di/container.zep.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("leevel/di/container.zep.c"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("这样子,不需要修改代码直接提升性能。")]),e._v(" "),r("h4",{attrs:{id:"windows-系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows-系统","aria-hidden":"true"}},[e._v("#")]),e._v(" Windows 系统")]),e._v(" "),r("p",[e._v("暂未提供 dll.")]),e._v(" "),r("h4",{attrs:{id:"linux-操作系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#linux-操作系统","aria-hidden":"true"}},[e._v("#")]),e._v(" Linux 操作系统")]),e._v(" "),r("p",[e._v("下载源代码.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("git clone git@github.com:hunzhiwange/leevel.git\ncd ext\n")])])]),r("p",[e._v("编译扩展.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$/path/to/phpize\n$./configure --with-php-config=/path/to/php-config\n$make && make install\n")])])]),r("p",[e._v("将扩展添加到你的 php.ini, 使用 php -m 查看扩展是否被安装.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("extension = leevel.so\n")])])]),r("h3",{attrs:{id:"运行在-swoole-环境中"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运行在-swoole-环境中","aria-hidden":"true"}},[e._v("#")]),e._v(" 运行在 Swoole 环境中")]),e._v(" "),r("p",[e._v("swoole 的问世对于 PHP 后端来说是一种福音，swoole 4.1 已经开始支持原始 pdo,redis 协程，支持 swoole 势在必行。已经做了一些基础工作，对于第一个版本我们要完善单元测试，所以下一个版本主要支持 swoole。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("php leevel swoole:http\n")])])]),r("div",{staticClass:"warning custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("Swoole 部分在第一个版本被撤下来了，后面回归。")])]),e._v(" "),r("h2",{attrs:{id:"特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特性","aria-hidden":"true"}},[e._v("#")]),e._v(" 特性")]),e._v(" "),r("ul",[r("li",[e._v("框架理念 (值得托付的使命感，让每一个 PHP 应用都有一个好框架。)")]),e._v(" "),r("li",[e._v("组件系统 ("),r("a",{attrs:{href:"https://packagist.org/packages/leevel/",target:"_blank",rel:"noopener noreferrer"}},[e._v("框架底层由独立的高内聚低耦合组件构成，可以轻松无侵入接入现有系统。"),r("OutboundLink")],1),e._v(")")]),e._v(" "),r("li",[e._v("路由系统 ("),r("a",{attrs:{href:"https://www.v2ex.com/t/492979#reply3",target:"_blank",rel:"noopener noreferrer"}},[e._v("框架提供 MVC 自动路由并能够智能解析 Restful 请求和基于 OpenApi 3.0 规范的 swagger-php 注解路由，文档路由一步搞定。"),r("OutboundLink")],1),e._v(")")]),e._v(" "),r("li",[e._v("整体解决方案 (框架提供了从缓存、Session、IOC 容器、模板引擎、Ddd ORM 等大量开箱即用的功能，提供了基于 Symfony Console 命令行工具集。)")]),e._v(" "),r("li",[e._v("框架常驻 ("),r("a",{attrs:{href:"https://github.com/hunzhiwange/leevel",target:"_blank",rel:"noopener noreferrer"}},[e._v("Leevel 可选扩展接管底层核心"),r("OutboundLink")],1),e._v(")")]),e._v(" "),r("li",[e._v("业务常驻 (基于 Swoole 4 开发，我们的愿景是少量代码或者无修改，让你的业务撑起更多的用户服务。)")]),e._v(" "),r("li",[e._v("百分之百单元测试覆盖（"),r("a",{attrs:{href:"https://github.com/hunzhiwange/framework/tree/master/tests",target:"_blank",rel:"noopener noreferrer"}},[e._v("单元测试一直是国产 PHP 开源项目的痛"),r("OutboundLink")],1),e._v("）")]),e._v(" "),r("li",[e._v("拜师国外现代化框架 ("),r("a",{attrs:{href:"https://github.com/hunzhiwange/framework/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[e._v("从 Laravel、Symfony 吸收大量特性，也包含其它的框架."),r("OutboundLink")],1),e._v(")")]),e._v(" "),r("li",[e._v("PHP 7 严格模式 （每一个 PHP 脚本都是 strict_types = 1）")]),e._v(" "),r("li",[e._v("PHP 7 类型提示 (尽可能为每一个方法提供确定的参数类型和返回值类型）")]),e._v(" "),r("li",[e._v("依赖注入 （完整实现，关键 mvc、命令行脚本、事件监听器全部接入 IOC）")]),e._v(" "),r("li",[e._v("领域驱动设计 （在妖怪的 QeePHP 基础上保持创新，提供了 UnitOfWork[事务工作单元]、Repository[仓储]、Specification[查询规约]，Entity getter setter[领域实体或叫模型] ）")]),e._v(" "),r("li",[e._v("more...")])]),e._v(" "),r("h2",{attrs:{id:"todo"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#todo","aria-hidden":"true"}},[e._v("#")]),e._v(" Todo")]),e._v(" "),r("p",[e._v("QueryPHP 仍然处于开发中，这里有一些目前还不支持、但已经在计划中的特性：")]),e._v(" "),r("ul",[r("li",[e._v("基于 Vue + IView 通用权限系统")]),e._v(" "),r("li",[e._v("完善 Swoole")]),e._v(" "),r("li",[e._v("开发文档")])]),e._v(" "),r("p",[e._v("我们欢迎你为 QueryPHP 的开发作出贡献。")]),e._v(" "),r("h2",{attrs:{id:"为什么不是"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么不是","aria-hidden":"true"}},[e._v("#")]),e._v(" 为什么不是...?")]),e._v(" "),r("h3",{attrs:{id:"laravel"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#laravel","aria-hidden":"true"}},[e._v("#")]),e._v(" Laravel")]),e._v(" "),r("p",[e._v("Laravel 是一个非常优秀的框架，拥有非常庞大的社区，实际上 QueryPHP 大量吸收了 Laravel 的一些优秀特性。一直以来 Laravel 性能确实为人诟病，QueryPHP 开发了一个 Leevel 来解决这一部分问题，用 Laravel 没错，QueryPHP 只是其中一个选择。")]),e._v(" "),r("h3",{attrs:{id:"symfony"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#symfony","aria-hidden":"true"}},[e._v("#")]),e._v(" Symfony")]),e._v(" "),r("p",[e._v("Symfony 实际上是 PHP 社区事实标准，QueryPHP 底层大量使用 Symfony 的基础组件例如 console、finder 等，Symfony 可以与 QueryPHP 更好地结合。")]),e._v(" "),r("h3",{attrs:{id:"thinkphp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#thinkphp","aria-hidden":"true"}},[e._v("#")]),e._v(" ThinkPHP")]),e._v(" "),r("p",[e._v("ThinkPHP 是我最佩服的一个国产 PHP 框架，10 多年来还在持续不断的革新，国内很少有生命力这么久的框架。我在 2010 年就通读了 ThinkPHP 2.0 代码，在后面工作中主要也是使用 ThinkPHP 3 系列，有苦也有乐。加油！")]),e._v(" "),r("h3",{attrs:{id:"phalcon-yaf"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#phalcon-yaf","aria-hidden":"true"}},[e._v("#")]),e._v(" Phalcon & Yaf")]),e._v(" "),r("p",[e._v("Phalcon 与 Yaf 世界上最快的 PHP 框架，Yaf 很轻，Phalcon 很重，它们都是世界级的框架。")]),e._v(" "),r("p",[e._v("QueryPHP 选择一部分由 PHP 编写，一部分编译成扩选扩展 Leevel。")]),e._v(" "),r("p",[e._v("Leevel 位于 Yaf 和 Phalcon 轻重之间，是一种可选的方案。")])])},[],!1,null,null,null);t.default=n.exports}}]);