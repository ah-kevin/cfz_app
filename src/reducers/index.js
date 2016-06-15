import {combineReducers} from 'redux';
import routes from './routes';
import user from './user';
import trainLine from './tainLine';
import Home from './home';

export default combineReducers({
  routes,
  user,
  trainLine,
  Home
})