import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { LazyloadScrollView } from 'react-native-lazyload'

import { ActionCreators } from '../actions'
import RecetasLista from '../components/recetas/RecetasLista'

class Inicio extends Component {
  constructor(){
    super();
    this.state = {
      splash: true
    };
    this.onclick = this.onclick.bind(this);
    this.onclickUsuario = this.onclickUsuario.bind(this);
  }

  onclick(receta){
    this.props.navigator.push({
      name: 'Detalles',
      title: receta.nombre,
      passProps: {receta: receta}
    });
  }

  onclickUsuario(usuario){
    this.props.navigator.push({
      name: 'PerfilUsuario',
      title: usuario.nombre,
      passProps: {usuario: usuario}
    });
  }

  componentWillReceiveProps(nextProps){
    if(this.props.recipes){
      this.setState({
        splash: false
      });
    }
  }

  componentDidMount(){
    this.props.fetchRecetas();
  }

  renderLoadingView(){
    return (
      <ActivityIndicator
        animating={this.state.animating}
        style={[styles.centering, {height: 80}]}
        color={'#e72c4b'}
        size="large"
      />
    );
  }

  render() {

    if(this.state.splash){
      return this.renderLoadingView();
    }

    return (
      <LazyloadScrollView
        style={styles.container}
        name="imagen-load"
      >
        <RecetasLista
          recetas={this.props.recipes}
          boton={this.onclick}
          botonUsuario={this.onclickUsuario}
        />
    </LazyloadScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centering: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

Inicio.propTypes = {
  recipes : PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    recipes: state.recipes
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Inicio);
