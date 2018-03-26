$(document).ready(function () {
    $('.alert').alert();
    //Smooth-Scrolling 
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1200);
    });
    //Smooth-Scrolling 
    $('.stimetable h2 button').click(function () {
        $(this).addClass('btn-lg').siblings().removeClass('btn-lg');
    });
    $('.modalbtn').on('mouseenter',function () {
        $(this).removeClass('fa-envelope');
        $(this).addClass('fa-envelope-open');
    });
    $('.modalbtn').on('mouseleave',function () {
        $(this).removeClass('fa-envelope-open');
        $(this).addClass('fa-envelope');
    });
    //requried-jsfiles-for owl 
    $("#owl-demo").owlCarousel({
        items: 3,
        lazyLoad: true,
        autoPlay: true,
        pagination: false,
    });
    //requried-jsfiles-for owl 

    /*
        var defaults = {
            containerID: 'toTop', // fading element id
            containerHoverID: 'toTopHover', // fading element hover id
            scrollSpeed: 1200,
            easingType: 'linear' 
        };
         */
    $().UItoTop({
        easingType: 'easeOutQuart'
    });
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function (event) {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    });

    $(window).scroll(function () {
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
});
