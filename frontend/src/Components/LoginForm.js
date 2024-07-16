import React, { useState } from 'react';
import axios from 'axios';  
import { useNavigate } from 'react-router-dom';
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';
import sampleImage from '../images/frame.jpg'; 


const Login = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');
  // const [usernameError, setUsernameError] = useState('');
  // const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  // const validateInputs = () => {
  //   let valid = true;

  //   // Validasi username
  //   if (!username) {
  //     setUsernameError('Username tidak boleh kosong');
  //     valid = false;
  //   } else {
  //     setUsernameError('');
  //   }

  //   // Validasi password
  //   const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  //   if (!password) {
  //     setPasswordError('Password tidak boleh kosong');
  //     valid = false;
  //   } else if (!passwordRegex.test(password)) {
  //     setPasswordError('Password minimal 8 karakter, huruf, angka, dan karakter spesial');
  //     valid = false;
  //   } else {
  //     setPasswordError('');
  //   }

  //   return valid;
  // };

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

    // if (!validateInputs()) {
    //   toastr.error('Harap periksa input Anda');
    //   return;
    // }

    try {
      const {data} = await axios.post('https://boengkosapps-039320043b7f.herokuapp.com/api/signin', {
        email: username,
        password: password
      });

      console.log(data)

      if (data.success === true) {
        setValues({ email: '', password: ''})
        toastr.success('Login berhasil');
        navigate('/beranda');
        // history.push('/beranda');
        // console.log('Login successful:', response.data);
      }

      //   // Simpan token di localStorage
      //   const token = response.data.token;
      //   localStorage.setItem('token', token);
      //   console.log("Token disimpan:", localStorage.getItem('token'));

      //   navigate('/beranda');
      // } else {
      //   toastr.error(response.data.message || 'Login gagal');
      //   setErrorMessage(response.data.message || 'Login gagal');
      // }
    } catch (error) {
      console.log(error);
      toastr.error(error);

      // if (error.response) {
      //   toastr.error(error.response.data.message || 'Login gagal');
      //   setErrorMessage(error.response.data.message || 'Login gagal');
      // } else if (error.request) {
      //   toastr.error('Tidak ada respons dari server');
      //   setErrorMessage('Tidak ada respons dari server');
      // } else {
      //   toastr.error('Terjadi kesalahan saat login');
      //   setErrorMessage('Terjadi kesalahan saat login');
      // }
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
