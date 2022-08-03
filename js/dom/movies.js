const cardsContainer = document.querySelector(".cards-container");
let testArray ;

function classNameRating(rate) {
  return rate >= 7 ? "green" : rate >= 5 ? "orange" : "red";
}

const renderMovies = (res) => {
  testArray = res.data.movies ;
  res.data.movies.forEach((ele) => {
    renderMovieCard(ele);
  });
};

const renderMovieCard = (movie) => {
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
// --------------------------------------------------------------------------------------


/// ----> cases : empty string ----> all data from array in local storage
/// ----> cases : not found (Empty array from search function ) ----> display not found to user
/// ----> cases : found result ------> display result

// information to store in local storage  [ id | img url | title | rate ]
// const notFound = document.querySelector(".not-found");

const inputSearch = document.querySelector("#search");

inputSearch.addEventListener('keyup', (e)=>{
    let string = e.target.value.toLowerCase() ;
    if(string === ""){
        cardsContainer.innerHTML = "";
        fetch("https://yts.mx/api/v2/list_movies.json?limit=50", renderMovies);
    }else {
    cardsContainer.innerHTML = "";
    searchDom(search.LocalSearch(testArray,string)) ;
    }
});

function searchDom(resultArr){
   if(resultArr.length === 0){
    let emptyParagraph = document.createElement("div");
    emptyParagraph.textContent = "There Is No Result 🥲 ";
    emptyParagraph.classList.add("not-found")
    cardsContainer.appendChild(emptyParagraph);
   }
   else {
    resultArr.forEach((ele) => {
        renderMovieCard(ele);
      });
   }
}

