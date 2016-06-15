/**
 * Created by dg_lennon on 16/6/15.
 */
import {CHANGE_PAGE} from '../constants/Home';
import {combineReducers} from 'redux';

const initailState={
  page:''
}
function tabs (state =initailState, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        page: action.payload
      }
    default:
      return state
  }
}
export default combineReducers({
  tabs
})