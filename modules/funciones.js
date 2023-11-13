export const apiUrl = "https://mindhub-xj03.onrender.com/api/amazing"
const contenedor = document.getElementById("contenedorCards")
const buscador = document.getElementById("buscador")
export 

export const contenedorCheckbox = document.getElementById("contenedorCheckbox")

export function pintarChecks(arrayCheck) {
    arrayCheck.forEach(cate => {
        const categoria = document.createElement("form");
        categoria.classList.add("form-check", "form-check-inline");
        categoria.innerHTML = `
      <input class="form-check-input" type="checkbox" role="swith" id=${cate} value="${cate}">
      <label class="form-check-label text-information" for=${cate}> ${cate}</label>
    `;
        contenedorCheckbox.appendChild(categoria);

    });
}
function filtrarEventos(arrayEventos) {
    let checked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value)

    let eventosFiltrado = []
    arrayEventos.forEach(e => {
        checked.forEach(eventoEncontrado => {
            if (eventoEncontrado == e.category) {
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
    return arrayEventos.filter(evento => evento.name.toLowerCase().includes(buscador.value.toLowerCase()))
}
export function paintCards(arrayEventos) {
    contenedor.innerHTML = " "
    if (arrayEventos.length == 0) {
        contenedor.innerHTML = "<h3>La categoria no existe, intentalo de nuevo</h3>"
    } else {

        arrayEventos.forEach(newEvent => {

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
       <a href="../page/details.html?_id=${newEvent._id}" class="card-link btn btn-dark">Details</a>
        </div> 
        `

            contenedor.appendChild(card)
        })
    }
}

export function superFiltro(arrayEventos) {
    let filtro = filtrarEventos(arrayEventos)
    let filtro2 = filtrarTexto(filtro)
    paintCards(filtro2)
}


//--------------table----------
export function crearTable(stadisticas) {

    let arrayOrdenado = stadisticas.sort((a, b) => b.assistance - a.assistance);

    let arrayFinal = [arrayOrdenado[0], arrayOrdenado[36]]
    let capacity = stadisticas.sort((a, b) => b.capacity - a.capacity);
    let capacityFinal = [capacity[0]]
    let superStadic = arrayFinal.concat(capacityFinal);
    console.log(superStadic);
    let tr = document.createElement("tr")
    for (let index = 0; index < superStadic.length; index++) {
        const element = superStadic[index];



        tr.innerHTML += `
          <td>${element.name}</td>
          
               
               
         `

        table1.appendChild(tr)
    }
}
export function crearTable2(stadisticas) {
    const eventsWithEstimate = stadisticas.filter((event) => event.estimate);
    const eventsForCategory = eventsWithEstimate.reduce((acum, event) => {
        const { category, price, estimate, capacity } = event;

        const eventCategory = {
            category,
            price,
            estimate,
            capacity,
        };

        if (acum.some((e) => e.category === event.category)) {
            acum = acum.map((e) => {
                if (e.category === event.category) {
                    return {
                        ...e,
                        price: e.price + event.price,
                        estimate: e.estimate + event.estimate,
                        capacity: e.capacity + event.capacity,
                    };
                }
                return e;
            });
        } else {
            acum.push(eventCategory);
        }

        return acum;
    }, []);

    const result = eventsForCategory.map((event) => {
        const { category, price, estimate, capacity } = event;
        return {
            category,
            ganancia: price * estimate,
            porcentaje: Math.round((estimate * 100) / capacity),
        };
    });
    console.log(result);

    for (let index = 0; index < result.length; index++) {
        const element = result[index];

        let tr = document.createElement("tr")
        tr.innerHTML += `
  <td>${element.category}</td>
  <td>$${element.ganancia}</td>
  <td>${element.porcentaje}%</td>
       
       
 `

        table2.appendChild(tr)
    }
}
export function crearTable3(stadisticas) {
    const eventsWithAssistance = stadisticas.filter((event) => event.assistance);
    const eventsForCategory = eventsWithAssistance.reduce((acum, event) => {
        const { category, price, assistance, capacity } = event;

        const eventCategory = {
            category,
            price,
            assistance,
            capacity,
        };

        if (acum.some((e) => e.category === event.category)) {
            acum = acum.map((e) => {
                if (e.category === event.category) {
                    return {
                        ...e,
                        price: e.price + event.price,
                        assistance: e.assistance + event.assistance,
                        capacity: e.capacity + event.capacity,
                    };
                }
                return e;
            });
        } else {
            acum.push(eventCategory);
        }

        return acum;
    }, []);

    const result = eventsForCategory.map((event) => {
        const { category, price, assistance, capacity } = event;
        return {
            category,
            ganancia: price * assistance,
            porcentaje: Math.round((assistance * 100) / capacity),
        };
    });
    console.log(result);

    for (let index = 0; index < result.length; index++) {
        const element = result[index];

        let tr = document.createElement("tr")
        tr.innerHTML += `
  <td>${element.category}</td>
  <td>$${element.ganancia}</td>
  <td>${element.porcentaje}%</td>
       
       
 `

        table3.appendChild(tr)
    }
}


























//--------details--------//
export function crearDetails(arrayCard) {
    const urlParams = new URLSearchParams(window.location.search);
    const contenedorDetails = document.getElementById("contenedorDetails")
    arrayCard.find(car => {
        if (car._id == _id) {

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


    })
}