<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

include '../database/db.php'; // เชื่อมต่อฐานข้อมูล

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data["game_name"]) || !isset($data["platform"])) {
    echo json_encode(["status" => "error", "message" => "กรุณากรอกชื่อเกมและเลือกแพลตฟอร์ม"]);
    exit;
}

$validPlatforms = ["PC", "Mobile", "Console"];
if (!in_array($data["platform"], $validPlatforms)) {
    echo json_encode(["status" => "error", "message" => "แพลตฟอร์มไม่ถูกต้อง"]);
    exit;
}

try {
    $stmt = $pdo->prepare("INSERT INTO Game (game_name, game_description_font, game_description_details_1, game_description_details_2, game_profile_pic, game_pic_details_1, game_pic_details_2, platform) 
                           VALUES (:game_name, :game_description_font, :game_description_details_1, :game_description_details_2, :game_profile_pic, :game_pic_details_1, :game_pic_details_2, :platform)");

    $stmt->execute([
        ":game_name" => $data["game_name"],
        ":game_description_font" => $data["game_description_font"] ?? null,
        ":game_description_details_1" => $data["game_description_details_1"] ?? null,
        ":game_description_details_2" => $data["game_description_details_2"] ?? null,
        ":game_profile_pic" => $data["game_profile_pic"] ?? null,
        ":game_pic_details_1" => $data["game_pic_details_1"] ?? null,
        ":game_pic_details_2" => $data["game_pic_details_2"] ?? null,
        ":platform" => $data["platform"],
    ]);

    echo json_encode(["status" => "success", "message" => "เพิ่มเกมสำเร็จ"]);
} catch (PDOException $e) {
    echo json_encode(["status" => "error", "message" => "Database error: " . $e->getMessage()]);
}
?>
