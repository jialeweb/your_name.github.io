---
title: vue脚手架的使用
---
 在这里一些关于node的安装就不做过多的介绍了，不会就上 [node](http://nodejs.cn/) 的官网上瞅瞅，自我领略其中的奥秘。
	1.vue-cli的安装
	   如果你安装了国内镜像 cnpm install -g vue-cli 来安装在最新的 vue 的项目中都带有webpack的插进，所以就不不用按装webpack 安装完成后可一用vue-V来查看就会有版本号
	2.生成的项目
		首先需要在命令行中进入到项目目录，然后输入：
		vue init webpack Vue-Project 然后就就按照下面的操做就进行确认生成项目就ok了	
		{% codeblock Array.map %}
			值得注意的是一般情况下吧使用的eslint规范，给关掉，不然就报一下莫名的错误！
		{% endcodeblock %}	
		{% img [class names] /img/1059788-20170106133950378-145408144.png [width] [height] [title text [alt text]] %}
		等安装完成过后输
	3.cnpm install 安装文件依赖
	4.npm run dev  启动项目
	5.npm run build 打包上线
	6.这里简单的说一下如果你想直接访问你打包好的页面，就需要改变一下配置文件 config>index.js
		{% img [class names] /img/1059788-20170106135204409-1735535107.png [width] [height] [title text [alt text]] %}
	

-
  
##Quick 安装

### Create a new post

``` bash
$ hexo new "My New Post"
```

More info: [Writing](https://hexo.io/docs/writing.html)

### Run server

``` bash
$ hexo server
```

More info: [Server](https://hexo.io/docs/server.html)

### Generate static files

``` bash
$ hexo generate
```

More info: [Generating](https://hexo.io/docs/generating.html)

### Deploy to remote sites

``` bash
$ hexo deploy
```

More info: [Deployment](https://hexo.io/docs/deployment.html)
