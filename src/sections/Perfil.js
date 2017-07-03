import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Modal,
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ActionCreators } from '../actions'
import Encabezado from '../components/perfil/Encabezado'
import Crear from '../components/perfil/Crear'
import Listados from '../components/perfil/Listados'
import ModalEliminar from '../components/perfil/ModalEliminar'

class Perfil extends Component {
  constructor(){
    super();
    this.state = {
      splash: true,
      modalVisible: false,
      receta: '',
      eliminando: false,
    };
    this.onclick = this.onclick.bind(this);
    this.botonEliminar = this.botonEliminar.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  onclick(receta){
    this.props.navigator.push({
      name: 'DetalleUsuario',
      title: receta.nombre,
      passProps: {
        receta: receta,
        usuarioId: this.props.auth.user.id
      }
    });
  }

  setModalVisible(visible, receta) {
    this.setState(
      {
        modalVisible: visible,
        receta: receta,
      }
    );
  }

  botonEliminar(){
    this.setState({
      eliminando: true,
      modalVisible: false
    });

    this.props.eliminarReceta(this.props.auth.user.id, this.state.receta.id)
  }

  componentWillReceiveProps(nextProps){
    if(this.props.listado){
      this.setState({
        splash: false
      });
    }
    if(this.props.crud){
      this.setState({
        eliminando: false,
      });
      console.log(this.state.eliminando);
    }
  }

  componentDidMount(){
    this.props.listados(this.props.auth.user.id);
  }

  render() {
    if(this.state.splash){
      return (
        <ScrollView
          style={styles.container}
        >
          <Encabezado
            nombre={this.props.auth.user.nombre}
            email={this.props.auth.user.email}
            avatar={this.props.auth.user.avatar}
          />
          <ActivityIndicator
            animating={this.state.animating}
            style={[styles.centering, {height: 80}]}
            color={'#e72c4b'}
            size="large"
          />
        </ScrollView>
      );
    }

    return (
      <ScrollView
        style={styles.container}
      >
        <Encabezado
          nombre={this.props.auth.user.nombre}
          email={this.props.auth.user.email}
          avatar={this.props.auth.user.avatar}
        />
        <Crear
          usuario={this.props.auth.user}
        />
        <Listados
          recetas={this.props.listado}
          boton={this.onclick}
          botonModal={this.setModalVisible}
        />

        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={this.setModalVisible.bind(this, false)}
          >
          <ModalEliminar
            setModalVisible={this.setModalVisible.bind(this, false)}
            navigator={this.props.navigator}
            receta={this.state.receta}
            botonEliminar={this.botonEliminar}
            eliminando={this.state.eliminando}
          />
        </Modal>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

Perfil.propTypes = {
  auth : PropTypes.object.isRequired,
  listado : PropTypes.array.isRequired,
  crud: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    auth: state.auth,
    listado: state.listado,
    crud: state.crud
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Perfil);
