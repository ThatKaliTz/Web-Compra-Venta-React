import React, { useState, useEffect } from "react";

export function MostrarImagen({ id }) {
  const [imagenUrl, setImagenUrl] = useState(null);

  useEffect(() => {
    const fetchImagen = async () => {
      try {
        const link = `http://localhost/BDM---PWCI/api/imagen.php?id=${id}`;
        console.log(link);
        const response = await fetch(
          `http://localhost/BDM---PWCI/api/imagen.php?id=${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("No se pudo obtener los datos");
        }

        const data = await response.json();
        console.log("Respuesta del servidor:", data);
        setImagenUrl(data);
      } catch (error) {
        console.error("Error al cargar la imagen:", error);
      }
    };

    fetchImagen();
  }, [id]);

  return (
    <div>
      {imagenUrl ? (
        <img src={imagenUrl} alt="Imagen cargada" />
      ) : (
        <p>Cargando imagen...</p>
      )}
    </div>
  );
}
