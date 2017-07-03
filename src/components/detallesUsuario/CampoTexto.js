import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native'

export default class CampoTexto extends Component {
  constructor(){
    super();
    this.state = {
      texto: '',
      editar: false,
    };
    this.editar = this.editar.bind(this);
  }

  editar(){
    this.setState({
      editar: true
    });
    setTimeout(() => {
      this.refs.campodetexto.focus();
    },100);
  }

  componentDidMount(){
    this.setState({
      texto: this.props.tipo
    });
  }

  render() {
    let campo = <TouchableHighlight
      onPress={this.editar}
    >
      <Text style={styles.textos}>{this.props.tipo}</Text>
    </TouchableHighlight>;

    if(this.state.editar){
      campo = <View>
        <TextInput
          ref="campodetexto"
          style={styles.textosInput}
          autoCorrect={false}
          multiline={true}
          numberOfLines={this.props.lineas}
          value={this.state.texto}
          onChangeText={(texto)=> this.setState({texto})}
          onSubmitEditing={() => {
              this.props.guardar(this.state.texto);
              setTimeout(() => {
                this.setState({ editar: false });
              }, 150);
            }
          }
        />
        <TouchableHighlight
          style={styles.boton}
          onPress={() => {
              this.props.guardar(this.state.texto);
              setTimeout(() => {
                this.setState({ editar: false });
              }, 150);
            }
          }
        >
          <Text style={styles.textoBoton}>GUARDAR</Text>
        </TouchableHighlight>
      </View>;
    }
    return (
      <View style={styles.container}>
        <Text style={styles.titulos}>{this.props.titulo}</Text>
        { this.props.tipo ? campo : <View>
          <TextInput
            style={styles.textosInput}
            autoCorrect={false}
            multiline={true}
            numberOfLines={this.props.lineas}
            value={this.state.texto}
            onChangeText={(texto)=> this.setState({texto})}
            onSubmitEditing={this.props.guardar}
            placeholder="Ingresa una descripcion para tu receta"
          />
          <TouchableHighlight
            style={styles.boton}
            onPress={this.props.guardar}
          >
            <Text style={styles.textoBoton}>GUARDAR</Text>
          </TouchableHighlight>
        </View> }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulos: {
    fontSize: 22,
    fontFamily: 'OpenSans-CondBold',
    color: 'rgba(100,100,100,0.4)',
  },
  textos: {
    color: 'rgba(100,100,100,0.7)',
    fontFamily: 'OpenSans-CondLight',
    fontSize: 18,
    marginTop: 5,
  },
  textosInput: {
    color: 'rgba(100,100,100,0.7)',
    fontFamily: 'OpenSans-CondLight',
    fontSize: 18,
  },
  boton: {
    borderRadius: 3,
    backgroundColor: '#e72c4b',
    marginTop: 5,
    marginBottom: 10,
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
