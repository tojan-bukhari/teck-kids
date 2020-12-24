
import React from 'react';
import ReactDOM from 'react-dom';

// take care of service worker
// import * from serviceWorker From "./serviceworker";
import App from './App';
// we install redux to call createStore an
// import {createStore} from "redux";
//to combine the application with redue
// import { Provider } from "react-redux";
// import store from "./reducer/score";
// // shold
// const store = createStore(reducers);
// const store = createStore(allReducer , 
//    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(

    <App />,
  document.getElementById('root')
);

// serviceWorker.unregister();


