const displayMovies = (movies) => {
  const results = document.querySelector("#results");
  results.innerHTML = "";
  movies.forEach((movie) => {
    results.insertAdjacentHTML(
      "beforeend",
      `<li class='list-inline-item'>
        <img height="120" src=${movie.Poster} alt="movie">
      </li>`
    );
  });
};

const fetchAPI = (keyword) => {
  const url = `https://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      // console.log(data);
      const movies = data.Search;
      displayMovies(movies);
    });
};

const searchMovie = (event) => {
  event.preventDefault();
  const keyword = document.querySelector("#keyword");
  fetchAPI(keyword.value);
}

export { fetchAPI, searchMovie};