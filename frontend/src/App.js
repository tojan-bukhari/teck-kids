import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import Singin from './component/Singin';
import registrate from './component/registrate';
import Personalprofile from './component/pics/profile';
import editProfile from './component/pics/editProfile';
import lessons from './pages/Lessons';
import Exercises from './pages/Exercises';
import HTMLcourse from './component/HtmlCourse/HTMLcourse';
import CSScourse from './component/CSSCourse/CSScourse';
import ProtectedRoute from './protectedroutes/ProtectedRoute';
import errorimg from "./protectedroutes/404img";
import pic from './component/pics/profilePicChanger';
import Navbar from './component/Navbar/Navbar'
//import './App.css';
// import store  from './component/score';
/****************************************************************** */

////////////////////////tojaaan/////////////////////////////
////////////////////////////////////////////

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Switch>
          <ProtectedRoute path='/lessons' component={lessons} isAuth={localStorage.length > 0} />
          <ProtectedRoute path='/exercises' component={Exercises} isAuth={localStorage.length > 0} />
          <Route exact path="/" component={Home} />
          <Route exact path="/htmlCourse" component={HTMLcourse} />
          <ProtectedRoute exact path="/cssCourse" component={CSScourse} isAuth={localStorage.length > 0} />
          <Route path="/errorimg" component={errorimg} />
          <ProtectedRoute exact path="/account/:id" component={Personalprofile} isAuth={localStorage.length > 0} />
          <Route exact path="/edit/:id" component={editProfile} />
          <Route exact path="/pic/:id" component={pic} />
          <Route exact path="/Singin" component={Singin} />
          <Route exact path="/registrate" component={registrate} />
          <Exercises />
        </Switch>
      </BrowserRouter>
    </>
  );

};

export default App; 