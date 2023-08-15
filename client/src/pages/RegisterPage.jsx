import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

import "../style/Register.css";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/calculator");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });
  return (
    <div className="register">
      {registerErrors.map((error, i) => (
        <div key={i}>{error}</div>
      ))}
      <h1 className="h1Register">Register</h1>
      <Form onSubmit={onSubmit} className="form">
        <Form.Group className="mb-3" controlId="formsBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            {...register("username", { required: true })}
            placeholder="Enter sername"
          />
        </Form.Group>
        {errors.username && <p>Username is required</p>}
        <Form.Group className="mb-3" controlId="formsBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            {...register("email", { required: true })}
            placeholder="Enter email"
          />
        </Form.Group>
        {errors.email && <p>Email is required</p>}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            {...register("password", { required: true })}
            placeholder="Enter Password"
          />
        </Form.Group>
        {errors.password && <p>Password is required</p>}
        <button type="submit">Login</button>
      </Form>
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
}

export default RegisterPage;
