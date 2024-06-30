// fetch = Function used for making HTTP requests to fetch resources.
//              (JSON style data, images, files)
//              Simplifies asynchronous data fetching in JavaScript and
//              used for interacting with APIs to retrieve and send
//              data asynchronously over the web.
//              fetch(url, {options})


async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Pokémon not found");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const pokemonWeight = data.weight / 10; // Convert weight to kg
        const pokemonHeight = data.height / 10; // Convert height to m
        
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

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