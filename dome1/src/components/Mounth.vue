<template>
    <div id="mounth" class="mounth">
       <div class="div">
            <div class="mounths">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="src/assets/img/30.jpeg"></div>
                        <div class="swiper-slide"><img src="src/assets/img/31.jpeg"></div>
                        <div class="swiper-slide"><img src="src/assets/img/32.jpeg"></div>
                        <div class="swiper-slide"><img src="src/assets/img/33.jpeg"></div>
                        <div class="swiper-slide"><img src="src/assets/img/34.jpeg"></div>
                        <div class="swiper-slide"><img src="src/assets/img/35.jpeg"></div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </div>
            <ul class="biaoming">
                <li> <img src="src/assets/img/包邮.png" alt=""> 单件包邮</li>
                <li> <img src="src/assets/img/品质保障.png" alt="">品质保障</li>
                <li> <img src="src/assets/img/7天无理由退货.png" alt="">7天无忧退换货</li>
            </ul>
            <div class="bac">
                 <img src="src/assets/img/501.png" alt="">
            </div>
            <!-- 新品首发 -->
        <div class="cotton">
            <ul class="cotton_ul">
                <li class="list"  v-for="(k,index) in arrList" :key="index">
                    <img :src="k.img" alt="" class="pic">
                    <br>
                    <span class="text">{{k.text}}</span>
                </li>
             </ul>
             <span class="text1s">new</span>
             <span class="text2s">8折</span>
        </div>
        <!-- 低至29.9 -->
        <div class="cotton2">
            <ul>
                <li class="cotton2_list">
                    <span class="top">低至29.9元</span><span class="tops">随时喝瑞辛</span>
                    <div> <img src="src/assets/img/509.webp" alt=""> </div>
                    <div> <img src="src/assets/img/510.webp" alt=""></div>
                </li>
                <li class="cotton2_list">
                    <span class="top">保温杯上新</span><span class="tops">全场九折</span>
                    <div> <img src="src/assets/img/509.webp" alt=""> </div>
                    <div> <img src="src/assets/img/510.webp" alt=""></div>
                </li>
                <li class="cotton2_list">
                    <span class="top">咖啡伙伴</span><span class="tops">低至24.9元</span>
                    <div> <img src="src/assets/img/509.webp" alt=""> </div>
                    <div> <img src="src/assets/img/510.webp" alt=""></div>
                </li>
                <li class="cotton2_list">
                    <span class="top">咖啡器具</span><span class="tops">全场77折</span>
                    <div> <img src="src/assets/img/509.webp" alt=""> </div>
                    <div> <img src="src/assets/img/510.webp" alt=""></div>
                </li>
            </ul>
        </div>
        <!-- 蒙卡潮品 -->
        <div class="cotton3">
            <span class="text">LINK FRIENDS萌咖潮品</span><br>
            <span class="text3">感恩季福利来了</span><span class="text4">全场八折</span>
            <span class="text5">更多优惠Go</span>
            <ul class="cotton3_ul">
                <li>
                    <img src="src/assets/img/11.png">
                    <span class="li_text">小汽车马克杯 LINE FRIENDS联名系列</span>
                    <span class="num">￥139</span><span class="nums">￥179</span>
                </li>
                <li>
                    <img src="src/assets/img/12.png">
                    <span class="li_text">樱花吸管随行杯 LINE FRIENDS联名系列</span>
                    <span class="num">￥139</span><span class="nums">￥179</span>
                </li>
                <li>
                    <img src="src/assets/img/13.png">
                    <span class="li_text">SALLY破壳马克杯 LINE FRIENDS联名系列</span>
                    <span class="num">￥139</span><span class="nums">￥179</span>
                </li>
               
            </ul>
        </div>
        <ul class="commodity">
            <li class="commodity-li"  v-for="(k,index) in arrList1" :key="index">
               <img :src="k.img" alt="" class="commodity-img">
               <div class="commodity-box">
                   <span class="commodity-name">{{k.name}}</span>
                   <br>
                   <span class="commodity-money">{{k.money}}</span><span class="commodity-moneys">{{k.moneys}}</span>
                   <p class="commodity-title">{{k.title}}</p>
                   <p class="commodity-shou">{{k.shou}}</p>
                  <img :src="k.img1" alt="" class="commodity-img1">
               </div>
            </li>
        </ul>
        <div class="top1s"></div>
    </div>
</template>
<style>
@import url("../assets/css/mounth.css");
@import url("../assets/css/swiper.min.css");
</style>
<script>
import "../assets/js/mounth"
import {Test1} from '../request/api.js'
export default {
    data(){
        return{
            arrList:[],
            arrList1:[]
        }
    },
     mounted(){
        // this.getData() 
        },
      methods:{
       getData(){
        var _this=this;
        Test1().then(function(res){
            // res就是请求成功之后的数据
            _this.arrList=res.data.data24
             _this.arrList1=res.data.data25
            console.log(res)
        })
       },
       
   },
   
    mounted() {
         this.getData() 
        new Swiper(".swiper-container", {
        pagination: ".swiper-pagination",
        slidesPerView: "auto",
        paginationClickable: true,
        spaceBetween: 10,
        autoplay: 2500,
        });
    }
}

  

</script>
