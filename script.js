$(function (){
    $(window).on('scroll', function(){
        
        // var scrollSize = $(window).scrollTOp();
        // console.log(scrollSize)
        var scrollSize = $(window).scrollTop();

        if (scrollSize > 500){
            $('#backtotop').fadeIn(400)
        } else {
            $('#backtotop').fadeOut(400)
        }
       
})

$('#backtotop').on('click,' function () {
    $('html, body').animate({
        scrollTop:0,
    })
})
})