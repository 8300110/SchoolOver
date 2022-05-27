<style scoped>
.login_form {
  padding-top: 10%;
  padding-left: 10%;
  padding-right: 10%;
}
.qxs-ic_user {
  /* background: url("../assets/img/欢迎.jpeg") no-repeat; */
  background-size: 13px 15px;
  background-position: 3%;
}
.qxs-ic_password {
  /* background: url("../../assets/login/ic_password.png") no-repeat; */
  background-size: 13px 15px;
  background-position: 3%;
  margin-bottom: 20px;
}
.login_logo {
  height: 100%;
}
.input {
  margin-bottom: 20px;
}
.login_btn {
  width: 100%;
  font-size: 16px;
  border: 0;
  background: -webkit-linear-gradient(
    left,
    #000099,
    #2154fa
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    right,
    #000099,
    #2154fa
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    right,
    #000099,
    #2154fa
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #000099, pink); /* 标准的语法 */
  filter: brightness(1.4);
}
/* .mu{width: 100%;height: 15rem;position: absolute;background-color: red;z-index: 1000;bottom: 0;} */
</style>
<template>
  <div>
    <div class="mu"></div>
    <div class="outer_label">
      <!-- <img class="inner_label login_logo" src="../assets/img/欢迎.jpeg"> -->
    </div>
    <div class="login_form">
      <el-form :model="user" :rules="rules">
      <el-input
        type="text"
        class="input"
        placeholder="请输入用户名"
        v-model="userName"
      >
      </el-input>
      <el-input
        type="password"
        placeholder="请输入密码"
        class="input"
        v-model="password"
        show-password
      ></el-input>
      </el-form>
      <!--<button class="login_btn el-button el-button&#45;&#45;primary is-round" type="primary" round>登录</button>-->
      <el-button
        class="login_btn input"
        @click.native="login"
        type="primary"
        round
        :loading="isBtnLoading"
        >登录</el-button
      >
      <div style="margin-top: 10px"></div>
    </div>
  </div>
</template>
<script>
//  import { userLogin } from '../../api/api';

export default {
  data() {
    return {
      user:{},
      rules: {
        // usn和prop对应
        userName: [
          // blur表示鼠标失焦时触发
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
        ]
      },
      userNames: ["admin", "test"],
      passwords: ["admin123", "test123"],
      userName: "",
      password: "",
      index: 0,
      isBtnLoading: false
    };
  },
  created() {
    if (
      JSON.parse(localStorage.getItem("user")) &&
      JSON.parse(localStorage.getItem("user")).userName
    ) {
      this.userName = JSON.parse(localStorage.getItem("user")).userName;
      this.password = JSON.parse(localStorage.getItem("user")).password;
    }
  },
  computed: {
    btnText() {
      if (this.isBtnLoading) return "登录中...";
      return "登录";
    }
  },
  methods: {
    login() {
      while (this.index != this.userNames.length - 1) {
        this.index++;
      }
      for (var i = 0; i <= this.index; i++) {
        if (
          this.userNames[i] == this.userName &&
          this.passwords[i] == this.password
        ) {
          const redirect = this.$route.query.redirect;
          if (redirect) {
            alert("账号或密码错误，请重新输入！！！");
            this.$route.push({
              path: "/login"
            });
          } else {
            alert("登陆成功");
            this.$router.push({
              // name: "Home",
              path: "/home"
            });
          }
        } else if (!this.userName) {
          this.$message.error("请输入用户名");
          return;
        } else if (!this.password) {
          this.$message.error("请输入密码");
          return;
        }
      }
    }
  }
};
</script>
