import React from 'react';

import { Link } from "react-router-dom"



function Navigation() {
    return (
      <div>
          <h1>Nav Test</h1>
          <br></br>
            <br></br>
            
        <Link to={"/register"}>Register</Link>
        <br></br>
            <br></br>
        <Link to={"/login"}>Login</Link>
        <br></br>
            <br></br>
        <Link to={"/"}>Home</Link>


       
  
      </div>
    );
  }
  
  export default Navigation;