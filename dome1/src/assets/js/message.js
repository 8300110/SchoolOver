$(function(){
    var index = 0
    setInterval(function(){
       
        $(".huan").on("click",function(){
            $(".message-ul:eq("+index+")").css("display","block").siblings().css("display","none")
            index++;
                if(index > 3){
                    index = 0;
                }
        })
    },20)
       
   
    
})