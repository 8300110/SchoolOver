$(function(){
    
        $(".my_arrow").on("click",function(){

            if($(".mydingdan ul").height()>70){
                $(".mydingdan").css("height","70")
                $(".mydingdan ul").css("height","70")
                $(".my_arrow img").css("transform","rotate(0)")
            }else{
                $(".mydingdan ul").css("height","140")
                $(".my_arrow img").css("transform","rotate(180deg)")
            }
            
        })
    
        
        // 商品
        setInterval(function(){
            $("#me").on("scroll",function(){
                var scroll = $(this).scrollTop();
                if(scroll >= 6500){
                    scroll = 0
                   
                    $(".me_navshopping").css({"position":"fixed",top:0})
                   
                }else{
                    $(".me_navshopping").css({"position":"absolute",top:0})
                }

                if(scroll >=500 ){
                    $(".me_tops").css("display","block")
                    $(".me_tops").on("click",function(){
                        $("#me .me_tops").css("display","none")
                        $("#me").scrollTop(0)
                        $(".me_nav1").scrollTop(0)
                    })
                }
            })
            
        },20)
    
    
})