import {combineReducers} from 'redux';
import routes from './routes';
import user from './user';

export default combineReducers({
  routes,
  user
})