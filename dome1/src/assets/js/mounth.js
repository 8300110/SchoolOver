$(function(){
    setInterval(function(){
        $("#mounth").on("scroll",function(){
            var scroll = $(this).scrollTop();
            if(scroll >= 200){
                $(".top1s").css({"position":"fixed",top:500})
                $(".top1s").css("display","block")
                $(".top1s").on("click",function(){
                    $("#mounth").scrollTop(0)
                })
    
            }else{
                $(".top1s").css("display","none")
            }
        })
    })
   
})