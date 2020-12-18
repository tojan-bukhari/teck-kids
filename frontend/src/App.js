import React from "react";
import { useSelector , useDispatch} from "react-redux";
import { increment , decrement } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const islogged = useSelector(state => state.islogged);
  const dispatch = useDispatch();

  return (
    <div className = "App">
      <h1> Counter { counter }</h1>
      <button onClick = { () => dispatch( increment(5) ) }>+</button>
      <button onClick = { () => dispatch( decrement() )}>-</button>
     {islogged ? <h3> you should not see this </h3> : " "} 
    </div>
  );


};

export default App; 
