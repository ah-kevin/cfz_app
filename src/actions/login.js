import {Alert} from 'react-native';
import {LOGGED_IN, LOGGED_ERROR, LOGGED_DOING, FAIL_LOGIN, RECEIVE_LOGIN, REQUEST_LOGIN} from '../constants/login';
import config from '../config';

export function loggedDoing () {
  return {
    type: LOGGED_DOING
  }
}
export function loggederror () {
  return {
    type: LOGGED_ERROR
  }
}

export function loggedIn () {
  return {
    type: LOGGED_IN
  }
}
export function requestLogin () {
  return {
    type: REQUEST_LOGIN
  }
}
export function failLogin () {
  return {
    type: FAIL_LOGIN
  }
}
export function reveiceLogin (data) {
  return {
    type: RECEIVE_LOGIN,
    payload: data
  }
}

/**
 * 登录请求
 */
export function getLoing (data) {
  return (dispatch, getState)=> {
    const isFetch = getState().get('isFetching');
    //检测是否在请求
    if (isFetch) {
      return
    }
    //发送请求
    dispatch(requestLogin());
    return fetch(`${config.server}/loginSale?pass=${data.pwd}&mobile=${data.phoneNo}`, {
      method: 'post'
    })
      .then(res=> {
        if (res.ok) {
          return res.json()
        }
        Alert.alert(
          '请求失败'
        )
      })
  }
}