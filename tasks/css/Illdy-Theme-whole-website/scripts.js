/* Cloudflare Email Decode */
document.write('<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"><\/script>');

/* Contact Form 7 JS */
document.write('<script type="text/javascript" src="https://149842022.v2.pressablecdn.com/illdy/wp-content/plugins/contact-form-7/includes/swv/js/index.js?ver=5.8" id="swv-js"><\/script>');
var wpcf7 = { "api": { "root": "https:\/\/colorlibhub.com\/illdy\/wp-json\/", "namespace": "contact-form-7\/v1" }, "cached": "1" };
document.write('<script type="text/javascript" src="https://149842022.v2.pressablecdn.com/illdy/wp-content/plugins/contact-form-7/includes/js/index.js?ver=5.8" id="contact-form-7-js"><\/script>');

/* jQuery UI Core JS */
document.write('<script type="text/javascript" src="https://149842022.v2.pressablecdn.com/illdy/wp-includes/js/jquery/ui/core.min.js?ver=1.13.3" id="jquery-ui-core-js"><\/script>');
document.write('<script type="text/javascript" src="https://149842022.v2.pressablecdn.com/illdy/wp-includes/js/jquery/ui/progressbar.min.js?ver=1.13.3" id="jquery-ui-progressbar-js"><\/script>');

/* Illdy Theme JS */
document.write('<script type="text/javascript" src="https://149842022.v2.pressablecdn.com/illdy/wp-content/themes/illdy/layout/js/bootstrap/bootstrap.min.js?ver=3.3.6" id="illdy-bootstrap-js"><\/script>');
document.write('<script type="text/javascript" src="https://149842022.v2.pressablecdn.com/illdy/wp-content/themes/illdy/layout/js/owl-carousel/owl-carousel.min.js?ver=2.0.0" id="illdy-owl-carousel-js"><\/script>');
document.write('<script type="text/javascript" src="https://149842022.v2.pressablecdn.com/illdy/wp-content/themes/illdy/layout/js/count-to/count-to.min.js?ver=6.6.1" id="illdy-count-to-js"><\/script>');
document.write('<script type="text/javascript" src="https://149842022.v2.pressablecdn.com/illdy/wp-content/themes/illdy/layout/js/visible/visible.min.js?ver=6.6.1" id="illdy-visible-js"><\/script>');
document.write('<script type="text/javascript" src="https://149842022.v2.pressablecdn.com/illdy/wp-content/themes/illdy/layout/js/parallax/parallax.min.js?ver=1.0.16" id="illdy-parallax-js"><\/script>');
document.write('<script type="text/javascript" src="https://149842022.v2.pressablecdn.com/illdy/wp-content/themes/illdy/layout/js/plugins.min.js?ver=1.0.16" id="illdy-plugins-js"><\/script>');
document.write('<script type="text/javascript" src="https://149842022.v2.pressablecdn.com/illdy/wp-content/themes/illdy/layout/js/scripts.js?ver=1.0.16" id="illdy-scripts-js"><\/script>');

/* Owl Carousel Initialization */
if (jQuery('.blog-carousel > .illdy-blog-post').length > 3) {
    jQuery('.blog-carousel').owlCarousel({
        'items': 3,
        'loop': true,
        'dots': false,
        'nav': true,
        'navText': ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: { 0: { items: 1 }, 480: { items: 2 }, 900: { items: 3 } }
    });
}

/* Google Analytics */
window.GA_ID = 'G-SEKJ4E9T4H';
document.write('<script src="https://149842022.v2.pressablecdn.com/illdy/wp-content/plugins/flying-analytics/js/gtagv4.js" defer><\/script>');
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-SEKJ4E9T4H');

/* Gaug.es Tracker */
(function () {
    var t = document.createElement('script');
    t.type = 'text/javascript';
    t.async = true;
    t.id = 'gauges-tracker';
    t.setAttribute('data-site-id', '6334f864320b4e322bf8408a');
    t.src = '//secure.gaug.es/track.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(t, s);
})();

