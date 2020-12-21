import React from "react";
import AuthOption from "../component/AuthOption";
import { Link } from "react-router-dom";


////////////

export default function Header() {
    return (
      <header id="header">
        <Link to="/">
         
        </Link>
        <AuthOption />
       
      </header>
    );
  }
 