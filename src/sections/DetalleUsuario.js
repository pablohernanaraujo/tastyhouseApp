import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native'

import InicioDetalles from '../components/detallesUsuario/InicioDetalles'

export default class DetalleUsuario extends Component {
  constructor(props){
    super(props);
    this.passProps = this.props.route.passProps;
  }

  render() {
    return (
      <View style={styles.container}>
        <View  style={styles.navegador} />
        <ScrollView>
          <InicioDetalles
            receta={this.passProps.receta}
            usuarioId={this.passProps.usuarioId}
          />
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
});
