const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("_id")
const eventsDetails = data.events
let eventSearch = eventsDetails.find(search => search._id == id)
const contenedorDetails = document.getElementById("contenedorDetails")




const card = document.createElement("div")

  card.classList.add("card")
  card.style.width = ("25rem")
  card.innerHTML = `
  <img src="${search.image} alt="...">

                  
 <div class="card-body" >
   <h5 class="card-title text-center"> ${search.name}</h5>
<p class="card-text">Date:${search.date}</p>
<p class="card-text">${search.description}</p>
 <p class="card-text">Category:${search.category}</p>
<p class="card-text">Place:${search.place}</p>
 <p class="card-text">Capacity: ${search.capacity}</p>
  <p class="card-text">Assistance: ${(search.assistance)}</p>
 <p class="card-text">Price:${search.price}</p>
<p class="card-text">Estimate:${search.estimate}</p>  `
  contenedorDetails.appendChild(card)




}
paintCards(eventSearch)