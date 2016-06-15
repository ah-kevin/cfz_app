/**
 * Created by dg_lennon on 16/6/15.
 */
import {CHANGE_PAGE, CLEAN_PAGE} from '../constants/Home';
import {PICK_LINE, PICK_STATION, PICK_TRAINO} from '../constants/TrainLine';

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
  selectedValue: []
}
function selectState (state = initial_select_state, action) {
  if (action.type == PICK_STATION) {
    return {
      pickerData: [ action.payload ],
      selectedValue: [ action.payload ]
    }
  }
  return state
}
export default combineReducers({
  tabs,
  selectState
})