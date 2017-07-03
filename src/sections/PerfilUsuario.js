import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { LazyloadScrollView } from 'react-native-lazyload'

import { ActionCreators } from '../actions'
import Encabezado from '../components/perfilUsuario/Encabezado'
import Listados from '../components/perfilUsuario/Listados'

class PerfilUsuario extends Component {
  constructor(props){
    super(props);
    this.passProps = this.props.route.passProps;
    this.state = {
      splash: true
    };
    this.onclick = this.onclick.bind(this);
  }

  onclick(receta){
    this.props.navigator.push({
      name: 'Detalles',
      title: receta.nombre,
      passProps: {
        receta: receta
      }
    });
  }

  componentWillReceiveProps(nextProps){
    if(this.props.listadoUsuario){
      this.setState({
        splash: false
      });
    }
  }

  componentDidMount(){
    this.props.listadosUsuario(this.passProps.usuario.id);
  }

  render() {
    if(this.state.splash){
      return (
        <View
          style={styles.container}
        >
          <View  style={styles.navegador} />
          <LazyloadScrollView name="imagen-perfilUsuario">
            <Encabezado
              usuario={this.passProps.usuario}
            />
            <ActivityIndicator
              animating={this.state.animating}
              style={[styles.centering, {height: 80}]}
              color={'#e72c4b'}
            />
          </LazyloadScrollView>
        </View>
      );
    }

    return (
      <View
        style={styles.container}
      >
        <View  style={styles.navegador} />
        <LazyloadScrollView name="imagen-perfilUsuario">
          <Encabezado
            usuario={this.passProps.usuario}
            cantidadRecetas={this.props.listadoUsuario.length}
          />
          <Listados
            recetas={this.props.listadoUsuario}
            boton={this.onclick}
          />
        </LazyloadScrollView>
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

PerfilUsuario.propTypes = {
  listadoUsuario: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    listadoUsuario: state.listadoUsuario
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PerfilUsuario);
