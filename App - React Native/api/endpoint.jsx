// Solicitud GET (Request).
fetch('http://localhost:3000')
    // Exito
    .then(response => response.text())  // convertir a json
    .then(lolSoyUnTexto => {
      console.log(lolSoyUnTexto)
      let texto = lolSoyUnTexto
      
    })    //imprimir los datos en la consola
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores

