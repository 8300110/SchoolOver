// 将request.js整体导入
import request from "./request"


// 按需导出每个请求，也就是按需导出每个api


// 本地数据
export const Test1 = (params) => request.get('../data/data1.data',{params});

// import {login} from '@/api/Login.js'
// export const loginAPI = login