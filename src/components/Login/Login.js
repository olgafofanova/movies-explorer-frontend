import React, {useState, useEffect} from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Login.css';
import Logo from '../Logo/Logo';

function Login({ onLogin, isErr }) {

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  // поле было редактировано
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [emailError, setEmailError] = useState('Email не может быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');

  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    if ( passwordError || emailError) {
      setValidForm(false)
    } else {
      setValidForm(true)
    }
  }, [emailError, passwordError]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email' :
        setEmailDirty(true)
        break
      case 'password' :
        setPasswordDirty(true)
        break
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });

    switch (e.target.name) {
      case 'email' :
        const reg = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
        if (!reg.test(String(e.target.value).toLowerCase())) {
            setEmailError('Неправильный формат email')
        } else {
            setEmailError('')
        }
          break
      case 'password' :
        if (!e.target.value) {
            setPasswordError("Пароль не может быть пустым");
        } else if (e.target.value.length > 200) {  
            setPasswordError("Пароль не может содержать больше 200 символов");
        } else if (e.target.value.length < 2) {
            setPasswordError("Пароль не может содержать меньше 2 символов");
        } else {
            setPasswordError("");
        }
          break
    }
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
              onBlur={e => blurHandler(e)}
            />
            <span className={`login__input-error login-email-error ${ emailDirty && emailError ? '' : 'login__input-error_hidden'}`} > { emailError} </span> 
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
              onBlur={e => blurHandler(e)}
            />
            <span className={`login__input-error login-password-error ${ passwordDirty && passwordError ? '' : 'login__input-error_hidden'}`} > { passwordError} </span> 
          </label> 
          <div className={`login__error ${isErr.isErr ? '' : 'login__error-hidden'}`}>{isErr.Message}</div>
        </fieldset>          
        <button type="submit" disabled={!validForm} className={`login__button-submit ${ validForm ? '' : 'login__button-submit_inactive'}`} >Войти</button>
      </form>
        <span className="login__link">Ещё не зарегистрированы? 
        <Link to="signup" className="login__link login__link-accent">Регистрация</Link>
        </span> 
      </div>
    </div>
  )
}

export default withRouter(Login);
