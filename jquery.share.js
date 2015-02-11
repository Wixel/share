/*!
 * Share jQuery plugin
 *
 * @author   : http://twitter.com/nicovanzyl
 * @author   : http://twitter.com/wixelhq
 * @url      : https://github.com/Wixel/share.git
 * @copyright: 2015 Wixel
 * @license  : MIT license
 * @version  : 0.0.1
 */
(function($) {
    // Get the current URL
    var pathname = window.location,
        // Get data to share
        shareTitle = $('.share-title').text(),
        shareSubtitle = $('.share-sub').text(),
        shareBody = $('.share-body').text(),
        
        // Create the URL's
        tweeturl = 'http://twitter.com/share?url='+encodeURI(pathname)+'&via=wixelhq&text='+shareTitle+' '+shareSubtitle,
        fburl = 'http://www.facebook.com/sharer.php?u='+pathname,
        gpurl = 'https://plus.google.com/share?url='+pathname,
        liurl = 'https://www.linkedin.com/shareArticle?mini=true&url='+pathname+'&title='+shareTitle+'&summary='+shareSubtitle;
    
    // add the URL's to anchors
    $('.share-twitter').attr('href', tweeturl);
    $('.share-fb').attr('href', fburl);
    $('.share-gplus').attr('href', gpurl);
    $('.share-linkedin').attr('href', liurl);
}(jQuery));
