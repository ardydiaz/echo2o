
(function($){
	$(document).ready(function(){
	    new WOW().init();
		smoothScroll.init();

		$('.dropdown').on('click', function (e) {
            e.preventDefault();
            // Toggle the arrow rotation
            $(this).find('.dropdown-arrow').toggleClass('rotated');
            // Show/hide the dropdown
            $(this).find('.dropdown-menu').slideToggle();
        });

        var swiper = new Swiper(".blogs-slider", {
			loop:true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			grabCursor:true,
			spaceBetween: 20,
			breakpoints: {
			   640: {
				 slidesPerView: 1,
			   },
			   768: {
				 slidesPerView: 2,
			   },
			   991: {
				 slidesPerView: 3,
			   },
			},
		 });

		 var swiper2 = new Swiper(".project-slider", {
			loop:true,
			autoplay: {
				delay: 1500,
				disableOnInteraction: false,
			},
			grabCursor:true,
			spaceBetween: 20,
			breakpoints: {
			   640: {
				 slidesPerView: 1,
			   },
			   768: {
				 slidesPerView: 2,
			   },
			   991: {
				 slidesPerView: 3,
			   },
			},
		 });

		const images = $('.banner-image div').map(function(){
           return $(this).data("src");
		}).get();

		$(".banner-image").backstretch(images, {
			duration: 4000, // 4 seconds per image
			fade: 750,
			pixelRatio: "auto",
			transitionEasing: "easeInOutQuad"
		}).on("backstretch.after", function (e, instance, index) {
			$(".banner-caption").removeClass("active");
			$(".banner-caption").eq(index).addClass("active");
		});
		
		// Fixed header
		//-----------------------------------------------
		$(window).scroll(function() {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		$(window).load(function() {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});
		
	   $('#quote-carousel').carousel({
		 pause: true,
		 interval: 4000,
	   });
		//Scroll Spy
		//-----------------------------------------------
		if($(".scrollspy").length>0) {
			$("body").addClass("scroll-spy");
			$('body').scrollspy({ 
				target: '.scrollspy',
				offset: 152
			});
		}

		//Smooth Scroll
		//-----------------------------------------------
		if ($(".smooth-scroll").length>0) {
			$('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top-151
						}, 1000);
						return false;
					}
				}
			});
		}

		// Animations
		//-----------------------------------------------
		if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function() {
				var $this = $(this),
				animationEffect = $this.attr("data-animation-effect");
				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					$this.appear(function() {
						setTimeout(function() {
							$this.addClass('animated object-visible ' + animationEffect);
						}, 400);
					}, {accX: 0, accY: -130});
				} else {
					$this.addClass('object-visible');
				}
			});
		};

		// Isotope filters
		//-----------------------------------------------
		if ($('.isotope-container').length>0) {
			$(window).load(function() {
				$('.isotope-container').fadeIn();
				var $container = $('.isotope-container').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.6s',
					filter: "*"
				});
				// filter items on button click
				$('.filters').on( 'click', 'ul.nav li a', function() {
					var filterValue = $(this).attr('data-filter');
					$(".filters").find("li.active").removeClass("active");
					$(this).parent().addClass("active");
					$container.isotope({ filter: filterValue });
					return false;
				});
			});
		};

		//Modal
		//-----------------------------------------------
		if($(".modal").length>0) {
			$(".modal").each(function() {
				$(".modal").prependTo( "body" );
			});
		}

	}); // End document ready
})(this.jQuery);