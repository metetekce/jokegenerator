const text = document.querySelector("#text");
const button = document.querySelector("#btn");
const image = document.getElementById("content");
// !!!
const imageButton = document.getElementById("imgbtn");
// picking up the relevant html elements and assigning them into variables.

button.addEventListener("click", getRandomJoke);
imageButton.addEventListener("click", getRandomImageJoke);
// adding event listeners to execute fetch and replace content.

async function getRandomJoke() {
  let response = await fetch("https://icanhazdadjoke.com/", {
    headers: { accept: "application/json" },
  });
  let joke = await response.json();
  // fetching data from the url and assigning it to the response variable.

  //   text.innerHTML = joke.joke; !!!!
  text.textContent = joke.joke;
  // replacing the content by dom manipulation.
}

async function getRandomImageJoke() {
  let response = await fetch("https://icanhazdadjoke.com/", {
    headers: { accept: "application/json" },
  });
  let joke = await response.json();
  image.src = `https://icanhazdadjoke.com/j/${joke.id}.png`;
  // replacing the image source url with the specific joke id.
}
getRandomImageJoke();
