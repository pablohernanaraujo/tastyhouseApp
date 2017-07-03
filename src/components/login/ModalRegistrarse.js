import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ActionCreators } from '../../actions'
import validateInput from '../../validations/register'

class ModalRegistrarse extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      nombre: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      animating: false
    };
  }

  isValid(){
		const { errors, isValid } = validateInput(this.state);
		if(!isValid){
      this.setState({ errors , animating: false });
		}
		return isValid;
	}

  onLoginPressed(){
    this.setState({ errors: {}, animating: true });
    if(this.isValid()){
      this.props.register({
        email: this.state.email,
        nombre: this.state.nombre,
        password: this.state.password,
        passwordConfirmation: this.state.passwordConfirmation
      }, (data) => {
        if(data === 'bienvenido'){
          this.setState({results: null , animating: false });
          this.props.navigator.replace({
            title: 'Tabbar',
            name: 'Tabbar',
            passProps: {}
          })
        }else{
          this.setState({errors:{ passwordConfirmation: data}, animating: false });
        }
      });
    }
  }

  render() {
    let botonIngresar = <TouchableHighlight
      style={styles.boton}
      onPress={this.onLoginPressed.bind(this)}
    >
      <Text style={styles.ingresar}>CREAR CUENTA</Text>
    </TouchableHighlight>;

    if(this.state.animating){
      botonIngresar = <TouchableHighlight
        style={styles.botonDisabled}
        onPress={this.onLoginPressed.bind(this)}
        disabled={true}
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
        <TextInput
          style={styles.input}
          underlineColorAndroid="rgba(0,0,0,0.5)"
          placeholder="email"
          placeholderTextColor="rgba(0,0,0,0.5)"
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={(event) => {
            this.refs.SecondInput.focus();
          }}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(email)=> this.setState({email})}
        />
        <Text style={styles.errors}>{this.state.errors.email}</Text>
        <TextInput
          ref="SecondInput"
          style={styles.input}
          underlineColorAndroid="rgba(0,0,0,0.5)"
          placeholder="nombre"
          placeholderTextColor="rgba(0,0,0,0.5)"
          returnKeyType="next"
          onSubmitEditing={(event) => {
            this.refs.ThirdInput.focus();
          }}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(nombre)=> this.setState({nombre})}
        />
        <Text style={styles.errors}>{this.state.errors.nombre}</Text>
        <TextInput
          ref="ThirdInput"
          style={styles.input}
          underlineColorAndroid="rgba(0,0,0,0.5)"
          placeholder="contraseña"
          placeholderTextColor="rgba(0,0,0,0.5)"
          secureTextEntry
          returnKeyType="next"
          onChangeText={(password)=> this.setState({password})}
          onSubmitEditing={(event) => {
            this.refs.FourInput.focus();
          }}
        />
        <Text style={styles.errors}>{this.state.errors.password}</Text>
        <TextInput
          ref="FourInput"
          style={styles.input}
          underlineColorAndroid="rgba(0,0,0,0.5)"
          placeholder="confirmar contraseña"
          placeholderTextColor="rgba(0,0,0,0.5)"
          secureTextEntry
          returnKeyType="go"
          onChangeText={(passwordConfirmation)=> this.setState({passwordConfirmation})}
          onSubmitEditing={this.onLoginPressed.bind(this)}
        />
        <Text style={styles.errorsPass}>{this.state.errors.passwordConfirmation}</Text>
        {botonIngresar}

        <TouchableHighlight
          style={styles.cerrar}
          onPress={this.props.setModalVisibleRegistrarse}
        >
          <Icon style={styles.icon} name="md-close" size={20} color="#e72c4b" />
        </TouchableHighlight>
        <Text style={styles.privacidad}>
          Registrándote, estás de acuerdo los términos y condiciones del servicio. y la política de privacidad.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
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
  input: {
    width: 250,
    height: 35,
    color: '#222',
    fontFamily: 'sans-serif-light',
  },
  boton: {
    width: 250,
    backgroundColor: '#e72c4b',
    borderRadius: 3,
  },
  botonDisabled: {
    width: 250,
    backgroundColor: '#d6d6d6',
    borderRadius: 3,
    padding: 6,
  },
  ingresar: {
    color: '#fff',
    padding: 10,
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'center',
  },
  icon: {
    padding: 7,
    textAlign: 'center',
  },
  errors:{
    color: 'red',
    fontSize: 12,
    paddingLeft: 5,
  },
  errorsPass:{
    color: 'red',
    paddingLeft: 5,
    paddingBottom: 7,
    fontSize: 12,
  },
  privacidad: {
    marginTop: 15,
    color: 'rgba(100,100,100,0.9)',
    fontFamily: 'sans-serif-light',
    fontSize: 10,
    textAlign: 'center',
    width: 250,
  }
});

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(null, mapDispatchToProps)(ModalRegistrarse);
