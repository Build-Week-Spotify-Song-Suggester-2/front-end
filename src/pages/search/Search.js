import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import "./styles.search.scss";
import { fetchSearchSpotify } from '../../redux/actions'
import { connect } from 'react-redux'

// TO RESET AFTER SUBMIT
const initialFormState = {
  artist: "",
  title: "",
}

function Search(props) {
  const [formState, setFormState] = useState(initialFormState);
  const [searchList, setSearchList] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();

  // SPOTIFY API GET
    const encodedValues = encodeURI(
      `search?q=${formState.artist} ${formState.title}&type=track,artist`
    );
    props.fetchSearchSpotify(encodedValues);
  // -------------------------------------

    setFormState(initialFormState)
  };

  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };

    setFormState(newFormData);
  };

  useEffect(() => {
    const getList = () => {
      axiosWithAuth()
        .get("https://spotify-song-suggester-bw.herokuapp.com/api/songs")
        .then((response) => {
          setSearchList(response.data);
          console.log(response);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getList();
  }, []);

  return (
    <form className="search" onSubmit={formSubmit}>
      <h1>Search</h1>
      <label>
        Artist
        <input
          type="text"
          name="artist"
          placeholder="artist"
          value={formState.artist}
          onChange={inputChange}
        />
      </label>
      <label>
        Title
        <input
          type="text"
          name="title"
          placeholder="title"
          value={formState.title}
          onChange={inputChange}
        />
      </label>
      <button className="searchButton">Search</button>
      <div>Don't have an account?</div>
      <Link to={"/register"}>
        <div>Create Account</div>
      </Link>

      <pre>{JSON.stringify(searchList)}</pre>
    </form>
  );
}

export default connect(null, {fetchSearchSpotify})(Search)