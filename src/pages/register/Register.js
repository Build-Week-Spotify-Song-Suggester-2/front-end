import React, { useState, useEffect } from "react";
import * as yup from "yup";
import registerSchema from "../../validation/register/registerSchema";
import { Link } from "react-router-dom";
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

// API SCHEMA
// {
// 	"username": "ltims6",
// 	"password": "1234",
// 	"first_name": "Latosha",
// 	"last_name": "Tims",
// 	"email": "ltims6@email.com"
// }

export default function Register() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { push } = useHistory()
  const [formState, setFormState] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    registerSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formState]);



  const formSubmit = (e) => {
    e.preventDefault();
    
    axiosWithAuth()
      .post('api/auth/register', formState)
      .then( res => {
        // console.log(res.data)
        push('/login')
      })
  };

  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };

    yup
      .reach(registerSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });

    setFormState(newFormData);
  };

  return (
    <form>
      <label>
        First Name
        <br></br>
        <input
          type="text"
          name="first_name"
          placeholder="first name"
          value={formState.first_name}
          onChange={inputChange}
        />
        {errors.first_name.length > 0 ? (
          <p style={{ color: "red" }}>{errors.first_name}</p>
        ) : null}
      </label>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <label>
        Last Name
        <br></br>
        <input
          type="text"
          name="last_name"
          placeholder="last name"
          value={formState.last_name}
          onChange={inputChange}
        />
        {errors.last_name.length > 0 ? (
          <p style={{ color: "red" }}>{errors.last_name}</p>
        ) : null}
      </label>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <label>
        Username
        <br></br>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={formState.username}
          onChange={inputChange}
        />
        {errors.username.length > 0 ? (
          <p style={{ color: "red" }}>{errors.username}</p>
        ) : null}
      </label>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <label>
        Email
        <br></br>
        {errors.email.length > 0 ? (
          <p style={{ color: "red" }}>{errors.email}</p>
        ) : null}
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
        {errors.password.length > 0 ? (
          <p style={{ color: "red" }}>{errors.password}</p>
        ) : null}
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
      {/* <label>
        Confirm Password
        <br></br>
        {errors.confirmPassword.length > 0 ? (
          <p style={{ color: "red" }}>{errors.confirmPassword}</p>
        ) : null}
        <input
          type="password"
          name="confirmPassword"
          placeholder="password"
          value={formState.confirmPassword}
          onChange={inputChange}
        />
      </label> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={formSubmit} disabled={buttonDisabled}>Submit</button>
      <br></br>
      <br></br>
      <br></br>
      <div>Already have an account?</div>
      <br></br>

      <Link to={"/login"}>
        <div>Login Here!</div>
      </Link>
    </form>
  );
}
