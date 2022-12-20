import React, { useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerValidationSchema } from "./UserValidationSchemas";
import { register, isUserAuth } from "../../API";
import { Form, Col } from "react-bootstrap";
import { Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Signup = () => {
  const navigate = useNavigate();
  const methods = useForm<IUser>({
    mode: "onChange",
    resolver: yupResolver(registerValidationSchema),
  });

  const [msg, setMSG] = useState("");
  const registerUser = (data: IUser) => {
    register(data).then((regInfo) => setMSG(regInfo.data.message));
  };

  useEffect(() => {
    isUserAuth().then((res) => (res.data.isLoggedIn ? navigate("/") : null));
  }, []);

  return (
    <div id="singup-form">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(registerUser)}>
          <Col>
            <Form.Group className="form-group">
              <Form.Label>User Name</Form.Label>
              <Controller
                name="username"
                defaultValue=""
                render={({ field }) => (
                  <Form.Control {...field} type="text" aria-label="username" />
                )}
              />
              <ErrorMessage
                className="error-text"
                errors={methods.formState.errors}
                name="username"
                as="p"
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label>Email</Form.Label>
              <Controller
                name="email"
                defaultValue=""
                render={({ field }) => (
                  <Form.Control {...field} type="text" aria-label="email" />
                )}
              />
              <ErrorMessage
                className="error-text"
                errors={methods.formState.errors}
                name="email"
                as="p"
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label>Password</Form.Label>
              <Controller
                name="password"
                defaultValue=""
                render={({ field }) => (
                  <Form.Control {...field} type="text" aria-label="password" />
                )}
              />
              <ErrorMessage
                className="error-text"
                errors={methods.formState.errors}
                name="password"
                as="p"
              />
            </Form.Group>
          </Col>
          {msg && <h4>{msg}</h4>}
          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Signup;
//
//
