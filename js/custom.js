$(document).ready(function () {
    "use strict";

    // Isotope Gallery
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
            columnWidth : '.grid-item'
        }
        });
        var filterFns = {
            numberGreaterThan50: function() {
                var number = $(this).find('.number').text();
                return parseInt( number, 10 ) > 50;
            },
            ium: function() {
                var name = $(this).find('.name').text();
                return name.match( /ium$/ );
            }
        };
        $('.filters-button-group') .on( 'click', 'button', function() {
            var filterValue = $( this ).attr('data-filter');
            filterValue = filterFns[ filterValue ] || filterValue;
            $grid.isotope({ filter: filterValue });
        });
        $('.button-group').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
                $buttonGroup .on( 'click', 'button', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $( this ).addClass('is-checked');
            });
        });

        
        //Popup
        $('.grid-item').magnificPopup({
            delegate: 'a.port-view',
            type: 'image',
            gallery: {
                enabled: true
            },
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });


    //Preloader js
        setTimeout(function(){
            $('body').addClass('loaded');
        }, 3000);
    

    //Sticky_nav  
      $(".industrico_navbar").sticky({topSpacing:0});
//counter
    $('.counter').counterUp({
      delay: 10,
      time: 5000
    });  

    /* 3. Menu Mobile */
    var $btnMenu = $('.menu-mobile');

    if ($btnMenu.length) {
      var $header = $('#main_nav'),
        $mainMenu = $('.main-menu', $header),
        $headerCover = $('.header-hide');
      $btnMenu.on('click', function () {
        $mainMenu.addClass('active');
        $btnMenu.addClass('active');
        $headerCover.addClass('active');
      });
      $('.close-menu', $mainMenu).on('click', function () {
        $mainMenu.removeClass('active');
        $btnMenu.removeClass('active');
        $headerCover.removeClass('active');
      });
      $headerCover.on('click', function () {
        $('.close-menu', $mainMenu).trigger('click');
      });

      $(document).on('keydown', function (e) {
        if (e.keyCode === 27 && $mainMenu.hasClass('active')) {
          $('.close-menu', $mainMenu).trigger('click');
        }
      });

      $('.menu-item-has-children > a', $mainMenu).on('click', function (e) {
        e.preventDefault();
        var $li = $(this).closest('li');
        $('> .sub-menu', $li).slideToggle(400);
      });
    }




    $("#reviews_carousel-02").owlCarousel({
        items :3,
        itemsDesktop : [1199, 3],
        itemsDesktopSmall : [980, 3],
        itemsTablet: [768, 2],
        itemsMobile : [479, 1],
        navigation : false,
        navigationText :["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-arrow-point-to-right'></i>"],
        pagination : true,
    });




    //Testimonial Carousel (Hosting)
    $('.says_content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        prevArrow: "",
        nextArrow: "",
        dots: false,
        fade: true,
        asNavFor: '.says_info'
    });
    $('.says_info').slick({
        fade: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '.says_content',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: false,
        arrows: false,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    }); 




    //Video Popup   
    $('.video-iframe').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src'
        }
    }); 










    // ************ Video Index 3 
    $(document).on('click','.js-videoPoster',function(e) {
        e.preventDefault();
        var poster = $(this);
        var wrapper = poster.closest('.js-videoWrapper');
        videoPlay(wrapper);
    });

    function videoPlay(wrapper) {
        var iframe = wrapper.find('.js-videoIframe');
        var src = iframe.data('src');
        wrapper.addClass('videoWrapperActive');
        iframe.attr('src',src);
    }

   
});



