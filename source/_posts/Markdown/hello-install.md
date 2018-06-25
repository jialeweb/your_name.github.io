---
title: vue一些简单的依赖插件
---
 在这里一就是一下简单的和必要的依赖
	1 安装scss的依赖
		{% codeblock Array.map %}
			 npm install node-sass sass-loader -D
			 
		{% endcodeblock %}
			需要在 webpack.base.conf.js修改配置
				  module: {
					{  //手动添加这一条，相当于是编译识别sass
						test: /\.scss$/,
						loaders: ["style", "css", "sass"]
						}
					}			 
		在vue的组件中调用的时候要声明scss的配置
		{% codeblock Array.map %}
			 <style scoped lang="scss">
					</style> 
		{% endcodeblock %}
				
		
		
-
  
##	2 安装axios				

### axios的安装

``` bash
	npm install axios
```
###vue-cli中的一些简单的应用，在main.js中引入axios

``` bash
	import Vue from 'vue'
	import axios from 'axios'
	Vue.prototype.$ajax = axios
	//在组件中就可以使用，
	methods: {
	  submitForm () {
		this.$ajax({
		  method: 'post',
		  url: '/user',
		  data: {
			name: 'wise',
			info: 'wrong'
		  }
	   })
	}
```
这要是不明来:[这里](https://www.cnblogs.com/wisewrong/p/6402183.html)看看

### 然而这并不是我们真正想要得 一般在开发中我们都会对ajax的请求进行封装

``` bash
import axios from 'axios';
import Qs from 'qs';
axios.interceptors.request.use(function(config) {
    Indicator.open(); //在发送请求之前做一些事情
  return config;
}, function(error) {
	return Promise.reject(error); // 请求错误做一些事情
});

axios.interceptors.response.use(function(response) {
	 Indicator.close();					//对响应数据做一些处理
	return response;
}, function(error) {
  return Promise.reject(error); // 对响应失败做一些处理
});
axios.defaults.timeout = 5000;//表示相应的时间
export function myAjaxRequest({imgPath='../images', appPath = "",url,dataType=true}={}){
  if(dataType=false ){postData=Qs.stringify(postData)}//是用来判断是不是传值的方式的
  return new Promise((resolve, reject) => {
    axios.post(url, postData, {
    headers: {//在默认是的情况下使用的是以json的字符串的是形式传过去的于传统的ajax的传值方式不同，所以我们要在这里从新设置请求header
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
      .then(response => {								
          let data=response.data //是请求成功的数据处理，这个可以根据不通的业务需求进行调整
          if (data.result=='success'){
               resolve(data);//正确的数据返回
          }else if (data.result=='error'||data.result=='fail'){
                 alert(data.msg);
          }else if(data.result == "loginAjax"){
            showLogin(imgPath,appPath);
          }else if (!isEmpty(data.state) && data.state==data.login){
            if(null!=loginLayerIndex)return;
            console.log(url);

          }else if(data.reslutl == "noprivilege"){
            alert("您无此权限操作该功能模块!若要开通，请联系管理员。");
          }else if(data.result == "illegalPath"){
            alert("您访问的路径为非法路径，请检查！");
          }else {
              resolve(data);//正确的数据返回
          }
      }, err => {
        //这里就是请求错误时的错误提示
        if (err.textStatus=='timeout'){
          alert("连接超时，请检查网络");
        }else if (err.textStatus=='error'){
          //alert("请求错误"+errorThrown);
        }else if (err.textStatus=='abort'){
          //alert("请求中止");
        }else{
             alert(err.textStatus+",HTTP error occurs"+err.errorThrown);
         }

      })
  })
}
//在mian.js里面引入
import {myAjaxRequest} from './api/ajax'
ue.prototype.$http = myAjaxRequest  //就此我们在的所有配置都已完成
//在组件中的使用
methods:{
 loginto:function(){
                 var that=this
                 this.par.postData.loginNo=this.phone
                 this.par.postData.password=md5(this.password).toUpperCase()
                  this.$http(this.par).then(res=>{
                       console.log(res)
                      this.$router.push('/home')
               })
          }
}
```

下载瞅瞅: [来啊](/js/ajax.js)

### 3.引入静态的文件

``` bash
		//vue的轮播图 npm install vue-awesome-swiper --save 
		查看的地址: [gogo](https://www.jianshu.com/p/fece694a6959)	
			npm install vue-verify-plugin -S
		查看的地址: [gogo](https://www.jianshu.com/p/aba3f4dc5758)
				
```
### vue安装jq的方法
``` bash
	npm install jquery --save-dev 
在build/webpack.base.conf.js中添加如下内容：	
var webpack = require('webpack')
plugins: [
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  })
],
import $ from 'jquery'
```
查看的地址: [gogo](https://www.cnblogs.com/hedeyong/p/7864842.html)
###目前所想到的就这么多日后想到的在添加 

More info: [Deployment](https://hexo.io/docs/deployment.html)
