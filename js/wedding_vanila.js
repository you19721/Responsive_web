let newScr = 0;
let oldScr = newScr;

// 바닐라자바스크립트 스크롤 이벤트
window.addEventListener('scroll', function(){
    // console.log('바닐라자바스크립트', window.scrollY ); 
    newScr = window.scrollY;  // 새로운 스크롤 값() 저장
        if( newScr-oldScr > 0 ){ // 아래로 DOWN
            document.querySelector('#header').classList.add('on');
        }
        if( newScr-oldScr < 0 ){ // 위로 UP
            document.querySelector('#header').classList.remove('on');
        }
    oldScr = newScr;  // 이전의 스크롧 값


    // 스크롤탑값 100 이상
    // 하단에 goTop 버튼 
    // 상단에 100 픽셀이상 스크롤하면 부드럽게 보이고(페이드 인) fadeIn(1000)
    // 상단에 100 픽셀미만 스크롤하면 부드럽게 사라진다.(페이드 아웃) fadeOut(1000)    
    if( window.scrollY >= 100 ){
        document.querySelector('.go-top').classList.add('fade-in'); // 부드럽게 보이기
        document.querySelector('.go-top').classList.remove('fade-out');
    }
    else{ // 아니면: 100픽셀 미만이면
        document.querySelector('.go-top').classList.add('fade-out');  // 부드럽게 사라지기
        document.querySelector('.go-top').classList.remove('fade-in');
    }  


});






