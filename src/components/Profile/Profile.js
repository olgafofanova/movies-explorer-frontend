import React, {useState, useEffect} from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';
import PopupMenu from '../PopupMenu/PopupMenu';

function Profile({loggedIn, onCollMenuClick, isPopupMenuOpen, closePopupMenu}) {

    return ( 
        <>
          <Header loggedIn={loggedIn} onCollMenuClick={onCollMenuClick}/>
          <div className="profile">
            <div className="profile__container">
              <h2 className="profile__header">
                Привет, Ольга!
              </h2>
              <div className="profile__info">
                <div className="profile__info-line">
                  <span className="profile__info-text">
                     Имя
                  </span>
                  <span className="profile__info-text">
                     Ольга
                  </span>
                </div> 
                <div className="profile__info-line">
                  <span className="profile__info-text">
                  E-mail
                  </span>
                  <span className="profile__info-text">
                  pochta@yandex.ru
                  </span>
                </div> 
                <button type="submit" className="profile__button-edit">Редактировать</button>
              </div>
              <form className="profile__form  profile__hide">
                <fieldset className="profile__fieldset">          
                  <label className = "profile__field">
                    Имя
                  <input 
                    type="text"       
                    className="profile__input profile__input_type_username" 
                    id="profile-username" 
                    name="username" 
                    placeholder=""  
                    required 
                    minLength="2" 
                    maxLength="40" 
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
                    minLength="2" 
                    maxLength="200" 
                  />
                  <span className="profile__input-error profile-password-error"></span> 
                  </label> 
                </fieldset>          
                <button type="submit" className="profile__button-submit">Сохранить</button>
              </form>
              <Link to="/" className="profile__link">Выйти из аккаунта</Link>
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