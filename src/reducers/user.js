/**
 *@flow
 */
"use strict";
import {REQUEST_LOGIN, RECEIVE_LOGIN, FAIL_LOGIN, LOGIN_OUT} from '../constants/login';

const initialState = {
  isLoggedIn: false,
  isFetching: false,
  error: '',
  data: {}
}
export default function user (state = initialState, action) {
  switch (action.type) {
    case LOGIN_OUT:
      return { ...state, isLoggedIn: false, isFetching: false }
    case REQUEST_LOGIN:
      return { ...state, isFetching: true }
    case FAIL_LOGIN:
      return { ...state, error: action.payload, isFetching: false }
    case RECEIVE_LOGIN:
      return { ...state, isLoggedIn: true, isFetching: false, data: action.payload }
    default:
      return state;
  }
}