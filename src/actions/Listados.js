import { firebaseDb } from '../firebase'
import * as types from './types'

const Recetas = firebaseDb.ref('recetas');

export function listados(uid){
  return dispatch => {
    var recetas = firebaseDb.ref('recetas/' + uid);
    recetas.orderByChild('date').on('value', snapshot => {
      var listado = [];
      var recetas = snapshot.val();
      for (var i in recetas){
        listado.push(recetas[i]);
      }
      dispatch({
        type: types.LISTADO,
        listado
      });
    });
  };
}
