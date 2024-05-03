<?php

class conexion {

    private $server;
    private $user;
    private $password;
    private $database;
    private $port;
    private $conexion;

    

    function __construct() {
        
    $listadatos = $this->datosConexion();
    foreach ($listadatos as $key => $value) {
        $this->server = $value["server"];
        $this->user = $value["user"]; 
        $this->password = $value["password"];   
        $this->database = $value["database"];
        $this->port = $value["port"];
    }

    $this->conexion = new mysqli($this->server, $this->user,$this->password,$this->database, $this->port);
    if ($this->conexion->connect_error) {
        echo "error no hay conexion"; 
        die();
    }
}   
    private function datosConexion(){
        $direccion = dirname(__FILE__);
        $json = file_get_contents($direccion . "/". "config.json");
        return json_decode( $json, true );
    }

    function consultaSelect (){
    
        $sql= "SELECT * FROM usuario";
        $resultado = $this->conexion->query($sql);

        if ($resultado->num_rows > 0) {
            // Array para almacenar los usuarios
            $usuarios = array();

            // Iterar sobre los resultados y almacenarlos en el array
            while ($fila = $resultado->fetch_assoc()) {
                $usuarios[] = $fila;
            }
            echo json_encode($usuarios);
            return $usuarios;
        } else {
            echo "momazos diego";
            return array(); // Devolver un array vacío si no se encontraron usuarios
        }
    }

    function loginValidate($p_email, $p_contrasenia){
        $sql = "SELECT *
                FROM usuario
                WHERE email = '$p_email';";
        $resultado = $this->conexion->query($sql);


        // Verificar si se encontró algún usuario con el email proporcionado
        if ($resultado->num_rows > 0) {
            // Obtener el primer usuario encontrado
            $usuario = $resultado->fetch_assoc();
    
            // Verificar si la contraseña coincide
            if ($usuario['contrasenia'] === $p_contrasenia) {
                // La contraseña coincide, devolver el usuario
                // Obtener la imagen codificada en base64
                $fotoPerfil = $usuario['fotoPerfil'];

                // Codificar la imagen en base64 en un formato JSON seguro
                $fotoPerfilJSON = base64_encode($fotoPerfil);
                $fotoBase64 = 'data:image/jpeg;base64,' . $fotoPerfilJSON;

                // Agregar la imagen codificada de nuevo al array de usuario
                $usuario['fotoPerfil'] = $fotoBase64;

                // Devolver el array de usuario como JSON
                echo json_encode($usuario);

                return;

            } else {
                // La contraseña no coincide, devolver un mensaje de error
                echo json_encode(['error' => 'La contraseña no coinciden']);
                return;
            }
        } else {
            // No se encontró ningún usuario con el email proporcionado, devolver un mensaje de error
            echo json_encode (['error' => 'No se encontró ningún usuario con ese email']);
            return;
        }
    }
    


    
    function validarContrasenia($contrasenia) {
        // Validar longitud
        if (strlen($contrasenia) < 8) {
            return 'La contraseña debe tener al menos 8 caracteres';
        }
    
        // Validar mayúsculas
        if (!preg_match('/[A-Z]/', $contrasenia)) {
            return 'La contraseña debe contener al menos una letra mayúscula';
        }
    
        // Validar minúsculas
        if (!preg_match('/[a-z]/', $contrasenia)) {
            return 'La contraseña debe contener al menos una letra minúscula';
        }
    
        // Validar números
        if (!preg_match('/[0-9]/', $contrasenia)) {
            return 'La contraseña debe contener al menos un número';
        }
    
        // Validar caracteres especiales
        if (!preg_match('/[^\w\s]/', $contrasenia)) {
            return 'La contraseña debe contener al menos un caracter especial';
        }
    
        return true; // La contraseña es válida
    }
    
    function registroUsuario() {
        // Obtener los datos del cuerpo de la solicitud (request body) como JSON
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
    
        if (isset($data['fotoPerfil'])) {
            // Obtener los datos del archivo de imagen (en base64)
            $imagenBase64 = $data['fotoPerfil'];

            // Eliminar la parte de la cadena que no es parte de los datos de la imagen
            $prefixes = ['data:image/png;base64,', 'data:image/jpeg;base64,', 'data:image/gif;base64,'];
            $imagenBase64 = str_replace($prefixes, '', $imagenBase64);


            // Decodificar la imagen de base64 a binario
            $imagenBinaria = base64_decode($imagenBase64);

            // Guardar la imagen en un archivo temporal
            // $rutaTemporalImagen = 'temp/imagen_' . uniqid() . '.jpg';
           // file_put_contents($rutaTemporalImagen, $imagenBinaria);
    
            // Definir los parámetros para el procedimiento almacenado
            $p_email = $data['email'];
            $p_nombreUsuario = $data['nombreUsuario'];
            $p_contrasenia = $data['contrasenia'];
            $p_confirmContrasenia = $data['confirmPassword'];
            $p_nombre = $data['nombre'];
            $p_apellidoP = $data['apellidoP'];
            $p_apellidoM = $data['apellidoM'];
            $p_fechaNacim = null;
            $p_sexo = 1;
            $p_perfilPrivado = 0;
            $p_rol = 1;
    
            // Verificar que las contraseñas coincidan
            if ($p_contrasenia !== $p_confirmContrasenia) {
                echo json_encode(['error' => 'Las contraseñas no coinciden']);
                return;
            }
    
            // Validar contraseña
            $validacion = $this->validarContrasenia($p_contrasenia);
            if ($validacion !== true) {
                echo json_encode(['error' => $validacion]);
                return;
            }
    
            // Llamar al procedimiento almacenado
            $sql = "CALL InsertarUsuario(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            $stmt = $this->conexion->prepare($sql);
            $stmt->bind_param("ssssssssiii", $p_email, $p_nombreUsuario, $p_contrasenia, $imagenBinaria, $p_nombre, $p_apellidoP, $p_apellidoM, $p_fechaNacim, $p_sexo, $p_perfilPrivado, $p_rol);
            $stmt->execute();
            $stmt->close();
    
            echo json_encode(['mensaje' => 'Datos recibidos correctamente']);
        } else {
            echo json_encode(['error' => 'No se ha enviado ninguna imagen.']);
        }
    
        // Cerrar la conexión y liberar recursos
        $this->conexion->close();
    }

}