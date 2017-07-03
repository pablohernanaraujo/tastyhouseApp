import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { Card } from 'react-native-material-design'

import DetallesImage from './DetallesImage'
import Pines from '../comunes/Pines'
import Ingredientes from './Ingredientes'
import Preparacion from './Preparacion'

export default class Contenido extends Component {
  render() {
    const { receta } = this.props;
    return (
      <Card style={{paddingLeft: 0, paddingRight: 0, marginTop: 0, marginLeft: 0, marginRight: 0, borderRadius: 10}}>
        <View style={styles.container}>
          <View style={styles.contenidoContenedor}>
            <Text style={styles.textos}>{receta.descripcion}</Text>
            <View style={styles.imagen}>
              <DetallesImage
                source={{ uri: receta.imagen.url }}
                originalWidth={receta.imagen.ancho}
                originalHeight={receta.imagen.alto}
              />
            </View>
          </View>
          <Pines
            receta={receta}
            detalles={true}
          />
          <Ingredientes
            ingredientes={receta.ingredientes}
          />
        <Preparacion
            pasos={receta.pasos}
          />
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  textos: {
    fontFamily: 'sans-serif-light',
    color: 'rgba(0,0,0,0.7)',
  },
  contenidoContenedor: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  imagen: {
    marginTop: 10,
  },
});

Contenido.propTypes = {
  receta: PropTypes.object.isRequired
}
