<?
    $db_server = 'localhost';
    $db_user_name = 'moonjong2';
    $db_user_pw = 'anstjswhd0105#';
    $db_name = 'moonjong2';

    // 데이터베이스 접속(Connection)
    $conn = mysqli_connect($db_server, $db_user_name, $db_user_pw, $db_name);
    mysqli_set_charset($conn, 'utf8');


    // 데이터를 테이블에 저장하는 테스팅
    // SQL 데이터베이스에 접근 & 사용 언어
    $user_name  = '이소라';
    $user_email = 'leesora@naver.com';
    $user_guest = '7';
    $user_event = '신상품 24시간 세일 이벤트';
    $user_date  = '2023-04-14';


    $sql = "INSERT INTO form_mail(user_name, user_email, user_guest, user_event, user_date) 
            VALUES('$user_name','$user_email','$user_guest','$user_event','$user_date')";
    $res = mysqli_query($conn, $sql);

    if($res==true){
        echo "데이터 저장 되었습니다.";
    }
    else{
        echo "데이터 저장 실패되었습니다. ";
    }

?>