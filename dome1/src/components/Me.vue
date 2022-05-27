<template>
  <div id="me" class="me">
    <div class="me_top">
      <p class="me_p"></p>
      <p class="me_p1"></p>
      <p class="me_p2"></p>
      <div class="me_box">
        <p class="pic"><img src="src/assets/img/03.webp" alt="" /></p>
        <span class="me_box_text">
          <router-link to="./Login.vue" class="router">
            {{name}}
          </router-link>
          </span>
      </div>
      <p class="news"></p>
    </div>
    <div class="me-VIP">
      <p class="VIP-text">暖咖卡</p>
      <p class="VIP-texts">包月更划算,最高可省121元</p>
      <button>立即购买</button>
    </div>
    <div class="mydingdan">
      <ul>
        <li>
          <img src="src/assets/img/订单.png" alt="" /> <br />
          我的订单
        </li>
        <li>
          <img src="src/assets/img/qianbao.png" alt="" /> <br />
          咖啡钱包
        </li>
        <li>
          <img src="src/assets/img/优惠券.png" alt="" /> <br />
          优惠券
        </li>
        <li>
          <img src="src/assets/img/shinshop 礼品卡.png" alt="" /> <br />
          礼品卡
        </li>
        <li>
          <img src="src/assets/img/招商加盟.png" alt="" /> <br />
          招商加盟
        </li>
        <li>
          <img src="src/assets/img/账户余额.png" alt="" /> <br />
          账户余额
        </li>
        <li>
          <img src="src/assets/img/发票管理.png" alt="" /> <br />
          发票管理
        </li>
        <li>
          <img src="src/assets/img/兑换优惠券.png" alt="" /> <br />
          兑换优惠
        </li>
        <li>
          <img src="src/assets/img/礼品盒 - line.png" alt="" /> <br />
          优惠联盟
        </li>
        <li>
          <img src="src/assets/img/me_help.png" alt="" /> <br />
          帮助反馈
        </li>
      </ul>
      <div class="my_arrow"><img src="src/assets/img/箭头.png" alt="" /></div>
    </div>
    <!-- 我的制定 -->
    <div class="formulate">
      <div class="formulate_top">
        <h5>我的制定</h5>
        <!-- <span class="formulate_span">更多定制</span> -->
        <a
          href="http://localhost:8080/#/money/classic/xiading"
          class="formulate_span"
          >更多限定</a
        >
      </div>
      <ul class="formulate_ul">
        <li class="formulate_li" v-for="(k, index) in arrList" :key="index">
          <img :src="k.img" alt="" class="formulate_li_img" />
          <span class="formulate_li_title">{{ k.title }}</span>
          <p class="formulate_li_name">{{ k.name }}</p>
          <p class="formulate_li_text">{{ k.text }}</p>
        </li>
      </ul>
    </div>
    <div class="guanggao">
      <img src="src/assets/img/001.png" alt="" />
    </div>
    <div class="guanggao1">
      <img src="src/assets/img/002.png" alt="" />
    </div>
    <div class="me_nav">
      <div class="me_navshopping">
        <router-link to="/Me/Afternoon" class="router-links"
          ><span>下午茶</span></router-link
        >
        <router-link to="/Me/Livingfurniture" class="router-links"
          ><span>生活家居</span></router-link
        >
        <router-link to="/Me/Digital" class="router-links"
          ><span>数码电器</span></router-link
        >
        <router-link to="/Me/Fashion" class="router-links"
          ><span>潮玩饰品</span></router-link
        >
        <router-link to="/Mounth" class="router-link1s"
          ><span>更多</span> <img src="src/assets/img/更多1.png" alt="" />
        </router-link>
      </div>
      <div class="me_nav1">
        <router-view></router-view>
      </div>
    </div>
    <div class="me_tops"></div>
  </div>
</template>

<style scoped>
@import url("../assets/css/me.css");
</style>

<script scoped>
import "../assets/js/me";
import { Test1 } from "../request/api.js";
export default {
  data() {
    return {
      arrList: [],
      name:'admin'
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      var _this = this;
      Test1().then(function(res) {
        // res就是请求成功之后的数据
        _this.arrList = res.data.data26;
        console.log(res);
      });
    }
  }
};
</script>
