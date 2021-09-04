import React from 'react';
import './Portfolio.css';
import arrow from '../../images/arrow.svg';

function Portfolio() {
    return ( 
        <section className="portfolio">
          <h2  className="portfolio__header">
            Портфолио
          </h2>
          <nav>
            <ul className="portfolio__list">
              <li className="portfolio__item">
                <p className="portfolio__text" >Статичный сайт</p>
                <a className="portfolio__link" href="https://github.com/olgafofanova/how-to-learn" target="_blank" rel="noreferrer">
                  <img className="arrow" src={arrow}  alt="стрелка"/>
                </a> 
              </li>
              <li className="portfolio__item">
                <p className="portfolio__text" >Адаптивный сайт</p>
                <a className="portfolio__link" href="https://olgafofanova.github.io/russian-travel/" target="_blank" rel="noreferrer">
                  <img className="arrow" src={arrow}  alt="стрелка"/>
                </a> 
              </li>
              <li className="portfolio__item">
                <p className="portfolio__text" >Одностраничное приложение</p>
                <a className="portfolio__link" href="https://fofanaya.nomoredomains.club/" target="_blank" rel="noreferrer">
                  <img className="arrow" src={arrow}  alt="стрелка"/>
                </a> 
              </li>
            </ul>
          </nav>
      </section>
    );
}

export default Portfolio;