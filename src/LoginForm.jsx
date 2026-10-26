
import React, { useRef, useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted({
      username: usernameRef.current.value,
      password: passwordRef.current.value
    });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          ref={usernameRef}
          placeholder="Enter username"
          required
        />

        <label>Password</label>
        <input
          type="password"
          ref={passwordRef}
          placeholder="Enter password"
          required
        />

        <button type="submit">Login</button>
      </form>

      {submitted && (
        <div className="result">
          <h2>Submitted Information</h2>
          <p>
            <strong>Username:</strong> {submitted.username}
          </p>
          <p>
            <strong>Password:</strong> {submitted.password}
          </p>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
