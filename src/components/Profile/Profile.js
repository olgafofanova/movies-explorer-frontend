import React, {useState, useEffect} from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';
import PopupMenu from '../PopupMenu/PopupMenu';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function Profile({loggedIn, onCollMenuClick, isPopupMenuOpen, closePopupMenu, onLogout, onEditProfile}) {

  const currentUser = React.useContext(CurrentUserContext);
  const [isEditing, setIsEditingn] = useState(false);

  const [name, setName ] = useState(currentUser.name);


  console.log(currentUser);

  const [profileData, setProfileData] = useState({
    name: currentUser.name,
    email: currentUser.email,
  });

  console.log(profileData);
  console.log(name);

  const onEdit = () => {
    setIsEditingn(true);
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setProfileData({
        ...profileData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(profileData);
      onEditProfile(profileData);
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
                  <span className="profile__input-error profile-username-error"> </span> 
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
                  <span className="profile__input-error profile-password-error"></span> 
                  </label> 
                </fieldset>          
                <button type="submit" className="profile__button-submit">Сохранить</button>
              </form>
              <button to="/" className="profile__button-logout" onClick={onLogout}>Выйти из аккаунта</button>
            </div>    
          </div>
          <PopupMenu 
                        isOpen={isPopupMenuOpen} 
                        onClose={closePopupMenu} 
                        itemAccent='profile'
                    /> 
        </>        
    );
}

export default Profile;