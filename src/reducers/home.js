/**
 * Created by dg_lennon on 16/6/15.
 */
import {CHANGE_PAGE, CLEAN_PAGE} from '../constants/Home';
import {PICK_LINE, PICK_STATION, PICK_TRAINO,PICK_VALUE,PICK_TRAIN_VALUE} from '../constants/TrainLine';

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
  pickerData: [1,2,3],
  selectedValue: [1],
  initStationName:'请选择路局',
  initLineName:'请选择交路',
  initTrainName:'请选择车次',
  select:'',
  hasTrainData:false
}
function selectState (state = initial_select_state, action) {
  switch (action.type){
    case PICK_STATION:
      return {...state, pickerData: [ action.payload ], selectedValue: [ action.payload],initStationName:action.payload,select:'1'}
    case PICK_LINE:
      return {...state, pickerData:action.payload, selectedValue:action.payload[0],select:'2',hasTrainData:false,initTrainName:'请选择车次'}
    case PICK_VALUE:
      return {...state,initLineName:action.payload}
    case PICK_TRAIN_VALUE:
      return {...state,initTrainName:action.payload}
    case PICK_TRAINO:
      return {...state,pickerData:action.payload,selectedValue:action.payload[0],select:'3',hasTrainData:true}
    default:
      return state
  }

}
export default combineReducers({
  tabs,
  selectState
})