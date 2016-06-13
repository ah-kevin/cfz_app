/**
 *@flow
 */
"use strict";
import immutable from 'immutable';
import {LOGGED_IN, LOGGED_DOING, LOGGED_ERROR} from '../constants/login';

const initialState = immutable.fromJS({
  isLoggedIn: false,
  status: ''
})
export default function user (state = initialState, action) {
  switch (action.type) {
    case LOGGED_DOING:
      return immutable.fromJS({
        isLoggedIn: false,
        status: 'doing'
      })
    default:
      return state;
  }
}