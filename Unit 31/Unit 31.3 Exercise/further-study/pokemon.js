let url = "https://pokeapi.co/api/v2/";

function getInfoAboutPokemon(pokemonID) {
    let promises = [];

    promises.push(
        axios.get(`${url}pokemon/${pokemonID}/`)
    );
    promises.push(
        axios.get(`${url}pokemon-species/${pokemonID}/`)
    );

    return Promise.all(promises);
}

function combinePokemonData(pokemonDataResponse, pokemonSpeciesDataResponse) {
    return {
        ...pokemonDataResponse.data,
        ...pokemonSpeciesDataResponse.data,
    }
}



$(function() {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let $btn = $("button");
    let $cardArea = $("#card-area");
    
    pokemonPromises = [];
    $btn.on("click", function(evt) {
        evt.preventDefault();
        for(let i=0; i<3; i++) {
            let pokemonID = getRandomInt(1, 898);
            pokemonPromises.push(getInfoAboutPokemon(pokemonID));
        }
        
        Promise.all(pokemonPromises)
            .then(pokemonArr => {
                pokemonArr.forEach((pokemonResponses) => {
                    const [pokemonResponse, speciesResponse] = pokemonResponses;
                    const pokemonData = combinePokemonData(pokemonResponse, speciesResponse);
                    console.log({pokemonData});
                    let newCard = generatePokemonCard(pokemonData);
                    console.log(newCard)
                    $cardArea.append(newCard)
            })
        })
    })
});

function generatePokemonCard(pokemonData) {
    return `
        <div class="card">
            <h1>${pokemonData.name}</h1>
            <img src="${pokemonData.sprites.front_default}"/>
            <p>${pokemonData.flavor_text_entries[0].flavor_text}</p>
        </div>
    `
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}