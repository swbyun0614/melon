$('.hamburger').click(function(){
    $('header nav').fadeToggle().css({display:'flex'});
    $('.hamburger').toggleClass('on');
});

$(window).resize(function(){
    if($(window).width() > 768){
        $('header nav').removeAttr('style');
        $('.hamburger').removeClass('on');
    }
})