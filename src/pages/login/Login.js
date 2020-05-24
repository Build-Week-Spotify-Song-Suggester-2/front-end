import React, { useState, useEffect } from "react"
import axios from "axios"
import * as yup from "yup"
import loginSchema from '../../validation/login/loginSchema'

const url = "https://reqres.in/api/users"

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
    const [post, setPost] = useState([]);
  
    useEffect(() => {
      loginSchema.isValid(formState).then(valid => {
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
            username: "",
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
            <input
              type="text"
              name="username"
              value={formState.username}
              onChange={inputChange}
            />
        {errors.username.length > 0 ? <p style={{color: "red"}} >{errors.username}</p> : null}
       </label>
 <label>
      Password
        {errors.password.length > 0 ? <p style={{color: "red"}}>{errors.password}</p> : null}
            <input
              type="password"
              name="password"
              placeholder="password"
              value={formState.password}
              onChange={inputChange}
            />
      </label>
 
       
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <button disabled={buttonDisabled}>Submit</button>

    </form>
  )
  }



