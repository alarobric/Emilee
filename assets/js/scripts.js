//number of columns in the index page gallery 
//depending on the width of the page
var gNumColumns = 1;

function fitRows($container, numRows)
{
    var $elements = $container.children('article');
    var maxHeight = 0;

    $elements.each(function(i, element) {
        var $element = $(element);

        maxHeight = Math.max($element.height(), maxHeight);
        if ((i+1) % numRows === 0) {
            for (j=numRows; j; j--) {
                $element.css('min-height', maxHeight);
                $element = $element.prev();
            }
            maxHeight = 0;
        }
    });
}


// as the DOM loads, call these scripts
jQuery(document).ready(function($) {

    /*
     Responsive jQuery is a tricky thing.
     There's a bunch of different ways to handle
     it, so be sure to research and find the one
     that works for you best.
     */

    /* getting viewport width */
    var responsive_viewport = $(window).width();

    /* if is below 481px */
    if (responsive_viewport < 481) {
        gNumColumns = 1;
    } /* end smallest screen */

    /* if is larger than 481px */
    if (responsive_viewport > 481) {

    } /* end larger than 481px */

    /* if is larger than 660px */
    if (responsive_viewport > 660) {
        gNumColumns = 2;
    } /* end larger than 660px */    

    /* if is above or equal to 768px */
    if (responsive_viewport >= 768) {

        /* load gravatars */
        $('.comment img[data-gravatar]').each(function(){
            $(this).attr('src',$(this).attr('data-gravatar'));
        });

    }

    /* if is larger than 940px */
    if (responsive_viewport > 940) {
        gNumColumns = 3;
    } /* end larger than 940px */

    /* off the bat large screen actions */
    if (responsive_viewport > 1030) {

    }
    
    //look for an image for the post
    mainImage = $('img[alt="main-image"]');
    isPost = $('.cover-container.post');
    
    if ( mainImage.length > 0 && isPost.length > 0 ){
        mainImageSource = mainImage.attr('src');
        $('#cover').css('background-image','url('+mainImageSource+')');
        mainImage.remove();
    }


}); /* end of document.ready - as DOM loads */


//as the page fully loads
$(window).load(function() {
    //Wait for everything to load (i.e. the images)
    var $galleryContainer = $('#main > section');
    fitRows($galleryContainer, gNumColumns);

});


/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT License.
 */
(function(w){
    // This fix addresses an iOS bug, so return early if the UA claims it's something else.
    if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1 ) ){ return; }
    var doc = w.document;
    if( !doc.querySelector ){ return; }
    var meta = doc.querySelector( "meta[name=viewport]" ),
        initialContent = meta && meta.getAttribute( "content" ),
        disabledZoom = initialContent + ",maximum-scale=1",
        enabledZoom = initialContent + ",maximum-scale=10",
        enabled = true,
        x, y, z, aig;
    if( !meta ){ return; }
    function restoreZoom(){
        meta.setAttribute( "content", enabledZoom );
        enabled = true; }
    function disableZoom(){
        meta.setAttribute( "content", disabledZoom );
        enabled = false; }
    function checkTilt( e ){
        aig = e.accelerationIncludingGravity;
        x = Math.abs( aig.x );
        y = Math.abs( aig.y );
        z = Math.abs( aig.z );
        // If portrait orientation and in one of the danger zones
        if( !w.orientation && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
            if( enabled ){ disableZoom(); } }
        else if( !enabled ){ restoreZoom(); } }
    w.addEventListener( "orientationchange", restoreZoom, false );
    w.addEventListener( "devicemotion", checkTilt, false );
})( this );