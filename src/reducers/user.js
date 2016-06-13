/**
 *@flow
 */
"use strict";
import immutable from 'immutable';
import {REQUEST_LOGIN, RECEIVE_LOGIN, FAIL_LOGIN} from '../constants/login';

const initialState = immutable.fromJS({
  isLoggedIn: false,
  isFetching: false,
  error: '',
  data: {}
})
export default function user (state = initialState, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return immutable.fromJS({
        isLoggedIn: false,
        isFetching: true,
        error: ''
      })
    case FAIL_LOGIN:
      return immutable.fromJS({
        isLoggedIn: false,
        isFetching: false,
        error: action.payload
      })
    case RECEIVE_LOGIN:
      return immutable.fromJS({
        isLoggedIn: true,
        isFetching: false,
        error: '',
        data: action.payload
      })
    default:
      return state;
  }
}