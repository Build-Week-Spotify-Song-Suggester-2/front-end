import React, { useState, useEffect } from "react"
import axios from "axios"
import * as yup from "yup"
import registerSchema from '../../validation/register/registerSchema'
import { Link } from "react-router-dom"

const url = "https://reqres.in/api/users"

export default function Register() {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [formState, setFormState] = useState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [post, setPost] = useState([]);
  
    useEffect(() => {
      registerSchema.isValid(formState).then(valid => {
        setButtonDisabled(!valid);
      });
    }, [formState]);
  
  
    useEffect(() => {
      axios
        .post(url, formState)
        .then(res => {
          setPost(res.data); 
          
        })
        .catch(err => console.log(err.response));
    }, [formState]);
  
    const formSubmit = e => {
      e.preventDefault();
    
      axios
        .post(url, formState)
        .then((res) => {
          setPost(res.data)
          setFormState({
            firstName: "",
          })
        })
        .catch(err => console.log(err.response));
        
    };
  
    const inputChange = e => {
      e.persist();
      console.log(formState.name)
      const newFormData = {
        ...formState,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value
      };
    
      yup
        .reach(registerSchema, e.target.name)
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
        First Name
        <br></br>
            <input
              type="text"
              name="firstName"
              placeholder="first name"
              value={formState.firstName}
              onChange={inputChange}
            />
        {errors.firstName.length > 0 ? <p style={{color: "red"}} >{errors.firstName}</p> : null}
       </label>
       <br></br>
          <br></br>
          <br></br>
          <br></br> 
          <label >
        Last Name
        <br></br>
            <input
              type="text"
              name="lastName"
              placeholder="last name"
              value={formState.lastName}
              onChange={inputChange}
            />
        {errors.lastName.length > 0 ? <p style={{color: "red"}} >{errors.lastName}</p> : null}
       </label>
       <br></br>
          <br></br>
          <br></br>
          <br></br> 
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
        <label >
        Email
        <br></br>
        {errors.email.length > 0 ?  <p style={{color: "red"}}>{errors.email}</p>  : null}
            <input
              type="text"
              name="email"
              placeholder="email"
              value={formState.email}
              onChange={inputChange}
            />
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
      <label>
     Confirm Password
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
      <button disabled={buttonDisabled}>Submit</button>
      <br></br>
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
       <div>Already have an account?</div>
       <br></br>
    
       <Link to={"/login"}>
          <div>Login Here!</div>
        </Link>
     
      

    </form>
  )
  }



