<template>
    <div id="money" class="money">
         <div class="money-header">
             <p class="title"> <img src="src/assets/img/地标.png" alt=""> <span>乐多港万达广场店</span></p> 
             <p class="titles"><span>自提</span> 外送</p>
             <span class="position">距您1.2km</span>
         </div>
         <div class="main_content">
             <ul class="content_ul">
                <router-link to="/money/classic"  class="list">经典菜单</router-link>
                <router-link to="/money/christmas"  class="list" >圣诞季</router-link> 
                <router-link to="/money/recom"  class="list">本店推荐</router-link>
             </ul>
             <div class="router-view">
                <router-view>1</router-view>
             </div>
         </div>
         
    </div>
</template>
<style>
@import url("../assets/css/money.css");
</style>
<script>
import "../assets/js/money"
</script>
