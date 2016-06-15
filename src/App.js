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
import Login from './containers/LoginScreen'
class App extends Component {
  render () {
    const { actions } =this.props;
    return (
      <RouterWithRedux hideNavBar={true}>
        <Scene key="modal" component={Modal}>
          <Scene key="root" hideNavBar hideTabBar>
            <Scene key="login" component={Login} initial={true} title="登录" hideNavBar={false} onBack={()=>{}} hideBackImage={true} duration={0} />
            <Scene key="app" component={Home} rightTitle="退出"
                   onRight={()=> {actions.getLoingOut()}} title="餐服长后台" hideNavBar={false} hideBackImage={true}
                   onBack={()=> {}}/>
          </Scene>
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
