import { apiUrl, crearTable, crearTable2, crearTable3 } from "../modules/funciones.js";
const table1 = document.getElementById("table1")
const table2 = document.getElementById("table2")
const table3 = document.getElementById("table3")

fetch(apiUrl).then(response => response.json()).then(data => {
  const information = data.events
  
  crearTable(information)


  crearTable2(information)

  crearTable3(information)
})
