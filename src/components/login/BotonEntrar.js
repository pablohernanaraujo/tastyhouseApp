import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class BotonEntrar extends Component {
  static contextTypes = {
    isLoggedIn: React.PropTypes.bool,
    login: React.PropTypes.func,
    logout: React.PropTypes.func,
    props: React.PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <View style={styles.boton}>
        <Icon.Button onPress={() => {
            if(!this.context.isLoggedIn){
              this.context.login()
            }else{
              this.context.logout()
            }

          }}
          color={'#fff'}
          backgroundColor={'#3b5998'}
          name={'facebook-official'}
          size={20}
          borderRadius={3}
          justifyContent={'center'}
        >
          <Text style={styles.texto}>Ingresar con Facebook</Text>
        </Icon.Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boton: {
    width: 250,
    marginTop: 10,
  },
  texto: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
  }
});

export default BotonEntrar;
