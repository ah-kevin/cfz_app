/**
 * Created by dg_lennon on 16/6/15.
 */
import {FAIL_TRAINLINE, RECEIVE_TRAINLINE, REQUEST_TRAINLINE} from '../constants/TrainLine';
import config from '../config';
import {Alert} from 'react-native';

export function request_trainLine () {
  return {
    type: REQUEST_TRAINLINE
  }
}
export function faliData (err) {
  return {
    type: FAIL_TRAINLINE,
    payload: err
  }
}
export function reviveData (data) {
  return {
    type: RECEIVE_TRAINLINE,
    payload: data
  }
}

export function getTrainLine (data) {
  return (dispatch, getState)=> {
    const isFetch = getState().trainLine.isFetching;
    if (isFetch) {
      return
    }
    dispatch(request_trainLine());
    return fetch(`${config.server}/queryLineTrain?bureau_id=${data}`)
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
          dispatch(reviveData(res.data.lines));
        } else {
          dispatch(faliData('服务器错误'));
          Alert.alert(
            '接口请求失败',
          )
        }
      })
      .catch(err=> {
        dispatch(faliData(err));
        Alert.alert(
          err
        )
      })
  }
}