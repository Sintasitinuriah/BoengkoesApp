import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom'; 
import '../Register.css'; 
import sampleImage from '../images/frame.jpg'; 

const Register = () => {
  const [nama, setNama] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [namaError, setNamaError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const validateInputs = () => {
    let valid = true;

    if (!nama) {
      setNamaError('Nama tidak boleh kosong');
      valid = false;
    } else {
      setNamaError('');
    }

    if (!username) {
      setUsernameError('Username tidak boleh kosong');
      valid = false;
    } else {
      setUsernameError('');
    }

    if (!password) {
      setPasswordError('Password tidak boleh kosong');
      valid = false;
    } else {
      setPasswordError('');
    }

    return valid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateInputs()) {
      return;
    }

    try {
      const response = await axios.post('https://boengkosapps-039320043b7f.herokuapp.com/api/signup', {
        name: nama,
        email: username, // Assuming username is email
        password: password
      });

      if (response.data.success) {
        setSuccess('Pendaftaran berhasil! Silakan login.');
        setError('');

        // Redirect to login page after successful registration
        navigate('/login');
      } else {
        setError(response.data.message);
        setSuccess('');
      }
    } catch (error) {
      setError('Terjadi kesalahan saat mendaftar. Silakan coba lagi.');
      setSuccess('');
      console.error('Error during registration:', error);
    }

    // Reset form fields
    setNama('');
    setUsername('');
    setPassword('');
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

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

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
              {namaError && <p className="error-message">{namaError}</p>}
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
              {usernameError && <p className="error-message">{usernameError}</p>}
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
              {passwordError && <p className="error-message">{passwordError}</p>}
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
