/* Swiper JS */
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

let main_swiper = new Swiper(".main_swiper", {
    slidesPerView: 1, //동시에 표시할 슬라이드 수
    spaceBetween: 10, //슬라이드 간 간격
    loop: true, //루프기능
    pagination: { //페이지 표시를 구현하기위한 설정
        el: ".swiper-pagination", //페이지 표시를 나타낼 HTML 요소의 클래스 지정
        clickable: true, //페이지 표시를 클릭하여 해당 슬라이드로 이동가능여부
    },
    navigation: { //다음 슬라이드로 이동하기 위한 버튼 표시
        nextEl: ".swiper-button-next", //다음 슬라이드 버튼
        prevEl: ".swiper-button-prev", //이전 슬라이드 버튼
    },
    /* autoplay: {
    delay: 3000, // 넘김 간격을 설정 (3초)
    disableOnInteraction: false, // 사용자의 상호 작용 후에도 자동 재생 여부 (false일때 재생)
    }, */
    slidesPerGroup: 1, // 한 번에 이동할 슬라이드의 수를 설정
});
let brand_swiper = new Swiper('.brand_swiper_inner', {
    slidesPerView: 5, //동시에 표시할 슬라이드 수
    spaceBetween: 0, //슬라이드 간 간격
    loop: true, //루프기능
    pagination: { //페이지 표시를 구현하기위한 설정
        el: ".swiper-pagination", //페이지 표시를 나타낼 HTML 요소의 클래스 지정
        clickable: true, //페이지 표시를 클릭하여 해당 슬라이드로 이동가능여부
    },
    navigation: { //다음 슬라이드로 이동하기 위한 버튼 표시
        nextEl: ".swiper-button-next", //다음 슬라이드 버튼
        prevEl: ".swiper-button-prev", //이전 슬라이드 버튼
    },
    /* autoplay: {
    delay: 3000, // 넘김 간격을 설정 (3초)
    disableOnInteraction: false, // 사용자의 상호 작용 후에도 자동 재생 여부 (false일때 재생)
    }, */
    slidesPerGroup: 1, // 한 번에 이동할 슬라이드의 수를 설정
});
document.querySelector(".category_swiper_inner").style.display = "block";
let boxbSwiper = new Swiper(".category_swiper_inner", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    loopedSlides: 3,
    slidesPerGroup: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    /* autoplay: {
    delay: 3000, // 넘김 간격을 설정 (3초)
    disableOnInteraction: false, // 사용자의 상호 작용 후에도 자동 재생 여부 (false일때 재생)
    }, */
});

document.addEventListener("DOMContentLoaded", function () {
    // small_box의 자식 요소들을 가져옵니다.
    let smallBoxChildren = document.querySelector('.small_box').children;

    // 각 카테고리에 클릭 이벤트 리스너를 추가합니다.
    for (let i = 0; i < smallBoxChildren.length; i++) {
        smallBoxChildren[i].addEventListener("click", function () {
            // 모든 category_swiper와 small_box 자식에서 "on" 클래스를 제거합니다.
            removeOnClassFromAll();

            // 해당하는 category_swiper를 가져와 "on" 클래스를 추가합니다.
            let categorySwiper = document.querySelector('.category_swiper' + this.className.slice(-2));
            if (categorySwiper) {
                categorySwiper.classList.add('on');
            }

            // 클릭된 카테고리에 "on" 클래스를 추가합니다.
            this.classList.add('on');
        });
    }
    function removeOnClassFromAll() {
        // 모든 category_swiper와 small_box 자식에서 "on" 클래스를 제거합니다.
        let allElements = document.querySelectorAll('.category_swiper, .small_box > div');
        allElements.forEach(function (element) {
            element.classList.remove('on');
        });
    }
    // 추가: on 클래스가 추가된 후에 실행될 초기화 로직
    function initializeAfterOnClassAdded(element) {
        // 여기에 초기화 로직을 추가하세요.
        // 예를 들어, Swiper 초기화 또는 다른 작업을 수행할 수 있습니다.
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // 타임 세일 종료 날짜와 시간 (YYYY, MM, DD, HH, MM, SS)
    const saleEndDate = new Date(2024, 1, 31, 23, 59, 59);

    function updateCountdown() {
        const now = new Date();
        const timeLeft = saleEndDate - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerHTML = `<span class= "day">D-${days}</span> <span>${hours}: ${minutes}: ${seconds}</span>`;
        } else {
            document.getElementById("countdown").innerHTML = "타임 세일 종료!";
        }
    }

    // 초기 업데이트
    updateCountdown();

    // 1초마다 업데이트
    setInterval(updateCountdown, 1000);
});


var reviewSwiper = new Swiper(".reView", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000, // 넘김 간격을 설정 (3초)
        disableOnInteraction: false
    }
});



