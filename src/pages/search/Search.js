import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import './styles.search.scss'



export default function Search() {
    const [formState, setFormState] = useState({
      artist: "",
      title: ""
    });
    const [searchList, setSearchList] = useState([])

    const formSubmit = e => {
      e.preventDefault();
    }
   
    const inputChange = e => {
      e.persist();
      const newFormData = {
        ...formState,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value
      };
    
      setFormState(newFormData); 
    };

    
    useEffect(() => {
      const getList = () => {
        axiosWithAuth()
          .get('https://spotify-song-suggester-bw.herokuapp.com/api/songs')
          .then(response => {
            setSearchList(response.data);
            console.log(response);
          })
          .catch(error => {
            console.error('Server Error', error);
          });
      }
      getList();
    }, []);


  return (
    
    <form className='search' onSubmit={formSubmit}>
    <h1>Search</h1>
    <br></br>
    <br></br>
       <label >
        Artist
        <br></br>
            <input
              type="text"
              name="artist"
              placeholder="artist"
              value={formState.artist}
              onChange={inputChange}
            />
        
       </label>
       <br></br>
          <br></br>
          <br></br>
          <br></br> 
 <label>
      Title
      <br></br>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={formState.title}
              onChange={inputChange}
            />
      </label>
      <br></br>
          <br></br>
          <br></br>
          <br></br> 
      <button className='searchButton'>Search</button>
      <br></br>
      <pre>{JSON.stringify(searchList)}</pre>
          <br></br>
          <br></br>
          <br></br> 
 <div>Don't have an account?</div>
 <br></br>
          <br></br>
         
 <Link to={"/register"}>
          <div>Create Account</div>
        </Link>
        <br></br>
          <br></br>
          <br></br>
          <br></br> 
    </form>
  )
  }



