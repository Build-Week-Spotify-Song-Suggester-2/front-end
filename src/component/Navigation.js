import React from 'react';
import { Link } from "react-router-dom"
import './styles.navigation.scss'


function Navigation() {
    return (
      <div className='navigation'>  
      <Link to={"/"}>Home</Link>   
          <br></br>
          <br></br>
      <Link to={"/search"}>Search</Link>  
          <br></br>
          <br></br>
      <Link to={"/register"}>Register</Link>
          <br></br>
          <br></br>
      <Link to={"/login"}>Login</Link>
          <br></br>
          <br></br>
      </div>
    );
  }
  
  export default Navigation;