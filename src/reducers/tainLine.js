/**
 * Created by dg_lennon on 16/6/15.
 */
"use strict";
import {FAIL_TRAINLINE, RECEIVE_TRAINLINE, REQUEST_TRAINLINE} from '../constants/TrainLine';
const initailState = {
  isFetching: false,
  error: '',
  data: [],
  hasData:false
}
export default function trainLine (state = initailState, action) {
  switch (action.type) {
    case REQUEST_TRAINLINE:
      return { ...state, isFetching: true }
    case FAIL_TRAINLINE:
      return { ...state, isFetching: false, error: action.payload }
    case RECEIVE_TRAINLINE:
      return { ...state, isFetching: false, data: action.payload,hasData:true }
    default:
      return state;
  }

}