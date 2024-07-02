import React, { useState } from 'react';
import '../Register.css'; 
import sampleImage from '../images/frame.jpg'; 

const Register = () => {
  const [nama, setNama] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Lakukan proses registrasi di sini
    console.log('Nama:', nama);
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="register-background">
      <div className="register-container">
        <div className="login-image">
          <img src={sampleImage} alt="Sample" />
        </div>
        <div className="container">
          <h1>Daftar Akun</h1>
          <p>Silahkan buat akun kamu</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="nama"
                value={nama}
                onChange={(event) => setNama(event.target.value)}
                placeholder="Nama"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Username"
              />
            </div>

            <div className="form-group">
              
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
              />
            </div>

            <button type="submit" className="btn btn-primary">Daftar</button>
          </form>

          <p>Sudah punya akun? <a href="/login">Masuk</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
