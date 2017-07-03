import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default class Splash extends Component {
  render() {
    return (
      <LinearGradient colors={['rgba(231,44,75,0.8)', 'rgba(231,44,75,1)']} style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./images/tastylogosoloblanco.png')}
        />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60
  }
});
