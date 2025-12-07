import { useState, useEffect } from "react";
import "./App.css";
import PokemonCard from "./Componentes/PokemonCard";
import type { PokemonApi } from "./PokemonApi";

function App() {
  const [pokemonInfo, setPokemonInfo] = useState<PokemonApi[]>([]);
  const [search, setSearch] = useState("");

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

  const pokemonsFiltrados = pokemonInfo.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <div className="puntos-container">
        <div className="punto punto-rojo"></div>
        <div className="punto punto-amarillo"></div>
        <div className="punto punto-verde"></div>
      </div>
      <h1>Pokedex</h1>
      <input
        type="text"
        placeholder="Busca un Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="ListaDePokemon">
        <div className="PokemonCards">
          {pokemonsFiltrados.length === 0 && (
            <p className="no-results">No hay resultados</p>
          )}
          {pokemonsFiltrados.map((pokemon, index) => (
            <PokemonCard key={index} pokemonData={pokemon} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
