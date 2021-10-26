import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import { useAxios } from "./hooks";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [pokemon, fetchPokemonData, setUrl] = useAxios('');

  const onSelect = (e) => {
    const newSelectedPokemon = e.target.value;
    console.log('Selected', newSelectedPokemon)
    setSelectedPokemon(newSelectedPokemon);
    setUrl(`https://pokeapi.co/api/v2/pokemon/${newSelectedPokemon}/`);
  }

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect handleChange={onSelect} />
      </div>
      <div className="PokeDex-card-area">
        {/* {pokemon.map(cardData => (
          <PokemonCard
            key={cardData.id}
            front={cardData.sprites.front_default}
            back={cardData.sprites.back_default}
            name={cardData.name}
            stats={cardData.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))} */}
        {pokemon && pokemon.sprites && (<PokemonCard
            key={pokemon.id}
            front={pokemon.sprites.front_default}
            back={pokemon.sprites.back_default}
            name={pokemon.name}
            stats={pokemon.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />)}
      </div>
    </div>
  );
}

export default PokeDex;
