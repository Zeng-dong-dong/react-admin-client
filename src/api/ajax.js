/**
 * 能发送 ajax 请求的函数模块
 *包装 axios
 *函数的返回值是 promise 对象
 *axios.get()/post() 返回的就是 promise 对象
 *返回自己创建的 promise 对象 :
 *统一处理请求异常
 *异步返回结果数据 , 而不是包含结果数据的 response
 */
import axios from 'axios'

export default function ajax(url, data = {},type = 'GET') {
    if (type === 'GET'){    //发送get请求
        return axios.get(url,{  //配置对象
            params: data    //指定请求参数
        })
    }else {     //发送post请求
        return axios.post(url,data)
    }
}
