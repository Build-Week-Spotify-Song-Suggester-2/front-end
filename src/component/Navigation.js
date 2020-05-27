import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.navigation.scss";
import { connect } from "react-redux";
import { setLoggedState } from "../redux/actions";
import StyledLink from "./StyledLink";

function Navigation(props) {
  const { push } = useHistory();

  return props.state.isLogged ? (
    <nav>
      <h1>Spotify Song Suggester</h1>
      <div className="links">
        <StyledLink to={"/"}>Home</StyledLink>
        <StyledLink to={"/search"}>Search</StyledLink>
        <StyledLink to={"/dashboard"}>Dashboard</StyledLink>
        <StyledLink
          onClick={(e) => {
            e.preventDefault();

            localStorage.removeItem("bwSpotifyToken");
            props.setLoggedState(false);
            push("/");
          }}
          to={"/logout"}
        >
          Logout
        </StyledLink>
      </div>
    </nav>
  ) : (
    <nav>
      <h1>Spotify Song Suggester</h1>

      <div className="links">
        <StyledLink to={"/"}>Home</StyledLink>
        <StyledLink to={"/about"}>About</StyledLink>
        <StyledLink to={"/register"}>Register</StyledLink>
        <StyledLink to={"/login"}>Login</StyledLink>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, { setLoggedState })(Navigation);
