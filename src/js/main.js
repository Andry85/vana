(function($){


    /*********************************************************/
    /* start custom select  */
    /********************************************************/
        $('.customSelect').select2({
            minimumResultsForSearch: Infinity
        });
    /*********************************************************/
    /* End custom select  */
    /********************************************************/


    /*********************************************************/
    /* start mobile menu  */
    /********************************************************/
        $(".navList li a").clone().appendTo(".slidebar");
        var controller = new slidebars();
        controller.init();

        // Mobile only
        var windowWidth,
        mobileOnly = function () {
            windowWidth = $( window ).width();
            if ( windowWidth > 767 ) {
                controller.close( 'slidebar' );
            }
        };
        mobileOnly();
        $(window).on( 'resize', mobileOnly );

        $( '.js-toggle-menu' ).on( 'click', function ( event ) {
            event.stopPropagation();
            if ( windowWidth < 768 ) {
                controller.toggle('slidebar');
            }
        } );
        $( '.cloze-slidebar' ).on( 'click', function ( event ) {
            event.preventDefault();
            event.stopPropagation();
            controller.close('slidebar');
        } );
    /*********************************************************/
    /* start mobile menu  */
    /********************************************************/



    /*********************************************************/
    /* start slider   */
    /********************************************************/
        $('.mainSlider .owl-carousel').owlCarousel({
            items:1,
            margin: 0,
            autoHeight:true,
            nav: false,
            dots: true
        });
    /*********************************************************/
    /* end slider  */
    /********************************************************/

    /*********************************************************/
    /* start product slider   */
    /********************************************************/
    $('.productsSlider .owl-carousel').owlCarousel({
        autoHeight:true,
        nav: true,
        responsive:{
            0:{
                items: 2,
                margin: 15
            },
            768:{
                items: 3,
                margin: 18
            },
            992:{
                items:5,
                margin: 28,
            }
        }
    });
    /*********************************************************/
    /* end product slider  */
    /********************************************************/

    /*********************************************************/
    /* start recipes slider   */
    /********************************************************/
    $('.recipesSlider .owl-carousel').owlCarousel({
        autoHeight:true,
        nav: true,
        responsive:{
            0:{
                items: 1,
            },
            768:{
                items: 2,
                margin: 29,
            }
        }
    });
    /*********************************************************/
    /* end recipes slider  */
    /********************************************************/

    /*********************************************************/
    /* start brand slider   */
    /********************************************************/
    $('.brandPageSlider .owl-carousel').owlCarousel({
        autoHeight:true,
        nav: true,
        responsive:{
            0:{
                items: 1,
            },
            481:{
                items: 2,
                margin: 15,
            },
            992:{
                items: 3,
                margin: 35,
            }
        }
    });
    /*********************************************************/
    /* end brand slider  */
    /********************************************************/


    /*********************************************************/
    /* Start TABS  */
    /********************************************************/
    $('.officesPlacesList li a').on('click', function(e){
        e.preventDefault();
        var $tabs = $(".tabs");
        var $text = $(this).text();
        var $tabsList = $tabs.children();
        $(this).parent('li').addClass('officesPlacesList__item--activ').siblings().removeClass('officesPlacesList__item--activ');
        var $parent = $(this).parent('li');
        var $parentIndex = $parent.index();
        var $current = $tabsList[$parentIndex];
        $($current).addClass('activ').siblings().removeClass('activ');
        $('.officesPlaces__city i').text($text);
        $(this).parents('.officesPlacesListWrap').slideUp();
    });
    $('.officesPlaces__city i').on('click', function(e){
        var officesListWrap = $(this).next('.officesPlacesListWrap');
        var isVisible = officesListWrap.is(':visible');
        if (isVisible === true) {
            officesListWrap.slideUp();
        } else {
            officesListWrap.slideDown();
        }
    });

    /*********************************************************/
    /* End TABS  */
    /********************************************************/


    /*********************************************************/
    /* start recipes main slider   */
    /********************************************************/
    $('.recipesCarusel .owl-carousel').owlCarousel({
        autoHeight:true,
        nav: true,
        responsive:{
            0:{
                items: 1,
            },
            641:{
                items: 2,
                margin: 14,
            },
            992:{
                items: 3,
                margin: 21,
            }
        }
    });
    /*********************************************************/
    /* end recipes main slider  */
    /********************************************************/


    $('.advertisingPopap__cloze').on('click', function(e){
        event.preventDefault();
        $(this).parents('.advertisingPopap').fadeOut();

    });















})(jQuery);