import React from 'react';
import './PopupMenu.css';

function PopupMenu({ onClose, isOpen, itemAccent }) {

  const popupOpened = isOpen ? 'popup_opened' : '';

  console.log(popupOpened);

    return ( 
        <section className={`popup ${popupOpened}`}>
          <div className="popup__container">
            <button type="submit" className="popup__button-close" onClick={onClose} ></button>
            <nav>
              <ul className="popup__menu">
                <li className="popup__menu-item">
                  <a className={`popup__menu-link ${ itemAccent=='main' ? 'popup__menu-link_accent' : ''}`} href="/" target="_self">
                    Главная
                  </a> 
                </li>
                <li className="popup__menu-item">
                  <a className={`popup__menu-link ${ itemAccent=='movies' ? 'popup__menu-link_accent' : ''}`} href="/movies" target="_self">
                    Фильмы
                  </a> 
                </li>
                <li className="popup__menu-item">
                  <a className={`popup__menu-link ${ itemAccent=='saved-movies' ? 'popup__menu-link_accent' : ''}`} href="/saved-movies" target="_self">
                    Сохранённые фильмы 
                  </a> 
                </li>                   
             </ul>
            </nav> 
            <a  className={`popup__button-profile ${ itemAccent=='profile' ? 'popup__button-profile_accent' : ''}`} href="/profile" target="_self">
              Аккаунт
            </a> 
          </div> 
        </section>
    );
}

export default PopupMenu;