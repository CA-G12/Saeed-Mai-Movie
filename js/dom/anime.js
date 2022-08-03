let MOVIES_LIST = [];
let wishlist = LocalStorageHelpers.getItem("wishListMovies") || [];

const moviesContainer = document.querySelector(".cards-container");
const searchInput = document.getElementById("search");

const renderMovies = (data) => {
  MOVIES_LIST = LocalStorageHelpers.getItem("animeMovies");
  data.forEach((ele) => {
    renderMovieCard(ele);
  });
  searchInput.addEventListener("keyup", () => {
    resultSearch = search.LocalSearch(MOVIES_LIST, searchInput.value);

    if (resultSearch.length == 0) {
      moviesContainer.textContent = "";
      let emptyParagraph = document.createElement("div");
      emptyParagraph.textContent = "There Is No Result 🥲 ";
      emptyParagraph.classList.add("not-found")
      moviesContainer.appendChild(emptyParagraph);
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
const toggle = (id) => {
  console.log(id, "ahmed");
  let arr = LocalStorageHelpers.getItem("wishListMovies");
  let movie = arr.filter((e) => {
    return e.id == id;
  });
  console.log(arr.includes(id));
  if (arr.includes(id)) {
    console.log("hello");
    LocalStorageHelpers.removeItemFrom("wishListMovies", id);
    let ele = document.getElementById(id);
    ele.style = "color:rgba(15, 11, 11, 0.527);";
    ele.style = "color:red;";
  } else {
    LocalStorageHelpers.addItemTo("wishListMovies", id);
    let ele = document.getElementById(id);

    ele.style = "color:red;";
    ele.classList.toggle("red");
  }
};

const renderMovieCard = (obj) => {
  let movieCard = document.createElement("div");

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

  addWish.addEventListener("click", () => {
    console.log("dhgdsh");
    toggle(addWish.id);
  });
};
fetch("https://ghibliapi.herokuapp.com/films", renderMovies);
fetch("https://ghibliapi.herokuapp.com/films", (data) => {
  LocalStorageHelpers.setItem("animeMovies", data);
});
