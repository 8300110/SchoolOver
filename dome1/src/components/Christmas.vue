<template>
  <div class="christmas" id="christmas">
    <ul class="christmas1">
      <li
        class="list1"
        v-for="(k, index) in arrList"
        @click="btn(k.id)"
        :key="index"
      >
        <img :src="k.img" alt="" class="pic" />
        <div class="box1">
          <p class="name">{{ k.name }}</p>
          <br />
          <p class="biaoqian">{{ k.title }}</p>
          <span class="money">{{ k.money }}</span
          ><span class="moneys">{{ k.moneys }}</span>
          <img :src="k.img1" alt="" class="jia" />
        </div>
      </li>
    </ul>
    <div class="top"></div>
  </div>
</template>
<style>
@import url("../assets/css/christmas.css");
</style>
<script>
import "../assets/js/money";
import { Test1 } from "../request/api.js";
export default {
  data() {
    return {
      arrList: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    btn(id) {
      this.$router.push({
        path: "/Christma",
        query: { Christma: id }
      });
    },

    getData() {
      var _this = this;
      Test1().then(function(res) {
        // res就是请求成功之后的数据
        _this.arrList = res.data.data22;
        console.log(res);
      });
    }
  }
};
</script>
