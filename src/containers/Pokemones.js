import React from "react";
import Bulbasour from './../static/img/Bulbasour.png'
import Chimchar from './../static/img/Chimchar.png'
import Eevee from './../static/img/Eevee.png'
import glameow from './../static/img/glameow.jpg'
import Torchic from './../static/img/Torchic.gif'

class Pokemones extends React.Component {
  state = {
    pokemons: [
      {nombre: 'Bulbasour', vida: 23, fuerza: 2, imagen: Bulbasour},
      {nombre: 'Chimchar', vida: 20, fuerza: 3, imagen: Chimchar},
      {nombre: 'Eevee', vida: 12, fuerza: 8, imagen: Eevee},
      {nombre: 'glameow', vida: 23, fuerza: 1, imagen: glameow},
      {nombre: 'Torchic', vida: 3, fuerza: 10, imagen: Torchic},
    ],
    pokemon1: {
      nombre: 'Bulbasour',
      vida: 23, 
      fuerza: 12,
      imagen: Bulbasour
    },

    pokemon2: {
      nombre: 'Chimchar',
      vida: 10, 
      fuerza: 2,
      imagen: Chimchar
    }
  };

  render () {
    const { pokemons } = this.state
    const { pokemon1 } = this.state
    const { pokemon2 } = this.state

    return (
      <div>
        <div className="pokemons-battle">
          <div className="card">
            <img src={pokemon1.imagen} />
            <p><strong>Vida: </strong>{pokemon1.vida}</p>
            <p><strong>Fuerza: </strong>{pokemon1.fuerza}</p>
          </div>
        </div>
        <div className="pokemons-battle">
          <div className="card">
            <img src={pokemon1.imagen} />
            <p><strong>Vida: </strong>{pokemon1.vida}</p>
            <p><strong>Fuerza: </strong>{pokemon1.fuerza}</p>
          </div>
          <div className="card">
            <img src={pokemon2.imagen} />
            <p><strong>Vida: </strong>{pokemon1.vida}</p>
            <p><strong>Fuerza: </strong>{pokemon1.fuerza}</p>
          </div>
        </div>
        <button>Batalla</button>
      </div>
    )

  }
}

export default Pokemones