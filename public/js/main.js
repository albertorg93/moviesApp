



function gotoSignUp() {
    window.location = "http://localhost:3000/signup"
}

function gotoLogin(){
    window.location ="http://localhost:3000/login"
}

if (document.getElementById("form12") != null) {
    addEventListener("submit",
        (event) => {
            event.preventDefault();
            const movie = event.target.elements.search.value;
            window.location = `http://localhost:3000/api/search/${movie}`

        })
}


// Calculo la cantidad de resultados que trajo la primer busqueda asi se cuantos event Listener crear.
const resultsLength = [...document.getElementsByClassName('results')].length

// Itero entre los elementos Resultado que hay, para agregarle un eventListener a cada boton


for (let i = 0; i < resultsLength; i++) {
    //Convierto a array TODOS los titulos del DOM
    let titles = [...document.getElementsByClassName("results")].map((elemento) => elemento.id)
    document.getElementById(`detalle${i}`).addEventListener("click", function
        (event) {
        // COMO CLICKEO EL BOTON DEL MISMO INDICE, SE QUE EL TITULO DE MI ARRAY ES EL QUE TIENE EL MISMO INDICE YA QUE: "Cantidad Botones = Cantidad Titulos" 
    window.location = `http://localhost:3000/api/search/detalle/${titles[i]}`
    })
}
const editsMovieLength = [...document.getElementsByClassName('listMovies1')].length

// for (let i = 0; i < editsMovieLength; i++) {

//     let titles1 = [...document.getElementsByClassName("listMovies1")].map((elemento) => elemento.id)

//     document.getElementById(`editmovie${i}`).addEventListener("click", function
//         (event) {
       

//         window.location = `http://localhost:3000/editMovie/${titles1[i]}`
//     })
// }
