---
title: vue正式环境和测试测试环境的ajax的请求
---
 废话不多说直接上配置
 这个事本地测是的域名	
 {% img [class names] /img/8697066-c059c2d9fd8a8332.png [width] [height] [title text [alt text]] %}
 这是正式的配置
	{% img [class names] /img/8697066-21ae22a4fa300d73.png [width] [height] [title text [alt text]] %}
	
-
  
## 在我们的ajax的封装的位置进行引入就可以了 
	
### 在npm run dev  的时候运行的就是生产环境  npm run build 的正式环境

### 但是在实际的生产axios的是不能进行跨域请求的、这个时候就要进行一些文件的配置
{% img [class names] /img/8697066-f44a450b85969109.png [width] [height] [title text [alt text]] %}

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
