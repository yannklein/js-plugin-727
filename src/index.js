// // 1. Select an element (button)
// const button = document.querySelector("#click-me");
// // 2. listen to a click on the button
// button.addEventListener("click", (event) => {
//   // 3. change the DOM (disabled and change text)
//   event.currentTarget.innerText = "Bingo";
//   event.currentTarget.disabled = true;
// });


const keyword = document.querySelector("#keyword");
const submit = document.querySelector("#submit");
const results = document.querySelector("#results");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  const url = `https://www.omdbapi.com/?s=${keyword.value}&apikey=adf1f2d7`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      const movies = data.Search;
      results.innerHTML = "";
      movies.forEach((movie) => {
        results.insertAdjacentHTML(
          "beforeend",
          `<li class='list-inline-item'>
            <img src=${movie.Poster} alt="movie">
            <p>${movie.Title}</p>
          </li>`
        );
      });
    });
  console.log("I am in a different timeline!");
});