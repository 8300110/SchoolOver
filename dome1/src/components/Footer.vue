<template>
    <div id="footer" class="footer">
        <router-link to="/home" class="router-link "> <img src="src/assets/img/房子222.png" alt=""><br> <span class="one">首页</span> </router-link>
        <router-link to="/money" class="router-link"> <img src="src/assets/img/咖啡杯.png" alt=""><br> <span>菜单</span> </router-link>
        <router-link to="/mounth" class="router-link three"> <span>11.11</span> </router-link>
        <router-link to="/message" class="router-link"> <img src="src/assets/img/购物车.png" alt=""><br><span>购物车</span> </router-link>
        <router-link to="/me" class="router-link"> <img src="src/assets/img/我的.png" alt=""><br> <span>我的</span> </router-link>

    </div>

</template>
<script>
// export default({
//    mounted(){
//        $(".footer .router-link span").on("click",function(){
//            $(this).addClass("one").siblings().removeClass("one")
//        })
//    }
// })
</script>

<style scoped>
@import url("../assets/css/footer.css");
</style>


