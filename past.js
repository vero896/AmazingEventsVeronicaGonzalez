console.log("hola");
const pastEvents = data.events
const contenedorPast = document.getElementById("PastCards")
const currentDate = "2023-01-01"
function paintCards(arrayCard) {
for (const itemCardsPast of pastEvents) {
    if (itemCardsPast.date <=  currentDate) {
        
   
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