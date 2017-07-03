import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'
import { LazyloadImage } from 'react-native-lazyload'

export default class Usuario extends Component {
  render() {
    const { avatar } = this.props;

    let Avatar = <Image
      source={ require('../../images/avatar.jpg') }
      style={styles.avatar}
    />

    if(avatar){
      Avatar = <LazyloadImage
        host="imagen-load"
        source={{ uri: avatar.url }}
        style={styles.avatar}
      />;
    }

    return (
      <Image
        source={ require('../../images/avatar-fondo.png') }
        style={styles.imagen}
      >
        <View style={styles.avatarContenedor}>
          {Avatar}
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  imagen: {
    width: 38,
    height: 38,
    position: 'absolute',
    right: 12,
    bottom: 23,
    paddingTop: 2,
    paddingLeft: 2,
  },
  avatarContenedor: {
    width: 34,
    height: 34,
    borderRadius: 17,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
  },
});
