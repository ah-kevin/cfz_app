/**
 * Created by dg_lennon on 16/6/15.
 */
import {CHANGE_PAGE, CLEAN_PAGE} from '../constants/Home';
import {PICK_LINE, PICK_STATION, PICK_TRAINO,PICK_VALUE} from '../constants/TrainLine';

import {combineReducers} from 'redux';

const initailState = {
  page: ''
}
function tabs (state = initailState, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        page: action.payload
      }
    case CLEAN_PAGE:
      return {
        page: ''
      }
    default:
      return state
  }
}
const initial_select_state = {
  pickerData: [],
  selectedValue: [],
  initStationName:'请选择路局',
  initLineName:'请选择交路',
  initTrainName:'',
}
function selectState (state = initial_select_state, action) {
  switch (action.type){
    case PICK_STATION:
      return {...state, pickerData: [ action.payload ], selectedValue: [ action.payload],initStationName:action.payload}
    case PICK_LINE:
      return {...state, pickerData:action.payload, selectedValue:action.payload[0]}
    case PICK_VALUE:
      return {...state,initLineName:action.payload}
    default:
      return state
  }

}
export default combineReducers({
  tabs,
  selectState
})