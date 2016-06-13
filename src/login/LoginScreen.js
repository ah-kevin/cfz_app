/**
 * Created by dg_lennon on 16/6/12.
 */
import React from 'react';
var t = require('tcomb-form-native');
//noinspection JSUnresolvedVariable
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import {Actions} from 'react-native-router-flux';

var Form = t.form.Form;
// here we are: define your domain model
var Person = t.struct({
  手机号: t.Number,  // an optional string
  密码: t.Number// a required number
});

var options = {
  fields: {
    手机号: {
      label: '手机号' // <= label for the name field
    },
    密码: {
      error: '请输入数字'
    }
  }
}; // optional rendering options (see documentation)

export default class LoginScreen extends React.Component {
  constructor () {
    super();
    this.onPress = this.onPress.bind(this);
  }

  onPress () {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      Actions.app();
      console.log(value); // value here is an instance of Person
    }
  }

  render () {
    return (
      <View style={styles.container}>
            {/* display */}
              <Form
                ref="form"
                type={Person}
                options={options}
              />
              <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
                <Text style={styles.buttonText}>登录</Text>
              </TouchableHighlight>
      </View>
    );
  }
}
;

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});