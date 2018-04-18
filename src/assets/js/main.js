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
    // parent component
    $('.degrees .child-degrees h4 button').click(function () {
        $(this).addClass('btn-lg').siblings().removeClass('btn-lg');
    });

    // student component
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
    $('.modal-content .modal-body .message-content .row').mouseenter(function () {
        $(this).addClass('row-dark');
    });

    $('.modal-color .light').on('click',function () {
        $('.modal-content').css('background','#fff');
        $('.modal-content .close').css('color','#000');
        $('.modal-content .modal-header').css('border-color','#eee');
        $('.modal-content .modal-header h5').css('color','#ed1c24');
        $('.modal-content .modal-header .modal-color').css('border-color','#222');
        $('.modal-content .modal-header .modal-color .light').css('cursor','default');
        $('.modal-content .modal-header .modal-color .dark').css('cursor','pointer');
        $('.modal-content .modal-body .message-content').css('border-color','#eee');
        $('.modal-content .modal-body .message-content .sender-img').css('color','#444');
        $('.modal-content .modal-body .message-content .row').mouseenter(function () {
            $(this).removeClass('row-dark');
            $(this).addClass('row-light');
        });
        $('.modal-content .modal-body .message-content .message-header .sender-name h6').css('color','#444');
        $('.modal-content .modal-body .message-content .message-body p').css('color','#555');

    });
    $('.modal-color .dark').on('click',function () {
        $('.modal-content').css('background','#222');
        $('.modal-content .close').css('color','#eee');
        $('.modal-content .modal-header').css('border-color','#444');
        $('.modal-content .modal-header h5').css('color','#fff');
        $('.modal-content .modal-header .modal-color').css('border-color','#fff');
        $('.modal-content .modal-header .modal-color .dark').css('cursor','default');
        $('.modal-content .modal-header .modal-color .light').css('cursor','pointer');
        $('.modal-content .modal-body .message-content').css('border-color','#444');
        $('.modal-content .modal-body .message-content .sender-img').css('color','#fff');
        $('.modal-content .modal-body .message-content .row').mouseenter(function () {
            $(this).removeClass('row-light');
            $(this).addClass('row-dark');
        });
        $('.modal-content .modal-body .message-content .message-header .sender-name h6').css('color','#fff');
        $('.modal-content .modal-body .message-content .message-body p').css('color','#888');
    });

    //end student component

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
