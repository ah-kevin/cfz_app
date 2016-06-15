import {combineReducers} from 'redux';
import routes from './routes';
import user from './user';
import trainLine from './tainLine';

export default combineReducers({
  routes,
  user,
  trainLine
})