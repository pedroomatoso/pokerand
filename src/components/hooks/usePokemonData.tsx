import { createContext, ReactNode, useContext, useState } from "react";
import { Pokemon } from "../../types";

interface PokemonDataContextData {
  pokemonData: Pokemon[];
  storePokemonData: (currentPokemonData: any) => void;
}

interface PokemonDataProverProps {
  children: ReactNode
}

const PokemonDataContext = createContext<PokemonDataContextData>({} as PokemonDataContextData);

export function PokemonDataProvider({ children }: PokemonDataProverProps): JSX.Element {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>(() => {
    const storagedPokemon = localStorage.getItem('@PokéRand:pokemons');

    if (storagedPokemon) {
      return JSON.parse(storagedPokemon);
    }

    return [];
  })

  const storePokemonData = (currentPokemonData: any): void => {
    const updatedPokemonData = [...pokemonData, currentPokemonData];
    setPokemonData(updatedPokemonData);
    localStorage.setItem('@PokéRand:pokemons', JSON.stringify(updatedPokemonData));
  }

  return (
    <PokemonDataContext.Provider
      value={{ pokemonData: pokemonData, storePokemonData: storePokemonData }}
    >
      {children}
    </PokemonDataContext.Provider>
  )
}

export function usePokemonData(): PokemonDataContextData {
  const context = useContext(PokemonDataContext);
  return context;
}