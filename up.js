console.log("hola");
const upcomming = data.events
const contenedorUp = document.getElementById("nextCards")
const currentDate = "2023-01-01"

for (const itemCardsUp of upcomming) {
    if (itemCardsUp.date >=  currentDate) {
        
   
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
   <a href="./details.html" class="card-link btn btn-dark">Details</a>
    </div> 
    `
    contenedorUp.appendChild(cardUp)
}
}