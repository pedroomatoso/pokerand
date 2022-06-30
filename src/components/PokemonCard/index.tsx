
import {  HiPencilAlt } from 'react-icons/hi';
import { Pokemon } from '../../types';

import { toTitleCase } from "../../utils";
import { Container } from "./styles";

interface PokemonCardProps {
  data: Pokemon;
  onGeneratePokemon: () => void;
}

export const PokemonCard = ({ data, onGeneratePokemon }: PokemonCardProps): JSX.Element => {

  function CardContents(): JSX.Element {
    if (Object.keys(data).length) {
      return (
        <>
          <div className="card__header">
            <div className="card__id">#{String(data.id).padStart(3, '0')}</div>
            <img className="card__img" src={data.sprite} alt="Pokémon sprite" />
          </div>
          <div className="card__info">
            <div className="card__name">
              {toTitleCase(data.name)}
              <HiPencilAlt className="card__edit-icon"/>
            </div>
            <div>
              <div className="card__genus">Seed Pokémon</div>
              <div className="card__types">
                {data.types.map((type, index) => {
                  return (
                    <span className={`card__type card__type--${type}`} key={index}>{type.toUpperCase()}</span>
                  )
                })}
              </div>
            </div>
            <div className="card__stats">
              {data.stats.map((stat, index) => {
                return (
                  <div className="card__stat" key={index}>
                    <div className="card__stat-value">{stat.value}</div>
                    <div className="card__stat-name">{stat.name.toUpperCase()}</div>
                  </div>
                  )
              })}
            </div>
          </div>
        </>
      )
    }

    return (
      <></>
    )
  }

  return (
    <Container
      type={data.types && data.types[0]}
    >
      {CardContents()}
      <button type="button" className="card__button" onClick={onGeneratePokemon}>Generate</button>
    </Container>
  );
}