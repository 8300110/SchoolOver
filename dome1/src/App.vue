<template>
  <div id="app">
  
    
   <!-- <HomeView class="home"></HomeView> -->
   <router-view class="home"></router-view>
   <FooterView class="footer"></FooterView>
  </div>
</template>

<script>
  
  import HomeView from "./components/Home"
  import FooterView from "./components/Footer"
export default {
  name: 'app',
  components:{
   
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
