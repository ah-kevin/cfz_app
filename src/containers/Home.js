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
  Dimensions
} from 'react-native';
import {connect} from 'react-redux';
import Login from '../login/LoginScreen';
import {bindActionCreators} from 'redux';
import actions from '../actions';
import Picker from 'react-native-picker';
import Tabs from 'react-native-tabs';

class Home extends Component {
  constructor () {
    super();
    this.state = {
      pickerData: [ 1, 2, 3 ],
      selectedValue: [ 1123123123 ]
    };
  }

  _onPressHandle () {
    this.picker.toggle();
  }

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
              <TouchableOpacity onPress={this._onPressHandle.bind(this)}>
                <Text>{this.state.selectedValue}</Text>
              </TouchableOpacity>
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
        <View style={styles.tabbar}>
          <Tabs selected={this.state.page} style={{ backgroundColor: 'white' }}
                selectedStyle={{ color: 'red' }} onSelect={el=>this.setState({ page: el.props.name })}>
            <Text name="first">First</Text>
            <Text name="second" selectedIconStyle={{ borderTopWidth: 2, borderTopColor: 'red' }}>Second</Text>
            <Text name="third">Third</Text>
            <Text name="fourth" selectedStyle={{ color: 'green' }}>Fourth</Text>
            <Text name="fifth">Fifth</Text>
          </Tabs>
          <Text style={styles.welcome}>
            Welcome to React Native
          </Text>
          <Text style={styles.instructions}>
            Selected page: {this.state.page}
          </Text>
          <View style={styles.pickerContainer}>
            <Picker
              ref={picker => this.picker = picker}
              style={{ height: 350 }}
              showDuration={300}
              pickerData={this.state.pickerData}
              selectedValue={this.state.selectedValue}
              onPickerDone={(pickedValue) => {
                this.setState({
                  selectedValue: pickedValue,
                });
              }}
            />
          </View>
        </View>

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
  header: {
    flexDirection: 'row',
  },
  tabbar: {
    flex: 3,
    backgroundColor: 'red'
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
    height: Dimensions.get('window').height,
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