let wishListMovies = LocalStorageHelpers.getItem("wishListMovies");

const renderMovies = (data) => {
  MOVIES_LIST = LocalStorageHelpers.getItem("animeMovies");
  data.forEach((ele) => {
    renderMovieCard(ele);
  });
  searchInput.addEventListener("keyup", () => {
    resultSearch = search.LocalSearch(MOVIES_LIST, searchInput.value);

    if (resultSearch.length == 0) {
      moviesContainer.textContent = "";
      let emptyParagraph = document.createElement("h2");
      moviesContainer.appendChild(emptyParagraph);
      emptyParagraph.textContent = "there is no Movies !!";
    } else {
      updateRenderMovies(resultSearch);
    }
  });
};
const updateRenderMovies = (data) => {
  moviesContainer.textContent = "";
  renderMovies(data);
};
function classNameRating(rate) {
  return rate >= 70 ? "green" : rate >= 50 ? "orange" : "red";
}
const toggle = (id, arr) => {
  let movie = arr.filter((e) => {
    return e.id == id;
  });
  if (arr.includes(movie)) {
    LocalStorageHelpers.removeItemFrom("wishListMovies", id);
    let ele = document.getElementById(id);
    ele.classList.toggle("red");
  } else {
    LocalStorageHelpers.addItemTo("wishListMovies", id);
    let ele = document.getElementById(id);
    ele.classList.toggle("red");
  }
};

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
  addWish.id = obj.id;
  movieCard.appendChild(addWish);
};
renderMovies(wishListMovies);
