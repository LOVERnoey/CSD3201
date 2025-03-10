<?php
// db.php - เชอื่ มตอ่ ฐานขอ้มลู MySQL ด ้วย PDO
$host = 'localhost'; // ชอื่ เซริฟ์ เวอรข์ องฐานขอ้มลู
$dbname = 'game_guide'; // ชอื่ ฐานขอ้มลู
$username = 'game_guide'; // ชอื่ ผใู้ชฐ้านขอ้มลู
$password = '12345678'; // รหัสผ่านฐานข ้อมูล
$charset = 'utf8mb4'; // รองรับภาษาไทยและอักขระพิเศษ
$dsn = "mysql:host=$host;dbname=$dbname;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, // โหมดแสดงข ้อผิดพลาด
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, // ดึงข ้อมูลแบบ associativearray
    PDO::ATTR_EMULATE_PREPARES => false, // ปิดการใช ้Emulated Prepared Statements
    ];
    try {
    $pdo = new PDO($dsn, $username, $password, $options);
    } catch (PDOException $e) {
    error_log("Database connection error: " . $e->getMessage()); // บันทึก Log ข ้อผิดพลาด
    die(json_encode(["status" => "error", "message" => "Database connection failed"]));
    }
    ?>