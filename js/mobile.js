<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

// gnb
var swiper = new Swiper(".gnbArea", {
    slidesPerView: 5.4,
    centeredSlides: false,
    loop: true
});

//main
let main_swiper = new Swiper(".main_swiper", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    loop: true, 
    pagination: { 
        el: ".swiper-pagination", 
        clickable: true, 
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev", 
    },
    slidesPerGroup: 1, 
});