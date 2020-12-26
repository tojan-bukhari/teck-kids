import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducers  from '../reducer/reducers'
import thunk from 'redux-thunk';

  const Middleware = applyMiddleware(thunk)
  const store = createStore(reducers,Middleware)


  export default store;