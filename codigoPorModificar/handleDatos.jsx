const handleDatos = async () => {
  try {
    // Realizar la solicitud GET al archivo PHP
    const response = await fetch("http://localhost/BDM---PWCI/api/index.php");

    // Verificar si la solicitud fue exitosa
    if (!response.ok) {
      throw new Error("No se pudo obtener los datos");
    }

    // Convertir la respuesta a JSON
    const datosJson = await response.json();

    // Actualizar el estado con los datos recibidos
    console.log(datosJson);
  } catch (error) {
    console.error(error);
  }
};

handleDatos();

// Esto estaba en perfil.jsx
