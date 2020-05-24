import React, { useState, useEffect } from "react"
import * as yup from "yup"
import loginSchema from '../../validation/login/loginSchema'
import { Link } from "react-router-dom"



export default function Login() {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [formState, setFormState] = useState({
      username: "",
      password: ""
    });
    const [errors, setErrors] = useState({
        username: "",
        password: ""
    });
    
  
    useEffect(() => {
      loginSchema.isValid(formState).then(valid => {
        setButtonDisabled(!valid);
      });
    }, [formState]);
  
  
    const formSubmit = e => {
      e.preventDefault();
    }
   
  
    const inputChange = e => {
      e.persist();
      console.log(formState.name)
      const newFormData = {
        ...formState,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value
      };
    
      yup
        .reach(loginSchema, e.target.name)
        .validate(e.target.value)
        .then(valid => {
          setErrors({
            ...errors,
            [e.target.name]: ""
          });
        })
        .catch(err => {
          setErrors({
            ...errors,
            [e.target.name]: err.errors[0]
          });
        });
   
      setFormState(newFormData); 
    };

  return (
    
 
    <form formSubmit={formSubmit}>

       <label >
        Username
        <br></br>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={formState.username}
              onChange={inputChange}
            />
        {errors.username.length > 0 ? <p style={{color: "red"}} >{errors.username}</p> : null}
       </label>
       <br></br>
          <br></br>
          <br></br>
          <br></br> 
 <label>
      Password
      <br></br>
        {errors.password.length > 0 ? <p style={{color: "red"}}>{errors.password}</p> : null}
            <input
              type="password"
              name="password"
              placeholder="password"
              value={formState.password}
              onChange={inputChange}
            />
      </label>
      <br></br>
          <br></br>
          <br></br>
          <br></br> 
      <button disabled={buttonDisabled}>Login</button>
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



