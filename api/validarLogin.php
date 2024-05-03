<?php

header("Access-Control-Allow-Origin:* ");

header("Access-Control-Allow-Headers:* ");

header("Access-Control-Allow-Methods:* ");

header('Content-type: application/json');

require_once("conexion.php");

$conexion = new conexion;

// Verificar si la solicitud es POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
     // Obtener el contenido del cuerpo de la solicitud
     $json = file_get_contents('php://input');
 
     // Decodificar el JSON en un arreglo asociativo
     $data = json_decode($json, true);
 
     // Verificar si se pudo decodificar el JSON correctamente
     if ($data === null) {
         // Error al decodificar el JSON
         echo "Error al decodificar el JSON";
     } else {
         // Obtener los datos del arreglo decodificado
         $email = isset($data['email']) ? $data['email'] : '';
         $contrasenia = isset($data['contrasenia']) ? $data['contrasenia'] : '';
 
         // Llamar a la función loginValidate con los datos del formulario
         $conexion->loginValidate($email, $contrasenia);
     }
 }
 