console.log("hola");
const upcomming = data.events
const contenedorUp = document.getElementById("nextCards")
const currentDate = "2023-01-01"
const buscador = document.getElementById("buscador")
const contenedorCheckboxUp = document.getElementById("contenedorCheckboxUp")
let eventosUp = []
eventosUp = Array.from(new Set(upcomming.map((event) => event.category.replace(" ", "-"))));


function paintCards(arrayCard) {
    for (const itemCardsUp of upcomming) {
        if (itemCardsUp.date >= currentDate) {


            const cardUp = document.createElement("div")
            cardUp.classList.add("card")
            cardUp.style.width = "18rem "
            cardUp.innerHTML = `
    
    <img src= ${itemCardsUp.image} class="card-img-top imgCard" alt="...">
    <div class="card-body p-3 text-bg-success ">
    <h5 class="card-title text-center">${itemCardsUp.name}</h5>
    <p class="card-text text-justify">${itemCardsUp.description} </p>
    </div> 
    <div class="card-bodyprice d-flex justify-content-around border border-success rounded-bottom p-3">
   <span> Precio: ${itemCardsUp.price}</span>
   <a href="./details.html?_id=${itemCards._id}" class="card-link btn btn-dark">Details</a>
    </div> 
    `
            contenedorUp.appendChild(cardUp)
        }
    }
}
paintCards(upcomming)

function pintarChecks(arrayCheck) {
    arrayCheck.forEach(cate => {
        const categoria = document.createElement("form");
        categoria.classList.add("form-check", "form-check-inline");
        categoria.innerHTML = `
      <input class="form-check-input" type="checkbox" role="swith" id=${cate} value="${cate}">
      <label class="form-check-label text-information" for=${cate}> ${cate.replace("-", " ")}</label>
    `;
        contenedorCheckboxUp.appendChild(categoria);

    });
}
pintarChecks(eventosUp)

function filtrarEventos(arrayEventos) {
    let checked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value)

    let eventosFiltrado = []
    arrayEventos.forEach(e => {
        checked.forEach(eventoEncontrado => {
            if (eventoEncontrado == e.category.replace(" ", "-")) {
                eventosFiltrado.push(e)
            }
        })

    })
    if (eventosFiltrado.length == 0) {
        return arrayEventos
    }
    return eventosFiltrado

}
function filtrarTexto(arrayEventos) {
    return arrayEventos.filter(evento => evento.category.toLowerCase().includes(buscador.value.toLowerCase()))
}
function paintCards(arrayEventos) {
    if (arrayEventos.length == 0) {
        contenedorUp.innerHTML = `<h3>La categoria no existe, intentalo de nuevo </h3>`
    } else {
        contenedorUp.innerHTML = " "
        arrayEventos.forEach(newEvent => {

            const card = document.createElement("div")
            card.classList.add("card")
            card.style.width = "18rem "
            card.innerHTML = `
        <img src= ${newEvent.image} class="card-img-top imgCard" alt="...">
        <div class="card-body p-3 text-bg-success ">
        <h5 class="card-title text-center">${newEvent.name}</h5>
        <p class="card-text text-justify">${newEvent.description} </p>
        </div> 
        <div class="card-bodyprice d-flex justify-content-around border border-success rounded-bottom p-3 ">
       <span> Precio: ${newEvent.price}</span>
       <a href="./details.html?_id=${newEvent._id}" class="card-link btn btn-dark">Details</a>
        </div> 
        `
            contenedorUp.appendChild(card)
        })
    }
}
contenedorCheckboxUp.addEventListener("change", () => {
    let filtro = filtrarEventos(upcomming)
    paintCards(filtro)

})

buscador.addEventListener("keyup", () => {
    let filtro2 = filtrarTexto(upcomming)
    paintCards(filtro2)
})

function superFiltro(arrayEventos) {
    let filtro = filtrarEventos(arrayEventos)
    let filtro2 = filtrarPorTexto(filtro1)
    paintCards(filtro2)
}