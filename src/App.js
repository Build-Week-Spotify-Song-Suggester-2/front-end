import React from 'react';
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Landing from './pages/landing/Landing'
import Navigation from './component/Navigation'
import Search from './pages/search/Search'
import './pages/landing/styles.landing.scss' 


import { Route, Switch } from "react-router-dom"


function App() {
  return (
    <div>
      <Navigation />
          <br></br>
          <br></br>
          
      <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/search" component={Search}/>

      </Switch>
        
       

    </div>
  );
}

export default App;
