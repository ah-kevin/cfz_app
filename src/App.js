import React, {
  Component,
  PropTypes
} from 'react';
import {connect} from 'react-redux';
import {Router, Scene, Modal} from 'react-native-router-flux';
import {bindActionCreators} from 'redux';
const RouterWithRedux = connect()(Router);
import actions from './actions';
import Home from './containers/Home';
class App extends Component {
  render () {
    const { actions} =this.props;
    return (
        <RouterWithRedux hideNavBar={true}>
          <Scene key="root">
            <Scene key="app" component={Home} rightTitle="退出"
                   onRight={()=> {actions.loginOut()}} title="餐服长后台" hideNavBar={false}
                   hideTabBar={false}/>
          </Scene>
        </RouterWithRedux>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};

export default connect(
  state=>({
    isLoggedIn: state.user.isLoggedIn
  }),
  dispatch =>({
    actions: bindActionCreators(actions, dispatch)
  })
)(App);
