<?php
header("Access-Control-Allow-Origin:* ");

header("Access-Control-Allow-Headers:* ");

header("Access-Control-Allow-Methods:* ");

header('Content-type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'GET' ){
    obtenerImagen();
}


function obtenerImagen (){
    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        $rutaImagen = 'temp/' . $id . '.jpg';
    
        if (file_exists($rutaImagen)) {
            $imagenBinaria = file_get_contents($rutaImagen);
            $imagenCodificada = base64_encode($imagenBinaria);
            $imagenBase64 = 'data:image/jpeg;base64,' . $imagenCodificada;
            echo json_encode ($imagenBase64);
        } else {
            echo json_encode(array('error' => 'Imagen no encontrada')); // "Imagen no encontrada";
        }
    } else {
        echo json_encode(array('error' => 'ID de imagen no proporcionado')); // "ID de imagen no proporcionado";
    }
}

?>
