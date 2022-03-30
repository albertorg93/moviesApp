function gotoSignUp(){
    window.location ="http://localhost:3000/signup"
}

function gotoLogin(){
    window.location ="http://localhost:3000/"
}
// resultsearch=document.getElementById("result")
// resultsearch1=document.getElementById("result").value
// resultsearch.style.display = "none"
console.log("hola");
document.getElementById("form12").addEventListener("submit",
 (event) => {
  event.preventDefault();
  const movie = event.target.elements.search.value;
  console.log(movie);
  //let pass = event.target.elements.pass.value;
  //let pass2 = event.target.elements.pass2.value;
  //fetchMovieInfo(movie)
  //resultsearch.style.display = "block"
  //generarPeliculas()
  //module.exports=movie
 window.location =`http://localhost:3000/api/search/${movie}`
})

document.getElementsByClassName("moviedetail").addEventListener("click",function
 (event) {
  //event.preventDefault();
  //const movie = event.target.elements.search.value;
  //console.log(movie);
  //let pass = event.target.elements.pass.value;
  //let pass2 = event.target.elements.pass2.value;
  //fetchMovieInfo(movie)
  //resultsearch.style.display = "block"
  //generarPeliculas()
  //module.exports=movie
 window.location =`http://localhost:3000/dashboard`
})