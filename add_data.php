<?php
// 取得從表單中提交的資料
$username = $_POST['username'];
$height = $_POST['height'];
$weight = $_POST['weight'];
$sports = $_POST['sports'];
$time = $_POST['time'];

// 資料庫連線設定
$servername = "localhost";
$username_db = "root";
$password_db = "A12345678";
$dbname = "user";

// 建立資料庫連線
$conn = new mysqli($servername, $username_db, $password_db, $dbname);

// 檢查連線是否成功
if ($conn->connect_error) {
    die("連線失敗: " . $conn->connect_error);
}

// 儲存資料到資料庫
$sql = "INSERT INTO healthy (username, height, weight, sports, time) 
        VALUES ('$username', '$height', '$weight', '$sports', '$time')";

if ($conn->query($sql) === TRUE) {
    echo "成功新增資料到資料庫";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// 關閉資料庫連線
$conn->close();
?>
