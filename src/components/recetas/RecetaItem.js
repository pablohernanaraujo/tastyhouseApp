import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'
import { Card } from 'react-native-material-design'

import LocalImage from './LocalImage'
import Pines from '../comunes/Pines'
import Avatar from './Avatar'
import Usuario from './Usuario'

export default class RecetaItem extends Component {
  render() {
    const { receta, boton, botonUsuario } = this.props;
    return (
      <Card style={styles.card}>
        <TouchableHighlight
          style={styles.item}
          onPress={boton}
        >
          <View>
            <LocalImage
              source={{ uri: receta.imagen.url }}
              originalWidth={receta.imagen.ancho}
              originalHeight={receta.imagen.alto}
              nombre={receta.nombre}
            />
            <Text style={styles.descripcion}>{receta.descripcion}</Text>
            <Pines
              receta={receta}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.item}
          onPress={botonUsuario}
        >
          <View>
            <Usuario
              usuario={receta.usuario}
              fecha={receta.date}
            />
          </View>
        </TouchableHighlight>
        <Avatar
          avatar={receta.usuario.avatar}
        />
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    borderRadius: 10,
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  descripcion: {
    fontFamily: 'OpenSans-CondLight',
    color: 'rgba(0,0,0,0.7)',
    fontSize: 12,
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
});

RecetaItem.propTypes = {
  receta: PropTypes.object.isRequired
}
