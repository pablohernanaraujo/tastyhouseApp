import { firebaseAuth, firebaseDb } from '../firebase'
import * as types from './types'
import * as firebase from 'firebase'

const provider = firebase.auth.FacebookAuthProvider;

export function setCurrentUser(user){
  return {
    type: types.SET_CURRENT_USER,
    user
  };
}

export function getAuth() {
  return dispatch => {
    firebaseAuth.onAuthStateChanged(function(user) {
      if (user) {
        const userRef = firebaseDb.ref('usuarios/'+ user.uid);
        userRef.on('value', (snap) => {
          dispatch(setCurrentUser(snap.val()));
        });
      } else {
        dispatch(setCurrentUser({}));
      }
    });
  };
}

export function login(user, cb){
  return dispatch => {
    return firebaseAuth.signInWithEmailAndPassword(user.email, user.password)
      .then((user) => {
        if(user){
          const userRef = firebaseDb.ref('usuarios/'+ user.uid);
          userRef.on('value', (snap) => {
            dispatch(setCurrentUser(snap.val()));
          });
          var usu = 'bienvenido';
          return cb(usu);
        }
      })
      .catch(function(error) {
        if(error){
          var mensaje = '';
          var errorCode = error.code;
          var errorMessage = error.message;

          switch (errorMessage) {
            case 'The password is invalid or the user does not have a password.':
              mensaje = 'El password es invalido.';
              break;
            case 'There is no user record corresponding to this identifier. The user may have been deleted.':
              mensaje = 'El usuario no existe.';
              break;
            default:
              mensaje = 'Error desconocido.';
          }

          console.log(errorMessage);

          return cb(mensaje);
        }
      });
  };
}

export function loginFacebook(token){
  return dispatch => {
    const credential = provider.credential(token);
    return firebaseAuth.signInWithCredential(credential)
      .then((user) => {
        const usuario = firebaseDb.ref('usuarios').child(user.uid);
        if(usuario){

        }else{
          firebaseDb.ref('usuarios').child(user.uid).set({
            id: user.uid,
            email: user.email,
            nombre: user.displayName,
            date: firebase.database.ServerValue.TIMESTAMP,
            status: 1,
            avatar: {
              url: user.photoURL
            }
          })
          .catch(function(error) {
            if(error){
              var errorMessage = error.message;
              console.log(errorMessage);
            }
          });
        }
    });
  };
}

export function register(user, cb){
  return dispatch => {
    return firebaseAuth.createUserWithEmailAndPassword(user.email, user.password)
      .then(function(usuario){
        console.log(usuario);
        firebaseDb.ref('usuarios').child(usuario.uid).set({
  				regUsuario: usuario.uid,
  				email: user.email,
          nombre: user.nombre,
          date: firebase.database.ServerValue.TIMESTAMP,
  				status: 1
        })

        const userRef = firebaseDb.ref('usuarios/'+ usuario.uid);
        userRef.on('value', (snap) => {
          dispatch(setCurrentUser(snap.val()));
        });
        var usu = 'bienvenido';
        return cb(usu);
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        switch (errorMessage) {
          case 'Password should be at least 6 characters':
            mensaje = 'El password debe tener al menos 6 digitos';
            break;
          case 'The email address is already in use by another account.':
            mensaje = 'El email se encuentra en uso.';
            break;
          default:
            mensaje = 'Error desconocido.';
        }

        console.log(errorMessage);

        return cb(mensaje);
      });
  };
}

export function logout(){
  return dispatch => {
    firebaseAuth.signOut();
    dispatch(setCurrentUser({}));
  };
}
