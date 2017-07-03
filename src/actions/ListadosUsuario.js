import { firebaseDb } from '../firebase'
import * as types from './types'

const Recetas = firebaseDb.ref('recetas');

export function listadosUsuario(uid){
  console.log(uid);
  return dispatch => {
    var recetas = firebaseDb.ref('recetas/' + uid);
    recetas.on('value', snapshot => {
      var listadoUsuario = [];
      var recetas = snapshot.val();
      for (var i in recetas){
        if(recetas[i].status === 2){
          listadoUsuario.push(recetas[i]);
        }
      }
      dispatch({
        type: types.LISTADO_USUARIO,
        listadoUsuario
      });
    });
  };
}
