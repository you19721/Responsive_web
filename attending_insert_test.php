<?
    // 데이터베이스(Data Base) 인증(인가) Authentication 
    // 1. 데이터베이스서버
    // 2. 데이터베이스 사용자 이름
    // 3. 데이터베이스 사용자 비밀번호
    // 4. 데이터베이스 이름
    $db_server = 'localhost';
    $db_user_name = 'moonjong2';
    $db_user_pw = 'anstjswhd0105#';
    $db_name = 'moonjong2';

    // 데이터베이스 접속(Connection)
    $conn = mysqli_connect($db_server, $db_user_name, $db_user_pw, $db_name);
    mysqli_set_charset($conn, 'utf8');


    // 데이터를 테이블에 저장하는 테스팅
    // SQL 데이터베이스에 접근 & 사용 언어
    // 실행문 query
    $sql = "INSERT INTO form_mail(user_name, user_email, user_guest, user_event, user_date) 
            VALUES('차분희','moonseonjong@naver.com','3','SQL이벤트','2023-04-12')";
    mysqli_query($conn, $sql);

?>