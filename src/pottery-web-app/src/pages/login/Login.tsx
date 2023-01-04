import React, { useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { isUserAuth, login } from "../../API";
import { Form, Col } from "react-bootstrap";
import { Controller } from "react-hook-form";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router";
import { ErrorMessage } from "@hookform/error-message";
import { loginValidationSchema } from "./UserValidationSchemas";

const Login = () => {
  const navigate = useNavigate();
  const methods = useForm<IUser>({
    mode: "onChange",
    resolver: yupResolver(loginValidationSchema),
  });

  const [msg, setMSG] = useState("");
  const loginUser = (data: IUser) => {
    login(data).then((res) => {
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId);
      }
      setMSG(res.data.message);
    });
  };

  useEffect(() => {
    isUserAuth().then((res) =>
      res.data.isLoggedIn ? navigate("/pottery") : null
    );
  }, [msg]);

  return (
    <div id="login-form">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(loginUser)}>
          <Col>
            <Form.Group className="form-group">
              <Form.Label>Username</Form.Label>
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
          {msg && <h4 style={{ color: "#d9a002" }}>{msg}</h4>}
          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Login;
//
//
