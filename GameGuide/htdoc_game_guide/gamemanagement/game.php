<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

include '../api/database/db.php'; // Database connection

$IMAGE_BASE_URL = "http://192.168.1.33/game_guide/images/";

$method = $_SERVER["REQUEST_METHOD"];

if ($method === "GET") {
    // Fetch all games
    try {
        $stmt = $pdo->prepare("SELECT * FROM game");
        $stmt->execute();
        $games = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Modify image paths to include the full URL
        foreach ($games as &$game) {
            $game["game_profile_pic"] = !empty($game["game_profile_pic"]) 
                ? $IMAGE_BASE_URL . $game["game_profile_pic"] 
                : null;

            $game["game_pic_details_1"] = !empty($game["game_pic_details_1"]) 
                ? $IMAGE_BASE_URL . $game["game_pic_details_1"] 
                : null;

            $game["game_pic_details_2"] = !empty($game["game_pic_details_2"]) 
                ? $IMAGE_BASE_URL . $game["game_pic_details_2"] 
                : null;
        }

        echo json_encode(["status" => "success", "games" => $games]);
    } catch (PDOException $e) {
        echo json_encode(["status" => "error", "message" => "Database error: " . $e->getMessage()]);
    }
}
 elseif ($method === "POST") {
    // Add a new game
    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data["game_name"]) || !isset($data["game_description_font"])) {
        echo json_encode(["status" => "error", "message" => "Missing required fields"]);
        exit;
    }

    try {
        $stmt = $pdo->prepare("INSERT INTO game (game_name, game_description_font, game_description_details_1, game_description_details_2, game_profile_pic, game_pic_details_1, game_pic_details_2)
                               VALUES (:game_name, :game_description_font, :desc1, :desc2, :profile_pic, :pic1, :pic2)");

        $stmt->execute([
            ":game_name" => $data["game_name"],
            ":game_description_font" => $data["game_description_font"], // Fixed variable name
            ":desc1" => $data["game_description_details_1"] ?? null,
            ":desc2" => $data["game_description_details_2"] ?? null,
            ":profile_pic" => $data["game_profile_pic"] ?? null,
            ":pic1" => $data["game_pic_details_1"] ?? null,
            ":pic2" => $data["game_pic_details_2"] ?? null,
        ]);

        echo json_encode(["status" => "success", "message" => "Game added successfully"]);
    } catch (PDOException $e) {
        echo json_encode(["status" => "error", "message" => "Database error: " . $e->getMessage()]);
    }
} elseif ($method === "DELETE") {
    // Delete a game
    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data["game_id"])) {
        echo json_encode(["status" => "error", "message" => "Missing game ID"]);
        exit;
    }

    try {
        $stmt = $pdo->prepare("DELETE FROM game WHERE game_id = :game_id");
        $stmt->execute([":game_id" => $data["game_id"]]);

        echo json_encode(["status" => "success", "message" => "Game deleted successfully"]);
    } catch (PDOException $e) {
        echo json_encode(["status" => "error", "message" => "Database error: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
}
?>
