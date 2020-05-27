import React, { useEffect } from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute'
import { connect } from 'react-redux'

// COMPONENTS
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Landing from "./pages/landing/Landing";
import Navigation from "./component/Navigation";
import Dashboard from './pages/dashboard/Dashboard'
import Search from './pages/search/Search'
import { setLoggedState } from "./redux/actions";

function App(props) {

  // onRefresh, check if user is logged in
  const { isLogged } = props.state
  const { setLoggedState } = props
  useEffect(() => {
    if (localStorage.getItem('bwSpotifyToken')){
      localStorage.setItem('logged', true)
      setLoggedState(true)
    } else if (localStorage.getItem('bwSpotifyToken') === null){
      localStorage.setItem('logged', false)
      setLoggedState(false)
    }
  }, [isLogged, setLoggedState])
  //


  return (
    <div>
      <Navigation />
      
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path='/dashboard' component={Dashboard}/>
        <PrivateRoute exact path="/search" component={Search}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, {setLoggedState})(App);
