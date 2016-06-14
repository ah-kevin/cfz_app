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
  TouchableOpacity,
  Picker
} from 'react-native';
import {connect} from 'react-redux';
import Login from '../login/LoginScreen';
import {bindActionCreators} from 'redux';
import actions from '../actions';
const Item = Picker.Item
class Home extends Component {
  render () {
    const { user, getLogin }=this.props;
    if (!user.isLoggedIn) {
      return <Login getLogin={getLogin}/>
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
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
            {
              false ? <View style={styles.pickerContainer}>
                <Picker
                  style={styles.picker}
                  selectedValue={'111'}
                  onValueChange={()=> {}}>
                  <Item label="hello" value="key0" style={styles.select}/>
                  <Item label="world" value="key1" style={styles.select}/>
                </Picker>
              </View> : null
            }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    flex: 1,
    backgroundColor: '#fff'
  },
  gray: {
    backgroundColor: 'rgba(52,52,52,.2)',
  },
  header: {
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
  pickerContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-end',
  },
  select: {
    alignItems: 'flex-end'
  },
  picker: {
    backgroundColor: "#fff"
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