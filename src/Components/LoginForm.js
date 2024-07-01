import React, { useState } from 'react';
import '../Login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-background">
      <div className="container login-container">
        <h1>Masuk Akun</h1>
        <p>Silahkan masuk ke akun kamu</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Masuk
          </button>
        </form>

        <p className="forgot-password">
          Lupa Password? <a href="/forgot-password">Atur Ulang</a>
        </p>

        <p>Belum punya akun? <a href="/register">Daftar</a></p>
      </div>
    </div>
  );
};

export default Login;
