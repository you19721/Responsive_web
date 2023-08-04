// 제이쿼리 사용
// 제이쿼리 선언문
// $();
// $(function(){});

// 제이쿼리는 달러 사인 기호를 제이쿼리 프로그램으로 대입해서 사용한다.
// 그런데 $ 달러사인 기호가 외부에 노출되어 있어서 다른 제이쿼리를 사용하는
// 라이브러리, 플러그인등과 달러사인 기호가 충돌 위험성이 있다.
$(function(){
    console.log( $ );
});

// 충돌을  피하는 방법
// 달러사인을 내부 변수로 사용하면 완전히 막을 수있다.
// ();

// (function(){});
// 즉시실행함수 === 즉시표현함수식(IIFE) 이피
(function($){ // 달러사인 변수에게 전달하여 달러사인이 제이쿼리 프로그램을 실행한다.(매개변수)

    // $(window).scroll()
    // $(window).scroll(function(){})

    // 윈도우 스크롤 이벤트
    let newScr = 0;
    let oldScr = newScr;

    $(window).scroll(function(){
        // 콘솔창에서 로그(log)로 기록 확인하기 : 스크롤 탑값을 확인하기 
        // console.log(  $(window).scrollTop()  );
        // 스크롤 탑값이 100픽셀이상 이동하면 
        // 헤더를 위로 부드럽게 숨긴다.
        // 스크롤 탑값이 100픽셀 미만이면 헤더를 아래로 부드럽게 보이게한다.
        // if( $(window).scrollTop() >= 100 ){
        //     // 헤더를 위로 부드럽게 숨긴다. 스타일로 설정 가상 클래스
        //     $('#header').addClass('on');    // 추가클래스
        // }
        // else{ // 아니면(100픽셀 미만이면)
        //     // 헤더를 아래로 부드럽게 보이게한다. 스타일로 설정 가상 클래스
        //     $('#header').removeClass('on'); // 삭제클래스
        // }

        // 스크롤 방향을 개발하기
        // 스크롤을 아래로 내려가면  헤더를 부드럽게숨긴다.
        // 스크롤을 위로 올라가면  헤더를 부드럽게 내린다.

        // 1. 변수를 2개 만든다.  new 새로운 스크를탑값 저장  old new 변수에 저장된 값을 보관한다.
        // new = $(윈도우).스크롤탑값();
        // new - old 
        // old = new;

        newScr = $(window).scrollTop();  // 새로운 스크롤 값() 저장
            // console.log(  newScr-oldScr );  // 양수이면 아래로  음수이면 위로
            if( newScr-oldScr > 0 ){ // 아래로 DOWN
                $('#header').addClass('on');
            }
            if( newScr-oldScr < 0 ){ // 위로 UP
                $('#header').removeClass('on');
            }
        oldScr = newScr;  // 이전의 스크롧 값


        // 하단에 goTop 버튼 
        // 상단에 100 픽셀이상 스크롤하면 부드럽게 보이고(페이드 인) fadeIn(1000)
        // 상단에 100 픽셀미만 스크롤하면 부드럽게 사라진다.(페이드 아웃) fadeOut(1000)    
        if( $(window).scrollTop() >= 100 ){
            $('.go-top').stop().fadeIn(600);
        }
        else{ // 아니면: 100픽셀 미만이면
            $('.go-top').stop().fadeOut(600);
        }





        // 섹션2 패럴럭스
        // 섹션1의 스크롤탑값이 300픽셀에 도달하면
        // 섹션2의 가상클래스 on 클래스를 추가한다.
        // 초기화 맨위 스크롤탑값 === 0 도달시 
        if($(window).scrollTop()===0){
            $('#section2').removeClass('on');
            $('#section3').removeClass('on');
            $('#section4').removeClass('on');
            $('#section5').removeClass('on');
            $('#section6').removeClass('on');
            $('#section7').removeClass('on');
            $('#section8').removeClass('on');
            $('#section9').removeClass('on');
        }

        if( $(window).scrollTop()>=300 ){
            $('#section2').addClass('on');
        }

        // 섹션2의 오프셋(맨위에서 섹션2의 탑값까지의 간격) 탑값 구하기
        const sec2Top = $('#section2').offset().top;
        console.log(` sec2Top ${sec2Top} `);

        if( $(window).scrollTop()>=sec2Top ){
            $('#section3').addClass('on');
        }

        // 섹션4의 오프셋(맨위에서 섹션3의 탑값까지의 간격) 탑값 구하기
        const sec3Top = $('#section3').offset().top-300;

        if( $(window).scrollTop()>=sec3Top ){
            $('#section4').addClass('on');
        }


        // 섹션5의 오프셋(맨위에서 섹션4의 탑값까지의 간격) 탑값 구하기
        const sec4Top = $('#section4').offset().top-300;
        if( $(window).scrollTop()>=sec4Top ){
            $('#section5').addClass('on');
        }


        const sec5Top = $('#section5').offset().top-300;
        if( $(window).scrollTop()>=sec5Top ){
            $('#section6').addClass('on');
        }


        const sec6Top = $('#section6').offset().top-300;
        if( $(window).scrollTop()>=sec6Top ){
            $('#section7').addClass('on');
        }

        const sec7Top = $('#section7').offset().top-300;
        if( $(window).scrollTop()>=sec7Top ){
            $('#section8').addClass('on');
        }

        const sec8Top = $('#section8').offset().top-300;
        if( $(window).scrollTop()>=sec8Top ){
            $('#section9').addClass('on');
        }
    });  //스크롤 이벤트 끝


    // 메인 슬라이드 우측에서 좌측으로 부드럽게 1초간 이동 3초대기하는 애니메이션 제작
    // 1초  1000    2초 2000   3초  3000
    // 변수 카운트 : count => cnt++
    let cnt=0;

    

    // 1. 메인슬라이드함수
    function mainSlide(){
        console.log( cnt );
        $('.slide-wrap').animate({left: `${-100 * cnt}%` }, 1000);
    }

    // 2. 다음카운트함수 
    function nextCount(){
        cnt++;  //1 2 3......
        if(cnt>2){ // 마지막 슬라이드 이상이면 다시 처음으로 초기화
            cnt=0
        }
        mainSlide();
    }

    // 3. 자동타이머(setInterval) 셋인터발
    setInterval(nextCount, 3000);  //3초간격으로 무한 반복 호출 실행








})(jQuery);  // 제이쿼리 프로그램을, 딸기[전달인자]