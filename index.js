const API = "http://localhost:3000/films/1";

fetch(API)
.then((res) => res.json())
.then(renderFilm);

function renderFilm(film) {
    const filmMenuDiv = document.getElementById("film-menu");
    const titleDiv = document.getElementById("film-details"); 
    const runDiv = document.getElementById("runtime")
    const showDiv = document.getElementById("showtime")
    const availableDiv = document.getElementById("Available-tickets")

    const filmPoster = document.createElement("img");
    filmPoster.src = film.poster;
    filmMenuDiv.append(filmPoster); 

    const filmTitle = document.createElement("p");
    filmTitle.textContent = film.title;
    titleDiv.append(filmTitle);

    const filmRuntime = document.createElement("p");
    filmRuntime.textContent = film.runtime;
    runDiv.append(filmRuntime);

    const filmShowtime = document.createElement("p");
    filmShowtime.textContent = film.showtime;
    showDiv.append(filmShowtime);

    const filmAvailability = document.createElement("p");
    filmAvailability.textContent = (film.capacity - film.tickets_sold);
    availableDiv.append(filmAvailability);

    const button = document.getElementById("sell");
    const btn = parseInt(availableDiv.innerText);
    console.log(btn);
    button.addEventListener('click', () => {
       if (btn >= 1) {
        availableDiv.innerText = (availableDiv.innerText - 1)
        
       }
      
       if (availableDiv.innerText < 0) {
        availableDiv.innerText = 0;
        alert ('Sorry, we are currently sold out.')
       }
    })

}

    
   


//load in the films from our api
//iterate through the films
//display each one in an image tag in the film-menu div

//const API2 = "http://localhost:3000/films";


/*fetch(API2)
.then((res) => res.json())
.then(renderFilms);

function renderFilms(films) {
    console.log(films)
  films.forEach(renderFilm)
}

function renderFilm(film) {
    const filmDiv = document.getElementById("film-item");

    const filmPoster = document.createElement("img");
    filmPoster.src = film.poster;
    filmDiv.append(filmPoster);}*/




