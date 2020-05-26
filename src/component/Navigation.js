import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.navigation.scss";
import { connect } from "react-redux";
import { setLoggedState } from "../redux/actions";

function Navigation(props) {
  const { push } = useHistory();
  
  return props.state.isLogged ? (
    <div className="navigation">
      <Link to={"/"}>Home</Link>
      <br></br>
      <br></br>
      <Link to={"/search"}>Search</Link>
      <br></br>
      <br></br>
      <Link to={"/dashboard"}>Dashboard</Link>
      <br></br>
      <br></br>
      <Link
        onClick={(e) => {
          e.preventDefault();

          localStorage.removeItem("bwSpotifyToken");
          props.setLoggedState(false);
          push("/");
        }}
        to={"/logout"}
      >
        Logout
      </Link>
      <br></br>
      <br></br>
    </div>
  ) : (
    <div className="navigation">
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

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, { setLoggedState })(Navigation);
