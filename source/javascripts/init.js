jQuery(function($){
	"use strict";

var TEMPLATE = window.TEMPLATE || {};

/* ==================================================
	Scroll to Top
================================================== */
	TEMPLATE.scrollToTop = function(){
		var windowWidth = $(window).width(),
			didScroll = false;

		var $arrow = $('#back-to-top');

		$arrow.on("click", function(e) {
			$('body,html').animate({ scrollTop: "0" }, 750, 'easeOutExpo' );
			e.preventDefault();
		})

		$(window).scroll(function() {
			didScroll = true;
		});

		setInterval(function() {
			if( didScroll ) {
				didScroll = false;

				if( $(window).scrollTop() > 200 ) {
					$arrow.fadeIn();
				} else {
					$arrow.fadeOut();
				}
			}
		}, 250);
	}

/* ==================================================
   Toggle
================================================== */
	TEMPLATE.toggle = function(){
		var accordion_trigger_toggle = $('.accordion-heading.togglize');

		accordion_trigger_toggle.delegate('.accordion-toggle','click', function(event){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				$(this).addClass('inactive');
			}
			else{
				$(this).removeClass('inactive');
				$(this).addClass('active');
			}
			event.preventDefault();
		});
	}
/* ==================================================
   SuperFish menu
================================================== */
	TEMPLATE.SuperFish = function() {
		$('.sf-menu').superfish({
			  delay: 200,
			  animation: {opacity:'show', height:'show'},
			  speed: 'fast',
			  cssArrows: false,
			  disableHI: true
		});

		$("#custom-navigation > ul > li:has(ul)").find("a:first").append(" <i class='fa fa-angle-down'></i>");
		$("#custom-navigation > ul > li > ul > li:has(ul)").find("a:first").append(" <i class='fa fa-angle-down'></i>");
		$("#custom-navigation > ul > li:has(ul)").find("i").on("click", function(e){
			e.stopPropagation();
			e.preventDefault();
			$(this).parent().next('ul').toggle();
		});
	}
/* ==================================================
   Header Functions
================================================== */
	TEMPLATE.StickyHeader = function() {
		$('.header').sticky();
	}
/* ==================================================
   IsoTope Portfolio
================================================== */
		TEMPLATE.IsoTope = function() {
		$("ul.sort-source").each(function() {
			var source = $(this);
			var destination = $("ul.sort-destination[data-sort-id=" + $(this).attr("data-sort-id") + "]");
			if(destination.get(0)) {
				$(window).load(function() {
					destination.isotope({
						itemSelector: ".grid-item",
						layoutMode: 'sloppyMasonry'
					});
					source.find("a").on("click", function(e) {
						e.preventDefault();
						var $this = $(this),
							filter = $this.parent().attr("data-option-value");
						source.find("li.active").removeClass("active");
						$this.parent().addClass("active");
						destination.isotope({
							filter: filter
						});
						if(window.location.hash != "" || filter.replace(".","") != "*") {
							self.location = "#" + filter.replace(".","");
						}
						return false;
					});
					$(window).on("hashchange", function(e) {
						var hashFilter = "." + location.hash.replace("#",""),
							hash = (hashFilter == "." || hashFilter == ".*" ? "*" : hashFilter);
						source.find("li.active").removeClass("active");
						source.find("li[data-option-value='" + hash + "']").addClass("active");
						destination.isotope({
							filter: hash
						});
					});
					var hashFilter = "." + (location.hash.replace("#","") || "*");
					var initFilterEl = source.find("li[data-option-value='" + hashFilter + "'] a");
					if(initFilterEl.get(0)) {
						source.find("li[data-option-value='" + hashFilter + "'] a").click();
					} else {
						source.find("li:first-child a").click();
					}
				});
			}
		});
		$(window).load(function() {
			var IsoTopeCont = $(".isotope-grid");
			IsoTopeCont.isotope({
				itemSelector: ".grid-item",
				layoutMode: 'sloppyMasonry'
			});
			if ($(".grid-holder").length > 0){
				var $container_blog = $('.grid-holder');
				$container_blog.isotope({
					itemSelector : '.grid-item'
				});
				$(window).resize(function() {
					var $container_blog = $('.grid-holder');
					$container_blog.isotope({
						itemSelector : '.grid-item'
					});
				});
			}
		});
	}

/* ==================================================
   Init Functions
================================================== */
$(document).ready(function(){
	TEMPLATE.scrollToTop();
	TEMPLATE.toggle();
	TEMPLATE.SuperFish();
	TEMPLATE.IsoTope();
	TEMPLATE.StickyHeader();
	$('.selectpicker').selectpicker({container:'body'});
	WWHGetter();


	// Testimonial Slider height getter - creates height problem in Safari
    var liMaxHeight = -1;
    var length=$(".quotes-wrapper .slides").length;
    if(length>0)
        {
           $(".quotes-wrapper .slides").each(function(index) {
              var $ul = $(this);
              $($ul).find("li").each(function(index) {
              if ($(this).outerHeight() > liMaxHeight) {
                liMaxHeight = $(this).outerHeight();
            }
          });
        $($ul).find('li').css('height',liMaxHeight)
        });
    }


});

// DESIGN ELEMENTS //

// apply matchHeight to each item container's items
$('.content').each(function() {
	$(this).find('.owl-carousel .grid-item').find('.grid-item-content').matchHeight({
		//property: 'min-height'
	});
});

// WINDOW RESIZE FUNCTIONS //
$(window).resize(function(){
	WWHGetter();
});

// Any Button Scroll to section
$('.scrollto').on("click", function(){
	$.scrollTo( this.hash, 800, { easing:'easeOutQuint' });
	return false;
});

// FITVIDS
$(".fw-video").fitVids();


$(window).load(function(){
	$(".format-image").each(function(){
		$(this).find(".media-box").append("<span class='zoom'><span class='icon'><i class='icon-expand'></i></span></span>");
	});
	$(".format-standard").each(function(){
		$(this).find(".media-box").append("<span class='zoom'><span class='icon'><i class='fa fa-arrow-right'></i></span></span>");
	});
	$(".format-video").each(function(){
		$(this).find(".media-box").append("<span class='zoom'><span class='icon'><i class='icon-music-play'></i></span></span>");
	});
	$(".format-video-2").each(function(){
		$(this).find(".media-box").append("<span class='zoom'><span class='icon'><i class='fa fa-caret-right'></i></span></span>");
	});
	$(".format-link").each(function(){
		$(this).find(".media-box").append("<span class='zoom'><span class='icon'><i class='fa fa-link'></i></span></span>");
	});
	TEMPLATE.StickyHeader();
	$('.carousel-wrapper').css('background','none');

});

// Icon Append
$('.basic-link').append(' <i class="fa fa-angle-right"></i>');
$('.basic-link.backward').prepend(' <i class="fa fa-angle-left"></i> ');
$('ul.checks li, .add-features-list li').prepend('<i class="fa fa-check"></i> ');
$('ul.angles li').prepend('<i class="fa fa-angle-right"></i> ');
$('ul.chevrons li').prepend('<i class="fa fa-chevron-right"></i> ');
$('ul.carets li, ul.inline li, .filter-options-list li').prepend('<i class="fa fa-caret-right"></i> ');
$('a.external').prepend('<i class="fa fa-external-link"></i> ');
$('.similar-articles .next-article').append(' <i class="fa fa-angle-right"></i>');
$('.similar-articles .prev-article').prepend(' <i class="fa fa-angle-left"></i> ');

// Animation Appear
var AppDel;
function AppDelFunction($appd) {
	$appd.addClass("appear-animation");
	if(!$("html").hasClass("no-csstransitions") && $(window).width() > 767) {
		$appd.appear(function() {
			var delay = ($appd.attr("data-appear-animation-delay") ? $appd.attr("data-appear-animation-delay") : 1);
			if(delay > 1) $appd.css("animation-delay", delay + "ms");
			$appd.addClass($appd.attr("data-appear-animation"));
			setTimeout(function() {
				$appd.addClass("appear-animation-visible");
			}, delay);
			clearTimeout();
		}, {accX: 0, accY: -150});
	} else {
		$appd.addClass("appear-animation-visible");
	}
}
function AppDelStopFunction() {
	clearTimeout(AppDel);
}
$("[data-appear-animation]").each(function() {
	var $this = $(this);
	AppDelFunction($this);
	AppDelStopFunction();
});
// Animation Progress Bars

var AppAni;
function AppAniFunction($anim) {
	$anim.appear(function() {
		var delay = ($anim.attr("data-appear-animation-delay") ? $anim.attr("data-appear-animation-delay") : 1);
		if(delay > 1) $anim.css("animation-delay", delay + "ms");
		$anim.addClass($anim.attr("data-appear-animation"));
		setTimeout(function() {
			$anim.animate({
				width: $anim.attr("data-appear-progress-animation")
			}, 1500, "easeOutQuad", function() {
				$anim.find(".progress-bar-tooltip").animate({
					opacity: 1
				}, 500, "easeOutQuad");
			});
		}, delay);
		clearTimeout();
	}, {accX: 0, accY: -50});
}
function AppAniStopFunction() {
	clearTimeout(AppAni);
}
$("[data-appear-progress-animation]").each(function() {
	var $this = $(this);
	AppAniFunction($this);
	AppAniStopFunction();
});

// Parallax Jquery Callings
if(!Modernizr.touch) {
	$(window).on('load', function () {
		parallaxInit();
	});
}
function parallaxInit() {
	$('.parallax1').parallax("50%", 0.1);
	$('.parallax2').parallax("50%", 0.1);
	$('.parallax3').parallax("50%", 0.1);
	$('.parallax4').parallax("50%", 0.1);
	$('.parallax5').parallax("50%", 0.1);
	$('.parallax6').parallax("50%", 0.1);
	$('.parallax7').parallax("50%", 0.1);
	$('.parallax8').parallax("50%", 0.1);
	/*add as necessary*/
}

// Window height/Width Getter Classes
function WWHGetter(){
	var wheighter = $(window).height();
	var wwidth = $(window).width();
	$(".wheighter").css("height",wheighter);
	$(".wwidth").css("width",wwidth);
}

// Main Navigation Slide out
$(".main-navigation .navbar-header a").on("click", function(e){
	e.preventDefault();
		if( $(".main-navigation").hasClass('menu-opened'))
		{
			$(".main-navigation a.close").trigger('click');
			return false;

		}
	    $(".main-navigation").animate({left: "0"},
		{
     	complete: function(){
        $(".main-navigation").addClass('menu-opened');
    	}
		});

	});
	$(".main-navigation a.close").on("click", function(e){
        $(".main-navigation").animate({left: "-740px"},
		{
     	complete: function(){
        $(".main-navigation").removeClass('menu-opened');
    	}
		});
		e.preventDefault();
	});

	if($(window).width()<1199 && $(window).width()>767){

    $(".main-navigation a.close").on("click", function(e){
        $(".main-navigation").animate({left: "-540px"},
		{
     	complete: function(){
        $(".main-navigation").removeClass('menu-opened');
    	}
		});
		e.preventDefault();

	});
	}

	if($(window).width()<767){
	$(".main-navigation a.close").on("click", function(e){
        $(".main-navigation").animate({left: "-370px"},
		{
     	complete: function(){
        $(".main-navigation").removeClass('menu-opened');
    	}
		});
		e.preventDefault();

		});
	}

	// Magnific Popup
	// $('.mfp-popup').magnificPopup({
	//   delegate: 'a', // child items selector, by clicking on it popup will open
	//   type: 'image',
	//   mainClass: 'mfp-fade'
	//   // other options
	// });

	// isotope
	$( function() {
	  $('.grid').isotope({
		itemSelector: '.grid-item'
	  });
	});

	$('.selectpicker').selectpicker();


	//LOCAL SCROLL
	jQuery('.scrollnav').localScroll({
		offset: -60
	});
});
