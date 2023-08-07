import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navegate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) {
      navegate("/calculator");
    }
  }, [isAuthenticated]);

  return (
    <div>
      {loginErrors.map((error, i) => (
        <div key={i}>{error}</div>
      ))}
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        {errors.email && <p>Email is required</p>}
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
        />
        {errors.password && <p>Password is required</p>}
        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
}

export default LoginPage;
