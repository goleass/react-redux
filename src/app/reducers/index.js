import { combineReducers } from 'redux'

import { ADICIONAR_UM, SUBTRAIR_UM, SOMAR_CINCO } from '../actions/types';

const valoresReducer = (state = {valor: 0}, action) => {
    switch(action.type){
        case ADICIONAR_UM:
            return {...state, valor: state.valor + 1}
        case SUBTRAIR_UM:
            return {...state, valor: state.valor - 1}
        case SOMAR_CINCO:
            if(state.valor<20){return {...state, valor: state.valor + 5}}else{return state}
        default:
            return state
    }
}

const rootReducer = combineReducers({
    valores: valoresReducer
})

export default rootReducer