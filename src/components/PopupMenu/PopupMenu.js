import React from 'react';
import './PopupMenu.css';

function PopupMenu() {
    return ( 
        <section className="popup popup_opened">
          <div className="popup__container">
            <button type="submit" className="popup__button-close"></button>
            <nav>
              <ul className="popup__menu">
                <li className="popup__menu-item">
                  <a className="popup__menu-link" href="/" target="_self">
                    Главная
                  </a> 
                </li>
                <li className="popup__menu-item">
                  <a className="popup__menu-link popup__menu-link_accent" href="/movies" target="_self">
                    Фильмы
                  </a> 
                </li>
                <li className="popup__menu-item">
                  <a className="popup__menu-link" href="/saved-movies" target="_self">
                    Сохранённые фильмы 
                  </a> 
                </li>                   
             </ul>
            </nav> 
            <a  className="popup__button-profile" href="/profile" target="_self">
              <p className="popup__button-profile__title">Аккаунт</p>
            </a> 
          </div> 
        </section>
    );
}

export default PopupMenu;