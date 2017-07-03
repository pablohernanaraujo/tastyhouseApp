import { combineReducers } from 'redux'

import recipes from './recipes'
import auth from './auth'
import listado from './listado'
import listadoUsuario from './listadoUsuario'
import crud from './crud'

const rootReducer = combineReducers({
  auth,
  recipes,
  listado,
  listadoUsuario,
  crud
});

export default rootReducer;
