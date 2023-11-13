
import { apiUrl, paintCards, pintarChecks, superFiltro } from "../modules/funciones.js";


fetch(apiUrl).then(response => response.json()).then(data => {
    const information = data.events
    const currentDate = data.currentDate

    let eventosUp = [];
    information.forEach(element => {
        if (element.date >= currentDate) {
            eventosUp.push(element)
        }
    });

    paintCards(eventosUp)
    let eventos = []
    eventos = Array.from(new Set(information.map((event) => event.category)));

    pintarChecks(eventos)

    contenedorCheckbox.addEventListener("change", () => {
        superFiltro(information)

    })

    buscador.addEventListener("keyup", () => {
        superFiltro(information)
    })
})
