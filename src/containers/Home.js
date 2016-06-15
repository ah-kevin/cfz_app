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
  TouchableHighlight,
  Dimensions,
  AsyncStorage
} from 'react-native';
import {connect} from 'react-redux';
import Login from '../login/LoginScreen';
import {bindActionCreators} from 'redux';
import actions from '../actions';
import Picker from 'react-native-picker';
import Tabs from 'react-native-tabs';
import ListView from '../components/GiftedListView';

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
    const { user, getLogin, trainLine }=this.props;
    console.log(this.state);
    const trianName = user.data[ 0 ][ 1 ];
    if (!user.isLoggedIn) {
      return <Login getLogin={getLogin}/>
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.item}>
            <View style={[ styles.center, styles.flex ]}>
              <TouchableOpacity onPress={this._onPressHandle.bind(this)}>
                <Text>{trianName}</Text>
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
        <View style={styles.scrollViewContainer}>
          <ListView />
        </View>
        <View style={styles.tabbar}>
          <Tabs selected={this.state.page} style={{ backgroundColor: 'white' }}
                selectedStyle={{ color: 'red' }} onSelect={el=>this.setState({ page: el.props.name })}>
            <Text name="first">全部</Text>
            <Text name="second" selectedIconStyle={{ borderTopWidth: 2, borderTopColor: 'red' }}>正餐</Text>
            <Text name="third">零食</Text>
            <Text name="fourth" selectedStyle={{ color: 'green' }}>饮品</Text>
            <Text name="fifth">休闲</Text>
          </Tabs>
        </View>
        <View style={styles.pickerContainer}>
          <Picker
            ref={picker => this.picker = picker}
            style={{ height: 200 }}
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
    height: 50,
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
    position: 'absolute',
    bottom: 0,
  },
  scrollViewContainer: {
    flex: 1
  },
  scrollView: {
    // backgroundColor: 'blue',
  }
});

export default connect(
  state=>({
    user: state.user,
    trainLine: state.trainLine
  }),
  dispatch=>({
    getLogin: bindActionCreators(actions.getLogin, dispatch),
    actions: bindActionCreators(actions, dispatch)
  })
)(Home);