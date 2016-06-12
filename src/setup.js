import React, {
  Component,
  PropTypes
} from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {connect} from 'react-redux';
import {Router, Scene, Modal} from 'react-native-router-flux';
import {AsyncStorage} from 'react-native';

/**
 * component
 */
import App from './containers/App';
import Login from './login/LoginScreen';

const RouterWithRedux = connect()(Router);
class setup extends Component {
  constructor () {
    super();
    AsyncStorage.clear();
    this.state = {
      isLoading: true,
      store: configureStore(()=> {this.setState({ isLoading: false })})
    }
  }

  render () {
    if (this.state.isLoading) {
      console.log('loading app')
      return null;
    }
    return (
      <Provider store={this.state.store}>
        <RouterWithRedux hideNavBar={true}>
          <Scene key="root">
            <Scene key="app" component={App} title="Root"/>
          </Scene>
        </RouterWithRedux>
      </Provider >
    );
  }
}

export default setup;
