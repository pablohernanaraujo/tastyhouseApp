import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Text,
  Navigator,
  TouchableHighlight,
  Image,
  Platform,
  BackAndroid,
  ToastAndroid,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ActionCreators } from './actions'
import Splash from './Splash'
import Login from './sections/Login'
import Tabbar from './tabbar/Tabbar'
import Detalles from './sections/Detalles'
import DetalleUsuario from './sections/DetalleUsuario'
import PerfilUsuario from './sections/PerfilUsuario'

var NavigatorBarMapper = {
  LeftButton: function(route, navigator, index){
    if(route.name === 'Login'){
      return null;
    }
    if(index > 0){
      return(
        <TouchableHighlight
          style={styles.arrowLeft}
          onPress={() => {
            if(index > 0){
              navigator.pop();
            }
          }}
        >
          <Icon style={styles.icon} name="angle-left" size={35} color="rgb(255,255,255)" />
        </TouchableHighlight>
      );
    }
  },
  RightButton: function(route, navigator, index){
    return null;
  },
  Title: function(route, navigator, index){
    if(route.name === 'Inicio'){
      return (
        <Image
          style={styles.logo}
          source={require('./images/tastylogoblanco.png')}
        />
      );
    }
    if(index > 0){
      return(
        <Text style={styles.navTitle}>{route.title}</Text>
      );
    }
  }
};

class Navegador extends Component {
  constructor(props){
    super(props);
    this.state = {
      splash: true
    };
    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, navigator){
    switch (route.name) {
      case 'Login':
        return(
          <Login
            navigator={navigator}
            route={route}
            recipes={this.props.recipes}
          />
        );
        break;
      case 'Tabbar':
        return(
          <Tabbar navigator={navigator} route={route} />
        );
        break;
      case 'Detalles':
        return(
          <Detalles navigator={navigator} route={route} />
        );
        break;
      case 'DetalleUsuario':
        return(
          <DetalleUsuario navigator={navigator} route={route} />
        );
        break;
      case 'PerfilUsuario':
        return(
          <PerfilUsuario navigator={navigator} route={route} />
        );
        break;
      default:
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props.auth){
      this.setState({
        splash: false
      });
    }
  }

  componentDidMount(){
    this.props.getAuth();
  }

  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (navigator.getCurrentRoutes().length === 1  ) {
        var _this = this;
        if(!this.state.backPress) {
          ToastAndroid.show('Volver de nuevo para salir', ToastAndroid.SHORT);
          this.setState({backPress:true});
          setTimeout(function() {
          _this.setState({backPress:false});
          },2500);
        } else {
          return false;
        }
      }
      navigator.pop();
      return true;
    });
  }

  renderLoadingView(){
    return (
      <Splash />
    );
  }

  render() {

    if(this.state.splash){
      return this.renderLoadingView();
    }

    if(this.props.auth.isAuth){
      return (
        <Navigator
          ref={(nav) => { navigator = nav; }}
          initialRoute={{ name: 'Tabbar'}}
          renderScene={this.renderScene}
          style={styles.navegador}
          configureScene={(route) => {
            if(route.sceneConfig){
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }}
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={NavigatorBarMapper}
            />
          }
        >
        </Navigator>
      );
    }else{
      return (
        <Navigator
          ref={(nav) => { navigator = nav; }}
          initialRoute={{ name: 'Login'}}
          renderScene={this.renderScene}
          style={styles.navegador}
          configureScene={(route) => {
            if(route.sceneConfig){
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }}
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={NavigatorBarMapper}
            />
          }
        >
        </Navigator>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ... Platform.select({
      ios: { paddingTop: 30 }
    })
  },
  navegador: {
    backgroundColor: '#e72c4b',
  },
  navTitle: {
    color: '#FFF',
    fontFamily: 'sans-serif-light',
    paddingTop: 6,
    fontSize: 20,
    overflow: 'hidden',
    width: 200,
    height: 38,
  },
  arrowLeft: {
    width: 34,
    height: 34,
    marginTop: 3,
    borderRadius: 16,
    paddingLeft: 7,
    paddingRight: 5,
  },
  icon: {
    paddingTop: 0,
    paddingBottom: 2,
    marginTop: 0,
    height: 34,
    width: 30,
  },
  arrowRight: {
    width: 34,
    height: 34,
    marginTop: 4,
    paddingTop: 3,
    paddingBottom: 2,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 16,
  },
  logo: {
    height: 42,
    width: 200,
  }
});

Navegador.propTypes = {
  auth : PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Navegador);
