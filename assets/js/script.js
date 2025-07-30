/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

jQuery(function ($) {
	'use strict';

	// Cache frequently used selectors
	var $window = $(window);
	var $document = $(document);
	var $body = $('body');
	var $headerOne = $('.header-one');
	var $headerTwo = $('.header-two');
	var $siteNavigation = $('.site-navigation');
	var $backToTop = $('#back-to-top');

	/* ----------------------------------------------------------- */
	/*  Fixed header
	/* ----------------------------------------------------------- */
	$window.on('scroll', function () {
		// fixedHeader on scroll
		function fixedHeader() {
			var headerTopBar = $('.top-bar').outerHeight();
			var headerOneTopSpace = $headerOne.find('.logo-area').outerHeight();
			var headerOneElement = $headerOne.find('.site-navigation');
			var headerTwoElement = $headerTwo.find('.site-navigation');

			if ($window.scrollTop() > headerTopBar + headerOneTopSpace) {
				headerOneElement.addClass('navbar-fixed');
				$headerOne.css('margin-bottom', headerOneElement.outerHeight());
			} else {
				headerOneElement.removeClass('navbar-fixed');
				$headerOne.css('margin-bottom', 0);
			}
			if ($window.scrollTop() > headerTopBar) {
				headerTwoElement.addClass('navbar-fixed');
				$headerTwo.css('margin-bottom', headerTwoElement.outerHeight());
			} else {
				headerTwoElement.removeClass('navbar-fixed');
				$headerTwo.css('margin-bottom', 0);
			}
		}
		fixedHeader();

		// Count Up
		function counter() {
			var $counterUp = $('.counterUp');
			if ($counterUp.length !== 0) {
				var oTop = $counterUp.offset().top - window.innerHeight;
				if ($window.scrollTop() > oTop) {
					$counterUp.each(function () {
						var $this = $(this);
						var countTo = $this.attr('data-count');
						$({
							countNum: $this.text()
						}).animate({
							countNum: countTo
						}, {
							duration: 1000,
							easing: 'swing',
							step: function () {
								$this.text(Math.floor(this.countNum));
							},
							complete: function () {
								$this.text(this.countNum);
							}
						});
					});
				}
			}
		}
		counter();

		// Add single back-to-top visibility handler
		function backToTopHandler() {
			if ($window.scrollTop() > 300) {
				$backToTop.fadeIn(300);
			} else {
				$backToTop.fadeOut(300);
			}
		}
		backToTopHandler();
	});

	$document.ready(function () {
		// Cache more selectors
		var $navSearch = $('.nav-search');
		var $searchBlock = $('.search-block');
		var $searchClose = $('.search-close');
		var $dropdownToggle = $('.dropdown-toggle');

		// navSearch show/hide
		function navSearch() {
			$navSearch.on('click', function () {
				$searchBlock.fadeIn(350);
			});
			$searchClose.on('click', function () {
				$searchBlock.fadeOut(350);
			});
		}
		navSearch();

		// navbarDropdown
		function navbarDropdown() {
			if ($window.width() < 992) {
				$dropdownToggle.on('click', function () {
					$(this).siblings('.dropdown-menu').animate({
						height: 'toggle'
					}, 300);
				});

				var navbarHeight = $siteNavigation.outerHeight();
				$siteNavigation.find('.navbar-collapse').css('max-height', 'calc(100vh - ' + navbarHeight + 'px)');
			}
		}
		navbarDropdown();

		// Initialize back-to-top click handler
		$backToTop.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: 0
			}, 800);
		});

		// banner-carousel
		function bannerCarouselOne() {
			var $carousel = $('.banner-carousel.banner-carousel-1');
			if (!$carousel.length) return; // Bail out if no matching element

			try {
				$carousel.slick({
					accessibility: false, // Disable ARIA enhancements
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: true,
					dots: true,
					speed: 600,
					arrows: true,
					prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
					nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
				});
				$carousel.slickAnimation();
			} catch (error) {
				console.warn('Error initializing banner carousel 1:', error);
			}
		}
		bannerCarouselOne();

		// banner Carousel Two
		function bannerCarouselTwo() {
			var $carousel = $('.banner-carousel.banner-carousel-2');
			if (!$carousel.length) return; // Bail out if no matching element

			try {
				$carousel.slick({
					accessibility: false, // Disable ARIA enhancements
					fade: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: true,
					dots: false,
					speed: 600,
					arrows: true,
					prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
					nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
				});
			} catch (error) {
				console.warn('Error initializing banner carousel 2:', error);
			}
		}
		bannerCarouselTwo();

		// pageSlider
		function pageSlider() {
			var $carousel = $('.page-slider');
			if (!$carousel.length) return; // Bail out if no matching element

			try {
				$carousel.slick({
					accessibility: false, // Disable ARIA enhancements
					fade: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: true,
					dots: false,
					speed: 600,
					arrows: true,
					prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
					nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
				});
			} catch (error) {
				console.warn('Error initializing page slider:', error);
			}
		}
		pageSlider();

		// Shuffle js filter and masonry
		function projectShuffle() {
			try {
				var $shuffleWrapper = $('.shuffle-wrapper');
				var $shuffleFilter = $('input[name="shuffle-filter"]');
				var $shuffleBtnGroup = $('.shuffle-btn-group label');

				if ($shuffleWrapper.length) {
					var Shuffle = window.Shuffle;
					if (typeof Shuffle === 'undefined') {
						console.warn('Shuffle.js not loaded');
						return;
					}

					var myShuffle = new Shuffle($shuffleWrapper[0], {
						itemSelector: '.shuffle-item',
						sizer: '.shuffle-sizer',
						buffer: 1
					});

					if ($shuffleFilter.length) {
						$shuffleFilter.on('change', function (evt) {
							var input = evt.currentTarget;
							if (input.checked) {
								myShuffle.filter(input.value);
							}
						});
					}

					if ($shuffleBtnGroup.length) {
						$shuffleBtnGroup.on('click', function () {
							$shuffleBtnGroup.removeClass('active');
							$(this).addClass('active');
						});
					}
				}
			} catch (error) {
				console.warn('Error initializing project shuffle:', error);
			}
		}
		projectShuffle();

		// testimonial carousel
		function testimonialCarousel() {
			var $carousel = $('.testimonial-slide');
			if (!$carousel.length) return; // Bail out if no matching element

			try {
				$carousel.slick({
					accessibility: false, // Disable ARIA enhancements
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					speed: 600,
					arrows: false
				});
			} catch (error) {
				console.warn('Error initializing testimonial carousel:', error);
			}
		}
		testimonialCarousel();

		// team carousel
		function teamCarousel() {
			var $carousel = $('.team-slide');
			if (!$carousel.length) return; // Bail out if no matching element

			try {
				$carousel.slick({
					accessibility: false, // Disable ARIA enhancements
					dots: false,
					infinite: false,
					speed: 300,
					slidesToShow: 4,
					slidesToScroll: 2,
					arrows: true,
					prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
					nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
					responsive: [{
							breakpoint: 992,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 3
							}
						},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 2
							}
						},
						{
							breakpoint: 481,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						}
					]
				});
			} catch (error) {
				console.warn('Error initializing team carousel:', error);
			}
		}
		teamCarousel();

		// media popup
		function mediaPopup() {
			try {
				var $galleryPopup = $('.gallery-popup');
				var $popup = $('.popup');

				if ($galleryPopup.length) {
					$galleryPopup.colorbox({
						rel: 'gallery-popup',
						transition: 'slideshow',
						innerHeight: '500'
					});
				}

				if ($popup.length) {
					$popup.colorbox({
						iframe: true,
						innerWidth: 600,
						innerHeight: 400
					});
				}
			} catch (error) {
				console.warn('Error initializing media popup:', error);
			}
		}
		mediaPopup();
	});
});