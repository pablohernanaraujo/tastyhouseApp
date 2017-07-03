import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class ModalEliminar extends Component {
  render() {
    let botonEliminar = <TouchableHighlight
      style={styles.boton}
      onPress={this.props.botonEliminar}
    >
      <Text style={styles.textoBoton}>ELIMINAR</Text>
    </TouchableHighlight>;

    if(this.props.eliminando){
      botonEliminar = <TouchableHighlight
        style={styles.botonDisabled}
      >
        <ActivityIndicator
          style={styles.centering}
          color={'#e72c4b'}
          size="small"
        />
      </TouchableHighlight>;
    }
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Esta seguro que desea eliminar la receta</Text>
        <Text style={styles.receta}>{this.props.receta.nombre}</Text>
        { botonEliminar }

        <TouchableHighlight
          style={styles.cerrar}
          onPress={this.props.setModalVisible}
        >
          <Icon style={styles.icon} name="md-close" size={20} color="#e72c4b" />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  texto: {
    fontSize: 16,
    color: '#444',
    fontFamily: 'OpenSans-CondLight',
  },
  receta: {
    fontSize: 20,
    fontFamily: 'Anton-Regular',
    color: '#e72c4b',
  },
  textoBoton: {
    color: '#222',
    fontFamily: 'OpenSans-CondLight',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 25,
    paddingRight: 25,
  },
  boton: {
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#222',
    marginTop: 20,
  },
  botonDisabled: {
    backgroundColor: '#d6d6d6',
    borderRadius: 3,
    padding: 6,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: 20,
  },
  cerrar: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    paddingTop: 8,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e72c4b',
  },
  icon: {
    padding: 7,
    textAlign: 'center',
  },
});
