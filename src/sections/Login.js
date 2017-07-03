import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native'

import Ingresar from '../components/login/Ingresar'

export default class Login extends Component {
  render() {
    var _this = this;
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.container}
      >
        <Image
          style={styles.container}
          source={require('../images/fondo-02.jpg')}
        >
          <View>
            <Image
              style={styles.logo}
              source={require('../images/brand.png')}
            />
          <Ingresar navigator={this.props.navigator}/>
          </View>
        </Image>
      </KeyboardAvoidingView>
    );
  }
}

const ancho = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    width: ancho,
  },
  logo: {
    width: 270,
  },
});
