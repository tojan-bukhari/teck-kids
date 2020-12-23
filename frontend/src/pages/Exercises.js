import React from 'react';
import ex1HTML from "../component/HTML/Quiz1"
import ex1CSS from "../component/CSS/Quiz1"
import HTMLdes from "../component/DESCRIPTIONS/HTMLdes"
import ex2HTML from "../component/HTML/draganddropex/data"
import CSSdes from "../component/DESCRIPTIONS/CSSdes"
import JSdes from "../component/DESCRIPTIONS/JSdes"
import ex2CSS from "../component/CSS/draganddropex/data"




import { Route } from 'react-router-dom';




function Exercises() {
  return (
    <div className='exercises'>

<Route path='/ex1HTML' component={ex1HTML} />
<Route path='/ex1CSS' component={ex1CSS} />
<Route path='/html-des' component={HTMLdes} />
<Route path='/css-des' component={CSSdes} />
<Route path='/ex9' component={ex2HTML} />
<Route path='/js-des' component={JSdes} />
<Route path='/ex2CSS' component={ex2CSS} />





{/* <Route path='/ex2' component={EX2} />
<Route path='/ex2' component={EX2} /> */}



                 </div>
  );
}

export default Exercises;  