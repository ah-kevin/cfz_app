import {CHANGE_PAGE, CLEAN_PAGE} from '../constants/Home';
import {PICK_LINE, PICK_STATION, PICK_TRAINO, PICK_VALUE,PICK_TRAIN_VALUE} from '../constants/TrainLine';

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
/**
 * 选择器
 * @param data
 * @returns {{type, payload: *}}
 */
export function pick_station (data) {
  return {
    type: PICK_STATION,
    payload: data
  }
}
export function pick_line (data) {
  return {
    type: PICK_LINE,
    payload: data
  }
}
export function pick_train (data) {
  return {
    type: PICK_TRAINO,
    payload: data
  }
}
export function pick_value (value) {
  return {
    type: PICK_VALUE,
    payload: value
  }
}
export function pick_train_value (value) {
  return {
    type: PICK_TRAIN_VALUE,
    payload: value
  }
}
export function select_station () {
  return (dispatch, getStore)=> {
    const stationName = getStore().user.data[ 0 ][ 1 ];
    dispatch(pick_station(stationName))
  }
}
export function select_line () {
  return (dispatch, getStore)=> {
    const LineData = getStore().trainLine.data;
    const Line_List = LineData.map((data)=> {
      return data.line_no
    })
    dispatch(pick_line(Line_List))
  }
}

export function select_train (lineNo) {
  return (dispatch, getStore)=> {
    const LineData = getStore().trainLine.data;
    const Train_List =LineData.filter((data)=>{
     return data.line_no==lineNo
    })
    const trainNo_List = Train_List[0].trains.map((data)=>data.train_no);
    dispatch(pick_train(trainNo_List))
  }
}