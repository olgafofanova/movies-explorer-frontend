import React from 'react';
import { NavLink } from 'react-router-dom';
import './PopupMenu.css';

function PopupMenu({ onClose, isOpen }) {

  const popupOpened = isOpen ? 'popup_opened' : '';

    return ( 
        <section className={`popup ${popupOpened}`}>
          <div className="popup__container">
            <button type="submit" className="popup__button-close" onClick={onClose} ></button>
            <nav>
              <ul className="popup__menu">
                <li className="popup__menu-item">
                <NavLink exact to="/" activeClassName="popup__menu-link_accent" className="popup__menu-link" onClick={onClose}>Главная</NavLink>
                </li>
                <li className="popup__menu-item">
                <NavLink to="/movies" activeClassName="popup__menu-link_accent" className="popup__menu-link" onClick={onClose}>Фильмы</NavLink> 
                </li>
                <li className="popup__menu-item">
                <NavLink to="/saved-movies" activeClassName="popup__menu-link_accent" className="popup__menu-link" onClick={onClose}>Сохранённые фильмы</NavLink>
                </li>                   
             </ul>
            </nav> 
            <NavLink to="/profile" activeClassName="popup__button-profile_accent" className="popup__button-profile" onClick={onClose}>Аккаунт</NavLink>
          </div> 
        </section>
    );
}

export default PopupMenu;