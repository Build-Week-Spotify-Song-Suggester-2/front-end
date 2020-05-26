import React from 'react';
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Landing from './pages/landing/Landing'
import Navigation from './component/Navigation'


import { Route, Switch } from "react-router-dom"


function App() {
  return (
    <div>
        <h1>Spotify Song Suggester</h1>
        <br></br>
          <br></br>
          <Navigation />
          <br></br>
            <br></br>
      <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/login" component={Login}/>
      <Route path="/register" component={Register}/>

      </Switch>
        
       

    </div>
  );
}

export default App;
