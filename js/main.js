document.addEventListener('DOMContentLoaded', () => {

	// Buger-menu
	const burgerButton = document.getElementById('burger');
	const burgerMenu = document.getElementById('menu');
	const toggleMenu = function() {
		burgerMenu.classList.toggle('is-active');
		burgerButton.classList.toggle('is-active');
	}

	burgerButton.addEventListener('click', function(e) {
		e.stopPropagation();
		toggleMenu();
	});

	document.addEventListener('click', function(e) {
		const target = e.target;
		const its_menu = target == burgerMenu || burgerMenu.contains(target);
		const its_burger = target == burgerButton;
		const menu_is_active = burgerMenu.classList.contains('is-active');

		if (!its_menu && !its_burger && menu_is_active) {
			toggleMenu();
		}
	});



	// search
	const searchButton = document.getElementById('button-search');
	const searchForm = document.getElementById('search-form');
	const toggleSearch = function() {
		searchForm.classList.toggle('is-active');
		searchButton.classList.toggle('is-active');
	}

	searchButton.addEventListener('click', function(e) {
		e.stopPropagation();
		toggleSearch();
	});

	document.addEventListener('click', function(e) {
		const target = e.target;
		const its_menu = target == searchForm || searchForm.contains(target);
		const its_burger = target == searchButton;
		const menu_is_active = searchForm.classList.contains('is-active');

		if (!its_menu && !its_burger && menu_is_active) {
			toggleSearch();
		}
	});


	document.querySelectorAll('.header-down__button').forEach(function(headerDown) {
		headerDown.addEventListener('click', function(headerDownList) {
			const path = headerDownList.currentTarget.dataset.path

			if (document.querySelector(`[data-target="${path}"]`).classList.contains('is-active') || !(document.querySelector('.header-dropdown'))) {
				document.querySelector(`[data-path="${path}"]`).classList.remove('is-active');
				document.querySelector(`[data-target="${path}"]`).classList.remove('is-active');
			} else {
				document.querySelectorAll('.header-dropdown').forEach(function(headerDownContent) {
					headerDownContent.classList.remove('is-active')
				});
				document.querySelectorAll('.header-down__button').forEach(function(headerDownContent) {
					headerDownContent.classList.remove('is-active');
				})
				document.querySelector(`[data-target="${path}"]`).classList.add('is-active');
				document.querySelector(`[data-path="${path}"]`).classList.add('is-active');
			};
		})
	});



	// плавный переход по странице
	const anchors = document.querySelectorAll('a[href*="#"]');

	for (let anchor of anchors) {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()

			const blockID = anchor.getAttribute('href').substr(1)

			document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
			})
		})
	};



	// Swiper-HERO
	const swiperHero = new Swiper('#hero-swiper', {
		effect: 'fade',
		autoplay: {
			delay: 6000,
			disableOnInteraction: false,
		},

		loop: true,
	});



	// Swiper-GALLERY
	const swiperGallery = new Swiper('#gallery-swiper', {
		keyboard: {
			enabled: true,
			onlyInViewport: true,
			pageUpDown: true,
		},
		pagination: {
		  el: '.gallery-swiper.swiper-pagination',
		  type: 'fraction',
		},

		navigation: {
		  nextEl: '.gallery-swiper.swiper-button-next',
		  prevEl: '.gallery-swiper.swiper-button-prev',
		},

		lazy: {
		  loadPrevNext: true,
		},

		breakpoints: {
			320: {
				slidesPerView: 1,
				grid: {
					rows: 1,
				},

				spaceBetween: 30,
				slidesPerGroup: 1,
			},


			600: {
				slidesPerView: 2,
				grid: {
					rows: 2,
				},

				spaceBetween: 34,
				slidesPerGroup: 2,
			},

			1200: {
				slidesPerView: 3,
				grid: {
					rows: 2,
			  	},
			  	spaceBetween: 50,
			  	slidesPerGroup: 3,
			},
		}
	});



	// choices
	const element = document.querySelector('#gallery__choises');

	const choices = new Choices(element, {
		searchEnabled: false,
		shouldSort: false,
		itemSelectText: '',
	});



	// Option accordion
	$( function() {
		$( "#catalog__accordion" ).accordion({
			heightStyle: "content",

		  	activate: function (event, ui) {
				if(ui.newPanel) {
			  		const searchPainter = ui.newPanel.find('.is-active .accordion__item .path-btn:eq(0)');

					if (searchPainter) {
						searchPainter.click();
					}
				}
			},
		});
	});



	// Opening of the accordion by country

	document.querySelectorAll('.country__btn').forEach(function(countryBtn) {
		countryBtn.addEventListener('click', function(artistList) {
			const path = artistList.currentTarget.dataset.path

			document.querySelectorAll('.accordion__list').forEach(function(artistContent) {
				artistContent.classList.remove('is-active')
			});

			document.querySelectorAll('.country__btn').forEach(function(countryContent) {
				countryContent.classList.remove('is-active')
			});

			document.querySelector(`[data-path="${path}"]`).classList.add('is-active');

			document.querySelectorAll(`[data-target="${path}"]`).forEach(function(artistItems) {
				artistItems.classList.add('is-active');
			});

			const searchPainter =  document.querySelector('.ui-accordion-content-active .is-active .path-btn');
			if (searchPainter) {
				searchPainter.click();
		  	}
		});
	});



	// Opening information about the artist

	document.querySelectorAll('.path-btn').forEach(function(artistBtn) {
		artistBtn.addEventListener('click', function(artistItem) {
			const path = artistItem.currentTarget.dataset.path;

			document.querySelectorAll('.painter').forEach(function(artistInfo) {
				artistInfo.classList.remove('is-active')
			});

			document.querySelectorAll('.path-btn').forEach(function(artistName) {
				artistName.classList.remove('is-active')
			});

			document.querySelector(`[data-target="${path}"]`).classList.add('is-active');

			document.querySelector(`[data-path="${path}"]`).classList.add('is-active');
		})
	})



	// Swiper-event
	const sliderEvents = document.querySelector('#events-swiper');

	let swiperEvents;

	function mobileSliderEvents() {
		if (window.innerWidth <= 600 && sliderEvents.dataset.mobile == 'false') {
			swiperEvents = new Swiper(sliderEvents, {
				slidesPerView: 1,
				spaceBetween: 30,
				loop: true,
				pagination: {
					el: '.events-swiper.swiper-pagination',
					clickable: true,
				},
			});

			sliderEvents.dataset.mobile = 'true';
		}

		if (window.innerWidth > 600) {
			sliderEvents.dataset.mobile = 'false';

			if (sliderEvents.classList.contains('swiper-initialized')) {
				swiperEvents.destroy();
			}
		}
	}

	mobileSliderEvents();

	window.addEventListener('resize', () => {
		mobileSliderEvents();
	});



	// Button Все события
	document.querySelector('#event-btn').addEventListener('click', function() {
		document.querySelector('#events-open').classList.add('is-active');
		document.querySelector('#event-btn').classList.add('is-disabled');
	});



	// Swiper-publication
	const sliderPublication = document.querySelector('#publication-swiper');

	let swiperPublication;

	function desktopSliderPublication() {
		if (window.innerWidth > 600 && sliderPublication.dataset.mobile == 'false') {
			swiperPublication = new Swiper(sliderPublication, {
				keyboard: {
					enabled: true,
					onlyInViewport: true,
					pageUpDown: true,
				},

				pagination: {
					el: '.publication-swiper.swiper-pagination',
					type: "fraction",
				},

				navigation: {
					nextEl: '.publication-swiper.swiper-button-next',
					prevEl: '.publication-swiper.swiper-button-prev',
				},

				breakpoints: {
					601: {
						slidesPerView: 2,
						spaceBetween: 34,
						slidesPerGroup: 2,
					},

					901: {
						slidesPerView: 2,
						spaceBetween: 49,
						slidesPerGroup: 2,
					},

					1201: {
						slidesPerView: 3,
						spaceBetween: 50,
						slidesPerGroup: 3,
					}
				},

				grabCursor: true,
				preloadImages: false,
				watchOwerflow: true,
			});

			sliderPublication.dataset.mobile = 'true';
		}

		if (window.innerWidth <= 600) {
			sliderPublication.dataset.mobile = 'false';

			if (sliderPublication.classList.contains('swiper-initialized')) {
				swiperPublication.destroy();
			}
		}
	}

	desktopSliderPublication();

	window.addEventListener('resize', () => {
		desktopSliderPublication();
	});



	// Publication checkbox
	document.querySelector('.publication__headline').addEventListener('click', function(event) {
		const checkboxList = document.querySelector('.publication__list');

		if (checkboxList.classList.contains('publication__list--show')) {
			checkboxList.classList.remove('publication__list--show');
		} else {
			document.querySelector('.publication__list').classList.add('publication__list--show');
		}

		event.currentTarget.classList.toggle('publication__headline--active');
	});

	document.querySelectorAll('.publication__input').forEach(function(checkboxInput) {
		const checkboxItem = checkboxInput.closest('.publication__item');

		if (checkboxInput.checked) {
			checkboxItem.classList.add('publication__item--active');
		}
	});

	document.querySelectorAll('.publication__input').forEach(function(checkboxInput) {
		checkboxInput.addEventListener('click', function(eventCheck) {
			const checkboxItem = eventCheck.currentTarget.closest('.publication__item');
			checkboxItem.classList.toggle('publication__item--active');
		});
	});



	// project-tooltip
	tippy('#tooltip-1', {
		content: 'Пример современных тенденций - современная методология разработки',
		duration: 400,
		delay: [0, 300],
		maxWidth: 265,
		theme: 'ametist',

	});

	tippy('#tooltip-2', {
		content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
		duration: 400,
		delay: [0, 300],
		maxWidth: 265,
		theme: 'ametist',
	});

	  tippy('#tooltip-3', {
		content: 'В стремлении повысить качество',
		duration: 400,
		interactiveDebounce: 75,
		maxWidth: 265,
		theme: 'ametist',
	});



	// Swiper-Project
	const swiperProject = new Swiper('#project-swiper', {

		navigation: {
			nextEl: '.project-swiper.swiper-button-next',
			prevEl: '.project-swiper.swiper-button-prev',
		},

		loop: true,

		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			},


			601: {
				slidesPerView: 2,
				spaceBetween: 34,

			},

			901: {
				slidesPerView: 2,
				spaceBetween: 50,
			},

			1201: {
				slidesPerView: 3,
				spaceBetween: 50,

			},
		}
	});

	// inputmask
	let selector = document.querySelector('.callback__input_tel');

	let im = new Inputmask("+7 (999) 999-99-99");
	im.mask(selector);

	new JustValidate('#callback', {
		rules: {
			tel: {
				required: true,
				function: (name, value) => {
					const phone = selector.inputmask.unmaskedvalue()
					return Number(phone) && phone.length === 10
				}
			},

			name: {
				required:true,
				minLength: 2,
				maxLength: 30,
				strength: {
					custom: '^[а-яёА-ЯЁ]+$'
				}
			},


		},
		messages: {
		  	name: {
				required: 'Введите ваше имя',
				minLength: 'Имя должно состоять хотя бы из 2х букв',
				strength: 'Имя должно состоять из букв кирилицы без пробелов',
		  	},

			tel: {
				required: 'Введите ваш номер телефона',
				function: 'Введите номер телефона полностью',
		  	},
		},

		submitHandler: function (form, values, ajax) {

			ajax({
				url: '../mail.php',
				method: 'POST',
				data: values,
				async: true,
		  	});
			let button = document.querySelector('.callback__btn');
			let message = document.getElementById('send-mail');
			button.setAttribute('disabled', 'disabled');
			message.classList.add('is-open');

			form.reset();

			setTimeout(getFlash, 3000)
			function getFlash() {
				button.removeAttribute('disabled');
				message.classList.remove('is-open');
			}
		},
	});

	// MODAL window
	const modal = new GraphModal();
});
