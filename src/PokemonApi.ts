export interface PokemonApi {
  id: number;
  name: string;

  sprites: {
    front_default: string;
  };

  types: {
    type: {
      name: string;
    };
  }[];

  moves: {
    move: {
      name: string;
    };
  }[];

  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}
