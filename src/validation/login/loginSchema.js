import * as yup from 'yup'

const registerSchema = yup.object().shape({
    username: yup
    .string()
    .min(4, "Name must be at least 4 characters long")
    .required("Required"),
    password: yup
    .string()
    .min(6, "Passwords must be at least 6 characters long")
    .required("Password is Required"),
  });

  export default registerSchema