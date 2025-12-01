import { useState, useEffect } from "react";
import "./App.css";
import PokemonCard from "./Componentes/PokemonCard";
import type { PokemonApi } from "./PokemonApi";

function App() {
  const [pokemonInfo, setPokemonInfo] = useState<PokemonApi[]>([]);
  const URL_BASE = "https://pokeapi.co/api/v2/pokemon/";

  async function ObtenerTodosLosPokemons() {
    try {
      const requests = [];

      for (let i = 1; i <= 20; i++) {
        requests.push(fetch(`${URL_BASE}${i}`).then((r) => r.json()));
      }

      const resultados: PokemonApi[] = await Promise.all(requests);

      setPokemonInfo(resultados);
    } catch (error) {
      console.error("Error al cargar los Pokémon: ", error);
    }
  }

  useEffect(() => {
    const cargar = async () => {
      await ObtenerTodosLosPokemons();
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
