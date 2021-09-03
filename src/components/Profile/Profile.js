import React, {useState, useEffect} from 'react';
import './Profile.css';
import Header from '../Header/Header';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function Profile({loggedIn, onCollMenuClick, onLogout, onEditProfile, isErr}) {

  const currentUser = React.useContext(CurrentUserContext);
  const [profileData, setProfileData] = useState({
    name: currentUser.name,
    email: currentUser.email,
  });

  const [isEditing, setIsEditingn] = useState(false);
 
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
 
  const [validForm, setValidForm] = useState(true);
  
  useEffect(() => {
    if (nameError || emailError) {
      setValidForm(false)
    } else {
      setValidForm(true)
    }
  }, [emailError, nameError]);

  const handleChange = (e) => {
      const { name, value } = e.target;
      setProfileData({
        ...profileData,
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
            break
        case 'email' :
          const reg = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
          if (!reg.test(String(e.target.value).toLowerCase())) {
              setEmailError('Неправильный формат email')
          } else {
              setEmailError('')
          }
            break
      }
    };
  
  //переход в режим редактирования
  const onEdit = () => {
    setIsEditingn(true);
    setProfileData({
      name: currentUser.name,
      email: currentUser.email,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditProfile(profileData);
    setIsEditingn(false);
  };

  return ( 
        <>
          <Header loggedIn={loggedIn} onCollMenuClick={onCollMenuClick}/>
          <div className="profile">
            <div className="profile__container">
              <h2 className="profile__header">
                Привет, {currentUser.name}!
              </h2>
              <div className= {`profile__info ${ isEditing ? 'profile__hide' : ''}`}>
                <div className="profile__info-line">
                  <span className="profile__info-text">
                     Имя
                  </span>
                  <span className="profile__info-text">
                    {currentUser.name}
                  </span>
                </div> 
                <div className="profile__info-line">
                  <span className="profile__info-text">
                    E-mail
                  </span>
                  <span className="profile__info-text">
                    {currentUser.email}
                  </span>
                </div> 
                <button type="button" onClick={onEdit} className="profile__button-edit">Редактировать</button>
              </div>
              <form className= {`profile__form ${ isEditing ? '' : 'profile__hide'}`}  onSubmit={handleSubmit}>
                <fieldset className="profile__fieldset">          
                  <label className = "profile__field">
                    Имя
                  <input 
                    type="text"       
                    className="profile__input profile__input_type_username" 
                    id="profile-username" 
                    name="name" 
                    placeholder=""  
                    required 
                    minLength="1" 
                    onChange={handleChange} 
                    value={profileData.name || ''} 
                  />
                  <span className={`profile__input-error profile-username-error ${ nameError ? '' : 'profile__input-error_hidden'}`} >{ nameError}</span> 
                  </label> 
                  <label className="profile__field">
                    E-mail
                  <input 
                    type="email" 
                    className="profile__input profile__input_type_email" 
                    id="profile-email" 
                    name="email" 
                    placeholder="" 
                    required 
                    minLength="1" 
                    onChange={handleChange} 
                    value={profileData.email || ''} 
                  />
                  <span className={`profile__input-error profile-email-error ${ emailError ? '' : 'profile__input-error_hidden'}`} >{ emailError} </span> 
                  </label> 
                </fieldset>          
                <button type="submit" disabled={!validForm} className={`profile__button-submit ${ validForm ? '' : 'profile__button-submit_inactive'}`}>Сохранить</button>
              </form>
              <button to="/" className="profile__button-logout" onClick={onLogout}>Выйти из аккаунта</button>
            </div>    
          </div>
        </>        
    );
}

export default Profile;