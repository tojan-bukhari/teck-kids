// import { increment , decrement } from "./actions";
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Header from './component/Header';
import Home from './component/Home';
import Singin from './component/Singin';
import registrate from './component/registrate';
import profile from './component/profile'
import Navbar from './component/sidebar/Navbar';
import './App.css';
import lessons from './pages/Lessons';
import Exercises from './pages/Exercises';

// import store  from './component/score';

function App() {

  return (
    <>
      <BrowserRouter>
       
        <Switch>
          <Route path='/lessons' component={lessons} />
          <Route path='/exercises' component={Exercises} />
          <Route exact path="/" component={Home} />
          <Route exact path="/Singin" component={Singin} />
          <Route exact path="/registrate" component={registrate} />
          <Route exact path="/account/:id" component={profile} />
          {/* <Route exact path="/score" component={Score} /> */}
          <Exercises />
        </Switch>
      </BrowserRouter>
    </> 
  );

};

export default App; 
