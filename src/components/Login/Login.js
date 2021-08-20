import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Login.css';

import Logo from '../Logo/Logo';

function Login() {
  return(
    <div className="login">
      <div className="login__conteiner">
        <Logo />
      <h2 className="login__header">
          Рады видеть!
      </h2>
      <form className="login__form">
        <fieldset className="login__fieldset">          
          <label className = "login__field">
            E-mail
            <input 
            type="text"       
            className="login__input login__input_type_username" 
            id="login-username" 
            name="email" 
            placeholder="pochta"  
            required 
            minLength="2" 
            maxLength="40" 
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
            />
            <span className="login__input-error login-password-error"></span> 
          </label> 
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
