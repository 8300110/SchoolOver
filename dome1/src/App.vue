<template>
  <div id="app">
  <login></login>
    
   <!-- <HomeView class="home"></HomeView> -->
   <router-view class="home"></router-view>
   <FooterView class="footer"></FooterView>
  </div>
</template>

<script>
  import Login from "./components/Login"
  import HomeView from "./components/Home"
  import FooterView from "./components/Footer"
export default {
  name: 'App',
  components:{
    Login,
    HomeView,
    FooterView
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style>
@import url("assets/css/app.css");
</style>
