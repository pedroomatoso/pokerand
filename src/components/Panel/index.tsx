import { useEffect, useState } from "react";

import { PokemonCard } from '../PokemonCard';
import { Container, Listing } from "./styles"
import { randInt } from "../../utils";
import { PokemonListItem } from "../PokemonListItem";
import { usePokemonData } from "../hooks/usePokemonData";
import { Pokemon } from "../../types";
import { pokeAPI } from "../../services/PokeAPI";
import { api } from "../../services/Api";

interface Response {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    }
  }[],
  stats: {
    base_stat: number;
    stat: {
      name: string
    }
  }[]
}

interface GeneratedPokemonResponse {
  id: number;
  pokemon_id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export const Panel = (): JSX.Element => {
  const { pokemonData, storePokemonData } = usePokemonData();
  const [highlightedPokemon, setHighlightedPokemon] = useState<Pokemon>({} as Pokemon);
  const [generatedPokemons, setGeneratedPokemons] = useState<Pokemon[]>([] as Pokemon[])

  useEffect(() => {
    const fetchGeneratedPokemon = async () => {
      try {
        const { data } = await api.get('pokemon')

        for await (let pokemon of data) {
          let currentPokemonData = pokemonData.find(el => el.id === pokemon.pokemon_id);

          if (!currentPokemonData) {
            const { data } = await pokeAPI.get<Response>(`pokemon/${pokemon.pokemon_id}`);
            currentPokemonData = createPokemonObject(data);
            storePokemonData(currentPokemonData);
          }

          setGeneratedPokemons([...generatedPokemons, currentPokemonData]);
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetchGeneratedPokemon();
  }, []);

  async function handleGeneratePokemon() {
    try {
      const pokemonId = randInt(1, 151);
      let pokemon = pokemonData.find(el => el.id === pokemonId)

      if (!pokemon) {
        const { data } = await pokeAPI.get<Response>(`pokemon/${pokemonId}`);
        pokemon = createPokemonObject(data);
        storePokemonData(pokemon);
      }

      // await api.post('pokemon', {
      //   pokemonId: pokemon.id,
      //   name: pokemon.name
      // })

      setHighlightedPokemon(pokemon);
      setGeneratedPokemons([pokemon, ...generatedPokemons]);
    } catch(error) {
      console.log(error);
    }
  }

  function createPokemonObject(data: Response): Pokemon {
    return  {
      id: data.id,
      name: data.name,
      sprite: data.sprites.front_default,
      types: data.types.map(el => el.type.name),
      stats: data.stats.filter(el => {
          return el.stat.name == 'hp'
            || el.stat.name == 'attack'
            || el.stat.name == 'defense'
            || el.stat.name == 'speed';
        }).map(el => {
          return { name: el.stat.name, value: el.base_stat }
        })
    }
  }

  return (
    <Container>
      <PokemonCard
        data={highlightedPokemon}
        onGeneratePokemon={handleGeneratePokemon}
      />
      <Listing>
        {generatedPokemons.map((pokemon, index) => {
          return (
            <PokemonListItem
              key={index}
              data={pokemon}
            />
          )
        })}
      </Listing>
    </Container>
  )
}