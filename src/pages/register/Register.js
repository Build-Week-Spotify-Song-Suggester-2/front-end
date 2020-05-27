import React, { useState, useEffect } from "react";
import * as yup from "yup";
import registerSchema from "../../validation/register/registerSchema";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import "./styles.register.scss";

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
  const { push } = useHistory();
  const [formState, setFormState] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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
      .post("api/auth/register", formState)
      .then((res) => {
        // console.log(res.data)
        push("/login");
      });
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

    <form className="registerForm">
      <h2>Register</h2>
      <label>
        {/* First Name */}
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={formState.first_name}
          onChange={inputChange}
        />
        {errors.first_name.length > 0 ? (
        <p style={{ color: "red" }}>{errors.first_name}</p>
        ) : null}
      </label>

      <label>
        {/* Last Name */}
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={formState.last_name}
          onChange={inputChange}
        />
        {errors.last_name.length > 0 ? (
          <p style={{ color: "red" }}>{errors.last_name}</p>
        ) : null}
      </label>

      <label>
        {/* Username */}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formState.username}
          onChange={inputChange}
        />
        {errors.username.length > 0 ? (
          <p style={{ color: "red" }}>{errors.username}</p>
        ) : null}
      </label>

      <label>
        {/* Email */}
        {errors.email.length > 0 ? (
          <p style={{ color: "red" }}>{errors.email}</p>
        ) : null}
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formState.email}
          onChange={inputChange}
        />
      </label>

      <label>
        {/* Password */}
        {errors.password.length > 0 ? (
          <p style={{ color: "red" }}>{errors.password}</p>
        ) : null}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formState.password}
          onChange={inputChange}
        />
      </label>


      {/* <label>
        Confirm Password
        {errors.confirmPassword.length > 0 ? (
          <p style={{ color: "red" }}>{errors.confirmPassword}</p>
        ) : null}
        <input
          type="password"
          name="confirmPassword"
          placeholder="confirm password"
          value={formState.confirmPassword}
          onChange={inputChange}
        />
      </label> */}

      <button onClick={formSubmit} disabled={buttonDisabled}>
        Submit
      </button>

      <div className="ctaAct">
        <div>Already have an account?</div>
        <Link to={"/login"}>
          <div>Login Here!</div>
        </Link>
      </div>
    </form>
  );
}
