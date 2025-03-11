<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

include '../database/db.php'; // เชื่อมต่อฐานข้อมูล

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data["user_id"])) {
        echo json_encode(["status" => "error", "message" => "Missing user ID"]);
        exit;
    }

    try {
        $stmt = $pdo->prepare("DELETE FROM users WHERE user_id = :user_id");
        $stmt->execute([":user_id" => $data["user_id"]]);

        if ($stmt->rowCount() > 0) {
            echo json_encode(["status" => "success", "message" => "User banned (deleted) successfully"]);
        } else {
            echo json_encode(["status" => "error", "message" => "User not found"]);
        }
    } catch (PDOException $e) {
        echo json_encode(["status" => "error", "message" => "Database error: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
}
?>
