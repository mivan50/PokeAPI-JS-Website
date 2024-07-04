// fetch = Function used for making HTTP requests to fetch resources.
//              (JSON style data, images, files)
//              Simplifies asynchronous data fetching in JavaScript and
//              used for interacting with APIs to retrieve and send
//              data asynchronously over the web.
//              fetch(url, {options})


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Pokémon not found");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const pokemonShinySprite = data.sprites.front_shiny;
        const pokemonWeight = data.weight / 10; // Convert weight to kg
        const pokemonHeight = data.height / 10; // Convert height to m
        
        // Set sprite img in html document
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        // Set shiny sprite img in html document
        const shinyImgElement = document.getElementById("pokemonShinySprite");
        shinyImgElement.src = pokemonShinySprite;
        shinyImgElement.style.display = "block"; 

        // Set height and weights in html document
        const pokemonWeightElement = document.getElementById("pokemonWeight");
        const pokemonHeightElement = document.getElementById("pokemonHeight");
        
        pokemonWeightElement.textContent = pokemonWeight;
        pokemonHeightElement.textContent = pokemonHeight;

        // Display the pokemon info container
        const pokemonInfoElement = document.getElementById("pokemonInfo");
        pokemonInfoElement.style.display = "block"; 
    }
    catch(error){
        console.error(error);
    }
}