import React, { useState } from 'react';
import axios from 'axios';  
import { useNavigate } from 'react-router-dom';
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';
import sampleImage from '../images/frame.jpg'; 

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { name, email, password, } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const { data } = await axios.post('https://boengkosapps-039320043b7f.herokuapp.com/api/signup', {
        name: name,
        email: email,
        password: password
      });
  
      console.log(data);
  
      if (data.success === true) {
        setValues({ name: '', email: '', password: '' });
        toastr.success('Signup berhasil');
  
        // Simpan token dan userId di localStorage jika diperlukan
        localStorage.setItem('token', data.token); // Pastikan token disimpan
        localStorage.setItem('userId', data.data._id);
  
        navigate('/login');
      } else {
        toastr.error('Signup gagal');
      }
    } catch (error) {
      console.log(error);
      toastr.error('Signup gagal. Silakan coba lagi.');
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

          <form onSubmit={handleSubmit}>
            <div className="form-group-register">
              <input
                type="text"
                className="form-control-register"
                id="nama"
                value={name}
                onChange={handleChange('name')}
                placeholder="Nama"
              />
            </div>

            <div className="form-group-register">
              <input
                type="text"
                className="form-control"
                id="username"
                value={email}
                onChange={handleChange('email')}
                placeholder="Username"
              />
            </div>

            <div className="form-group-register">
              <input
                type="password"
                className="form-control-register"
                id="password"
                value={password}
                onChange={handleChange('password')}
                placeholder="Password"
              />
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
