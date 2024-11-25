
$(document).ready(function () {
    "use strict";
    //Revolution Slider
    jQuery('#rev_slider_24_1').show().revolution({
        sliderType:"standard",
        jsFileLocation:"revolution/js/",
        sliderLayout:"fullscreen",
        dottedOverlay:"none",
        delay:9000,
        navigation: {
            keyboardNavigation:"off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation:"off",
            mouseScrollReverse:"default",
            onHoverStop:"off",
            bullets: {
                enable:true,
                hide_onmobile:true,
                hide_under:1100,
                style:"hermes",
                hide_onleave:false,
                direction:"vertical",
                    container:"layergrid",
                h_align:"right",
                v_align:"center",
                h_offset:0,
                v_offset:0,
                space:5,
                tmp:''
            }
        },
        responsiveLevels:[1240,1024,778,480],
        visibilityLevels:[1240,1024,778,480],
        gridwidth:[1240,1024,778,480],
        gridheight:[1000,768,960,720],
        lazyType:"none",
        shadow:0,
        spinner:"off",
        stopLoop:"off",
        stopAfterLoops:-1,
        stopAtSlide:-1,
        shuffle:"off",
        autoHeight:"off",
        fullScreenAutoWidth:"off",
        fullScreenAlignForce:"off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "60px",
        hideThumbsOnMobile:"off",
        hideSliderAtLimit:0,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        debugMode:false,
        fallbacks: {
            simplifyAll:"off",
            nextSlideOnWindowFocus:"off",
            disableFocusListener:false,
        }
    });


    //Revolution Slider
    jQuery('#rev_slider_1').show().revolution({
        /* Options are 'auto', 'fullwidth' or 'fullscreen' */
        sliderType:"standard",
        jsFileLocation:"revolution/js/",
        sliderLayout:"fullscreen",
        dottedOverlay:"none",
        delay:9000,
        navigation: {
            arrows: {
                enable: true,
                style: 'gyges',
                tmp: '',
                rtl: false,
                hide_onleave: false, 
                hide_onmobile: true,
                hide_under: 0,
                hide_over: 9999,
                hide_delay: 480,
                hide_delay_mobile: 1200,
                left: {
                    container: 'slider',
                    h_align: 'right',
                    v_align: 'center',
                    h_offset: 260,
                    v_offset: -30
                },
         
                right: {
                    container: 'slider',
                    h_align: 'right',
                    v_align: 'center',
                    h_offset: 260,
                    v_offset: 30
                },
            },
        },
        responsiveLevels:[1140,1024,778,480],
        visibilityLevels:[1140,1024,778,480],
        gridwidth:[1140,1024,778,480],
        gridheight:[1000,1050,960,720],
        lazyType:"none",
        shadow:0,
        spinner:"off",
        stopLoop:"off",
        stopAfterLoops:-1,
        stopAtSlide:-1,
        shuffle:"off",
        autoHeight:"off",
        fullScreenAutoWidth:"off",
        fullScreenAlignForce:"off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "60px",
        hideThumbsOnMobile:"off",
        hideSliderAtLimit:0,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        debugMode:false,
        fallbacks: {
            simplifyAll:"off",
            nextSlideOnWindowFocus:"off",
            disableFocusListener:false,
        }

    });

});


