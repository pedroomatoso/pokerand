import styled from "styled-components";

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
  display: flex;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  border-radius: 8px;
  height: 96px;
  overflow: hidden;

  & + & {
    margin-top: 1em;
  }

  .item__image {
    background: linear-gradient(to bottom, ${props => pokemonTypesColors[props.type].primary }, #FFF);
  }

  .item__info {
    display: flex;
    align-items: center;
    justify-content: space-between;

    flex: 1;
    padding-left: 1em;
  }

  .item__name {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.5;
  }

  .item__id,
  .item__genus {
    color: #66625c;
    font-size: 1.3rem;
    margin-right: 1em;
  }

  .item__type {
    font-size: 1.3rem;
    font-weight: 500;
  }

  .item__type--bug {
    color: ${pokemonTypesColors.bug.primary};
  }

  .item__type--dragon {
    color: ${pokemonTypesColors.dragon.primary};
  }

  .item__type--fairy {
    color: ${pokemonTypesColors.fairy.primary};
  }

  .item__type--fire {
    color: ${pokemonTypesColors.fire.primary};
  }

  .item__type--ghost {
    color: ${pokemonTypesColors.ghost.primary};
  }

  .item__type--ground {
    color: ${pokemonTypesColors.ground.primary};
  }

  .item__type--normal {
    color: ${pokemonTypesColors.normal.primary};
  }

  .item__type--psychic {
    color: ${pokemonTypesColors.psychic.primary};
  }

  .item__type--steel {
    color: ${pokemonTypesColors.steel.primary};
  }

  .item__type--dark {
    color: ${pokemonTypesColors.dark.primary};
  }

  .item__type--electric {
    color: ${pokemonTypesColors.electric.primary};
  }

  .item__type--fighting {
    color: ${pokemonTypesColors.fighting.primary};
  }

  .item__type--flying {
    color: ${pokemonTypesColors.flying.primary};
  }

  .item__type--grass {
    color: ${pokemonTypesColors.grass.primary};
  }

  .item__type--ice {
    color: ${pokemonTypesColors.ice.primary};
  }

  .item__type--poison {
    color: ${pokemonTypesColors.poison.primary};
  }

  .item__type--rock {
    color: ${pokemonTypesColors.rock.primary};
  }

  .item__type--water {
    color: ${pokemonTypesColors.water.primary};
  }

  .item__type + .item__type::before {
    background-color: #a39f99;
    border-radius: 50%;
    content: "";
    display: inline-block;
    height: 5px;
    margin: 0 7px;
    vertical-align: middle;
    width: 5px;
  }

  .item_stats {
    display: flex;
  }

  .item__stat {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    border-left: 1px solid #ccc;
    line-height: 2;
    text-align: center;
    width: 70px;
  }

  .item__stat-name {
    font-size: 1.1rem;
  }

  .item__stat-value {
    font-size: 1.8rem;
    font-weight: 500;
  }
`;