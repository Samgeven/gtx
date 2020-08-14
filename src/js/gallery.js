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