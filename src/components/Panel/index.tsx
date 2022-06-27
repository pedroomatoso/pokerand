import { Container, Card, Listing } from "./styles"

export const Panel = (): JSX.Element => {

  return (
    <Container>
      <Card>
        <div className="card__header">
          <div className="card__id">#001</div>
          <img className="card__img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Pokémon sprite" />
        </div>
        <div className="card__info">
          <div className="card__name">Bulbasaur</div>
          <div>
            <div className="card__genus">Seed Pokémon</div>
            <div>
              <span className="card__type card__type--grass">GRASS</span>
              <span className="card__type card__type--poison">POISON</span>
            </div>
          </div>
          <div className="card__stats">
            <div className="card__stat">
              <div className="card__stat-value">80</div>
              <div className="card__stat-name">HP</div>
            </div>
            <div className="card__stat">
              <div className="card__stat-value">80</div>
              <div className="card__stat-name">ATTACK</div>
            </div>
            <div className="card__stat">
              <div className="card__stat-value">80</div>
              <div className="card__stat-name">DEFENSE</div>
            </div>
            <div className="card__stat">
              <div className="card__stat-value">80</div>
              <div className="card__stat-name">SPEED</div>
            </div>
          </div>
        </div>
        <button type="button">Generate</button>
      </Card>
      <Listing>
        <div className="item">
          <div className="item__image">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Pokémon sprite" />
          </div>
          <div className="item__info">
            <div>
              <div className="item__name">Bulbasaur</div>
              <div>
                <span className="item__id">#001</span>
                <span className="item__genus">Seed Pokémon</span>
                <span className="item__type item__type--grass">GRASS</span>
                <span className="item__type item__type--poison">POISON</span>
              </div>
            </div>
            <div className="item_stats">
              <div className="item__stat">
                <div className="item__stat-value">80</div>
                <div className="item__stat-name">HP</div>
              </div>
              <div className="item__stat">
                <div className="item__stat-value">80</div>
                <div className="item__stat-name">ATTACK</div>
              </div>
              <div className="item__stat">
                <div className="item__stat-value">80</div>
                <div className="item__stat-name">DEFENSE</div>
              </div>
              <div className="item__stat">
                <div className="item__stat-value">80</div>
                <div className="item__stat-name">SPEED</div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item__image">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Pokémon sprite" />
          </div>
          <div className="item__info">
            <div>
              <div className="item__name">Bulbasaur</div>
              <div>
                <span className="item__id">#001</span>
                <span className="item__genus">Seed Pokémon</span>
                <span className="item__type item__type--grass">GRASS</span>
                <span className="item__type item__type--poison">POISON</span>
              </div>
            </div>
            <div className="item_stats">
              <div className="item__stat">
                <div className="item__stat-value">80</div>
                <div className="item__stat-name">HP</div>
              </div>
              <div className="item__stat">
                <div className="item__stat-value">80</div>
                <div className="item__stat-name">ATTACK</div>
              </div>
              <div className="item__stat">
                <div className="item__stat-value">80</div>
                <div className="item__stat-name">DEFENSE</div>
              </div>
              <div className="item__stat">
                <div className="item__stat-value">80</div>
                <div className="item__stat-name">SPEED</div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item__image">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Pokémon sprite" />
          </div>
          <div className="item__info">
            <div>
              <div className="item__name">Bulbasaur</div>
              <div>
                <span className="item__id">#001</span>
                <span className="item__genus">Seed Pokémon</span>
                <span className="item__type item__type--grass">GRASS</span>
                <span className="item__type item__type--poison">POISON</span>
              </div>
            </div>
            <div className="item_stats">
              <div className="item__stat">
                <div className="item__stat-value">80</div>
                <div className="item__stat-name">HP</div>
              </div>
              <div className="item__stat">
                <div className="item__stat-value">80</div>
                <div className="item__stat-name">ATTACK</div>
              </div>
              <div className="item__stat">
                <div className="item__stat-value">80</div>
                <div className="item__stat-name">DEFENSE</div>
              </div>
              <div className="item__stat">
                <div className="item__stat-value">80</div>
                <div className="item__stat-name">SPEED</div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item__image">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Pokémon sprite" />
          </div>
          <div className="item__info">
            <div>
              <div className="item__name">Bulbasaur</div>
              <div>
                <span className="item__id">#001</span>
                <span className="item__genus">Seed Pokémon</span>
                <span className="item__type item__type--grass">GRASS</span>
                <span className="item__type item__type--poison">POISON</span>
              </div>
            </div>
            <div className="item_stats">
              <div className="item__stat">
                <div className="item__stat-value">80</div>
                <div className="item__stat-name">HP</div>
              </div>
              <div className="item__stat">
                <div className="item__stat-value">80</div>
                <div className="item__stat-name">ATTACK</div>
              </div>
              <div className="item__stat">
                <div className="item__stat-value">80</div>
                <div className="item__stat-name">DEFENSE</div>
              </div>
              <div className="item__stat">
                <div className="item__stat-value">80</div>
                <div className="item__stat-name">SPEED</div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item__image">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Pokémon sprite" />
          </div>
          <div className="item__info">
            <div>
              <div className="item__name">Bulbasaur</div>
              <div>
                <span className="item__id">#001</span>
                <span className="item__genus">Seed Pokémon</span>
                <span className="item__type item__type--grass">GRASS</span>
                <span className="item__type item__type--poison">POISON</span>
              </div>
            </div>
            <div className="item_stats">
              <div className="item__stat">
                <div className="item__stat-value">80</div>
                <div className="item__stat-name">HP</div>
              </div>
              <div className="item__stat">
                <div className="item__stat-value">80</div>
                <div className="item__stat-name">ATTACK</div>
              </div>
              <div className="item__stat">
                <div className="item__stat-value">80</div>
                <div className="item__stat-name">DEFENSE</div>
              </div>
              <div className="item__stat">
                <div className="item__stat-value">80</div>
                <div className="item__stat-name">SPEED</div>
              </div>
            </div>
          </div>
        </div>
      </Listing>
    </Container>
  )
}