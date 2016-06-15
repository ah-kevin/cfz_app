import {CHANGE_PAGE} from '../constants/Home';
export function change_page (name) {
  return {
    type: CHANGE_PAGE,
    payload: name
  }
}
