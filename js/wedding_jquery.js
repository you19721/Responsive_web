(function($){

    let newScr = 0;
    let oldScr = newScr;

    $(window).scroll(function(){

        newScr = $(window).scrollTop();  // 새로운 스크롤 값() 저장
            if( newScr-oldScr > 0 ){ // 아래로 DOWN
                $('#header').addClass('on');
            }
            if( newScr-oldScr < 0 ){ // 위로 UP
                $('#header').removeClass('on');
            }
        oldScr = newScr;  // 이전의 스크롧 값


        if( $(window).scrollTop() >= 100 ){
            $('.go-top').stop().fadeIn(600);
        }
        else{ // 아니면: 100픽셀 미만이면
            $('.go-top').stop().fadeOut(600);
        }

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


    let cnt=0;

    

    // 1. 메인슬라이드함수
    function mainSlide(){
        console.log( cnt );
        $('.slide-wrap').animate({left: `${-100 * cnt}%` }, 600, function(){
            if(cnt>2){cnt=0} // 끝이면 처음으로
            if(cnt<0){cnt=2} // 처음이면 끝으로
            $('.slide-wrap').animate({left: `${-100 * cnt}%` }, 0); // 리턴 처음으로 가서 다음 애니메이션 준비
        });
    }

    // 2-1. 다음(next)카운트함수 
    function nextCount(){
        cnt++;  //1 2 3......       
        mainSlide();
    }
    // 2-2. 이전(preview)카운트함수 
    function prevCount(){
        cnt--;  //3 2 1......       
        mainSlide();
    }

    let touchStart = 0; // 터치 시작
    let touchEnd = 0;   // 터치 끝

    let dragStart = 0;  // 드래그 시작
    let dragEnd = 0;    // 드래그 끝
    let winWidth = 0;  // 창너비
    let mouseDown = false;  // 다운상태 아님 false ,    다운상태 true

    // 반응형 이벤트 : 마우스(데스크탑)와 핑거(모바일, 테블릿) 이벤트
    $('#section1').on({
        // 마우스 터치
        mousedown: function(e){
            mouseDown = true; // 마우스 다운상태임.

            winWidth = $(window).innerWidth(); //창너비
            touchStart = e.clientX;  // 터치시작(Touch Start)
            dragStart = e.clientX-$('.slide-wrap').offset().left-winWidth;  // 드래그시작(Touch Start)
        },
        mouseup: function(e){
            touchEnd = e.clientX;    // 터치끝(Touch End)
            if( touchStart-touchEnd > 0 ){ // 다음 슬라이드
                nextCount();
            }                
            if( touchStart-touchEnd < 0 ){ // 이전 슬라이드
                prevCount();
            } 
            mouseDown=false;  // 다우스 다운 상태가 초기화            
        },
        mousemove: function(e){ // 마읏가 이동할 때 슬라이드가 자석처럼 따라 다닌다.
            // 마우스 무브는 반드시 마우스 다운 이벤트가 있을 때만 무브기능 되어한다.
            if(mouseDown===false){return}  // 마우스 다운 상태가 아니면 리턴 종료
            dragEnd = e.clientX;
            // 메인 슬라이드 애니메이션 박스
            $('.slide-wrap').css({ left : dragEnd-dragStart });

        },  



        // 핑거 터치
        touchstart: function(e){
            mouseDown = true; // 핑거 다운상태임.
            touchStart = e.originalEvent.changedTouches[0].clientX;  // 터치시작(Touch Start)
            dragStart = e.originalEvent.changedTouches[0].clientX-$('.slide-wrap').offset().left-winWidth;  // 드래그시작(Touch Start)
        },
        touchend: function(e){
           
            touchEnd = e.originalEvent.changedTouches[0].clientX;;    // 터치끝(Touch End)
            if( touchStart-touchEnd > 0 ){ // 다음 슬라이드
                nextCount();
            }                
            if( touchStart-touchEnd < 0 ){ // 이전 슬라이드
                prevCount();
            }    
        },
        touchmove: function(e){ // 마읏가 이동할 때 슬라이드가 자석처럼 따라 다닌다.
            // 마우스 무브는 반드시 마우스 다운 이벤트가 있을 때만 무브기능 되어한다.
            if(mouseDown===false){return}  // 마우스 다운 상태가 아니면 리턴 종료
            dragEnd = e.originalEvent.changedTouches[0].clientX;
            // 메인 슬라이드 애니메이션 박스
            $('.slide-wrap').css({ left : dragEnd-dragStart });

        }  
    });
    
    







})(jQuery);  // 제이쿼리 프로그램을, 딸기[전달인자]