$(window).scroll(function(){
  let scrollTop = $(window).scrollTop();
  if(scrollTop != 0)
   $('.header').stop().animate({'opacity':'0.2'},400);
  else
   $('.header').stop().animate({'opacity':'1'},400);
 });

$('.header').hover(
  function (e) {
      let scrollTop = $(window).scrollTop();
      if(scrollTop != 0){
      $('.header').stop().animate({'opacity':'1'},400);
      }
  },
  function (e) {
      let scrollTop = $(window).scrollTop();
      if(scrollTop != 0){
          $('.header').stop().animate({'opacity':'0.2'},400);
      }
  }
);

$('.unko').on('click', function () {
  $(this)
    .siblings()
    .slideToggle();
});

$('.tomoki').on('click', function(){
  $(this)
    .siblings()
    .slideToggle();
});

$('.asuka').on('click', function(){
  $(this)
    .siblings()
    .slideToggle();
});

$('.akari').on('click', function(){
  $(this)
    .siblings()
    .slideToggle();
});

$('.seiko').on('click', function(){
  $(this)
    .siblings()
    .slideToggle();
});

$('.risa').on('click', function(){
  $(this)
    .siblings()
    .slideToggle();
});

$('.takuya').on('click', function(){
  $(this)
    .siblings()
    .slideToggle();
});

$('.doctor').on('click', function(){
  $(this)
    .siblings()
    .slideToggle();
});

$('.kaito').on('click', function(){
  $(this)
    .siblings()
    .slideToggle();
});

$('.hiro').on('click', function(){
  $(this)
    .siblings()
    .slideToggle();
});

$('.hikari').on('click', function(){
  $(this)
    .siblings()
    .slideToggle();
});

$('.ami').on('click', function(){
  $(this)
    .siblings()
    .slideToggle();
});

$('.ippei').on('click', function(){
  $(this)
    .siblings()
    .slideToggle();
});

$('.takumi').on('click', function(){
  $(this)
    .siblings()
    .slideToggle();
});

let samples=document.getElementsByClassName('textbox')
for(sample of samples){
  sample.style.display="none";
}
$(".textbox").on('click',function(){
  let des1 = document.getElementsByClassName('textbox');
  des1.style.display = "block";
})