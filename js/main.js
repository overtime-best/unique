/*global $,console*/

$(function () {
    'use strict';
    $('.links .brand').on('click', function () {
        
        $('.ul').slideToggle();
        $('span.one').toggleClass('first');
        $('span.two').toggleClass('second');
        $('span.three').toggleClass('third');
    });
    $('.preloading').slideUp(1500);


    //Sroll To Top

    $('button.info').on('click', function () {

        $('body, html').animate({

            scrollTop: $('.about').offset().top

        }, 500);
    });


    //Add Class Active To Links 


    $('.ul li').on('click', function () {
        $('li').removeClass('actived');
        $(this).addClass('actived');
    });

    //Scroll To Top 

    $('.scroll').click(function () {

        $('body, html').animate({
            scrollTop: 0
        }, 500);
    });

    //Scroll To Elements 

    $('.ul li').on('click', function () {

        console.log('#' + $(this).data('scroll'));
        $('body, html').animate({

            scrollTop: $('#' + $(this).data('scroll')).offset().top
        });


        //Manu Slide Toggle 
        $('.ul').slideToggle();
        $('span.one').toggleClass('first');
        $('span.two').toggleClass('second');
        $('span.three').toggleClass('third');
    });
  
    $(window).scroll(function () {


        if($(window).scrollTop() >= $('.about').offset().top) {

            $('.scroll').fadeIn();

        } else {
            $('.scroll').fadeOut();
        }

        //Sync Active Links 


        $('.activeScroll').each(function () {

            if($(window).scrollTop() >= $(this).offset().top) {

                console.log($(this).attr('id'));

                var sectionId = $(this).attr('id');

                $('.ul').find('li').removeClass('actived');

                $('.ul li[data-scroll="'  +  sectionId +  '"]').addClass('actived');

            }
        });
        


        //Count To 

        if ($(window).scrollTop() >= $('.services').offset().top + 200 && $(window).scrollTop() <= $('.counter').offset().top - 400) {
 
            $('.count span').countTo( { 
                speed: 3000,
                refreshInterval: 50
            });
        } 

        //Amimation Progress Bar 

        if($(window).scrollTop() >= $('.about').offset().top) {
            

                // Add Text Content To The Span 

            $('.prog span').each(function () {

                $(this).animate({


                    width: $(this).data('width')

                }, 3000, function () {

                    $(this).text($(this).data('width'));
                    $(this).css({
                        paddingRight: 50,
                    
                    });
                });

            });
                
        }
    });



	/*----------------------------------------------------*/
	/*	Modal Popup
	------------------------------------------------------*/
    $('.port-box a').magnificPopup({

        type:'inline',
        fixedContentPos: false,
        removalDelay: 500,
        showCloseBtn: false,
        mainClass: 'mfp-fade'
  
     });
  
     $(document).on('click', '.popup-modal-dismiss', function (e) {
         e.preventDefault();
         $.magnificPopup.close();
     });


    /* Triger owl */
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 20,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1200:{
                items:3
            }, 
            navigationText: false
        }
    });
    
       //Hide Placeholder On Form Focus

        $('[Placeholder]').focus(function () {

            $(this).attr('data-text', $(this).attr('Placeholder'));
            
            $(this).attr('Placeholder', '');	

        }).blur(function () {

            $(this).attr('Placeholder', $(this).attr('data-text'));
        });


});