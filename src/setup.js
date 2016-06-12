import React, {
  Component,
  PropTypes
} from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import Root from './containers/root';
import {connect} from 'react-redux';
import {Router,Scene} from 'react-native-router-flux';

const RouterWithRedux =connect()(Router);
class setup extends Component {
  constructor () {
    super();
    this.state = {
      isLoading: true,
      store: configureStore(()=>{this.setState({isLoading: false})})
    }
  }
  render () {
    if (this.state.isLoading) {
      console.log('loading app')
      return null;
    }
    return (
      <Provider store={this.state.store}>
          <RouterWithRedux>
            <Scene key="root">
              <Scene key="app" component={Root} title="Root" initial={true} />
            </Scene>
          </RouterWithRedux>
      </Provider>
    );
  }
}

export default setup;
