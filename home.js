console.log("hola mundo");
const information = data.events
const contenedor = document.getElementById("contenedorCards")



for (const itemCards of information) {
    const card = document.createElement("div")
    card.classList.add("card")
    card.style.width = "18rem "
    card.innerHTML = `
    
    <img src= ${itemCards.image} class="card-img-top imgCard" alt="...">
    <div class="card-body text-bg-info h-35   ">
    <h5 class="card-title text-center">${itemCards.name}</h5>
    <p class="card-text text-center">${itemCards.description} </p>
    </div> 
    <div class="card-body d-flex justify-content-between border border-info rounded-bottom h-15">
   <span> Precio: ${itemCards.price}</span>
   <a href="./details.html" class="card-link btn btn-dark">Details</a>
    </div> 
    `
    contenedor.appendChild(card)
}
