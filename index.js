//load in the films from our api
//iterate through the films
//display each one in an image tag in the film-menu div

const API = "http://localhost:3000/films";


fetch(API)
.then((res) => res.json())
.then(renderFilms);

function renderFilms(films) {
    console.log(films)
  films.forEach(renderFilm)
}

function renderFilm(film) {
    const filmMenuDiv = document.getElementById("film-menu");

    const filmPoster = document.createElement("img");
    filmPoster.src = film.poster;
    filmMenuDiv.append(filmPoster);
}



