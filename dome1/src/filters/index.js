/* 过滤器 */
import Vue from 'vue'


export default function(){
    Vue.filter("times",function(ov){
        const oDate=new Date(ov)
        const oYear=oDate.getFullYear()
        const oMonth=(oDate.getMonth()+1+"").padStart(2,"0")
        const oDat=(oDate.getDate()+"").padStart(2,"0")
        const oHours=(oDate.getHours()+"").padStart(2,"0")
        const oMinutes=(oDate.getMinutes()+"").padStart(2,"0")
        const oSeconds=(oDate.getSeconds()+"").padStart(2,"0")
        return `${oYear}年${oMonth} 月 ${oDat}日 ${oHours}:${oMinutes}:${oSeconds}`
    })
    // Vue.filter("monet",)
}
