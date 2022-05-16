$(function(){
    setInterval(function(){
        $("#home").on("scroll",function(){
            var scroll = $(this).scrollTop();
            if(scroll >= 950){
                scroll = 0
                $(".recommend .navshopping").css("display","block")
                $(".recommend .navshopping").css({"position":"fixed",top:0})
               
            }else{
                $(".recommend .navshopping").css({"position":"absolute",top:0})
            }
        })
    },20)
})