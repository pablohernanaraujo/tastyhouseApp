import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ActionCreators } from '../../actions'

import CampoTexto from './CampoTexto'

class InicioDetalles extends Component {
  constructor(){
    super();
    this.guardar = this.guardar.bind(this);
  }

  guardar(texto){
    this.props.editarReceta(this.props.usuarioId, this.props.receta.id, texto);
  }

  render() {
    return (
      <View style={styles.container}>
        <CampoTexto
          titulo="Descripción"
          tipo={this.props.receta.descripcion}
          lineas={3}
          guardar={this.guardar}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

CampoTexto.propTypes = {
  descripcion: PropTypes.string
};

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(null, mapDispatchToProps)(InicioDetalles);
