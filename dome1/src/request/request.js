// 这份文件就是用来做拦截的
import axios from "axios"
// import { config } from "_vue@2.6.14@vue/types/umd"


// 创建一个单例（实例）
const instance = axios.create({
    // 设置基本路径---就是统一的一部分路径
    // baseURL:'http://kumanxuan1.f3322.net:8001',
    // 本地数据
    baseURL:"../src/data",
    // 超时的时间
    timeout:4000
})


// 拦截器-1.请求拦截
instance.interceptors.request.use(config=>{
    // 部分接口需要拿到token
    // 当发送请求时可以去本地查看历史记录
    // 判断有这参数，返回即可，没有则直接返回成功状态
    let token = localStorage.getItem("token");
    if(token){
        config.headers = {
            "aa-token":token
        }
    }
    // 如果没有其他设置就直接返回请求成功的结果即可
    return config;
},err=>{
    // 请求失败后返回失败的结果
    return Promise.reject(err)
});


// 拦截器 - 2.响应拦截
instance.interceptors.response.use(res=>{
    return res;
},err=>{
    return Promise.reject(err)
});


// 整体导出
export default instance;