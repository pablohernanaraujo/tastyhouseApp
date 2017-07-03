import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ListView,
} from 'react-native'

import Item from './Item'

export default class Listados extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
    };
  }

  renderItem(receta, index){
    return (
      <Item
        key={index}
        receta={receta}
        boton={() => this.props.boton(receta)}
        botonModal={() => {this.props.botonModal(true, receta)}}
      />
    );
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.titulosColor}>Mis recetas</Text>
        </View>
        <View style={styles.itemsContainer}>
          {this.props.recetas.length === 0 ? <Text style={styles.sinrecetas}>¿No tienes recetas aún?</Text> : null}
          <ListView
            dataSource={this.state.dataSource.cloneWithRows(this.props.recetas)}
            renderRow={this.renderItem.bind(this)}
            contentContainerStyle={styles.items}
            enableEmptySections={true}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulosColor: {
    fontFamily: 'Anton-Regular',
    color: 'rgba(50,50,50,0.4)',
    fontSize: 26,
  },
  itemsContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  items: {
    flex: 1,
  },
  sinrecetas: {
    textAlign: 'center',
    fontSize: 18,
    color: 'rgba(50,50,50,0.4)',
    fontFamily: 'OpenSans-CondLight',
  }
});

Listados.propTypes = {
  recetas: PropTypes.array.isRequired
};
