import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import login from './component/login';
import registrate from './component/registrate';
import profile from './component/profile'
import './App.css';
import lessons from './pages/Lessons';
import Exercises from './pages/Exercises';
import HTMLcourse from './component/HtmlCourse/HTMLcourse';

/****************************************************************** */



function App() {

  return (
    <>
      <BrowserRouter>

        <Switch>
          <Route path='/lessons' component={lessons} />
          <Route path='/exercises' component={Exercises} />
          <Route exact path="/" component={Home} />
          <Route exact path="/htmlCourse" component={HTMLcourse} />
          <Route exact path="/login" component={login} />
          <Route exact path="/registrate" component={registrate} />
          <Route exact path="/account/:id" component={profile} />
          <Exercises />
        </Switch>
      </BrowserRouter>
    </> 
  );

};

export default App; 
