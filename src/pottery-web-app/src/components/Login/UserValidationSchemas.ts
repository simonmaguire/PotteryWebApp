import * as Yup from "yup";

export const registerValidationSchema = Yup.object().shape({
  email: Yup.string().email(),
  username: Yup.string(),
  password: Yup.string(),
});

export const loginValidationSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
});
