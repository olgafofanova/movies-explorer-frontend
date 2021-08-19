import React from 'react';
import './Promo.css';
import Logo from '../Logo/Logo';

function Promo() {
    return ( 
        <section className="promo">
          <div className="promo__container">
            <div className="promo__header">
              <Logo />
              <nav>
                <ul className="promo__top-menu">
                  <li className="promo__top-menu-item">
                    <a className="promo__top-menu-link" href="/signup" target="_blank">
                      Регистрация</a> 
                  </li>
                  <li className="promo__top-menu-item">
                    <a className="promo__top-menu-link" href="/signin" target="_blank">
                      Войти </a> 
                  </li>                   
                </ul>
              </nav>
            </div>    
            <h2  className="promo__title">
              Учебный проект студента факультета Веб-разработки.
            </h2>
          </div>
        </section>
    );
}

export default Promo;