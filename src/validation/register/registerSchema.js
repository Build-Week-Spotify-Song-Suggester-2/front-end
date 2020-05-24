import * as yup from 'yup'

const registerSchema = yup.object().shape({
    firstName: yup
    .string()
    .min(2, "first name must be at least 2 characters long")
    .required("Required"),
    lastName: yup
    .string()
    .min(2, "last name must be at least 2 characters long")
    .required("Required"),
    username: yup
    .string()
    .min(4, "Name must be at least 4 characters long")
    .required("Required"),
    email: yup
      .string()
      .email("Must be a valid email address")
      .required("Must include email address"),
    password: yup
      .string()
      .min(6, "Passwords must be at least 6 characters long")
      .required("Password is Required"),
  });

  export default registerSchema