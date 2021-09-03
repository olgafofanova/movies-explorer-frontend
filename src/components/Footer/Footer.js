import React from 'react';
import './Footer.css';

function Footer() {
    return ( 
      <footer className="footer">
        <p  className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__nav">
          <p className="footer__copy"> 
            &copy; {new Date().getFullYear()} 
          </p>
          <nav>
            <ul className="footer__list">
              <li className="footer__list-li">
                <a className="footer__link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
              </li>
              <li className="footer__list-li">
                <a className="footer__link" href="https://github.com/olgafofanova" target="_blank" rel="noreferrer">Github</a>
              </li>
              <li className="footer__list-li">
                <a className="footer__link" href="https://ru-ru.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
              </li>
            </ul>
          </nav>
        </div>
    </footer>
    );
}

export default Footer;