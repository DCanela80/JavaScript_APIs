console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const searchButton = document.getElementById("submitSearch");
const searchInput = document.getElementById("searchWord");
const imageElement = document.querySelector("#imageContainer > img");
const feedbackPara = document.querySelector("#feedback");
const API_KEY = "6HGcTaY0TZmT91XxhrCIwPYwHTpVTZlT";

//Exercise 2-4
searchButton.addEventListener("click", () => {
    console.dir(searchInput.value);
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchInput.value}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        imageElement.src = data.data.images.original.url;
        searchInput.value = "";
        feedbackPara.textContent = "";
    })
    .catch((err) => {
        console.error(err);
        console.log(err.message);
        feedbackPara.textContent = err.message;
    })
});

