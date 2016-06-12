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

import {Actions} from 'react-native-router-flux';

class app extends Component {
  render () {
    const { user }=this.props;
    console.log(user.get('isLoggedIn'));
    return (
      <View style={ styles.container }>
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
    padding: 10
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
  })
)(app);