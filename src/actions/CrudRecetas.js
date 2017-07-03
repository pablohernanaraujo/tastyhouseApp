import * as firebase from 'firebase'

import { firebaseDb } from '../firebase'
import * as types from './types'

export function crearReceta(nombre, usuario){
  return dispatch => {
    const Receta = firebaseDb.ref('recetas/' + usuario.id).push();
    const key = Receta.key;
    let avatar;

    if(usuario.avatar){
      avatar = usuario.avatar;
    }else{
      avatar = null;
    }

    let newData = {
      nombre: nombre,
      id: key,
      status: 1,
      date: firebase.database.ServerValue.TIMESTAMP,
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        avatar: avatar
      }
    };

    Receta.set(newData);

    const crud = newData;

    dispatch({
      type: types.CREAR_RECETA,
      crud
    });
  }
}

export function eliminarReceta(usuarioId, recetaId){
  return dispatch => {
    firebaseDb.ref('recetas/' + usuarioId + '/' + recetaId).remove( error => {
      if (error) {
        console.log(error);
      }else{
        const crud = {};
        dispatch({
          type: types.ELIMINAR_RECETA,
          crud
        });
      }
    })
  }
}

export function editarReceta(usuarioId, recetaId, dato, campo){
  return dispatch => {
    firebaseDb.ref('recetas/' + usuarioId + '/' + recetaId)
      .update({
        descripcion: dato
      });

    const crud = {};
    dispatch({
      type: types.EDITAR_RECETA,
      crud
    });
  }
}
