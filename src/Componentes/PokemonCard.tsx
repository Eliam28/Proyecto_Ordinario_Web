import type { PokemonApi } from "../PokemonApi";
import "./PokemonCard.css";

interface Props {
  pokemonData: PokemonApi | null;
}

function PokemonCard({ pokemonData }: Props) {
  if (!pokemonData) {
    return (
      <>
        <h1>Cargando Pokemon...</h1>
      </>
    );
  }

  const vida = pokemonData.stats.find((s) => s.stat.name === "hp")?.base_stat;
  const ataque = pokemonData.stats.find(
    (s) => s.stat.name === "attack"
  )?.base_stat;
  const defensa = pokemonData.stats.find(
    (s) => s.stat.name === "defense"
  )?.base_stat;
  const ataqueEsp = pokemonData.stats.find(
    (s) => s.stat.name === "special-attack"
  )?.base_stat;
  const defensaEsp = pokemonData.stats.find(
    (s) => s.stat.name === "special-defense"
  )?.base_stat;
  const velocidad = pokemonData.stats.find(
    (s) => s.stat.name === "speed"
  )?.base_stat;

  const primerosMovimientos = pokemonData.moves.slice(0, 4);

  return (
    <>
      <div className="Carta_pokemon">
        <div className="pokemon-imagen-container">
          <img
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
            className="ImagendelPokemon"
          />
        </div>
        <div className="pokemon-info-grid">
          <div className="columna-izquierda">
            <p>
              <strong>ID:</strong> {pokemonData.id}
            </p>
            <p>
              <strong>Nombre:</strong> {pokemonData.name}
            </p>
            <p>
              <strong>Tipo:</strong>
            </p>
            <ul>
              {pokemonData.types.map((t) => (
                <li key={t.type.name}>{t.type.name}</li>
              ))}
            </ul>
          </div>
          <div className="columna-centro">
            <p>
              <strong>Movimientos:</strong>
            </p>
            <ol>
              {primerosMovimientos.map((m) => (
                <li key={m.move.name}>{m.move.name}</li>
              ))}
            </ol>
          </div>
          <div className="columna-derecha">
            <p>
              <strong>Estadísticas:</strong>
            </p>
            <p>
              <strong>Vida:</strong> {vida}
            </p>
            <p>
              <strong>Ataq:</strong> {ataque}
            </p>
            <p>
              <strong>Ataq. Esp:</strong> {ataqueEsp}
            </p>
          </div>
          <div className="columna-derecha-extra">
            <p>&nbsp;</p>
            <p>
              <strong>Def:</strong> {defensa}
            </p>
            <p>
              <strong>Def. Esp:</strong> {defensaEsp}
            </p>
            <p>
              <strong>Vel:</strong> {velocidad}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonCard;
