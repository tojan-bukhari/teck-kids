import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import login from './component/login';
import registrate from './component/registrate';

function App() {
  return (
    <div className="App">
     <>
      <BrowserRouter>
      <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={login} />
              <Route exact path="/registrate" component={registrate} />
              
            </Switch>
          </div>
        
      </BrowserRouter>
    </>
          
    </div>
  );
}

export default App;
