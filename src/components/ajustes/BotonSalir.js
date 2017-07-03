import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
var Icon = require('react-native-vector-icons/FontAwesome')

class BotonSalir extends Component {
  static contextTypes = {
    isLoggedIn: React.PropTypes.bool,
    login: React.PropTypes.func,
    logout: React.PropTypes.func,
    props: React.PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <View style={{margin: 20}}>
        <Icon.Button onPress={() => {
            this.context.logout()
          }}
          color={'#fff'}
          backgroundColor={'#db1b1b'}
          name={'sign-out'}
          size={20}
          borderRadius={3}
          justifyContent={'center'}
        >
          <Text style={{color: '#fff'}}>SALIR</Text>
        </Icon.Button>
      </View>
    );
  }
}
export default BotonSalir;
