import React, { useEffect } from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute'
import { connect } from 'react-redux'
import { setLoggedState, fetchSongList } from "./redux/actions";

// COMPONENTS
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
// import Landing from "./pages/landing/Landing";
import Navigation from "./component/Navigation";
import Dashboard from './pages/dashboard/Dashboard'
import Search from './pages/search/Search'
import Collection from "./pages/dashboard/Collection";

function App(props) {

  // onRefresh, check if user is logged in
  const { isLogged } = props.state
  const { setLoggedState, fetchSongList } = props
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

  useEffect(() => {
    fetchSongList()
 }, [fetchSongList])


  return (
    <div>
      <Navigation />
    
      <Switch>
        <Route exact path="/" component={() => {window.location.href = 'https://bw-spotify-song-suggester-2-web-ui.netlify.app/'; return null; }}/>
        <Route exact path="/about" component={() => {window.location.href = 'https://bw-spotify-song-suggester-2-web-ui.netlify.app/about.html/'; return null; }}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path='/dashboard' component={Dashboard}/>
        <PrivateRoute exact path='/dashboard/collection' component={Collection}/>
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

export default connect(mapStateToProps, {setLoggedState, fetchSongList})(App);
