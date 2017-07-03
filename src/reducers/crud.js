import * as types from '../actions/types'
import initialState from './initialState'

export default function crudReducer(state = initialState.crud, action){
  switch(action.type){
    case types.CREAR_RECETA:
      return action.crud;
    case types.ELIMINAR_RECETA:
      return action.crud;
    case types.EDITAR_RECETA:
      return action.crud;
    default:
      return state;
  }
}
