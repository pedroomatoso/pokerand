import { Pokemon } from "../../types";
import { toTitleCase } from "../../utils";
import { Container } from "./styles";

interface PokemonListItemProps {
  data: Pokemon;
}

export function PokemonListItem({ data }: PokemonListItemProps): JSX.Element {
  return (
    <Container
      type={data.types[0]}
    >
      <div className="item__image">
        <img src={data.sprite} alt="Pokémon sprite" />
      </div>
      <div className="item__info">
        <div>
          <div className="item__name">{toTitleCase(data.name)}</div>
          <div>
            <span className="item__id">#{String(data.id).padStart(3, '0')}</span>
            <span className="item__genus">Seed Pokémon</span>
            {data.types.map((type, index) => {
              return (
                <span className={`item__type item__type--${type}`} key={index}>{type.toUpperCase()}</span>
              )
            })}
          </div>
        </div>
        <div className="item_stats">
          {data.stats.map((stat, index) => {
            return (
              <div className="item__stat" key={index}>
                <div className="item__stat-value">{stat.value}</div>
                <div className="item__stat-name">{stat.name.toUpperCase()}</div>
              </div>
              )
          })}
        </div>
      </div>
    </Container>
  );
}