import styled from 'styled-components';

const pokemonTypesColors: {[index: string]: any} = {
  bug: {
    primary: '#A7B723',
    secondary: '#9cb820'
  },
  dragon: {
    primary: '#7037FF',
    secondary: '#7038f8'
  },
  fairy: {
    primary: '#E69EAC',
    secondary: '#f09ad9'
  },
  fire: {
    primary: '#F57D31',
    secondary: '#f08030'
  },
  ghost: {
    primary: '#70559B',
    secondary: '#705898'
  },
  ground: {
    primary: '#DEC16B',
    secondary: '#e0b668'
  },
  normal: {
    primary: '#AAA67F',
    secondary: '#a8a8a8'
  },
  psychic: {
    primary: '#FB5584',
    secondary: '#eb2d77'
  },
  steel: {
    primary: '#B7B9D0',
    secondary: '#6d8f9c'
  },
  dark: {
    primary: '#75574C',
    secondary: '#504843'
  },
  electric: {
    primary: '#F9CF30',
    secondary: '#c09643'
  },
  fighting: {
    primary: '#C12239',
    secondary: '#c03028'
  },
  flying: {
    primary: '#A891EC',
    secondary: '#9096f0'
  },
  grass: {
    primary: '#74CB48',
    secondary: '#22c02a'
  },
  ice: {
    primary: '#9AD6DF',
    secondary: '#98d8d8'
  },
  poison: {
    primary: '#A43E9E',
    secondary: '#a040a0'
  },
  rock: {
    primary: '#B69E31',
    secondary: '#b8a038'
  },
  water: {
    primary: '#6493EB',
    secondary: '#6890f0'
  }
};

export const Container = styled.div<{ type: string }>`
  background: linear-gradient(to bottom, ${props => pokemonTypesColors[props.type]?.primary || '#bebebe'}, #FFF);
  min-height: 500px;
  padding: 0.5em;
  display: grid;
  grid-template-areas:
    "header"
    "info"
    "button";
  grid-template-rows: 40% 50% 10%;

  .card__header {
    display: grid;
    place-items: center;

    grid-area: header;
  }

  .card__id {
    color: #FFFFFF44;
    font-weight: 500;
    font-size: 140px;
  }

  .card__img {
    filter: drop-shadow(4px 4px 4px rgba(4,8,12,.2));
    width: 144px;
  }

  .card__id,
  .card__img {
    grid-column: 1;
    grid-row: 1;
  }

  .card__info {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;

    color: #66625c;
    grid-area: info;
    padding: 0 1em 2em 1em;
  }

  .card__name {
    color: #FFF;
    font-size: 2.8rem;
    font-weight: 500;
    position: relative;

    :hover {
      cursor: pointer;
      opacity: .8;
    }
  }

  .card__edit-icon {
    position: absolute;
    right: -40px;
  }

  .card__genus {
    color: #66625c;
    line-height: 2;
    text-align: center;
  }

  .card__types {
    text-align: center;
  }

  .card__type {
    font-weight: 500;
  }

  .card__type--bug {
    color: ${pokemonTypesColors.bug.primary};
  }

  .card__type--dragon {
    color: ${pokemonTypesColors.dragon.primary};
  }

  .card__type--fairy {
    color: ${pokemonTypesColors.fairy.primary};
  }

  .card__type--fire {
    color: ${pokemonTypesColors.fire.primary};
  }

  .card__type--ghost {
    color: ${pokemonTypesColors.ghost.primary};
  }

  .card__type--ground {
    color: ${pokemonTypesColors.ground.primary};
  }

  .card__type--normal {
    color: ${pokemonTypesColors.normal.primary};
  }

  .card__type--psychic {
    color: ${pokemonTypesColors.psychic.primary};
  }

  .card__type--steel {
    color: ${pokemonTypesColors.steel.primary};
  }

  .card__type--dark {
    color: ${pokemonTypesColors.dark.primary};
  }

  .card__type--electric {
    color: ${pokemonTypesColors.electric.primary};
  }

  .card__type--fighting {
    color: ${pokemonTypesColors.fighting.primary};
  }

  .card__type--flying {
    color: ${pokemonTypesColors.flying.primary};
  }

  .card__type--grass {
    color: ${pokemonTypesColors.grass.primary};
  }

  .card__type--ice {
    color: ${pokemonTypesColors.ice.primary};
  }

  .card__type--poison {
    color: ${pokemonTypesColors.poison.primary};
  }

  .card__type--rock {
    color: ${pokemonTypesColors.rock.primary};
  }

  .card__type--water {
    color: ${pokemonTypesColors.water.primary};
  }

  .card__type + .card__type::before {
    background-color: #a39f99;
    border-radius: 50%;
    content: "";
    display: inline-block;
    height: 5px;
    margin: 0 7px;
    vertical-align: middle;
    width: 5px;
  }

  .card__stats {
    display: flex;
    justify-content: center;

    color: #333;
  }

  .card__stat {
    line-height: 2;
    text-align: center;
    width: 70px;
    padding: 0.5em 0em;
  }

  .card__stat + .card__stat {
    border-left: 1px solid #66625c55;
  }

  .card__stat-name {
    font-size: 1.1rem;
  }

  .card__stat-value {
    font-size: 1.8rem;
    font-weight: 500;
  }

  .card__button {
    background: linear-gradient(
      to bottom,
      ${props =>
        (pokemonTypesColors[props.type]?.primary ? pokemonTypesColors[props.type]?.primary + 88 : '')
        || '#000'
      },
      ${props => pokemonTypesColors[props.type]?.primary || '#000'}
    );
    border: none;
    border-radius: 6px;
    color: #fff;
    flex: 1;
    font-family: inherit;
    font-weight: 500;
    font-size: 1.6rem;
    grid-area: button;
    transition: opacity 100ms ease;

    :hover {
      cursor: pointer;
      opacity: .8;
    }

    :active {
      background: ${props => pokemonTypesColors[props.type]?.primary || '#666'};
      opacity: 1;
    }
  }
`;