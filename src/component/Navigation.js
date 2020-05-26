import React from 'react';
import { Link } from "react-router-dom"



function Navigation() {
    return (
      <div>     
        <Link to={"/register"}>Register</Link>
            <br></br>
            <br></br>
        <Link to={"/login"}>Login</Link>
            <br></br>
            <br></br>
        <Link to={"/"}>Home</Link>
            <br></br>
            <br></br>
        <Link to={"/search"}>Search</Link>
      </div>
    );
  }
  
  export default Navigation;