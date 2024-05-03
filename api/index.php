<?php
header("Access-Control-Allow-Origin:* ");

header("Access-Control-Allow-Headers:* ");

header("Access-Control-Allow-Methods:* ");


require_once("conexion.php");

$conexion = new conexion;

    
    header("Content-Type: application/json");
    
    $metodo = $_SERVER['REQUEST_METHOD'];

    
    
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['accion'])) {
    $accion = $_GET['accion'];

    // Lógica para manejar diferentes acciones
    switch ($accion) {
        case 'consulta':
            // Lógica para consultar datos
            $conexion->consultaSelect();

            break;
        // Agrega más casos según sea necesario para otras acciones
        default:
            // Si la acción no coincide con ninguna acción conocida, devolver un error
            echo json_encode(array('error' => 'Acción no válida'));
            break;
    }
}

