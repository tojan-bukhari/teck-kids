
import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';
// we install redux to call createStore an]
// import {createStore} from "redux";
//to combine the application with redux
import { Provider } from "react-redux";
import Quiz from "./component/CSS/Quiz1"
// import store from "./component/reducer/score";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from "./component/reducer/reducers"

const store = createStore(reducers, compose(applyMiddleware(thunk)));

///
ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

// serviceWorker.unregister();


