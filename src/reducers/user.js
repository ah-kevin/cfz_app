/**
 *@flow
 */
"use strict";
import immutable from 'immutable';
import {LOGGED_IN, LOGGED_DOING, LOGGED_ERROR} from '../constants/login';
import type {Action} from '../actions/types';

export type State={
  isLoggedIn:boolean;
  status:String;
}
const initialState = immutable.fromJS({
  isLoggedIn: false,
  status: ''
})
export default function user (state:State = initialState, action:Action):State {
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