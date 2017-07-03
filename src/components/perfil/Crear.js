import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ActionCreators } from '../../actions'

class Crear extends Component {
  constructor(props){
    super(props);
    this.state = {
      receta: '',
      loading: false,
    };
  }

  componentWillReceiveProps(nextProps){
    if(this.props.crud){
      this.setState({
        receta: '',
        loading: false,
      });
    }
  }

  crearReceta(){
    if(this.state.receta){
      this.setState({
        loading: true,
      });
      this.props.crearReceta(this.state.receta, this.props.usuario);
    }
  }

  render() {
    let botonCrear = <TouchableHighlight
      style={this.state.receta ? styles.boton : styles.botonDisabled}
      onPress={this.crearReceta.bind(this)}
    >
      <Text style={styles.textoBoton}>CREAR</Text>
    </TouchableHighlight>;

    if(this.state.loading){
      botonCrear = <TouchableHighlight
        style={styles.botonDisabledLoading}
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
        <View style={{alignItems: 'center'}}>
          <Text style={styles.titulosColor}>Crear receta</Text>
        </View>
        <TextInput
          style={styles.input}
          underlineColorAndroid="rgba(0,0,0,0.5)"
          placeholder="Receta nombre"
          placeholderTextColor="rgba(0,0,0,0.5)"
          placeholderStyle={styles.place}
          returnKeyType="go"
          onSubmitEditing={this.crearReceta.bind(this)}
          onChangeText={(receta)=> this.setState({receta})}
          value={this.state.receta}
        />
        { botonCrear }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  titulosColor: {
    fontFamily: 'Anton-Regular',
    color: 'rgba(50,50,50,0.4)',
    fontSize: 26,
  },
  input: {
    color: '#222',
    fontFamily: 'OpenSans-CondLight',
    fontSize: 18,
  },
  place: {
    fontFamily: 'OpenSans-CondLight',
  },
  boton: {
    borderRadius: 3,
    backgroundColor: '#e72c4b',
    marginTop: 5,
    marginBottom: 10,
  },
  botonDisabled: {
    borderRadius: 3,
    backgroundColor: 'rgba(50,50,50,0.2)',
    marginTop: 5,
    marginBottom: 10,
  },
  botonDisabledLoading: {
    borderRadius: 3,
    backgroundColor: 'rgba(50,50,50,0.2)',
    marginTop: 5,
    marginBottom: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  textoBoton: {
    color: '#fff',
    fontFamily: 'OpenSans-CondBold',
    paddingTop: 7,
    paddingBottom: 7,
    textAlign: 'center',
    fontSize: 18,
  }
});

Crear.propTypes = {
  crud: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    crud: state.crud
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Crear);
