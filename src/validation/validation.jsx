import * as Yup from "yup";

export const validationRegisterSchema = Yup.object({
  name: Yup.string()
    .min(2, "Too short")
    .max(10, "Too long")
    .required("Name is required"),
  email: Yup.string()
    .email("Email is not valid")
    .min(6, "The email must contain min six letters")
    .required("Email is required")
    .trim()
    .matches(
      /^[a-zA-Z0-9]+[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/,
      "email is not valid"
    ),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a letter"),
});

export const validationLoginSchema = Yup.object({
  email: Yup.string()
    .email("Email is not valid")
    .min(6, "The email must contain min six letters")
    .required("Email is required")
    .trim()
    .matches(
      /^[a-zA-Z0-9]+[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/,
      "email is not valid"
    ),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a letter"),
});
