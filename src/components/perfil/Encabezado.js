import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default class Encabezado extends Component {
  render() {
    let Avatar = <Image
      style={styles.imagen}
      source={ require('../../images/avatar.jpg') }
    />

    if(this.props.avatar){
      Avatar = <Image
        style={styles.imagen}
        source={{ uri: this.props.avatar.url }}
      />;
    }
    return (
      <LinearGradient
        colors={['rgba(231,44,75,1)', 'rgba(231,44,75,0.8)']}
        style={styles.datosContenedor}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.titulos}>Perfil</Text>
          { Avatar }
        </View>
        <View style={styles.tiras}>
          <Text style={styles.tirasTitulos}>Nombre</Text>
          <Text style={styles.tirasTextos}>{this.props.nombre}</Text>
        </View>
        <View style={styles.tiras}>
          <Text style={styles.tirasTitulos}>Email</Text>
          <Text style={styles.tirasTextos}>{this.props.email}</Text>
        </View>
        <View style={styles.tiras}>
          <Text style={styles.tirasTitulos}>Avatar</Text>
          <Text style={styles.tirasTextos}>
            {this.props.avatar ? this.props.avatar.nombre : ''}
          </Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  datosContenedor: {
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  titulos: {
    fontFamily: 'Anton-Regular',
    color: '#fff',
    fontSize: 26,
  },
  tiras: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tirasTitulos: {
    marginRight: 10,
    fontFamily: 'OpenSans-CondBold',
    color: 'rgba(255,255,255,0.7)',
    width: 65,
    fontSize: 18,
  },
  imagen: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 10,
  },
  tirasTextos: {
    flex: 1,
    color: '#fff',
    fontFamily: 'OpenSans-CondLight',
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
    paddingBottom: 3,
    fontSize: 18,
  },
});
