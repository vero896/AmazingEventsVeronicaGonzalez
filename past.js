console.log("hola");
const pastEvents = data.events
const contenedorPast = document.getElementById("PastCards")
const currentDate = "2023-01-01"
const buscador = document.getElementById("buscador")
const contenedorCheckboxPast = document.getElementById("contenedorCheckboxPast")
let eventosPast = []
eventosPast = Array.from(new Set(pastEvents.map((event) => event.category.replace(" ", "-"))));


function paintCards(arrayCard) {
    for (const itemCardsPast of pastEvents) {
        if (itemCardsPast.date <= currentDate) {
           

            const cardPast = document.createElement("div")
            cardPast.classList.add("card")
            cardPast.style.width = "18rem "
            cardPast.innerHTML = `
    
    <img src= ${itemCardsPast.image} class="card-img-top imgCard opacity-50" alt="...">
    <div class="card-body bg-danger-subtle text-emphasis-danger ">
    <h5 class="card-title text-center">${itemCardsPast.name}</h5>
    <p class="card-text text-justify">${itemCardsPast.description} </p>
    </div> 
    <div class="card-bodyprice d-flex justify-content-around border border-danger rounded-bottom p-3">
   <span> Precio: ${itemCardsPast.price}</span>
   <a href="../details.html?_id=${itemCardsPast._id}" class="card-link btn btn-dark">Details</a>
    </div> 
    `
            contenedorPast.appendChild(cardPast)
        }
    }
}
paintCards(pastEvents)

function pintarChecks(arrayCheck) {
    arrayCheck.forEach(cate => {
        const categoria = document.createElement("form");
        categoria.classList.add("form-check", "form-check-inline");
        categoria.innerHTML = `
      <input class="form-check-input" type="checkbox" role="swith" id=${cate} value="${cate}">
      <label class="form-check-label text-information" for=${cate}> ${cate.replace("-", " ")}</label>
    `;
        contenedorCheckboxPast.appendChild(categoria);

    });
}
pintarChecks(eventosPast)

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
        contenedorPast.innerHTML = `<h3>La categoria no existe, intentalo de nuevo </h3>`
    } else {
        
        contenedorPast.innerHTML = " "

        arrayEventos.forEach(newEvent => {
            if(newEvent.date >= currentDate){
                const card = document.createElement("div")
                card.classList.add("card")
                card.style.width = "18rem "
                card.innerHTML = `
        <img src= ${newEvent.image} class="card-img-top imgCard opacity-50" alt="...">
        <div class="card-body p-3  bg-danger-subtle text-emphasis-danger ">
        <h5 class="card-title text-center">${newEvent.name}</h5>
        <p class="card-text text-justify">${newEvent.description} </p>
        </div> 
        <div class="card-bodyprice d-flex justify-content-around border border-danger rounded-bottom p-3 ">
       <span> Precio: ${newEvent.price}</span>

       <a href="./details.html?_id=${newEvent._id}" class="card-link btn btn-dark">Details</a>
        </div> 
        `
                contenedorPast.appendChild(card)
                
            }})}

    
}
      
    
contenedorCheckboxPast.addEventListener("change", () => {
    let filtro = filtrarEventos(pastEvents)
    paintCards(filtro)

})

buscador.addEventListener("keyup", () => {
    let filtro2 = filtrarTexto(pastEvents)
    paintCards(filtro2)
})

function superFiltro(arrayEventos) {
    let filtro = filtrarEventos(arrayEventos)
    let filtro2 = filtrarPorTexto(filtro1)
    paintCards(filtro2)
}