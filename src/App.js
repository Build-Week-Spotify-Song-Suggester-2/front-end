import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute'

// COMPONENTS
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Landing from "./pages/landing/Landing";
import Navigation from "./component/Navigation";
import Dashboard from './pages/dashboard/Dashboard'
import Search from './pages/search/Search'

function App() {
  return (
    <div>

      <h1 style={{ textAlign: "center" }}>Spotify Song Suggester</h1>
      <br></br>
      <br></br>
      <Navigation />
      <br></br>
      <br></br>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path='/dashboard' component={Dashboard}/>
        <Route path="/search" component={Search}/>
      </Switch>
    </div>
  );
}

export default App;
