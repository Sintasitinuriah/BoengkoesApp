import React, { useState } from 'react';
import axios from 'axios';  
import { useNavigate } from 'react-router-dom';
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';
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

  const navigate = useNavigate();

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

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!password) {
      setPasswordError('Password tidak boleh kosong');
      valid = false;
    } else if (!passwordRegex.test(password)) {
      setPasswordError('Password minimal 8 karakter, huruf, angka, dan karakter spesial');
      valid = false;
    } else {
      setPasswordError('');
    }

    return valid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateInputs()) {
      toastr.error('Harap periksa input Anda');
      return;
    }

    try {
      const response = await axios.post('https://boengkosapps-039320043b7f.herokuapp.com/api/signup', {
        name: nama,
        email: username,
        password: password
      });

      if (response.status === 200) {
        toastr.success('Pendaftaran berhasil! Silakan login.');
        console.log('Registration successful:', response.data);
        navigate('/login');
      } else {
        toastr.error(response.data.message || 'Pendaftaran gagal');
        setError(response.data.message || 'Pendaftaran gagal');
        setSuccess('');
      }
    } catch (error) {
      if (error.response) {
        toastr.error(error.response.data.message || 'Pendaftaran gagal');
        setError(error.response.data.message || 'Pendaftaran gagal');
      } else if (error.request) {
        toastr.error('Tidak ada respons dari server');
        setError('Tidak ada respons dari server');
      } else {
        toastr.error('Terjadi kesalahan saat mendaftar');
        setError('Terjadi kesalahan saat mendaftar');
      }
      setSuccess('');
    }
  };

  return (
    <div className="register-background">
      <div className="register-container">
        <div className="register-image">
          <img src={sampleImage} alt="Sample" />
        </div>
        <div className="container-register">
          <h1>Daftar Akun</h1>
          <p>Silahkan buat akun kamu</p>

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

          <form onSubmit={handleSubmit}>
            <div className="form-group-register">
              <input
                type="text"
                className="form-control-register"
                id="nama"
                value={nama}
                onChange={(event) => setNama(event.target.value)}
                placeholder="Nama"
              />
              {namaError && <p className="error-message">{namaError}</p>}
            </div>

            <div className="form-group-register">
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

            <div className="form-group-register">
              <input
                type="password"
                className="form-control-register"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
              />
              {passwordError && <p className="error-message">{passwordError}</p>}
            </div>

            <button type="submit" className="btn btn-primary-register">Daftar</button>
          </form>

          <p>Sudah punya akun? <a href="/login">Masuk</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
