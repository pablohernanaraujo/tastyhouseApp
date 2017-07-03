import * as RecipeActions from './Recipes'
import * as AuthActions from './Auth'
import * as ListadosActions from './Listados'
import * as ListadosUsuarioActions from './ListadosUsuario'
import * as CrudRecetasActions from './CrudRecetas'

export const ActionCreators = Object.assign({},
  AuthActions,
  RecipeActions,
  ListadosActions,
  ListadosUsuarioActions,
  CrudRecetasActions
);
