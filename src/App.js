import React from 'react';
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import { Route } from "react-router-dom"
import './App.scss'

function App() {
  return (
    <div>
        <h1>Spotify Song Suggester</h1>
        <br></br>
          <br></br>
          
        <Route exact path="/login" component={Login}/>
      <Route path="/register" component={Register}/>

       

    </div>
  );
}

export default App;
