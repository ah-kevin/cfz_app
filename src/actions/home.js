import {CHANGE_PAGE, CLEAN_PAGE} from '../constants/Home';
import {PICK_LINE, PICK_STATION, PICK_TRAINO} from '../constants/TrainLine';

export function change_page (name) {
  return {
    type: CHANGE_PAGE,
    payload: name
  }
}
export function clean_page () {
  return {
    type: CLEAN_PAGE
  }
}
export function pick_station (data) {
  return {
    type: PICK_STATION,
    payload: data
  }
}
export function select_station () {
  return (dispatch, getStore)=> {
    const stationName = getStore().user.data[ 0 ][ 1 ];
    dispatch(pick_station(stationName))
  }
}