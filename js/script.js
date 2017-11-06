$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()>48){
             $(".header").removeClass("header-no-stick");
            $(".header").addClass("header-stick");
            $("body").addClass("scroll");
            
        } else{
            $(".header").removeClass("header-stick");
            $("body").removeClass("scroll");
            $(".header").addClass("header-no-stick");
        }
    });
});