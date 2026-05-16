let api_key="9ffb8417b98477ac705f27e58b58bff0"
let base_url="https://api.themoviedb.org/3"
let img_url="https://image.tmdb.org/t/p/w500"
let allMovies = []


let movieContainer=document.getElementById("movies")
let searchInput=document.getElementById("search")
let searchBtn=document.getElementById("searchBtn")
let filterBtn=document.getElementById("filterBtn")
let sortHigh=document.getElementById("sortHigh")
let sortLow=document.getElementById("sortLow")
let themeToggle=document.getElementById("themeToggle")


function showLoading(){
    movieContainer.innerHTML="<h2>⏳ Loaing...</h2>"
}


async function getPopularMovies() {
    showLoading()
    let res=await fetch(`${base_url}/movie/popular?api_key=${api_key}`)
    let data=await res.json()
    allMovies=data.results
    displayMovies(allMovies)
}


getPopularMovies()

function displayMovies(movies){
    movieContainer.innerHTML=""
    movies.map(movie=>{
        let movieElement=document.createElement("div")
        movieElement.classList.add("movie")
        const year=movie.release_date ? movie.release_date.split("-")[0] : "N/A"
        movieElement.innerHTML=`
        <img class="" src="${img_url + movie.poster_path}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>📅 ${year}</p>
         <p>⭐ ${movie.vote_average}</p>
        `
        movieContainer.appendChild(movieElement)
    })
}


async function searchMovies(query) {
    showLoading()
    let res=await fetch(`${base_url}/search/movie?api_key=${api_key}&query=${query}`)
    let data=await res.json()
    displayMovies(data.results)
}

searchBtn.addEventListener("click",()=>{
    let query=searchInput.value.trim()
    if(query) {
        searchMovies(query)
    }
})

searchInput.addEventListener("keypress",(e)=>{
    if (e.key==="Enter"){
        searchBtn.click()
    }
})

// getPopularMovies()

filterBtn.addEventListener("click",()=>{
    const filteredMovies = allMovies.filter(movie => movie.vote_average >= 7)
  displayMovies(filteredMovies)
})

sortHigh.addEventListener("click", ()=>{
    const sortedMovies= [...allMovies].sort((a,b)=> b.vote_average-a.vote_average)
    displayMovies(sortedMovies)
})

sortLow.addEventListener("click", ()=>{
    const sortedMovies= [...allMovies].sort((a,b)=> a.vote_average-b.vote_average)
    displayMovies(sortedMovies)
})
themeToggle.addEventListener("click", ()=>{
    const body = document.querySelector("body");

  body.classList.toggle("bg-gray-900");
  body.classList.toggle("text-white");
  body.classList.toggle("bg-white");
  body.classList.toggle("text-black");
})