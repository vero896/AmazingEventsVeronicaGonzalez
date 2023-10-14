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
    
    <img src= ${itemCardsUp.image} class="card-img-top h-50 imgCard" alt="...">
    <div class="card-body text-bg-success h-40">
    <h5 class="card-title text-center">${itemCardsUp.name}</h5>
    <p class="card-text text-center">${itemCardsUp.description} </p>
    </div> 
    <div class="card-body h-10 d-flex justify-content-between border border-success rounded-bottom">
   <span> Precio: ${itemCardsUp.price}</span>
   <a href="./details.html" class="card-link btn btn-dark">Details</a>
    </div> 
    `
    contenedorUp.appendChild(cardUp)
}
}