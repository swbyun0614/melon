$('.hamburger').click(function(){
    $('header nav').fadeToggle().css({display:'flex'});
    $('.hamburger').toggleClass('on');
})