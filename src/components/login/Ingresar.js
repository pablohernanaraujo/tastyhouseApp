import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Modal,
} from 'react-native'

import LoginForm from './LoginForm'
import Facebook from './Facebook'
import ModalRegistrarse from './ModalRegistrarse'

export default class Ingresar extends Component {
  constructor(){
    super();
    this.state = {
      modalVisibleRegistrarse: false,
    };
  }

  setModalVisibleRegistrarse(visible) {
    this.setState({modalVisibleRegistrarse: visible});
  }

  render() {
    return (
      <View style={styles.container}>
        <LoginForm navigator={this.props.navigator}/>
        <TouchableHighlight>
          <Text style={styles.texto}>¿Has olvidado tu contraseña?</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.registrarseBoton}
          onPress={() => {this.setModalVisibleRegistrarse(true)}}
        >
            <Text style={styles.registrarseTexto}>CREAR CUENTA</Text>
        </TouchableHighlight>
        <Facebook navigator={this.props.navigator}/>

        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.modalVisibleRegistrarse}
          onRequestClose={this.setModalVisibleRegistrarse.bind(this, false)}
          >
          <ModalRegistrarse setModalVisibleRegistrarse={this.setModalVisibleRegistrarse.bind(this, false)} navigator={this.props.navigator} route={this.props.route}/>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    marginTop: 10,
    marginBottom: 8,
    fontSize: 12,
  },
  registrarseBoton: {
    width: 250,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 3,
    marginTop: 10,
  },
  registrarseTexto: {
    color: '#fff',
    padding: 10,
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'center',
  },
});
