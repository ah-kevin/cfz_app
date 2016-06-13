import React, {
  Component,
  PropTypes
} from 'react';
import {connect} from 'react-redux';
import {Router, Scene, Modal} from 'react-native-router-flux';
const RouterWithRedux = connect()(Router);
import actions from './actions';
import Home from './containers/Home';
class App extends Component {
  render () {
    return (
        <RouterWithRedux hideNavBar={true}>
          <Scene key="root">
            <Scene key="app" component={Home} rightTitle={'退出'}
                   onRight={()=> {}} title="餐服长后台" hideNavBar={false}
                   hideTabBar={false}/>
          </Scene>
        </RouterWithRedux>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};

export default App;
