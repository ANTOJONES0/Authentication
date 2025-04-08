import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import loginImage from "../assets/images/reg1.png"; // use your image path

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login/", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.access);
      navigate("/home");
    } catch (error) {
      alert("Invalid credentials");
      console.log(error);
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center login-bg">
      <div className="row w-100">
        {/* Left Side Image */}
        <div className="col-md-5 d-none d-md-flex align-items-center justify-content-center">
          <img
            src={loginImage}
            alt="Login Visual"
            className="img-fluid login-img"
          />
        </div>

        {/* Right Side Login Form */}
        <div className="col-md-7 d-flex align-items-center justify-content-center">
          <div className="login-card w-100 px-4">
            <h2 className="text-center mb-2">Login</h2>
            <p className="text-muted text-center mb-4">
              Enter your credentials to access your account
            </p>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="●●●●●●●"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="d-flex justify-content-end mb-3">
                <a href="/forgot-password" className="text-decoration-none">
                  Forgot password?
                </a>
              </div>
              <button type="submit" className="btn btn-dark w-100">
                Login
              </button>
            </form>
            <p className="mt-4 text-center">
              Don't have an account? <a href="/register">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
