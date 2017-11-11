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
        $('.preambuleSlider .owl-carousel').owlCarousel({
            items:1,
            margin: 0,
            autoHeight:true,
            nav: true
        });
    /*********************************************************/
    /* end slider  */
    /********************************************************/





})(jQuery);