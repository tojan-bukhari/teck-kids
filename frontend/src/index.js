
import React from 'react';
import ReactDOM from 'react-dom';

// take care of service worker
// import * from serviceWorker From "./serviceworker";
import App from './App';
import {createStore} from "redux";
import reducer from "./reducers/user"
import { Provider } from "react-redux";

const store = createStore(reducer);
// const store = createStore(allReducer , 
//    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

// serviceWorker.unregister();


