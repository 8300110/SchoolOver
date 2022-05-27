<style scoped>
@import url("../assets/css/Instant.css");
</style>
<template onChange="">
  <div id="el-carousel">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="(k, index) in arrList" :key="index">
        <!-- <h3>{{ item }}</h3> -->
        <img :src="k.img" alt="" class="pic" />
      </el-carousel-item>
    </el-carousel>
    <div id="el-carousel2">
      <el-collapse v-model="Instant" @change="handleChange">
        <el-collapse-item
          title="日常的咖啡:黑咖啡、速溶咖啡、拿铁、美式、摩卡"
          name="1"
        >
          <div class="text">
            咖啡是用经过烘焙磨粉的咖啡豆制作出来的饮料，是世界三大饮料之一，与可可、茶同为流行于世界的主要饮品。日常饮用的咖啡是用咖啡豆配合各种不同的烹煮器具制作出来的。
          </div>
        </el-collapse-item>
        <el-collapse-item title="咖啡的起源地" name="2">
          <div class="text">
            咖啡的故乡是非洲。咖啡是世界三大饮料之一，其与可可、茶同为流行于世界的主要饮品。咖啡是用经过烘焙的咖啡豆制作出来的饮料，孕育咖啡豆的咖啡树原产于非洲埃塞俄比亚西南部的高原地区。据说一千多年以前一位牧羊人发现羊吃了一种植物后，变得非常兴奋活泼，进而发现了咖啡。
          </div>
        </el-collapse-item>
        <el-collapse-item title="咖啡的受欢迎的原因" name="3">
          <div class="text">
            1.为了一份仪式感:随着十几年前欧美文化的大肆渲染，很多有地位有钱的人都会在工作休闲的时候喝上一杯咖啡，尽管这东西很苦，但那时就是一种地位的象征。而到了现在，咖啡已经变成平民之间的饮品，很多上班族不管每天工作有多忙碌，下班回到家之后，都会自己做一杯咖啡，一边喝咖啡一边享受属于自己的时光，无论是一边喝咖啡一边看看书或者一杯喝咖啡一边听听音乐，这都是为了享受那份仪式感，让自己疲惫的心情得到放松
          </div>
          <div class="text">
            2.提神醒脑:现在随着工作压力的不断的增大，很多人的睡眠质量都不是很好，再加上经常要加班，所以这个时候据需要咖啡来提神醒脑，而很多人在喝过一次之后，就会一直喝下去。
          </div>
          <div class="text">
            3.口感香醇:还有很多人喝咖啡就是为了享受，享受那种香醇丝滑的口感，他们可以尝试各种各样的咖啡，比如从速溶咖啡，开始尝试现磨咖啡，再从罗布斯塔豆到阿拉比卡豆，再尝试不同的器具，再不断升级咖啡的器具等等，这一切都是为了喝到让自己最满意的咖啡，这时候会有满满的成就感。
          </div>
        </el-collapse-item>
        <el-collapse-item title="咖啡的作用与功效" name="4">
          <div class="text">
            提神醒脑、预防心血管疾病及老年痴呆。
            咖啡中的主要成分是咖啡因，咖啡因对人有提神醒脑的作用。现在喝咖啡实际上成为了一种文化，也有很多医学研究，确实证实咖啡对很多器官系统都有好处。比如哈佛大学曾经做过研究，证实咖啡在一定程度上可以预防心血管疾病，还可以预防老年痴呆。台湾也做过研究，发现咖啡在一定程度上可以保护肝脏。还有的研究发现，长期喝咖啡还可以降低某些人患癌症的风险。另外，也有研究会观察咖啡对于类风湿性关节炎可能还有一定的作用。但是这些研究只是一部分学者的结果，并不是医学上的定论。目前对于咖啡，其具有强大的抗炎、抗氧化作用是有定论的，如果适量喝，不超过每天三杯，一般来说对健康都不会有太大的问题。但是如果过量引用咖啡，有些人会觉得心慌，甚至还会呕吐。除了刚刚所列出的喝咖啡的好处，荷兰的一项研究也指出，如果每天喝5杯以上的咖啡，经过4周，这个受试者体内的胆固醇数值就要增加8%。所以一切都是有利有弊，只要您能够耐受，喝咖啡没问题，如果不舒服就要少喝。
          </div>
        </el-collapse-item>
        
      </el-collapse>
    </div>
    <el-button
      type="success"
      style="margin-left: 16px;"
      
      class="btn"
      @click="open"
      @change="Instant"
      
    >
    点击购买
      <!-- <router-link to="/message">点击购买</router-link>  -->
       </el-button>
    <el-input-number
      v-model="num"
      :change="handleChange"
      :min="1"
      :max="10"
      label="描述文字"
      class="input"
    ></el-input-number>
    <span class="price">单价为：{{money*num}}￥</span>
  </div>
</template>

<script>
import "../components/Intants.vue";
</script>

<script>
import { Test1 } from "../request/api.js";
export default {
  data() {
    return {
      arrList: [],
      num: 1,
      money:99,
      drawer: false,
      innerDrawer: false,
      handleChange:[],
      Instant:['1'],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
   open() {
        const h = this.$createElement;
        
        this.$msgbox({
          title: '消息',
          message: h('p', null, [
            h('span', null, '确定购买么 '),
            h('i', { style: 'color: teal' }, '即溶咖啡')
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === '支付成功') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: '信息',
            message: '支付成功'
          });
        });
      },
    getData() {
      var _this = this;
      Test1().then(function(res) {
        // res就是请求成功之后的数据
        _this.arrList = res.data.data26;
        let id = res.data.data26.id
        console.log(id);
        console.log(res);
      });
    },
  }
};
</script>
