import React, { useState } from "react";
import pokemonList from "./pokemonList";
import { choice } from "./helpers";
import { useAxios } from "./hooks";

/* Select element to choose from common pokemon. */
function PokemonSelect({ pokemon = pokemonList, handleChange }) {
  return (
    <div>
      <select onChange={handleChange}>
        {pokemon.map((pokemonName) => (
          <option key={pokemonName} value={pokemonName}>
            {pokemonName}
          </option>
        ))}
      </select>
      {/* <button onClick={() => add(pokemon[pokeIdx])}>Catch one!</button>
      <button onClick={() => add(choice(pokemon))}>I'm feeling lucky</button> */}
    </div>
  );
}

export default PokemonSelect;
