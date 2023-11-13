/*import { data } from "./modules/data.js"*/
import { apiUrl, paintCards, pintarChecks, superFiltro } from "../modules/funciones.js"


fetch(apiUrl).then(response => response.json()).then(data => {
    const information = data.events
    const currentDate = data.currentDate


    let eventos = []
    eventos = Array.from(new Set(information.map((event) => event.category)));

    paintCards(information)

    pintarChecks(eventos)


    contenedorCheckbox.addEventListener("change", () => {
        superFiltro(information)

    })

    buscador.addEventListener("keyup", () => {
        superFiltro(information)
    })
})



