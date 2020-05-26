import React, { useState } from "react"
import { Link } from "react-router-dom"



export default function Search() {
  
    const [formState, setFormState] = useState({
      artist: "",
      title: ""
    });
  
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

  return (
    
 
    <form formSubmit={formSubmit}>
    <h1>Search</h1>
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
      <button>Search</button>
      <br></br>
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



