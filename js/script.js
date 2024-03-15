$(function() {
    //gnb(=nav)에 마우스가 올라가면 bgGnb영역과 .sub(depth2) 메뉴 영역이 나타남.
    //$('selector').method() / $('selector').on('mouseevent')
    /* $('.gnb').on('mouseover focusin', function() {
        $('.bgGnb').slideDown();
        $('.gnb .sub').slideDown(200);
    });
    $('.bgGnb').on('mouseleave', function() {
        $(this).slideUp(300);
        $('.gnb .sub').slideUp(300);
    }) */

    //mobile menu
    //1. 모바일 메뉴를 클릭
    //2. gnb 영역이 왼쪽에서부터 나타나야함.
    //3. gnb 영역을 클릭
    //4. gnb 영역이 왼쪽으로 사라짐  

        $('.menu').on('click', function(){
            $(this).addClass('on'); 
            //css에서 미리 선언해놓은 클래스명을 추가
            //클래스이 추가되는 것이므로 클래스 구분자(.)을 붙이지 않음.
            $('.gnb').animate({
                left: 0
            })
        });
        $('.gnb').on('click', function() {
            $('.menu').removeClass('on'); 
            $('.gnb').animate({
                left: '-100%'
            })
        })
    })