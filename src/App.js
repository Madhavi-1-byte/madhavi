import React from "react";
import "./index.css";

function LoginForm() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="avatar">
          <img
            src="https://via.placeholder.com/60"
            alt="Avatar"
            className="avatar-img"
          />
        </div>
        <h2>LOGIN</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">
              <i className="fa fa-user"></i>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">
              <i className="fa fa-lock"></i>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button type="submit" className="login-btn">
            LOGIN
          </button>
        </form>
        <p className="forgot-link">
          <a href="/">Forgot Username / Password?</a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
