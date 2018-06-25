/**
 * Created by Administrator on 2018/5/30.
 */
/**第一步
 * 配置编译环境和线上环境之间的切换
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */
import Vue from 'vue';
import axios from 'axios';
import Qs from 'qs';
import { Indicator } from 'mint-ui';
let Host = '';
let routerMode = 'hash';
let imgBaseUrl;
let isEmpty;
isEmpty = function(value, trim) {
    return value === undefined || value === null || value.length === 0 || (trim && $.trim(value) === '');
};
axios.defaults.timeout = 5000;
console.log()

/*var root = process.env.API_ROOT*/

/*console.log(root)*/
if(process.env.NODE_ENV == 'development') {
    Host = ''; //测试环境 host
    imgBaseUrl = 'http://192.168.0.144:7001/admin//';  //如果图片需要放到第三方平台可以更改网络路径

} else if(process.env.NODE_ENV == 'production') {
     Host = 'http://xxx.com';   //生产环境 host
    //imgBaseUrl = 'http://cangdu.org:8001/img/';  //如果图片需要放到第三方平台可以更改网络路径
}

axios.interceptors.request.use(function(config) {
  //在发送请求之前做一些事情
    Indicator.open();
  return config;
}, function(error) {
  // 请求错误做一些事情
  return Promise.reject(error);
});

axios.interceptors.response.use(function(response) {
  //对响应数据做一些处理
  Indicator.close();
  return response;
}, function(error) {
  // 对响应失败做一些处理
  return Promise.reject(error);
});
axios.defaults.timeout = 5000;
/*
* par={
*   url:"",
*   postData:'"
*   dataType:true or false
*   data:''.
* }
*
*
* */
export {imgBaseUrl

}
export function myAjaxRequest({imgPath='../images', appPath = "",url,dataType=true}={}){
  if(dataType=false ){postData=Qs.stringify(postData)}//是用来判断是不是传值的方式的
  return new Promise((resolve, reject) => {
    axios.post(url, postData, {
    headers: {//在默认是的情况下使用的是以json的字符串的是形式传过去的于传统的ajax的传值方式不同，所以我们要在这里从新设置请求header
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
      .then(response => {
        //是请求成功的数据处理，这个可以根据不通的业务需求进行调整
          let data=response.data
          if (data.result=='success'){

               resolve(data);
            /* onSuccessFunction(data.data);*/

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
              resolve(data);
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
