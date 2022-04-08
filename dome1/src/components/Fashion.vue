<template>
  <div class="fashion" id="fashion">
    <ul class="fashions">
      <li
        class="list"
        v-for="(k, index) in arrList"
        @click="Btn(k.id)"
        :key="index"
      >
        <img :src="k.img" alt="" class="pic" />
        <div class="box1">
          <p class="name">{{ k.name }}</p>
          <span class="money">{{ k.money }}</span
          ><span class="moneys">{{ k.moneys }}</span>
          <p class="title">{{ k.title }}</p>
          <span class="shou">{{ k.shou }}</span
          ><img :src="k.img1" alt="" class="pic1" />
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped>
@import url("../assets/css/fashion.css");
</style>
<script>
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
    Btn(id) {
      this.$router.push({
        path: "/Instant",
        query: { Instant: id }
      });
    },
    getData() {
      var _this = this;
      Test1().then(function(res) {
        // res就是请求成功之后的数据
        _this.arrList = res.data.data5;
        console.log(res);
      });
    }
  }
};
</script>
