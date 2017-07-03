import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { FBLogin, FBLoginManager } from 'react-native-facebook-login'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BotonSalir from '../components/ajustes/BotonSalir'
import { ActionCreators } from '../actions'

class Ajustes extends Component {

  render() {
    var _this = this;
    return (
      <View style={styles.container}>
        <View  style={styles.navegador}>
          <Text style={styles.texto}>Ajustes</Text>
        </View>
        <FBLogin
          buttonView={<BotonSalir />}
          ref={(fbLogin) => { this.fbLogin = fbLogin }}
          loginBehavior={FBLoginManager.LoginBehaviors.Native}
          permissions={['email','user_friends']}
          onLoginFound={function(e){}}
          onLoginNotFound={function(e){}}
          onLogout={function(){
            console.log("Logged out.");
            _this.setState({ user : null });
            _this.props.actions.logout();
            _this.props.navigator.replace({
              name: 'Login'
            });
          }}
          onCancel={function(e){}}
          onPermissionsMissing={function(e){}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navegador: {
    height: 42,
    backgroundColor: '#e72c4b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 24,
  }
});

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(ActionCreators, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Ajustes);
