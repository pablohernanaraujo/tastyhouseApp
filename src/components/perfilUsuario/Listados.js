import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ListView,
  ScrollView,
  Dimensions,
} from 'react-native'

import Item from './Item'

var w = Dimensions.get('window');

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
      />
    )
  }

  render() {
    const datos = this.props.recetas;
    const par = [];
    const impar = [];

    for( var i = 0 ; i < datos.length ; i++ ){
      if(i % 2){
        par.push(datos[i]);
      }else{
        impar.push(datos[i]);
      }
    }

    return (
      <ScrollView style={styles.container}>
        <View style={styles.itemsContainer}>
          <ListView
            dataSource={this.state.dataSource.cloneWithRows(impar)}
            renderRow={this.renderItem.bind(this)}
            contentContainerStyle={styles.items1}
            enableEmptySections={true}
          />
          <ListView
            dataSource={this.state.dataSource.cloneWithRows(par)}
            renderRow={this.renderItem.bind(this)}
            contentContainerStyle={styles.items2}
            enableEmptySections={true}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(200,200,200,0.2)',
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 5,
    paddingBottom: 5,
  },
  items1: {
    flex: 1,
    width: (w.width / 2),
    paddingTop: 3,
    paddingLeft: 5,
    paddingRight: 3,
  },
  items2: {
    flex: 1,
    width: (w.width / 2),
    paddingTop: 3,
    paddingLeft: 3,
    paddingRight: 5,
  },
});

Listados.propTypes = {
  recetas: PropTypes.array.isRequired
}
