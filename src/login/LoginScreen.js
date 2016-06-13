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

var Form = t.form.Form;
// here we are: define your domain model
var Person = t.struct({
  phoneNo: t.Number,  // an optional string
  pwd: t.Number// a required number
});

var options = {
  fields: {
    phoneNo: {
      label: '手机号', // <= label for the name field
      error: '请输入手机号'
    },
    pwd: {
      label: '密码',
      error: '请输入数字'
    }
  }
}; // optional rendering options (see documentation)

class LoginScreen extends React.Component {
  constructor () {
    super();
    this.onPress = this.onPress.bind(this);
  }

  onPress () {
    var value = this.refs.form.getValue();
    const { getLogin }=this.props;
    if (value) { // if validation fails, value will be null
      getLogin(value)
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

export default LoginScreen;