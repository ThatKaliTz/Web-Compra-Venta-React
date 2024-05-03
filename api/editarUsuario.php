<?php

header("Access-Control-Allow-Origin:* ");

header("Access-Control-Allow-Headers:* ");

header("Access-Control-Allow-Methods:* ");

header('Content-type: application/json');

require_once("conexion.php");

$conexion = new conexion
;
if ($_SERVER['REQUEST_METHOD'] === 'POST' )
{
    $conexion->editarUsuario();
}