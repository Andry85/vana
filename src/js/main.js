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
                items: 1,
            },
            480:{
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











})(jQuery);