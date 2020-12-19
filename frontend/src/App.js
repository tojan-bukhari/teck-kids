// import { Router } from 'express'
import React from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
/****************************************/
function App() {
  return (
    <div className="App">
      <Router>
       <h1>Hellooo</h1>
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
