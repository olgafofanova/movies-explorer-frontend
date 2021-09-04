import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import Logo from '../Logo/Logo';
import ErrorOutput from '../ErrorOutput/ErrorOutput';

function Register({ onRegister, isErr }) {

  const [registerData, setRegisterData] = useState({
    name:'',
    email: '',
    password: '',
  });

// поле было редактировано
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [nameError, setNameError] = useState('Имя не может быть пустым');
  const [emailError, setEmailError] = useState('Email не может быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');

  const [validForm, setValidForm] = useState(false);
  
  useEffect(() => {
    if (nameError || passwordError || emailError) {
      setValidForm(false)
    } else {
      setValidForm(true)
    }
  }, [emailError, passwordError, nameError]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name' :
        setNameDirty(true);
        break;
      case 'email' :
        setEmailDirty(true);
        break;
      case 'password' :
        setPasswordDirty(true);
        break;
      default:
          //do nothing;
          break;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });

    switch (e.target.name) {
      case 'name' :
        if (!e.target.value) {
            setNameError("Имя не может быть пустым");
        } else if (e.target.value.length > 30) {  
            setNameError("Имя не может содержать больше 30 символов");
        } else if (e.target.value.length < 2) {
            setNameError("Имя не может содержать меньше 2 символов");
        } else {
            setNameError("");
        }
          break;
      case 'email' :
        const reg = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
        if (!reg.test(String(e.target.value).toLowerCase())) {
            setEmailError('Неправильный формат email')
        } else {
            setEmailError('')
        }
          break;
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
          break;
      default:
          //do nothing;
          break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(registerData);
  };

  return(
        <div className="register">
          <div className="register__container">
            <Logo />
          <h2 className="register__header">
              Добро пожаловать!
          </h2>
          <form className="register__form" onSubmit={handleSubmit}>
            <fieldset className="register__fieldset"> 
            <label className = "register__field">
                Имя
                <input 
                  type="text"       
                  className="register__input register__input_type_username" 
                  id="register-username" 
                  name="name" 
                  placeholder=""  
                  required 
                  minLength="2" 
                  maxLength="40" 
                  onChange={handleChange} 
                  value={registerData.name || ''} 
                  onBlur={e => blurHandler(e)}
                />
                <span className={`register__input-error register-username-error ${ nameDirty && nameError ? '' : 'register__input-error_hidden'}`} >{ nameError}</span> 
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
                  onChange={handleChange} 
                  value={registerData.email || ''}
                  onBlur={e => blurHandler(e)} 
                />
                <span className={`register__input-error register-email-error ${ emailDirty && emailError ? '' : 'register__input-error_hidden'}`} >{ emailError} </span> 
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
                  onChange={handleChange} 
                  value={registerData.password || ''} 
                  onBlur={e => blurHandler(e)}
                />
                <span className={`register__input-error register-password-error ${ passwordDirty && passwordError ? '' : 'register__input-error_hidden'}`} >{ passwordError }</span> 
              </label> 
            </fieldset>  
            <ErrorOutput  isErr={ isErr } />        
            <button type="submit" disabled={!validForm} className={`register__button-submit ${ validForm ? '' : 'register__button-submit_inactive'}`} >Зарегистрироваться</button>
          </form>
            <span className="register__link">Уже зарегистрированы? 
              <Link to="signin" className="register__link register__link-accent">Войти</Link>
            </span> 
          </div>
        </div>
  )
}

export default Register;