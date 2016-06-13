import {Alert} from 'react-native';
import {FAIL_LOGIN, RECEIVE_LOGIN, REQUEST_LOGIN,LOGIN_OUT} from '../constants/login';
import config from '../config';

export function requestLogin () {
  return {
    type: REQUEST_LOGIN
  }
}
export function failLogin (err) {
  return {
    type: FAIL_LOGIN,
    payload: err
  }
}
export function reveiceLogin (data) {
  return {
    type: RECEIVE_LOGIN,
    payload: data
  }
}
export function loginOut () {
  return{
    type:LOGIN_OUT
  }
}

/**
 * 登录请求
 */
export function getLogin (data) {
  return (dispatch, getState)=> {
    const isFetch = getState().user.isFetching;
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
      .then(res=> {
        if (res.status == 'ok') {
          dispatch(reveiceLogin(res.data));
        } else {
          Alert.alert(
            '接口请求失败'
          )
        }
      })
      .catch(err=> {
        dispatch(failLogin(err));
        Alert.alert(
          err
        )
      })
  }
}