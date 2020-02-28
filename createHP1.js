$(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    if(scrollTop != 0)
     $('.header').stop().animate({'opacity':'0.2'},10);
    else
     $('.header').stop().animate({'opacity':'1'},10);
   });

$('.header').hover(
    function (e) {
        let scrollTop = $(window).scrollTop();
        if(scrollTop != 0){
        $('.header').stop().animate({'opacity':'1'},10);
        }
    },
    function (e) {
        let scrollTop = $(window).scrollTop();
        if(scrollTop != 0){
            $('.header').stop().animate({'opacity':'0.2'},10);
        }
    }
);