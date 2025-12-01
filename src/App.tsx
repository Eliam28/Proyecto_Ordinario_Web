import { useState, useEffect } from "react";
import "./App.css";
import PokemonCard from "./Componentes/PokemonCard";
import type { PokemonApi } from "./PokemonApi";
function App() {
  const [pokemonInfo, setPokemonInfo] = useState<PokemonApi[]>([]);
  const URL_BASE = "https://pokeapi.co/api/v2/pokemon/";

  async function busquedaPokemon(id: number) {
    try {
      const respuesta = await fetch(`${URL_BASE}${id}`);
      const data: PokemonApi = await respuesta.json();
      setPokemonInfo((pokeActu) => {
        const copiaPokeInfo = [...pokeActu];
        copiaPokeInfo.push(data);
        return copiaPokeInfo;
      });
    } catch (error) {
      console.error("Error con la respuesta al buscar la info", error);
    }
  }

  function ObtenerTodosLosPokemos() {
    for (let i = 0; i < 20; i++) {
      busquedaPokemon(i);
    }
  }

  useEffect(() => {
    const cargar = async () => {
      await ObtenerTodosLosPokemos();
    };
    cargar();
  }, []);

  return (
    <>
      <h1>Pokedex</h1>
      <div className="ListaDePokemon">
        <div className="PokemonCards">
          {pokemonInfo.map((pokemon, index) => (
            <PokemonCard key={index} pokemonData={pokemon} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
