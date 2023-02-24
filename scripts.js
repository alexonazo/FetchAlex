// Use your own API key
const apiKey = "cafa1ccf";
const boton = document.getElementById("boton");


boton.addEventListener("click", function(){
const randomPosition = Math.floor(Math.random() * peliculas.length);
const randomMovie = peliculas[randomPosition];
getMovieData(randomMovie);
});

let btn = null;

function getMovieData(title) {
  // Use fetch to make a GET request to OMDB with the title parameter
     fetch(`https://www.omdbapi.com/?t=${title}&apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => { 
      console.log(data)
      let movieDiv = document.getElementById("movie");
      // Create an h1 element for the movie title
      let movieTitle = `<h1>${data.Title}</h1>`;
      let moviePoster = `<img src="${data.Poster}">`;
      let movieGenre = `<p><strong>Género:</strong> ${data.Genre}</p>`;
      let movieActors = `<p><strong>Reparto:</strong> ${data.Actors}</p>`;
      let movieNote = `<p><strong>IMDB:</strong> ${data.imdbRating}</p>`;
      let moviePlot = `<p><strong>Argumento:</strong> ${data.Plot}</p>`;

      // Replace the content of the div element with the new elements
      movieDiv.innerHTML = movieTitle + moviePoster  + movieGenre + movieActors + movieNote + moviePlot;
      $(movieDiv).hide(0, function() {
        // Replace the content of the div element with the new elements
        movieDiv.innerHTML = movieTitle + moviePoster  + movieGenre + movieActors + movieNote + moviePlot;
        
        // Use jQuery to show the movieDiv with an animation
        $(movieDiv).fadeIn(1000);
      }); 
      
        btn = document.createElement('button');
        btn.id = 'boton2';
        btn.classList.add("btn", "btn-ligth");
        btn.innerHTML = `+`;
        movieDiv.appendChild(btn);
        btn.addEventListener("click", () => getYt(title));
    })
    // Handle any errors
    .catch(error => console.error(error));
}

const apiYt = 'AIzaSyCDxZKywjasGyO5JMgq-djaSFqzdp2HqOU';

function getYt(title) {
  // verificamos si ya existe un elemento de iframe en el contenedor principal
  let movieDiv = document.getElementById("movie");
  // Verificar si ya existe un iframe en el movieDiv y eliminarlo
  let existingIframe = movieDiv.querySelector('iframe');
  if (existingIframe) {
    btn.innerHTML = "+"
    return movieDiv.removeChild(existingIframe);
  }

  fetch(`https://www.googleapis.com/youtube/v3/search?part=id&q=${title} trailer&key=${apiYt}`)
  .then(response => response.json())
  .then(data => {
    const videoId = data.items[0].id.videoId;
    const iframe = document.createElement('iframe');
iframe.src = `https://www.youtube.com/embed/${videoId}`;
iframe.allow = 'autoplay; encrypted-media';
iframe.allowfullscreen = true;
iframe.style.width = '100%';
iframe.setAttribute('frameborder', '0');
iframe.setAttribute('allowfullscreen', '');
iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
iframe.id = 'trailer';
    const movieDiv = document.getElementById('movie');
    movieDiv.appendChild(iframe);
    $(iframe).hide().slideDown(1500);
    btn.innerHTML = "-";
  })
  .catch(error => console.error(error));
}

const peliculas = [
  "The Godfather",
  "The Shawshank Redemption",
  "The Dark Knight",
  "The Godfather: Part II",
  "12 Angry Men",
  "Schindler's List",
  "The Lord of the Rings: The Return of the King",
  "Pulp Fiction",
  "Forrest Gump",
  "The Empire Strikes Back",
  "Inception",
  "The Lord of the Rings: The Two Towers",
  "The Matrix",
  "Goodfellas",
  "Star Wars",
  "One Flew Over the Cuckoo's Nest",
  "Seven Samurai",
  "Se7en",
  "City of God",
  "The Silence of the Lambs",
  "It's a Wonderful Life",
  "Life is Beautiful",
  "Saving Private Ryan",
  "The Green Mile",
  "Interstellar",
  "The Prestige",
  "American History X",
  "Gladiator",
  "The Usual Suspects",
  "Léon: The Professional",
  "The Lion King",
  "The Departed",
  "Whiplash",
  "Terminator 2: Judgment Day",
  "Back to the Future",
  "Alien",
  "Raiders of the Lost Ark",
  "Psycho",
  "The Shining",
  "The Terminator",
  "Jaws",
  "The Exorcist",
  "Jurassic Park",
  "The Godfather: Part III",
  "Apocalypse Now",
  "The Good, the Bad and the Ugly",
  "Taxi Driver",
  "The French Connection",
  "Rocky",
  "The Graduate",
  "The Bridge on the River Kwai",
  "Singin' in the Rain",
  "Gone with the Wind",
  "Casablanca",
  "The Maltese Falcon",
  "Vertigo",
  "Some Like It Hot",
  "On the Waterfront",
  "West Side Story",
  "A Streetcar Named Desire",
  "Ben-Hur",
  "The Ten Commandments",
  "Doctor Zhivago",
  "Lawrence of Arabia",
  "Gandhi",
  "The Sound of Music",
  "The Wizard of Oz",
  "King Kong",
  "Snow White and the Seven Dwarfs",
  "Gone Girl",
  "The Revenant",
  "Mad Max: Fury Road",
  "Birdman",
  "The Grand Budapest Hotel",
  "Her",
  "The Social Network",
  "Avatar",
  "Up",
  "Inside Out",
  "Toy Story",
  "Finding Nemo",
  "The Incredibles",
  "Ratatouille",
  "WALL-E",
  "The Lion King",
  "Aladdin",
  "Beauty and the Beast",
  "The Little Mermaid",
  "Mulan",
  "Frozen",
  "Moana",
  "Coco",
  "Toy Story 4",
  "The Lion King (2019)"
]
