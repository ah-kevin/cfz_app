import {CHANGE_PAGE,CLEAN_PAGE} from '../constants/Home';
export function change_page (name) {
  return {
    type: CHANGE_PAGE,
    payload: name
  }
}
export function clean_page () {
  return{
    type:CLEAN_PAGE
  }
}