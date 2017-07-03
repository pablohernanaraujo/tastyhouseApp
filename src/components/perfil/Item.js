import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Item extends Component {
  render() {
    const { receta, boton, botonModal } = this.props;

    if(receta.status === 2){
      return (
        <View style={styles.contenedor}>
          <TouchableHighlight
            style={styles.itemOnline}
            onPress={boton}
          >
            <View>
              <Text style={styles.nombre}>{receta.nombre}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.botonEliminar}
            onPress={botonModal}
          >
            <Icon
              name="trash"
              size={18}
              color="red"
            />
          </TouchableHighlight>
        </View>
      );
    }

    return (
      <View style={styles.contenedor}>
        <TouchableHighlight
          style={styles.item}
          onPress={boton}
        >
          <View>
            <Text style={styles.nombre}>{receta.nombre}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.botonEliminar}
          onPress={botonModal}
        >
          <Icon
            name="trash"
            size={18}
            color="red"
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'rgba(200,200,200,0.6)',
    backgroundColor: 'rgba(200,200,200,0.2)',
    marginBottom: 5,
  },
  itemOnline: {
    flex: 1,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'rgba(16,236,162,0.6)',
    backgroundColor: 'rgba(16,236,162,0.2)',
    marginBottom: 5,
  },
  nombre: {
    fontFamily: 'OpenSans-CondLight',
    color: '#444',
    fontSize: 16,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 15,
    paddingRight: 15,
  },
  botonEliminar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

Item.propTypes = {
  receta: PropTypes.object.isRequired
}
