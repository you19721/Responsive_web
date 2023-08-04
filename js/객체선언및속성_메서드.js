(function($){
   // 불변변수 선언 웨딩 = {} // 리터럴 객체 
   const wedding = {
        init: function(){
            console.log( this.a );
            console.log( this.name );
            console.log( this.kor );
            console.log( this.eng );
            console.log( this.mat );

            this.tot();
            this.avg();
        },
        a: '대한민국',
        name: "이순신",
        kor: 100,
        eng: 59,
        mat: 80,  // 속성(프로퍼티스 Properties 또는 Property 프로퍼티): 속성값(밸류 Value)
        tot: function(){  // 프로퍼티에 펑션 키워드가 추가되면 메서드(Method) 함수
            let x = this.kor+this.eng+this.mat;
            console.log('여기는 총점 = ' + x );
        },
        avg: function(){
            let x = (this.kor+this.eng+this.mat)/3;

            console.log('여기는 평균 = ' + x );
        }
   }
   // 객체이름.속성
   wedding.init();



})(jQuery);