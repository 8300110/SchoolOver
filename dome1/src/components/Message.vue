<template>
    <div id="message" class="message">
        <p class="message_top"></p>
        <div class="message_img"> <img src="src/assets/img/01.webp" alt=""> </div>
        <!-- <button>去喝一杯</button> -->
        <a href="http://localhost:8080/#/money/recom" class="drink">去喝一杯</a>
        <p class="gess"><span class="like">猜你喜欢</span> <span class="huan"><img src="src/assets/img/刷新.png" alt="" class="F5"> 换一批</span> </p>
        <div class=" message-box">
        <ul class="message-ul">
            <li class="message_li" v-for="(k,index) in arrList" :key="index">
              <img :src="k.img" alt="" class="message_li_img">
              <p class="message_li_text">{{k.name}}</p>
              <span class="message_li_money">{{k.money}}</span><span class="message_li_moneys">{{k.moneys}}</span>
              <img :src="k.img1" alt="" class="message_li_img1">
            </li>
        </ul>
        <ul class="message-ul" style="display:none">
            <li class="message_li" v-for="(k,index) in arrList1" :key="index">
              <img :src="k.img" alt="" class="message_li_img">
              <p class="message_li_text">{{k.name}}</p>
              <span class="message_li_money">{{k.money}}</span><span class="message_li_moneys">{{k.moneys}}</span>
              <img :src="k.img1" alt="" class="message_li_img1">
            </li>
        </ul>
        <ul class="message-ul" style="display:none">
            <li class="message_li" v-for="(k,index) in arrList2" :key="index">
              <img :src="k.img" alt="" class="message_li_img">
              <p class="message_li_text">{{k.name}}</p>
              <span class="message_li_money">{{k.money}}</span><span class="message_li_moneys">{{k.moneys}}</span>
              <img :src="k.img1" alt="" class="message_li_img1">
            </li>
        </ul>
        <ul class="message-ul" style="display:none">
            <li class="message_li" v-for="(k,index) in arrList3" :key="index">
              <img :src="k.img" alt="" class="message_li_img">
              <p class="message_li_text">{{k.name}}</p>
              <span class="message_li_money">{{k.money}}</span><span class="message_li_moneys">{{k.moneys}}</span>
              <img :src="k.img1" alt="" class="message_li_img1">
            </li>
        </ul>
        </div>
    </div>
</template>
<style scoped>
 @import url("../assets/css/message.css");
</style>
<script>
import "../assets/js/message"
import {Test1} from '../request/api.js'
export default {
    data(){
        return{
            arrList:[],
            arrList1:[],
            arrList2:[],
            arrList3:[]
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
            _this.arrList=res.data.data10
            _this.arrList1=res.data.data11
            _this.arrList2=res.data.data12
            _this.arrList3=res.data.data13
            console.log(res)
        })
       },

   }
}
</script>
