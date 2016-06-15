import {Alert} from 'react-native';
import {FAIL_LOGIN, RECEIVE_LOGIN, REQUEST_LOGIN, LOGIN_OUT, CLEAN_FETHING} from '../constants/login';
import config from '../config';
import {getTrainLine} from './trainLine';

export function requestLogin () {
  return {
    type: REQUEST_LOGIN
  }
}
export function cleanFetching () {
  return {
    type: CLEAN_FETHING
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
  return {
    type: LOGIN_OUT
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
    const oldbureau = getState().user.data[ 0 ][ 0 ];
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
          if (oldbureau !== res.data[ 0 ][ 0 ]) {
            dispatch(getTrainLine(res.data[ 0 ][ 0 ]))
          }
        } else {
          dispatch(failLogin('接口错误'));
          Alert.alert(
            '接口请求失败',
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