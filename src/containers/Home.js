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
import {bindActionCreators} from 'redux';
import actions from '../actions';
import Picker from 'react-native-picker';
import Tabs from 'react-native-tabs';
import ListView from '../components/GiftedListView';

class Home extends Component {
  constructor () {
    super();
  }

  componentWillMount () {
    const { user, actions, trainLine }=this.props;
    actions.clean_page();
    if (user.hasBureauId && !trainLine.hasData) {
      alert('数据重新获取Home')
      actions.getTrainLine(user.data[ 0 ][ 0 ]);
    }
    actions.select_station()
  }

  pick_station () {
    this.picker.toggle();
    this.props.actions.select_station();
  }

  pick_line () {
    this.picker.toggle();
    this.props.actions.select_line();
  }

  render () {
    const { user, trainLine, tabs, actions, selectState }=this.props;
    const trianName = user.data[ 0 ][ 1 ];
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.item}>
            <View style={[ styles.center, styles.flex ]}>
              <TouchableOpacity onPress={()=>this.pick_station()}>
                <Text>{selectState.initStationName}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.item}>
            <View style={[ styles.center, styles.flex ]}>
              <TouchableOpacity onPress={()=> this.pick_line()}>
                <Text>{selectState.initLineName}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.item}>
            <View style={[ styles.center, styles.flex ]}>
              <TouchableOpacity onPress={()=> {}}>
                <Text>33333</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.scrollViewContainer}>
          <ListView />
        </View>
        <View style={styles.tabbar}>
          <Tabs selected={tabs.page} style={{ backgroundColor: 'white' }}
                selectedStyle={{ color: 'red' }} onSelect={el=>actions.change_page(el.props.name)}>
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
            pickerData={selectState.pickerData}
            selectedValue={selectState.selectedValue}
            onPickerDone={(pickedValue) => {
            console.log(pickedValue);
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
    trainLine: state.trainLine,
    tabs: state.Home.tabs,
    selectState: state.Home.selectState
  }),
  dispatch=>({
    actions: bindActionCreators(actions, dispatch)
  })
)(Home);