$(window).on('load', function(){

    //stellar.js
    $(window).stellar();

    // nav-scroll
    $(window).on('scroll', function(){
        var y = $(window).scrollTop();
        if(y>100){
            $('nav').addClass('nav-scroll');
            $('nav').removeClass('navbar-dark');
            $('nav').addClass('navbar-light');
        }
        else{
            $('nav').removeClass('nav-scroll');
            $('nav').removeClass('navbar-light');
            $('nav').addClass('navbar-dark');
        }
    })

    $('.nav-link').on('click', function(){
        $('.navbar-collapse').removeClass('show');
    })


    //scrollIt
    $(function(){
        $.scrollIt();
    })
  

    //progress-bar
    $(window).on('scroll', function(){
        $('.bar .progres').each(function(){
            var offsetProgress = $(this).offset().top + $(this).outerHeight();
            var offsetWindow = $(window).scrollTop() + $(window).height();
            var widthValue = $(this).attr('data-value');
            if(offsetWindow > offsetProgress){
                $(this).css({
                    width: widthValue
                })
            }
        })
    })

    //count-up
    $('.count').countUp({
        'time': 1500,
        'delay': 10
    });

    //gallery
    $('.filter-item').on('click', function(){
        var filterType = $(this).attr('data-filter');
        $('.gallery-item').each(function(){
            if($(this).hasClass(filterType)){
                $(this).removeClass('hidden');
                $(this).addClass('wow zoomIn');
            }
            else{
                $(this).removeClass('wow zoomIn');
                $(this).addClass('hidden');
            }
        })
    })


    $('.filter-item').on('click', function(){
        var that = $(this);
        $('.filter-item').each(function(){
            $(this).removeClass('active');
        })
        that.addClass('active');
    })

    // Testimonials owlCarousel
     $('.services .owl-carousel').owlCarousel({
        loop: true,
        center: true,
        margin: 30,
        mouseDrag: true,
        autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });


})