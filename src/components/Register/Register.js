import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Register.css';
import Logo from '../Logo/Logo';

function Register() {
    return(
        <div className="register">
          <div className="register__container">
            <Logo />
          <h2 className="register__header">
              Добро пожаловать!
          </h2>
          <form className="register__form">
            <fieldset className="register__fieldset"> 
            <label className = "register__field">
                Имя
                <input 
                type="text"       
                className="register__input register__input_type_username" 
                id="register-username" 
                name="username" 
                placeholder=""  
                required 
                minLength="2" 
                maxLength="40" 
                />
                <span className="register__input-error register-username-error"> </span> 
              </label>          
              <label className = "register__field">
                E-mail
                <input 
                type="text"       
                className="register__input register__input_type_email" 
                id="register-email" 
                name="email" 
                placeholder=""  
                required 
                minLength="2" 
                maxLength="40" 
                />
                <span className="register__input-error register-email-error"> </span> 
              </label> 
              <label className="register__field">
              Пароль
              <input 
                type="password" 
                className="register__input register__input_type_password" 
                id="register-password" 
                name="password" 
                placeholder="" 
                required 
                minLength="2" 
                maxLength="200" 
                />
                <span className="register__input-error register-password-error"> </span> 
              </label> 
            </fieldset>          
            <button type="submit" className="register__button-submit">Зарегистрироваться</button>
          </form>
            <span className="register__link">Уже зарегистрированы? 
            <Link to="signup" className="register__link register__link-accent">Войти</Link>
            </span> 
          </div>
        </div>
    )
}

export default Register;