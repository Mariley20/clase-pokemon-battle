import React from 'react'
import PropTypes from 'prop-types'

class Pokemon extends React.Component {

    componentDidMount () {
        console.log('Pokemon mounted', this.props)
    }
    componentDidUpdate () {
        console.log('Actualizado')
    }

    componentWillUnmount () {
        console.log(this.props.name + 'Se despide')
    }

    sendAttack = () => {
        const { attack } = this.props
        console.log('charizar grrr')
        this.props.onAttack(attack)
    }

    render () {
        const { name, attack, life, image } = this.props
        return <div>
            <h2>{ name || 'desconocido' }</h2>
            <p>{attack}/{life}</p>
            <img src={ image } />

            <button onClick={this.sendAttack}> Atacar </button>
        </div>
    }
}

Pokemon.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    attack: PropTypes.number.isRequired,
    life: PropTypes.number.isRequired,
    onAttack: PropTypes.func
}

export default Pokemon