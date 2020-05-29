import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import "./styles.search.scss";
import { fetchSearchSpotify } from '../../redux/actions'
import { connect } from 'react-redux'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SearchCard from './SearchCard'

// TO RESET AFTER SUBMIT
const initialFormState = {
  artist: "",
  title: "",
}

function Search(props) {
  const [formState, setFormState] = useState(initialFormState);
  const [searchList, setSearchList] = useState([]);
  const [songs, setSong] = useState([])

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
          setSong(response.data)
          setSearchList(response.data);
          console.log(response.data[2], "response");
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getList();
  }, []);

  return (
    <form className="search" onSubmit={formSubmit}>
      <h1>Search<FontAwesomeIcon className='searchIco' icon={faSearch}/></h1>
      <label>
        {/* Artist */}
        <input
          type="text"
          name="artist"
          placeholder="Artist"
          value={formState.artist}
          onChange={inputChange}
        />
      </label>
      <label>
        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formState.title}
          onChange={inputChange}
        />
      </label>
      <button className="searchButton">Search</button>
      <div>Don't have an account?</div>
      <Link to={"/register"}>
        <div>Create Account</div>
      </Link>
      
      <div>
      <br></br>
      {songs.map(song => (
         <SearchCard key={song.id} song={song} />
          ))}
          </div>
    </form>
  );
}

export default connect(null, {fetchSearchSpotify})(Search)