import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import login from './component/login';
import registrate from './component/registrate';
import Personalprofile from './component/pics/profile';
import editProfile from './component/pics/editProfile';
import './App.css';
import lessons from './pages/Lessons';
import Exercises from './pages/Exercises';
import HTMLcourse from './component/HtmlCourse/HTMLcourse';
import CSScourse from './component/CSSCourse/CSScourse';
/****************************************************************** */
// import profile from './component/profile';
// import Score from './component/score';
import ProtectedRoute from './protectedroutes/ProtectedRoute';
import errorimg from "./protectedroutes/404img"




function App() {

  return (
    <>
      <BrowserRouter>

        <Switch>
        <ProtectedRoute path='/lessons' component={lessons} isAuth={localStorage.length>0}/>
          <ProtectedRoute path='/exercises' component={Exercises} isAuth={localStorage.length>0}/>
          <Route exact path="/" component={Home} />
          <Route exact path="/htmlCourse" component={HTMLcourse} />

 <ProtectedRoute exact path="/cssCourse" component={CSScourse} isAuth={localStorage.length>0}/>
 <Route  path="/errorimg" component={errorimg} />

          <Route exact path="/login" component={login} />
          <Route exact path="/registrate" component={registrate} />
          <Route exact path="/account/:id" component={Personalprofile} />
          <Route exact path="/edit/:id" component={editProfile} />
          
          {/* <Route exact path="/score" component={Score} /> */}
          <Exercises />
        </Switch>
      </BrowserRouter>
    </> 
  );

};

export default App; 
