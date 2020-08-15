// Подменю

$('.open-submenu-js').click(function() {
    $('.header-catalogue-sub').toggleClass('is-opened-js');
    $('.header-catalogue__arrow').toggleClass('toggled');
})
/*
$('.open-submenu-js').on('focusout', function () {
    $('.header-catalogue-sub').removeClass('is-opened-js');
});
*/

$('.menu-back-js').click(function() {
	$('.header-catalogue-sub').toggleClass('is-opened-js');
})

// Мобильное меню

$(function(){
	$('.js-menu-trigger').click(function(){
		$('body').toggleClass('menu-opened'); // toggling mob menu on hamburger
	});
	$('.overlay').click(function(){
		$('body').removeClass('menu-opened'); // removing sidebar on click outside
    })
});
$(document).ready(function(){
    $('.slider-pop-js').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        arrows: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              arrows: false,
            },
          },
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 3,
              variableWidth: true,
              arrows: false,
            },
          }
        ],
      });
    $('.good-slider').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        swipe: false,
        responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: true,
            fade: false,
          }
        }],
      });
});

$('.good-gallery-preview__item').click(function() {
  $('.good-slider').slick('slickGoTo',$(this).index());
  $('.good-gallery-preview__item').removeClass('preview-active');
  $(this).addClass('preview-active');
})
// Галерея

$(document).ready(function() {

    $("#lightgallery").lightGallery({
        selector: '.good-gallery-item__link',
        thumbnail: true,
        toogleThumb: false
    });

    // Прокрутка галереи в разрешении от 768px до 992px

    $(window).scroll(function() {
        let galleryTop = $(".good-gallery_spc");
        let topOffset = window.pageYOffset;
        let blockHeight = parseInt($('.good-info-descr_wrp').css('height'), 10); // расчитываем высоту правого блока с текстом
        let maxOffset = blockHeight - 132; // высчисляем максимальный офсет. 132 - высота прокрутки от хэдера
        galleryTop.css("top", topOffset < maxOffset ? topOffset : maxOffset);
    })
});
$("#contactsForm, #dealerForm").validate({
	rules: {
		'contacts-mail': {
			required: true,
			email: true,
		},
		'contacts-phone': {
			required: true,
			mobileRU: true,
		},
		'dealer-mail': {
			required: true,
			email: true,
		},
		'dealer-phone': {
			required: true,
			mobileRU: true,
		},
	},
	messages: {
		'contacts-mail': {
			email: "Мы не сможем прислать письмо по этому адресу",
			required: "Мы не сможем прислать письмо по этому адресу",
		},
		'contacts-phone': {
			mobileRU: "Мы не сможем дозвониться по этому номеру",
			required: "Мы не сможем дозвониться по этому номеру",
		},
		'dealer-mail': {
			email: "Мы не сможем прислать письмо по этому адресу",
			required: "Мы не сможем прислать письмо по этому адресу",
		},
		'dealer-phone': {
			mobileRU: "Мы не сможем дозвониться по этому номеру",
			required: "Мы не сможем дозвониться по этому номеру",
		},
		contacts: {
			onsubmit: "Отправлено",
		}
	}
});
// Кастомные маркеры для яндекс карт

ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7
    }), 
    myPlacemark1 = new ymaps.Placemark([55.76, 37.64], {
        balloonContent: 'Маленькая иконка'
    }, {
        iconLayout: 'default#image',
        iconImageClipRect: [[0,0], [36, 47]],
        iconImageHref: '././dist/img/ui/pin.svg',
        iconImageSize: [36, 47],
        iconImageOffset: [-15, -27],
    });
    myMap.geoObjects.add(myPlacemark1);
}
// Кастомные селекты

$(document).ready(function(){
  $('.where-to-buy__select').styler({
      selectVisibleOptions: 6,
  })
})