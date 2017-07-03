import { firebaseDb } from '../firebase'
import * as types from './types'

const Recetas = firebaseDb.ref('recetas');

export function fetchRecetas(){
  return dispatch => {
    Recetas.on('value', snapshot => {
      var recetasUsuarios = snapshot.val();
      var recipes = [];
      for (var k in recetasUsuarios){
        if (recetasUsuarios.hasOwnProperty(k)){
          var obj  = recetasUsuarios[k];
          for (var i in obj){
            if (obj.hasOwnProperty(i)){
              if(obj[i].status === 2){
                recipes.push(obj[i]);
              }
            }
          }
        }
      }
      dispatch({
        type: types.FETCH_RECIPES,
        recipes
      });
    })
  };
}
