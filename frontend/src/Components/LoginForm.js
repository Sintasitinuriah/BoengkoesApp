import React, { useState } from 'react';
import axios from 'axios';  // Import Axios
import '../Login.css'; 
import sampleImage from '../images/frame.jpg'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateInputs = () => {
    let valid = true;
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
      const response = await axios.post('https://boengkosapps-039320043b7f.herokuapp.com/api/signin', {
        email: username,
        password: password
      });

      if (response.status === 200) {
        // Login successful
        console.log('Login successful:', response.data);
        // Redirect to dashboard or another page
      } else {
        // Login failed
        setErrorMessage(response.data.message || 'Login failed');
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setErrorMessage(error.response.data.message || 'Login failed');
      } else if (error.request) {
        // The request was made but no response was received
        setErrorMessage('No response received from server');
      } else {
        // Something happened in setting up the request that triggered an Error
        setErrorMessage('An error occurred while logging in');
      }
    }
  };

  return (
    <div className="login-background">
      <div className="login-wrapper">
        <div className="login-image">
          <img src={sampleImage} alt="Sample" />
        </div>
        <div className="container login-container">
          <h1>Masuk Akun</h1>
          <p>Silahkan masuk ke akun kamu</p>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <form onSubmit={handleSubmit}>
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
    </div>
  );
};

export default Login;
