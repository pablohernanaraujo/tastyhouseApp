import * as types from '../actions/types'
import initialState from './initialState'

export default function listadoReducer(state = initialState.listado, action){
  switch(action.type){
    case types.LISTADO:
      return action.listado;
    default:
      return state;
  }
}
