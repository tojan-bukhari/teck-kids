import React from 'react';
import { useHistory } from "react-router-dom";

export default function Home() {
    const history = useHistory();

    const registrater = () => history.push("/registrate");
    const login = () => history.push("/login");
   return <div>
<button onClick={registrater}>register</button>
<button  onClick={login}>login</button>


    </div>
}