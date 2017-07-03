import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ActionCreators } from '../../actions'
import validateInput from '../../validations/login'

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      password: '',
      email: '',
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
      this.props.login({
        email: this.state.email,
        password: this.state.password
      }, (data) => {
        if(data === 'bienvenido'){
          this.setState({results: null , animating: false });
          this.props.navigator.replace({
            title: 'Tabbar',
            name: 'Tabbar',
            passProps: {}
          })
        }else{
          this.setState({errors:{ password: data}, animating: false });
        }
      });
    }
  }

  render() {
    let botonIngresar = <TouchableHighlight
      style={styles.boton}
      onPress={this.onLoginPressed.bind(this)}
    >
      <Text style={styles.ingresar}>INGRESAR</Text>
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
          underlineColorAndroid="rgba(255,255,255,0.8)"
          placeholder="email"
          placeholderTextColor="rgba(255,255,255,0.8)"
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
          underlineColorAndroid="rgba(255,255,255,0.8)"
          placeholder="contraseña"
          placeholderTextColor="rgba(255,255,255,0.8)"
          secureTextEntry
          returnKeyType="go"
          onChangeText={(password)=> this.setState({password})}
          onSubmitEditing={this.onLoginPressed.bind(this)}
        />
        <Text style={styles.errorsPass}>{this.state.errors.password}</Text>
        {botonIngresar}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  input: {
    width: 250,
    height: 35,
    color: '#fff'
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
});

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginForm);
