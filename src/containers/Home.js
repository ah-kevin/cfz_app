/**
 * Created by Lennon on 16/6/10.
 */
import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {connect} from 'react-redux';
import Login from '../login/LoginScreen';
import {bindActionCreators} from 'redux';
import actions from '../actions';

class Home extends Component {
  render () {
    const { user, getLogin }=this.props;
    if (!user.isLoggedIn) {
      return <Login getLogin={getLogin}/>
    }
    return (
      <View style={ styles.container }>
        <Text style={ styles.summary }>App Startup Screen</Text>
        <Text style={ styles.summary }>App Startup Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    marginTop: 80,
    padding: 10,
    backgroundColor:'#fff'
  },
  summary: {
    fontFamily: 'BodoniSvtyTwoITCTT-Book',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default connect(
  state=>({
    user: state.user
  }),
  dispatch=>({
    getLogin: bindActionCreators(actions.getLogin, dispatch)
  })
)(Home);