import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import {autoRehydrate, persistStore} from 'redux-persist';
import {AsyncStorage} from 'react-native';
import createLogger from 'redux-logger';
import reducers from '../reducers'
import devTools from 'remote-redux-devtools';
import Immutable, {Record} from 'immutable';
import immutableTransform from 'redux-persist-transform-immutable'

var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
var logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

const middlewares = [ thunk, logger ];
const MyRecord = Record({
  foo: 'null'
}, 'MyRecord') // <- Be sure to add a name field to your record
let enhancer;
if (__DEV__) {
  const installDevTools = require('immutable-devtools');
  installDevTools(Immutable);
  enhancer = compose(
    applyMiddleware(...middlewares),
    devTools()
  );
} else {
  enhancer = applyMiddleware(...middlewares);
}
export default function configureStore (onComplete:?() => void) {
  const store = createStore(
    reducers,
    enhancer,
    autoRehydrate()
  );
  let opt = {
    storage: AsyncStorage,
    transform: [ immutableTransform({ records: [ MyRecord ] }) ]
  }
  persistStore(store, opt, onComplete);
  if (isDebuggingInChrome) {
    window.store = store;
  }
  return store;
}

