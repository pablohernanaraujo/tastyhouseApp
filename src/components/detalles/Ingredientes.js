import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import _ from 'lodash'

export default class Ingredientes extends Component {
  constructor(){
    super();
    this.renderIngredientes = this.renderIngredientes.bind(this);
  }

  renderIngredientes(){
    return _.map(this.props.ingredientes, (ingrediente, index) => {
      return (
        <View
          key={ingrediente.id}
          style={styles.contenedorTexto}
        >
          <Text style={styles.texto}>{ingrediente.texto}</Text>
        </View>
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Ingredientes</Text>
        {this.renderIngredientes()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(200,200,200,0.4)',
  },
  titulo: {
    fontFamily: 'sans-serif-light',
    color: 'rgba(0,0,0,0.3)',
    fontSize: 24,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  contenedorTexto: {
    backgroundColor: 'rgba(200,200,200,0.2)',
  },
  texto: {
    borderTopWidth: 1,
    borderColor: 'rgba(200,200,200,0.4)',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    fontFamily: 'sans-serif-light',
    color: 'rgba(0,0,0,0.6)',
    fontSize: 14,
  }
});
