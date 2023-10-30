const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("_id")
const eventsDetails = data.events
let eventSearch = eventsDetails.find(search => search._id == id)
const contenedorDetails = document.getElementById("contenedorDetails")

function paintCards(arrayCard) {


  const card = document.createElement("div")

  card.classList.add("card")
  card.style.width = "25rem "
  card.innerHTML = `
  
      <div class=" card mb-3 style= max-width: 540px;">
  
   
       <img src=${arrayCard.image} style="max-width: 300px class = card-img h-100 img-fluid alt="...">
       </div>
      
      <div class="card-body  bg-dark-subtle text-emphasis-ligth border border-dark rounded-bottom p-3 " >
          <h5 class="card-title text-center"> ${arrayCard.name}</h5>
          <p class="card-text">Date: ${arrayCard.date}</p>
         <p class="card-text">${arrayCard.description}</p>
        <p class="card-text">Category:${arrayCard.category}</p>
        <p class="card-text">Place:${arrayCard.place}</p>
        <p class="card-text">Capacity: ${arrayCard.capacity}</p>
        <p class="card-text"> ${arrayCard.assistance == null ? "Estimate: " + arrayCard.estimate : "Assistance: " + arrayCard.assistance}</p>
        <p class="card-text">Price:${arrayCard.price}</p>
        </div>
        
  

  `
  contenedorDetails.appendChild(card)
}


paintCards(eventSearch)





