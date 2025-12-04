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

  return (
    <>
      <div className="Carta_pokemon">
        <img
          src={pokemonData.sprites.front_default}
          alt="NoImagen"
          className="ImagendelPokemon"
        />
        <div className="InfoBasicaPokemon">
          <h2>{pokemonData.name}</h2>
          <p>Id: {pokemonData.id}</p>
        </div>
        <div className="botones">
          <button>Ver</button>
        </div>
      </div>
      ;
    </>
  );
}

export default PokemonCard;
