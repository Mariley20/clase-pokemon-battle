import React from "react"

class BattleRing extends React.Component {
  state = {
    name: 'ISUR'
  };

  changeName () {
    this.setState({ name: "Laboratorio" })
  }

  render() {
    const  { name } = this.state;
    return (
      <>
        <h1>{ name }</h1>
        {/* <button onClick={ () => { this.changeName(); }} >Cambiar Nombre</button> */}
      </>
    )
  }
}

export default BattleRing