import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native'

import Usuario from '../components/detalles/Usuario'
import Contenido from '../components/detalles/Contenido'

export default class Detalles extends Component {
  constructor(props){
    super(props);
    this.passProps = this.props.route.passProps;
  }

  render() {
    return (
      <View style={styles.container}>
        <View  style={styles.navegador} />
        <ScrollView>
          <View style={styles.fondo}>
            <Usuario
              usuario={this.passProps.receta.usuario}
              fecha={this.passProps.receta.date}
            />
            <Contenido
              receta={this.passProps.receta}
            />
          </View>
        </ScrollView>
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
  },
  fondo: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(200,200,200,0.2)',
  },
});
