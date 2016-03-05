jQuery(function($){
	"use strict";

var TEMPLATE = window.TEMPLATE || {};

/* ==================================================
	Contact Form Validations
================================================== */
	TEMPLATE.ContactForm = function(){
		$('.contact-form').each(function(){
			var formInstance = $(this);
			formInstance.submit(function(){

			var action = $(this).attr('action');

			$("#message").slideUp(750,function() {
			$('#message').hide();

			$('#submit')
				.after('<img src="images/assets/ajax-loader.gif" class="loader" />')
				.attr('disabled','disabled');

			$.post(action, {
				name: $('#name').val(),
				email: $('#email').val(),
				subject: $('#subject').val(),
				comments: $('#comments').val()
			},
				function(data){
					document.getElementById('message').innerHTML = data;
					$('#message').slideDown('slow');
					$('.contact-form img.loader').fadeOut('slow',function(){$(this).remove()});
					$('#submit').removeAttr('disabled');
					if(data.match('success') != null) $('.contact-form').slideUp('slow');

				}
			);
			});
			return false;
		});
		});
	}
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
   Accordion
================================================== */
	TEMPLATE.accordion = function(){
		var accordion_trigger = $('.accordion-heading.accordionize');

		accordion_trigger.delegate('.accordion-toggle','click', function(event){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				$(this).addClass('inactive');
			}
			else{
				accordion_trigger.find('.active').addClass('inactive');
				accordion_trigger.find('.active').removeClass('active');
				$(this).removeClass('inactive');
				$(this).addClass('active');
			}
			event.preventDefault();
		});
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
   Tooltip
================================================== */
	TEMPLATE.toolTip = function(){
		$('a[data-toggle=tooltip]').tooltip();
		$('a[data-toggle=tooltip]').tooltip();
		$('a[data-toggle=popover]').popover({html:true}).on("click", function(e) {
       		e.preventDefault();
       		$(this).focus();
		});
	}
/* ==================================================
   Hero Flex Slider
================================================== */
	TEMPLATE.heroflex = function() {

		$('.flexslider').each(function(){
				var carouselInstance = $(this);
				var carouselAutoplay = carouselInstance.attr("data-autoplay") == 'yes' ? true : false
				var carouselPagination = carouselInstance.attr("data-pagination") == 'yes' ? true : false
				var carouselArrows = carouselInstance.attr("data-arrows") == 'yes' ? true : false
				var carouselDirection = carouselInstance.attr("data-direction") ? carouselInstance.attr("data-direction") : "horizontal"
				var carouselStyle = carouselInstance.attr("data-style") ? carouselInstance.attr("data-style") : "fade"
				var carouselSpeed = carouselInstance.attr("data-speed") ? carouselInstance.attr("data-speed") : "5000"
				var carouselPause = carouselInstance.attr("data-pause") == 'yes' ? true : false

				carouselInstance.flexslider({
					animation: carouselStyle,
					easing: "swing",
					direction: carouselDirection,
					slideshow: carouselAutoplay,
					slideshowSpeed: carouselSpeed,
					animationSpeed: 600,
					initDelay: 0,
					randomize: false,
					pauseOnHover: carouselPause,
					controlNav: carouselPagination,
					//directionNav: carouselArrows,
					prevText: "",
					nextText: ""
				});
		});
	}
/* ==================================================
   Text Flex Slider
================================================== */
	TEMPLATE.textflex = function() {

		$('.textflexslider').each(function(){
				var carouselInstance = $(this);
				var carouselAutoplay = carouselInstance.attr("data-autoplay") == 'yes' ? true : false
				var carouselPagination = carouselInstance.attr("data-pagination") == 'yes' ? true : false
				var carouselArrows = carouselInstance.attr("data-arrows") == 'yes' ? true : false
				var carouselDirection = carouselInstance.attr("data-direction") ? carouselInstance.attr("data-direction") : "horizontal"
				var carouselStyle = carouselInstance.attr("data-style") ? carouselInstance.attr("data-style") : "fade"
				var carouselSpeed = carouselInstance.attr("data-speed") ? carouselInstance.attr("data-speed") : "5000"
				var carouselPause = carouselInstance.attr("data-pause") == 'yes' ? true : false

				carouselInstance.flexslider({
					animation: carouselStyle,
					easing: "swing",
					direction: carouselDirection,
					slideshow: carouselAutoplay,
					slideshowSpeed: carouselSpeed,
					animationSpeed: 600,
					initDelay: 0,
					randomize: false,
					pauseOnHover: carouselPause,
					controlNav: carouselPagination,
					//directionNav: carouselArrows,
					prevText: "",
					nextText: "",
					start:function(slider){
						$(".slide-current-slide").text("0"+(slider.currentSlide+1)+"/");
						$(".slide-total-slides").text("0"+slider.count);
					},
					before:function(slider){
						$(".slide-current-slide").text("0"+(slider.animatingTo+1)+"/");
					}

				});

		});
	}
/* ==================================================
   Flex Slider
================================================== */
	TEMPLATE.galleryflex = function() {
		$('.galleryflex').each(function(){
				var carouselInstance = $(this);
				var carouselAutoplay = carouselInstance.attr("data-autoplay") == 'yes' ? true : false
				var carouselPagination = carouselInstance.attr("data-pagination") == 'yes' ? true : false
				var carouselArrows = carouselInstance.attr("data-arrows") == 'yes' ? true : false
				var carouselDirection = carouselInstance.attr("data-direction") ? carouselInstance.attr("data-direction") : "horizontal"
				var carouselStyle = carouselInstance.attr("data-style") ? carouselInstance.attr("data-style") : "fade"
				var carouselSpeed = carouselInstance.attr("data-speed") ? carouselInstance.attr("data-speed") : "5000"
				var carouselPause = carouselInstance.attr("data-pause") == 'yes' ? true : false

				carouselInstance.flexslider({
					animation: carouselStyle,
					easing: "swing",
					direction: carouselDirection,
					slideshow: carouselAutoplay,
					slideshowSpeed: carouselSpeed,
					animationSpeed: 600,
					initDelay: 0,
					randomize: false,
					pauseOnHover: carouselPause,
					controlNav: carouselPagination,
					directionNav: carouselArrows,
					prevText: "",
					nextText: ""
				});
		});
	}
/* ==================================================
   Owl Carousel
================================================== */
	TEMPLATE.OwlCarousel = function() {
		$('.owl-carousel').each(function(){
				var carouselInstance = $(this);
				var carouselColumns = carouselInstance.attr("data-columns") ? carouselInstance.attr("data-columns") : "1"
				var carouselitemsDesktop = carouselInstance.attr("data-items-desktop") ? carouselInstance.attr("data-items-desktop") : "4"
				var carouselitemsDesktopSmall = carouselInstance.attr("data-items-desktop-small") ? carouselInstance.attr("data-items-desktop-small") : "3"
				var carouselitemsTablet = carouselInstance.attr("data-items-tablet") ? carouselInstance.attr("data-items-tablet") : "2"
				var carouselitemsMobile = carouselInstance.attr("data-items-mobile") ? carouselInstance.attr("data-items-mobile") : "1"
				var carouselAutoplay = carouselInstance.attr("data-autoplay") ? carouselInstance.attr("data-autoplay") : false
				var carouselPagination = carouselInstance.attr("data-pagination") == 'yes' ? true : false
				var carouselArrows = carouselInstance.attr("data-arrows") == 'yes' ? true : false
				var carouselSingle = carouselInstance.attr("data-single-item") == 'yes' ? true : false
				var carouselStyle = carouselInstance.attr("data-style") ? carouselInstance.attr("data-style") : "fade"

				carouselInstance.owlCarousel({
					items: carouselColumns,
					autoPlay : carouselAutoplay,
					navigation : carouselArrows,
					pagination : carouselPagination,
					itemsDesktop:[1199,carouselitemsDesktop],
					itemsDesktopSmall:[979,carouselitemsDesktopSmall],
					itemsTablet:[768,carouselitemsTablet],
					itemsMobile:[479,carouselitemsMobile],
					singleItem:carouselSingle,
					navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
					stopOnHover: true,
					lazyLoad: true,
					transitionStyle: 'carouselStyle'
				});
		});
	}
/* ==================================================
   Animated Counters
================================================== */
	TEMPLATE.Counters = function() {
		$('.counters').each(function () {
			$(".timer .count").appear(function() {
			var counter = $(this).html();
			$(this).countTo({
				from: 0,
				to: counter,
				speed: 2000,
				refreshInterval: 60
				});
			});
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
   Pricing Tables
================================================== */
	var $tallestCol;
	TEMPLATE.pricingTable = function(){
		$('.pricing-table').each(function(){
			$tallestCol = 0;
			$(this).find('> div .features').each(function(){
				($(this).height() > $tallestCol) ? $tallestCol = $(this).height() : $tallestCol = $tallestCol;
			});
			if($tallestCol == 0) $tallestCol = 'auto';
			$(this).find('> div .features').css('height',$tallestCol);
		});
	}
/* ==================================================
   Init Functions
================================================== */
$(document).ready(function(){
	TEMPLATE.ContactForm();
	TEMPLATE.scrollToTop();
	TEMPLATE.accordion();
	TEMPLATE.toggle();
	TEMPLATE.toolTip();
	TEMPLATE.OwlCarousel();
	TEMPLATE.SuperFish();
	TEMPLATE.Counters();
	TEMPLATE.IsoTope();
	TEMPLATE.StickyHeader();
	TEMPLATE.textflex();
	TEMPLATE.heroflex();
	TEMPLATE.galleryflex();
	TEMPLATE.pricingTable();
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

	// custom filters for owl carousel
    var options = {
        navigation: true,
        pagination: false
    };
    $("#custom-owl-slider").owlCarousel(options);

    function showProjectsbyCat(cat) {
        var owl = $("#custom-owl-slider").data('owlCarousel');

        owl.addItem('<div/>', 0);

        var nb = owl.itemsAmount;
        for (var i = 0; i < (nb - 1); i++) {
            owl.removeItem(1);
        }

        if (cat == 'all') {
            $('#custom-owl-copy .custom-owl-item').each(function () {
                owl.addItem($(this).clone());
            });
        } else {
            $('#custom-owl-copy .custom-owl-item.' + cat).each(function () {
                owl.addItem($(this).clone());
            });
        }
        owl.removeItem(0);
    }
    $('#custom-owl-slider .custom-owl-item').clone().appendTo($('#custom-owl-copy'));
    $('#custom-owl-filters a').on("click", function (e) {
		e.preventDefault();
        $('#custom-owl-filters a').removeClass('owl-active');

        cat = $(this).attr('ID');
        $(this).addClass('owl-active');
        showProjectsbyCat(cat);
		$('#custom-owl-slider .owl-buttons .owl-prev').prepend(' <i class="fa fa-angle-left"></i> ');
		$('#custom-owl-slider .owl-buttons .owl-next').append(' <i class="fa fa-angle-right"></i>');
    });
		$('#custom-owl-slider .owl-buttons .owl-prev').prepend(' <i class="fa fa-angle-left"></i> ');
		$('#custom-owl-slider .owl-buttons .owl-next').append(' <i class="fa fa-angle-right"></i>');

	$('.selectpicker').selectpicker();

	 // Thumbnail Flex slider
 	$('.thumbnail-flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails",
	prevText:"",
	nextText:"",
  });


	//LOCAL SCROLL
	jQuery('.scrollnav').localScroll({
		offset: -60
	});

	var sections = jQuery('section');
	var navigation_links = jQuery('.scrollnav a');
	sections.waypoint({
		handler: function(direction) {
			var active_section;
			active_section = jQuery(this);
			if (direction === "up") active_section = active_section.prev();
			var active_link = jQuery('.scrollnav a[href="#' + active_section.attr("id") + '"]');
			navigation_links.removeClass("current");
			active_link.addClass("current").delay(1500);
		},
		offset: 150
	});

});
