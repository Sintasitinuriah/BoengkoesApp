import React, { useState } from 'react';
import '../Register.css'; // Pastikan Anda membuat dan menyesuaikan file Register.css

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
      <div className="container register-container">
        <h1>Daftar Akun</h1>
        <p>Silahkan buat akun kamu</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nama">Nama</label>
            <input
              type="text"
              className="form-control"
              id="nama"
              value={nama}
              onChange={(event) => setNama(event.target.value)}
            />
          </div>

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

          <button type="submit" className="btn btn-primary">Daftar</button>
        </form>

        <p>Sudah punya akun? <a href="/login">Masuk</a></p>
      </div>
    </div>
  );
};

export default Register;
