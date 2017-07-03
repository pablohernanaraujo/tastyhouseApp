import * as types from '../actions/types'
import initialState from './initialState'

export default function listadoUsuarioReducer(state = initialState.listadoUsuario, action){
  switch(action.type){
    case types.LISTADO_USUARIO:
      return action.listadoUsuario;

    default:
      return state;
  }
}
