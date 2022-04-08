<template>
  <div>
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="(k, index) in arrList" :key="index">
        <!-- <h3>{{ item }}</h3> -->
        <img :src="k.img" alt="" class="pic" />
      </el-carousel-item>
    </el-carousel>
    <h3 class="money">{{ money }}</h3>
    <el-collapse v-model="Instant" @change="handleChange">
      <el-collapse-item
        title="日常的咖啡:黑咖啡、速溶咖啡、拿铁、美式、摩卡"
        name="1"
      >
        <div class="text">
          咖啡是用经过烘焙磨粉的咖啡豆制作出来的饮料，是世界三大饮料之一，与可可、茶同为流行于世界的主要饮品。日常饮用的咖啡是用咖啡豆配合各种不同的烹煮器具制作出来的。
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-button
      type="success"
      style="margin-left: 16px;"
      class="btn"
      @change="Instant"
      @click="open"
    >
      点击购买
    </el-button>
    <el-input-number
      v-model="num"
      :change="handleChange"
      :min="1"
      :max="10"
      label="描述文字"
      class="input"
    ></el-input-number>
    <span class="price">单价为：{{ mon * num }}￥</span>
  </div>
</template>
<style scoped>
@import url("../assets/css/christma.css");
</style>
<script>
import "../assets/js/money";
import { Test1 } from "../request/api.js";
export default {
  data() {
    return {
      arrList: [],
      money: "单价为：￥99",
      activeNames: ["1"],
      mon: 99,
      num: 1,
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
   open() {
        this.$alert('确定购买么', '即溶咖啡', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: '信息',
            message: '支付成功'
            });
          }
        });
      },

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
