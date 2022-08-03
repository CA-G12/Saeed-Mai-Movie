function classNameRating(rate) {
  return rate >= 7 ? "green" : rate >= 5 ? "orange" : "red";
}

const renderMovies = (res) => {
  res.data.movies.forEach((ele) => {
    renderMovieCard(ele);
  });
};

const renderMovieCard = (movie) => {
  const cardsContainer = document.querySelector(".cards-container");
  let movieCard = document.createElement("div");
  movieCard.id = movie.id;
  movieCard.classList.add("movie");
  cardsContainer.appendChild(movieCard);
  let movieImage = document.createElement("img");
  movieCard.appendChild(movieImage);
  movieImage.src = movie.medium_cover_image;
  movieImage.alt = movie.title + " poster";
  let movieInfo = document.createElement("div");
  movieInfo.classList.add("movie-info");
  movieCard.appendChild(movieInfo);
  let movieTitle = document.createElement("h3");
  movieInfo.appendChild(movieTitle);
  movieTitle.textContent = movie.title;
  let movieRate = document.createElement("span");
  movieRate.classList.add(classNameRating(movie.rating));
  movieInfo.appendChild(movieRate);
  movieRate.textContent = movie.rating;
  let addWish = document.createElement("i");
  addWish.classList.add("fa", "fa-solid", "fa-heart");
  movieCard.appendChild(addWish);
};

fetch("https://yts.mx/api/v2/list_movies.json?limit=50", renderMovies);
