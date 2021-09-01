import React, {useState, useEffect} from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Login.css';

import Logo from '../Logo/Logo';

function Login({ onLogin, isErr }) {

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onLogin(loginData);
  };


  return(
    <div className="login">
      <div className="login__container">
        <Logo />
      <h2 className="login__header">
          Рады видеть!
      </h2>
      <form className="login__form"  onSubmit={handleSubmit}>
        <fieldset className="login__fieldset">          
          <label className = "login__field">
            E-mail
            <input 
            type="text"       
            className="login__input login__input_type_username" 
            id="login-username" 
            name="email" 
            placeholder=""  
            required 
            minLength="2" 
            maxLength="40" 
            onChange={handleChange} 
            value={loginData.email || ''} 
            />
            <span className="login__input-error login-username-error"> </span> 
          </label> 
          <label className="login__field">
          Пароль
          <input 
            type="password" 
            className="login__input login__input_type_password" 
            id="login-password" 
            name="password" 
            placeholder="" 
            required 
            minLength="2" 
            maxLength="200" 
            onChange={handleChange} 
            value={loginData.password || ''} 
            />
            <span className="login__input-error login-password-error"></span> 
          </label> 
          <div className={`login__error ${isErr.isErr ? '' : 'login__error-hidden'}`}>{isErr.Message}</div>
        </fieldset>          
        <button type="submit" className="login__button-submit">Войти</button>
      </form>
        <span className="login__link">Ещё не зарегистрированы? 
        <Link to="signup" className="login__link login__link-accent">Регистрация</Link>
        </span> 
      </div>
    </div>
  )
  }

export default withRouter(Login);
