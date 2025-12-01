import { useState, useEffect } from "react";
import "./App.css";
import PokemonCard from "./Componentes/PokemonCard";
import type { PokemonApi } from "./PokemonApi";
function App() {
  const [pokemonInfo, setPokemonInfo] = useState<PokemonApi | null>(null);
  const URL_BASE = "https://pokeapi.co/api/v2/pokemon/";

  async function busquedaPokemon(id: number) {
    try {
      const respuesta = await fetch(`${URL_BASE}${id}`);
      const data: PokemonApi = await respuesta.json();
      console.log(data);
      setPokemonInfo(data);
    } catch (error) {
      console.error("Error con la respuesta al buscar la info", error);
    }
  }

  useEffect(() => {
    const cargar = async () => {
      await busquedaPokemon(1);
    };
    cargar();
  }, []);

  return (
    <>
      <h1>Pokedex</h1>
      <div className="ListaDePokemon">
        <div className="PokemonCards">
          <PokemonCard pokemonData={pokemonInfo} />
          <PokemonCard pokemonData={pokemonInfo} />
          <PokemonCard pokemonData={pokemonInfo} />
        </div>
      </div>
    </>
  );
}

export default App;
