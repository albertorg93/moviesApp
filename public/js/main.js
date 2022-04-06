


function gotoSignUp(){
    window.location ="http://localhost:3000/signup"
}

function gotoLogin(){
    window.location ="http://localhost:3000/"
}
// resultsearch=document.getElementById("result")
// resultsearch1=document.getElementById("result").value
// resultsearch.style.display = "none"
//console.log(document.getElementById("form12"));
if (document.getElementById("form12")!=null){addEventListener("submit",
 (event) => {
  event.preventDefault();
  const movie = event.target.elements.search.value;
  window.location =`http://localhost:3000/api/search/${movie}`
 
})}


// Calculo la cantidad de resultados que trajo la primer busqueda asi se cuantos event Listener crear.
const resultsLength = [...document.getElementsByClassName('results')].length

// Itero entre los elementos Resultado que hay, para agregarle un eventListener a cada boton, dentro del mismo result. 
//(Aprovecho el indice del for loop para saber cual es el titulo que tengo que elegir)

for (let i = 0; i < resultsLength; i++) {
    //Convierto a array TODOS los titulos del DOM o 'LO QUE VEO EN EL NAVEGADOR = DOM'
let titles = [...document.getElementsByClassName("results")].map((elemento) => elemento.id)

//let botondiv = document.getElementById(`detalle${i}`);
//botondiv.value = results[i].Title



document.getElementById(`detalle${i}`).addEventListener("click",function
 (event) {
     // COMO CLICKEO EL BOTON DEL MISMO INDICE, SE QUE EL TITULO DE MI ARRAY ES EL QUE TIENE EL MISMO INDICE YA QUE: "Cantidad Botones = Cantidad Titulos" 
     // Ejemplo: Como hay 20 results, tengo 20 titulos y veinte botones. Por eso el Titulo Uno coincide con el Boton 1 y gracias a eso puedo usar el INDICE del for.
     console.log("ME CLICKEASTE, RECIBI", titles[i], "TENGO QUE BUSCAR ESTE DETALLE")
     
     window.location =`http://localhost:3000/api/search/detalle/${titles[i]}`
})}

/*
generarLibros(titles[i]).then(result => console.log(result))
async function generarLibros(title) {
    let response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=8b15a7f2`); //{}
    let results = await response.json();
    return results
  }
*/


//recepcion de datos para la creacion de pelicula nueva
// document.getElementById('formcrea').addEventListener("submit", function(e) {
//     e.preventDefault();
//     const tituloq = e.target.elements.tituloq.value;
//     const image = e.target.elements.image.value;
//     const year = e.target.elements.year.value;
//     const director = e.target.elements.director.value;
//     const genre = e.target.elements.genre.value;
//     const runtime = e.target.elements.runtime.value;

    
//     console.log(tituloq)
//     console.log(image)
//     console.log(year)
//     console.log(director)
//     console.log(genre)
//     console.log(runtime)
// })

// document.getElementById(`createnewMovie1`).addEventListener("click", function() {
//      window.location =`http://localhost:3000/createMovie`
// })


// document.getElementById(`editmovie`).addEventListener("click", function() {
//      console.log(listMovies.length)
//     console.log("hola desde editar")
//     // window.location =`http://localhost:3000/createMovie`
// })



const editsMovieLength = [...document.getElementsByClassName('listMovies1')].length

for (let i = 0; i < editsMovieLength; i++) {

let titles1 = [...document.getElementsByClassName("listMovies1")].map((elemento) => elemento.id)

document.getElementById(`editmovie${i}`).addEventListener("click",function
 (event) {
     console.log("ME CLICKEASTE, RECIBI", titles1[i], "TENGO QUE BUSCAR ESTE DETALLE")
     
      window.location =`http://localhost:3000/editMovie/${titles1[i]}`
})}

let buttonfav = document.getElementsByClassName("addFavBtn")
for (let i = 0; i < buttonfav.length; i++) {
    let id = buttonfav[i].value
    buttonfav[i].addEventListener("click", function (event) {
        // window.location = `http://localhost:/api/movie/${id}`

        console.log(id);
    })
}