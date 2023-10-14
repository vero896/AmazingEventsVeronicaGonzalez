console.log("hola");
const pastEvents = data.events
const contenedorPast = document.getElementById("PastCards")
const currentDate = "2023-01-01"

for (const itemCardsPast of pastEvents) {
    if (itemCardsPast.date <=  currentDate) {
        
   
    const cardPast = document.createElement("div")
    cardPast.classList.add("card")
    cardPast.style.width = "18rem "
    cardPast.innerHTML = `
    
    <img src= ${itemCardsPast.image} class="card-img-top h-50 opacity-50" alt="...">
    <div class="card-body bg-danger-subtle text-emphasis-danger h-40">
    <h5 class="card-title text-center">${itemCardsPast.name}</h5>
    <p class="card-text text-center">${itemCardsPast.description} </p>
    </div> 
    <div class="card-body h-10 d-flex justify-content-between border border-danger rounded-bottom">
   <span> Precio: ${itemCardsPast.price}</span>
   <a href="./details.html" class="card-link btn btn-dark">Details</a>
    </div> 
    `
    contenedorPast.appendChild(cardPast)
}
}