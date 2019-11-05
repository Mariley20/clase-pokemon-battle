import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pokemon from "./components/Pokemon";
import imgBulbasour from "./assets/img/Bulbasour.png"
import imgGlameow from "./assets/img/glameow.jpg"

class App extends React.Component {
  state = {
    vida: 150,
    vidaCharizar: 400
  }

  attack = () => {
    console.log('muere pikachu')
    const { vida } = this.state
    this.setState({
      vida : (vida -10)
    })

  }

  pikachuAttack = (damage) => {
    const { vidaCharizar } = this.state
    this.setState({
      vidaCharizar: (vidaCharizar - damage)
    })
    
    console.log('pikachuu', damage)
  }

  charizarAttack = (damage) => {

    const { vida } = this.state
    this.setState({
      vida: (vida - damage)
    })
    console.log('charizar', damage)
  }
  
  render() {
    const { vida, vidaCharizar } = this.state
    return (
      <div className="App">
        App
        {
          vida > 0 ? <Pokemon onAttack={this.pikachuAttack} name="Bulbasour" attack="100" life={vida} image={imgBulbasour}/> : null
        }
        {
          vidaCharizar > 0 ? <Pokemon onAttack={this.charizarAttack} name="Charizar" attack="300" life={vidaCharizar}  image={imgGlameow}/> : null
        }
        
        <button onClick={this.attack}>Atacar APP</button>
      </div>
    );
  }
}

export default App;
