<template>
    <div class="nuanka">
        秋冬暖咖
        <ul class="zaocan1">
            <li class="list1"  v-for="(k,index) in arrList" :key="index">
                <img :src="k.img" alt="" class="pic">
                <div class="box1">
                <p class="name">{{k.name}}</p><br>
                <p class="biaoqian">{{k.title}}</p>
                <span class="money">{{k.money}}</span><span class="moneys">{{k.moneys}}</span>
                <img :src="k.img1" alt="" class="jia">
                </div>
            </li>
        </ul>
    </div>
</template>
<style>
@import url("../assets/css/sirong.css");
</style>
<script>
import {Test1} from '../request/api.js'
export default {
    data(){
        return{
            arrList:[]
        }
    },
     mounted(){
        this.getData() 
        },
      methods:{
       getData(){
        var _this=this;
        Test1().then(function(res){
            // res就是请求成功之后的数据
            _this.arrList=res.data.data8
            console.log(res)
        })
       },
       
   }
}
</script>