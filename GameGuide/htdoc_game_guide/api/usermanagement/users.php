<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

include '../database/db.php'; // เชื่อมต่อฐานข้อมูล

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    try {
        $stmt = $pdo->prepare("SELECT user_id, email, role, created_at FROM users");
        $stmt->execute();
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode(["status" => "success", "users" => $users]);
    } catch (PDOException $e) {
        echo json_encode(["status" => "error", "message" => "Database error: " . $e->getMessage()]);
    }
} elseif ($method === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data["email"]) || !isset($data["password"]) || !isset($data["role"])) {
        echo json_encode(["status" => "error", "message" => "กรุณากรอกข้อมูลให้ครบถ้วน"]);
        exit;
    }

    $validRoles = ["Admin", "User"];
    if (!in_array($data["role"], $validRoles)) {
        echo json_encode(["status" => "error", "message" => "สิทธิ์ผู้ใช้ไม่ถูกต้อง"]);
        exit;
    }

    try {
        $stmt = $pdo->prepare("INSERT INTO users (email, password_hash, role, created_at) 
                               VALUES (:email, :password_hash, :role, NOW())");

        $stmt->execute([
            ":email" => $data["email"],
            ":password_hash" => password_hash($data["password"], PASSWORD_BCRYPT),
            ":role" => $data["role"],
        ]);

        echo json_encode(["status" => "success", "message" => "เพิ่มผู้ใช้สำเร็จ"]);
    } catch (PDOException $e) {
        echo json_encode(["status" => "error", "message" => "Database error: " . $e->getMessage()]);
    }
}
?>
