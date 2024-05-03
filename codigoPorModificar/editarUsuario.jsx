if (image) {
  // Convertir la imagen a ArrayBuffer
  fetch(image)
    .then((response) => response.arrayBuffer())
    .then((arrayBuffer) => {
      // Aquí puedes enviar el ArrayBuffer al backend PHP
      fotoDePerfil = arrayBuffer;
      const form = event.target;
      const formData = new FormData(form);
      formData.append("fotoPerfil", arrayBuffer); // Agregar la imagen al formulario
      formData.append("emailAnterior", userData.email); // Agregar la imagen al formulario

      console.log("foto", arrayBuffer);
      const formValues = Object.fromEntries(formData);
      const jsonData = JSON.stringify(formValues);
      localStorage.setItem("datos", JSON.stringify(jsonData));

      console.log(jsonData);

      fetch("http://localhost/BDM---PWCI/api/editarUsuario.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      })
        .then((response) => response.json())

        .then((data) => {
          console.log("Respuesta del servidor:", data);
          if (data.error) {
            console.error("Error del servidor:", data.error);

            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          } else {
            console.log("Edicion exitoso!");
            setUserData((prevUserData) => ({
              ...prevUserData,
              name: formValues.nombre,
              lastName: formValues.apellidoP,
              password: formValues.contrasenia,
              email: formValues.email,
            }));

            onClose();
          }
        })
        .catch((error) => {
          console.error("Errosssr al enviar datos:", error);
        });
      // Puedes enviar el ArrayBuffer a través de una solicitud HTTP a tu backend PHP
    })
    .catch((error) => {
      console.error("Error al convertir la imagen:", error);
    });
} else {
  // Si no hay imagen, simplemente envía el formulario sin la imagen
  console.error("no hay imagen weee:", error);
}
