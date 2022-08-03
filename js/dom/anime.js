const moviesContainer = document.querySelector(".cards-container");
const renderMovies = (data) => {
  console.log(data);
  data.forEach((ele) => {
    renderMovieCard(ele);
  });
};

function classNameRating(rate) {
  return rate >= 70 ? "green" : rate >= 50 ? "orange" : "red";
}
const toggle = (id, arr) => {};

const renderMovieCard = (obj) => {
  let movieCard = document.createElement("div");
  movieCard.id = obj.id;
  movieCard.classList.add("movie");
  moviesContainer.appendChild(movieCard);
  let movieImage = document.createElement("img");
  movieCard.appendChild(movieImage);
  movieImage.src = obj.image;
  let movieInfo = document.createElement("div");
  movieInfo.classList.add("movie-info");
  movieCard.appendChild(movieInfo);
  let movieTitle = document.createElement("h3");
  movieInfo.appendChild(movieTitle);
  movieTitle.textContent = obj.title;
  let movieRate = document.createElement("span");
  movieRate.classList.add(classNameRating(parseInt(obj.rt_score)));
  movieInfo.appendChild(movieRate);
  movieRate.textContent = obj.rt_score;
  let addWish = document.createElement("i");
  addWish.classList.add("fa", "fa-solid", "fa-heart");
  movieCard.appendChild(addWish);
  //   addWish.addEventListener("click", () => {});
};

fetch("https://ghibliapi.herokuapp.com/films", renderMovies);
