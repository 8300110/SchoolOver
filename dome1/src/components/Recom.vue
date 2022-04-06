<template>
  <div class="recom">
    <ul class="recom1">
      
        <li
          class="list1"
          v-for="(k, index) in arrList"
          @click="Btn(k.id)"
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
<style scoped>
@import url("../assets/css/recom.css");
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
        _this.arrList = res.data.data23;
        let i = res.data.data23;
        console.log(res.data.data23[0].id);
      });
    }
  }
};
</script>
