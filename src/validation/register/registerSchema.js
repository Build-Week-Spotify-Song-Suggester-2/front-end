import * as yup from "yup";

const registerSchema = yup.object().shape({
  first_name: yup
    .string()
    .min(2, "first name must be at least 2 characters long")
    .required("Required"),
  last_name: yup
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
    .required("Required"),
    password: yup
    .string()
    .required('Required')
    .min(2, 'Seems a bit short...')
    .max(10, 'We prefer insecure system, try a shorter password.'),
  confirmPassword: yup
    .string()
    .required('Required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export default registerSchema;
