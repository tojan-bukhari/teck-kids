

// import { increment , decrement } from "./actions";
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import login from './component/login';
import registrate from './component/registrate';
import profile from './component/profile'
import Navbar from './components/sidebar/Navbar';
import './App.css';

import lessons from './pages/Lessons';
import Exercises from './pages/Exercises';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/lessons' component={lessons} />
          <Route path='/exercises' component={Exercises} />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={login} />
          <Route exact path="/registrate" component={registrate} />
          <Route exact path="/account/:id" component={profile} />
        </Switch>
      </BrowserRouter>
    </> 
  );

};

export default App; 
