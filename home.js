console.log("hola mundo");
const information = data.events;
const contenedor = document.getElementById("contenedorCards")
const buscador = document.getElementById("buscador")
const contenedorCheckbox = document.getElementById("contenedorCheckbox")

let eventos = []
eventos = Array.from(new Set(information.map((event) => event.category.replace(" ", "-"))));


function paintCards(arrayCard) {
    

    for (const itemCards of information) {

        const card = document.createElement("div")

        card.classList.add("card")
        card.style.width = "18rem "
        card.innerHTML = `
    <img src= ${itemCards.image} class="card-img-top imgCard" alt="...">
    <div class="card-body p-3  text-bg-info ">
    <h5 class="card-title text-center">${itemCards.name}</h5>
    <p class="card-text text-justify">${itemCards.description} </p>
    </div> 
    <div class="card-bodyprice d-flex justify-content-around border border-info rounded-bottom p-3 ">
   <span> Precio: ${itemCards.price}</span>
   <a href="./details.html?_id=${itemCards._id}" class="card-link btn btn-dark">Details</a>
    </div> 
    `
        contenedor.appendChild(card)
    }
    
}
paintCards(information)

contenedorCheckbox.addEventListener("change", ()=> {
    
    let filtro = filtrarEventos(information)

   paintCards(filtro)
   
})

function pintarChecks(arrayCheck) {
    arrayCheck.forEach(cate => {
        const categoria = document.createElement("form");
        categoria.classList.add("form-check", "form-check-inline");
        categoria.innerHTML = `
      <input class="form-check-input" type="checkbox" role="swith" id=${cate} value="${cate}">
      <label class="form-check-label text-information" for=${cate}> ${cate.replace("-"," ")}</label>
    `;
        contenedorCheckbox.appendChild(categoria);

    });
}
pintarChecks(eventos)




function filtrarEventos(arrayEventos) {
  let checked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value)
  
   let eventosFiltrado = []
   arrayEventos.forEach(e =>{
checked.forEach(eventoEncontrado=>{
if(eventoEncontrado == e.category.replace(" ","-")){
eventosFiltrado.push(e)
}
})

   })
if(eventosFiltrado.length ==0){
    return arrayEventos
}
return eventosFiltrado

}





  
function filtrarTexto (arrayEventos) {
    return arrayEventos.filter(evento=> evento.category.toLowerCase().includes(buscador.value.toLowerCase()))
}
function paintCards(arrayEventos) {
    if(arrayEventos.length==0){
        contenedor.innerHTML = `<h3>La categoria no existe, intentalo de nuevo</h3>`
    }else{
        contenedor.innerHTML = " "
        arrayEventos.forEach(newEvent=> {   
          
            const card = document.createElement("div")
            card.classList.add("card")
            card.style.width = "18rem "
            card.innerHTML = `
        <img src= ${newEvent.image} class="card-img-top imgCard" alt="...">
        <div class="card-body p-3  text-bg-info ">
        <h5 class="card-title text-center">${newEvent.name}</h5>
        <p class="card-text text-justify">${newEvent.description} </p>
        </div> 
        <div class="card-bodyprice d-flex justify-content-around border border-info rounded-bottom p-3 ">
       <span> Precio: ${newEvent.price}</span>
       <a href="./details.html?_id=${newEvent._id}" class="card-link btn btn-dark">Details</a>
        </div> 
        `
            contenedor.appendChild(card)
        })
      }
      }  
    
      contenedorCheckbox.addEventListener("change", ()=> {
        let filtro = filtrarEventos(information)
       paintCards(filtro)
       
    })

    buscador.addEventListener("keyup", ()=>{
        let filtro2 =filtrarTexto(information)
        paintCards(filtro2)
      })
      
    function superFiltro(arrayEventos){
        let filtro = filtrarEventos(arrayEventos) 
        let filtro2 = filtrarPorTexto(filtro1)
        paintCards(filtro2)
    }