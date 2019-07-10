import React,{ Component} from 'react'

import { connect } from 'react-redux'

import * as actions from '../actions'

class Aplicacao extends Component{
    render(){
        const { valor, subtrairUm, adicionarUm, somarCinco } = this.props
        return(
            <div className="Aplicacao">
                <p>{valor}</p>
                <br/>
                <button onClick={() => adicionarUm()}>+</button>
                <button onClick={() => subtrairUm()}>-</button>
                <button onClick ={() => somarCinco()}>+5</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    valor: state.valores.valor
})

export default connect(mapStateToProps, actions)(Aplicacao)