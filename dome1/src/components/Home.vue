<template>
    <div id="home" class="home">
        <div class="homes">
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
        <div class="scanning">
            <router-link to="/Square">
                <img src="src/assets/img/扫描.png" alt="">
            </router-link>
            
        </div>
        <div class="navs">
           <a href="http://localhost:8080/#/money">
                <div class="nav_left">
                    <header>现在下单</header><br>
                    <span>大师咖啡 / 厚乳拿铁 / 小鹿茶</span>
                    <img src="src/assets/img/9.gif" alt="">
                </div>
            </a>
            <div class="nav_right">
                <div class="right_head">
                    <div class="head_left">
                        <header>领券中心</header>
                        <span>周围领券 福利多多</span>
                    </div>
                </div>
                 <div class="right_left">
                     <h4>瑞幸咖啡</h4>
                     <p>狂欢双11</p>
                    </div>
                    <div class="right_right">
                        <h4>冲二赠三</h4>
                     <p>仅瑞即购</p>
                    </div>
            </div>
            <ul class="activity">
                <li class="lis"><header>邀请有礼</header> <span>立得20元</span> </li>
                <li class="lis1"><header>每周有礼</header> <span>关注微信</span></li>
                <li class="lis2"><header>超级权益</header> <span>福利兑换</span></li>
                <li class="lis3"><header>送礼品卡</header> <span>传情达意</span></li>
            </ul>
             <div class="swiper-container1">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="src/assets/img/g.jpeg"></div>
                    <div class="swiper-slide"><img src="src/assets/img/h.gif"></div> 
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination1"></div>
            </div>
            <!-- 特惠专区 -->
            <div class="preferential">
                <div class="pre_header">
                    <header>特惠专区 | </header><span class="text"> <span> 限购1杯</span> <span class="time">{{Date.now() | times()}}</span> </span>
                <i class="more"> <img src="src/assets/img/更多.png" alt=""></i>
                </div>
                <ul class="ullist">
                    <li class="list" v-for="(k,index) in arrList" :key="index" >
                        <img :src="k.img" class="imgs">
                        <div class="bodys">
                            <p class="name">{{k.name}}</p>
                            <span class="money">{{k.money}}</span><span class="moneys">{{k.moneys}}</span>
                            <img :src="k.img1" alt="" class="title">
                            <p class="label">{{k.label}}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 活动参与 -->
             <div class="swiper-container2">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="src/assets/img/a.jpeg"></div>
                    <div class="swiper-slide"><img src="src/assets/img/b.jpeg"></div> 
                    <div class="swiper-slide"><img src="src/assets/img/c.jpeg"></div>
                    <div class="swiper-slide"><img src="src/assets/img/d.jpeg"></div> 
                    <div class="swiper-slide"><img src="src/assets/img/e.jpeg"></div>
                    <div class="swiper-slide"><img src="src/assets/img/f.jpeg"></div> 
                </div>
               
            </div>
                <!-- 商品推荐 -->
            <div class="recommend">
                <div class="navshopping">
                    <router-link to="/Home/Chaopin" class="router-links"><span>潮品双11</span></router-link>
                    <router-link to="/Home/Yanzhi"  class="router-links"><span>颜值水杯</span></router-link>
                    <router-link to="/Home/Jaju"  class="router-links"><span>家居日用</span></router-link>
                    <router-link to="/Home/Chongtiao"  class="router-links"><span>冲调零食</span></router-link>
                    <router-link to="/Mounth"  class="router-link1s"><span>更多</span> <img src="src/assets/img/更多1.png" alt=""> </router-link>
                </div>
                <div class="navshopping1">
                <router-view></router-view>
                </div>
            </div>
        </div>
        
       
        

    </div>
</template>


<script scoped>
import "../assets/js/home.js"
import {Test1} from '../request/api.js'
 import "../assets/js/swiper.min.js";
export default {
    data(){
        return{
            arrList:[]
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
            _this.arrList=res.data.data1
            // console.log(res)
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
     new Swiper(".swiper-container1", {
      pagination: ".swiper-pagination",
      slidesPerView: "auto",
      paginationClickable: true,
      spaceBetween: 25,
       autoplay: 3000,
    });
    new Swiper(".swiper-container2", {
      pagination: ".swiper-pagination",
      slidesPerView: "auto",
      paginationClickable: true,
      spaceBetween: 5,
     
    });
  },
};
</script>

<style>
@import url("../assets/css/swiper.min.css");
@import url("../assets/css/home.css");


</style>