$(function(){
    setInterval(function(){
        $("#money").on("scroll",function(){
            // alert(1)
            var scroll = $(this).scrollTop();
            if(scroll >= 90){
                // scroll = 0
                // $(".content_ul").css("display","block")
                $(".content_ul").css({"position":"fixed",top:0})
               
            }else{
                $(".content_ul").css({"position":"absolute",top:0})
            }
    
            
            if(scroll >= 20){
                
                $(".top").css("display","block")
               $(".top").on("click",function(){
                //    alert(1)
                $(".content_ul").css({"position":"absolute",top:0})
                $("#money").scrollTop(0)
                $(".top").css("display","none")
                $(".christmas1").scrollTop(0)
                $(".recom1").scrollTop(0)
    
    
    
               
               
    
               })
            }
            
        
    
    
    
        })
    },20)
    
    // $(".content_ul").on("click",function(){
    //     alert(1)
    // })
   



})