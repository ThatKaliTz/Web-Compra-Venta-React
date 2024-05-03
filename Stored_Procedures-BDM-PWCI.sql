use tienda;
DELIMITER //

CREATE PROCEDURE InsertarUsuario (
    IN p_email VARCHAR(255),
    IN p_nombreUsuario VARCHAR(45),
    IN p_contrasenia VARCHAR(45),
    IN p_fotoPerfil LONGBLOB,
    IN p_nombre VARCHAR(45),
    IN p_apellidoP VARCHAR(45),
    IN p_apellidoM VARCHAR(45),
    IN p_fechaNacim DATE,
    IN p_sexo VARCHAR(45),
    IN p_perfilPrivado TINYINT,
    IN p_rol TINYINT
)
BEGIN
    INSERT INTO usuario (email, nombreUsuario, contrasenia, fotoPerfil, nombre, apellidoP, apellidoM, fechaNacim, sexo, fechaReg, perfilPrivado, rol)
    VALUES (p_email, p_nombreUsuario, p_contrasenia, p_fotoPerfil, p_nombre, p_apellidoP, p_apellidoM, p_fechaNacim, p_sexo, NOW(), p_perfilPrivado, p_rol);
END //

DELIMITER ;







DELIMITER //

CREATE PROCEDURE obtenerUsuarioPorCredenciales(
    IN p_email VARCHAR(255),
    IN p_contrasenia VARCHAR(45)
)
BEGIN
    -- Realizar el SELECT del usuario con el email y contraseña proporcionados
    SELECT *
    FROM usuario
    WHERE email = p_email AND contrasenia = p_contrasenia;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE EditarUsuario (
    IN p_emailAnterior VARCHAR(255),
    IN p_nombre VARCHAR(45),
    IN p_apellidoP VARCHAR(45),
    IN p_fotoPerfil BLOB,
    IN p_email VARCHAR(255),
    IN p_contrasenia VARCHAR(45)
)
BEGIN
    UPDATE usuario 
    SET nombre = p_nombre, 
        apellidoP = p_apellidoP, 
        fotoPerfil = p_fotoPerfil, 
        email = p_email, 
        contrasenia = p_contrasenia
    WHERE email = p_emailAnterior;
END //

DELIMITER ;

