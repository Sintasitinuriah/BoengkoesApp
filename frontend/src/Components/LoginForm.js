import React, { useState } from 'react';
import axios from 'axios';  
import { useNavigate } from 'react-router-dom';
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';
import sampleImage from '../images/frame.jpg'; 


const Login = () => {

  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const { name, username, password} = values;

  const handleChange = name => (e) => {
    setValues({...values, [name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const { data } = await axios.post('https://boengkosapps-039320043b7f.herokuapp.com/api/signin', {
        email: username,
        password: password
      });
  
      console.log(data);
  
      if (data.success === true) {
        setValues({ email: '', password: '' });
        toastr.success('Login berhasil');
  
        // Simpan token dan userId di localStorage
        localStorage.setItem('token', data.token); // Pastikan token disimpan
        localStorage.setItem('userId', data.data._id);
  
        navigate('/beranda');
      } else {
        toastr.error('Login gagal');
      }
    } catch (error) {
      console.log(error);
      toastr.error('Login gagal. Silakan coba lagi.');
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

          {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}

          <form onSubmit={handleSubmit}>
            <div className="form-group-login">
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={handleChange('username')}
                placeholder="Username"
              />
              {/* {usernameError && <p className="error-message">{usernameError}</p>} */}
            </div>

            <div className="form-group-login">
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={handleChange('password')}
                placeholder="Password"
              />
              {/* {passwordError && <p className="error-message">{passwordError}</p>} */}
            </div>

            <button onClick={handleSubmit} type="submit" className="btn btn-primary">
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
