import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  ScrollView,
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from 'react-native-scrollable-tab-view'
import FacebookTabBar from './FacebookTabBar'

import Home from '../sections/Inicio'
import Ajustes from '../sections/Ajustes'
import Perfil from '../sections/Perfil'
import Buscar from '../sections/Buscar'

class Tabbar extends Component{

  render(){

    return(
      <ScrollableTabView
        tabBarPosition="bottom"
        initialPage={0}
        style={{backgroundColor:'#fff'}}
        renderTabBar={() => <FacebookTabBar />}
      >
        <Home
          tabLabel="home"
          navigator={this.props.navigator}
        />
        <Buscar
          tabLabel="search"
          navigator={this.props.navigator}
        >
          BUSCAR
        </Buscar>
        <Perfil
          tabLabel="user"
          navigator={this.props.navigator}
        >
          PERFIL
        </Perfil>
        <Ajustes
          tabLabel="cog"
          navigator={this.props.navigator}
        >
          AJUSTES
        </Ajustes>
      </ScrollableTabView>
    );
  }
}

export default Tabbar;
