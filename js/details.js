import { crearDetails, apiUrl } from "../modules/funciones.js"


fetch(apiUrl).then(response => response.json()).then(data => {
  const information = data.events

  crearDetails(information)

})


