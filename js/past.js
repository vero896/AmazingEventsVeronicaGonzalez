/*import {data} from "./modules/data.js"*/
import { apiUrl,contenedorCheckbox, paintCards, pintarChecks, superFiltro } from "../modules/funciones.js";


fetch(apiUrl).then(response => response.json()).then(data => {
    const information = data.events
    const currentDate = data.currentDate
   
    let eventosPast = [];
    information.forEach(element => {
     if (element.date <= currentDate) {
         eventosPast.push(element)
     }
    });
   

   
    let eventos = []
    eventos = Array.from(new Set(information.map((event) => event.category)));
   

    paintCards(eventosPast)

    pintarChecks(eventos)


    contenedorCheckbox.addEventListener("change", () => {
        superFiltro(information)

    })

    buscador.addEventListener("keyup", () => {
        superFiltro(information)
    })
})
