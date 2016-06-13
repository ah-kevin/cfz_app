/**
 * Created by Lennon on 16/6/10.
 */
import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
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
      <View style={styles.container}>
        <View style={styles.item}>
          <View style={[ styles.center, styles.flex ]}>
            <Text>1</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View style={[ styles.center, styles.flex ]}>
            <Text>1</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View style={[ styles.center, styles.flex ]}>
            <Text>1</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
  },
  item: {
    height: 40,
    flex: 1
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  flex: {
    flex: 1
  },
  picker: {
    width: 100,
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