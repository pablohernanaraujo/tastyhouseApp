import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import _ from 'lodash'

import Categorias from './Categorias'
import Tiempo from './Tiempo'
import Porciones from './Porciones'

export default class Pines extends Component {
  constructor(props){
    super(props);
    this.renderCategorias = this.renderCategorias.bind(this);
  }

  renderCategorias(){
    return _.map(this.props.receta.categorias, (categoria) => {
      return (
        <Categorias
          key={categoria.id}
          texto={categoria.texto}
        />
      );
    })
  }

  renderTiempo(){
    return _.map(this.props.receta.time, (tiempo) => {
      return (
        <Tiempo
          key={tiempo.id}
          hora={tiempo.hora}
          minuto={tiempo.minuto}
        />
      );
    });
  }

  renderPorciones(){
    return _.map(this.props.receta.porciones, (porcion) => {
      return (
        <Porciones
          key={porcion.id}
          cantidad={porcion.cantidad}
        />
      );
    });
  }

  render() {
    const { receta, detalles } = this.props;
    if(detalles){
      return (
        <View style={styles.contenidoInteriorContenedorDetalles}>
          <View style={styles.pinesContenedor}>
            <Text style={styles.texto}>Categoria</Text>
            {this.renderCategorias()}
          </View>
          <View style={styles.pinesContenedor}>
            <Text style={styles.texto}>Tiempo de cocción</Text>
            {this.renderTiempo()}
          </View>
          <View style={styles.pinesContenedor}>
            <Text style={styles.texto}>Cantidad de porciones</Text>
            {this.renderPorciones()}
          </View>
        </View>
      );
    }else{
      return (
        <View style={styles.contenidoInteriorContenedor}>
          <View style={styles.pinesContenedor}>
            {this.renderCategorias()}
          </View>
          <View style={styles.pinesContenedor}>
            {this.renderTiempo()}
            {this.renderPorciones()}
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  contenidoInteriorContenedor: {
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
  contenidoInteriorContenedorDetalles: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  pinesContenedor: {
    flex: 1,
    flexDirection: 'row',
  },
  texto: {
    fontFamily: 'sans-serif-light',
    color: 'rgba(0,0,0,0.7)',
    fontSize: 14,
    paddingTop: 5,
    paddingRight: 10,
  }
});
