/* notice */
$(document).ready(function () {
    var height = $(".notice").height(); //공지사항의 높이값을 구해주고~~
    var num = $(".rolling li").length; // 공지사항의 개수를 알아볼수 있어요! length라는 것으로!
    var max = height * num; //그렇다면 총 높이를 알 수 있겠죠 ?
    var move = 0; //초기값을 설정해줍니다.
    function noticeRolling() {
        move += height; //여기에서 += 이라는 것은 move = move + height 값이라는 뜻을 줄인 거에요.
        $(".rolling").animate({ "top": -move }, 1100, function () { // animate를 통해서 부드럽게 top값을 올려줄거에요.
            if (move >= max) { //if문을 통해 최대값보다 top값을 많이 올렸다면 다시 !
                $(this).css("top", 0); //0으로 돌려주고~
                move = 0; //초기값도 다시 0으로!
            };
        });
    };
    noticeRollingOff = setInterval(noticeRolling, 2000); //자동롤링답게 setInterval를 사용해서 1000 = 1초마다 함수 실행!!
    $(".rolling").append($(".rolling li").first().clone()); //올리다보면 마지막이 안보여서 clone을 통해 첫번째li 복사!

    $(".rolling_stop").click(function () {
        clearInterval(noticeRollingOff); //stop을 누르면 clearInterval을 통해 자동롤링을 해제합니다.
    });
    $(".rolling_start").click(function () {
        noticeRollingOff = setInterval(noticeRolling, 1000); //다시 start를 누르면 자동롤링이 실행하도록 !!
    });
});
/* main slide */

let main_swiper = new Swiper(".main_swiper", {
    slidesPerView: 1, //동시에 표시할 슬라이드 수
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
    slidesPerGroup: 1, // 한 번에 이동할 슬라이드의 수를 설정
});

/* brand slide */ 

let brand_swiper = new Swiper('.brand_swiper_inner', {
    slidesPerView: 5, //동시에 표시할 슬라이드 수
    spaceBetween: 0, //슬라이드 간 간격
    loop: true, //루프기능
    pagination: { //페이지 표시를 구현하기위한 설정
        el: ".swiper-pagination", //페이지 표시를 나타낼 HTML 요소의 클래스 지정
        clickable: true, //페이지 표시를 클릭하여 해당 슬라이드로 이동가능여부
    },
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

        
        const totalMillisecondsInADay = 24 * 60 * 60 * 1000;
        const timeLeft = saleEndDate - now;
        const remainingTimeInADay = timeLeft % totalMillisecondsInADay;
        const elapsedMilliseconds = totalMillisecondsInADay - remainingTimeInADay;

        const remainingMilliseconds = timeLeft % totalMillisecondsInADay;

        const remainingPercentage = (remainingMilliseconds / totalMillisecondsInADay) * 100;

     
        const actualWidth = Math.min(100, Math.max(0, remainingPercentage));
        const widthPercentage = 100 - actualWidth;
        
        // #line의 width를 조절합니다.
        const line = document.getElementById("line");
        line.style.width = widthPercentage + "%";









        
        // 시간, 분, 초를 계산합니다.
        const hoursLeft = Math.floor(remainingTimeInADay / (1000 * 60 * 60));
        const minutesLeft = Math.floor((remainingTimeInADay % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((remainingTimeInADay % (1000 * 60)) / 1000);

        // 결과를 출력합니다.
        //console.log("현재 시간:", now);
        //console.log("세일 종료일:", saleEndDate);
        //console.log("남은 시간:", hoursLeft, "시간", minutesLeft, "분", secondsLeft, "초");

   




        
        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerHTML = `<span class= "timetext">남은시간</span> <span>${hours}: ${minutes}: ${seconds}</span>`;

        } else {
            document.getElementById("countdown").innerHTML = "타임 세일 종료!";
        }
    }

    // 초기 업데이트
    updateCountdown();

    // 1초마다 업데이트
    setInterval(updateCountdown, 1000);
});








/*
var line = document.getElementById('line');
var totalLength = 216; // 선의 총 길이
var totalTime = 0; // 경과된 시간
var duration = 86400; // 설정한 시간 (초)
var speed = totalLength / (duration * 1000); // 선의 속도 (초당 이동 거리)
var intervalId; // setInterval() 함수의 반환 값

// 매 0.1초마다 호출되어 선을 그리는 함수
function drawLineContinuously() {
    totalTime += 100; // 0.1초마다 호출되므로 시간 증가
    var currentLength = speed * totalTime; // 현재 길이 계산
    if (currentLength <= totalLength) {
        line.style.width = currentLength + 'px'; // 선의 길이를 변경하여 그립니다.
    } else {
        clearInterval(intervalId); // 설정한 시간이 지나면 그리기 중지
    }
}
 */
// 설정한 시간 동안 선을 그리는 함수를 호출합니다.
/* intervalId = setInterval(drawLineContinuously, 100); // 0.1초마다 호출
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
}); */


// 브랜드 소개
// document.addEventListener("DOMContentLoaded", function () {
//     var slides = document.querySelectorAll('.swiper-slide');

//     slides.forEach(function (slide) {
//         var img = slide.querySelector('img');

//         if (img) {
//             var originalSrc = img.src;
//             var newSrc = originalSrc.replace('./img', './img_on').replace('.png', '_on.png');

//             slide.addEventListener('mouseenter', function () {
//                 // 호버 시 이미지 변경
//                 img.src = newSrc;
//             });

//             slide.addEventListener('mouseleave', function () {
//                 // 마우스가 벗어날 때 원래 이미지로 변경
//                 img.src = originalSrc;
//             });
//         }
//     });
// });