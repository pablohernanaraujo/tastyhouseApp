import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { FBLogin, FBLoginManager } from 'react-native-facebook-login'
import * as firebase from 'firebase'

import BotonEntrar from './BotonEntrar'

const auth = firebase.auth();
const provider = firebase.auth.FacebookAuthProvider;

export default class Facebook extends Component {
  render() {
    var _this = this;
    return (
        <FBLogin
          buttonView={<BotonEntrar />}
          ref={(fbLogin) => { this.fbLogin = fbLogin }}
          loginBehavior={FBLoginManager.LoginBehaviors.Native}
          permissions={['email','user_friends']}
          onLogin={function(data){
            console.log("Logged in!");
            _this.setState({ user : data.credentials });
            const credential = provider.credential(data.credentials.token);
            auth.signInWithCredential(credential).then((user) => {
              const usuario = firebase.database().ref('usuarios').child(user.uid);
              if(!usuario){
                firebase.database().ref('usuarios').child(user.uid).set({
          				id: user.uid,
          				email: user.email,
                  nombre: user.displayName,
                  date: firebase.database.ServerValue.TIMESTAMP,
          				status: 1,
                  avatar: {
                    url: user.photoURL
                  }
                })
              }
              _this.props.navigator.replace({
                name: 'Tabbar',
                passProps: {}
              })

            });
          }}
          onLoginFound={function(e){}}
          onLoginNotFound={function(e){}}
          onLogout={function(){
            console.log("Logged out.");
            _this.setState({ user : null });
            firebase.auth().signOut().then(function() {
              // Sign-out successful.
            }, function(error) {
              // An error happened.
              console.log(error);
            });
          }}
          onCancel={function(e){}}
          onPermissionsMissing={function(e){}}
        />
    );
  }
}
