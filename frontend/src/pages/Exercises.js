import React from 'react';
import EX1 from "../components/HTML/Quiz1"
import EX2 from "../components/CSS/Quiz1"

import { Route } from 'react-router-dom';




function Exercises() {
  return (
    <div className='exercises'>

<Route path='/ex1' component={EX1} />
<Route path='/ex2' component={EX2} />


                 </div>
  );
}

export default Exercises;  