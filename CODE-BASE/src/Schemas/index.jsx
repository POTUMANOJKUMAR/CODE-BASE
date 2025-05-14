// src/Schemas/index.js
import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});

export const registerFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
  conPass: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export const StatusScheme = yup.object().shape({
  status: yup.array().min(1, 'Select at least one status').required('Required'),
});

