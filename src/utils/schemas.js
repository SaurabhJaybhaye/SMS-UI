import * as Yup from "yup";

export const signupSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().min(6).required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required(),
});
