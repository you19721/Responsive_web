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
    // AJAX로 전송된 폼데이터 가져오기
    $user_name  = $_POST['irum'];
    $user_email = $_POST['email'];
    $user_guest = $_POST['guest_number'];
    $user_event = $_POST['event'];
    $user_date  = $_POST['date'];


    $sql = "INSERT INTO form_mail(user_name, user_email, user_guest, user_event, user_date) 
            VALUES('$user_name','$user_email','$user_guest','$user_event','$user_date')";
    $res = mysqli_query($conn, $sql);

    // if($res==true){
    //     echo "데이터 저장 되었습니다.";
    // }
    // else{
    //     echo "데이터 저장 실패되었습니다. ";
    // }

   echo  $user_name . "님! 폼메일을 잘 받았습니다. 빠른시간내에 답변 드리겠습니다.";


?>