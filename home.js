window.addEventListener('scroll', function () {
    let nav = document.querySelector('nav');

    let windowPosition = window.scrollY > 150;

    nav.classList.toggle('scrolling-active', windowPosition);
})


$(window).scroll(function(){
    var wScroll = $(window).scrollTop();
    console.log(wScroll)

    $('.success').css('top', + (wScroll*.005)*1.3+'em');

})