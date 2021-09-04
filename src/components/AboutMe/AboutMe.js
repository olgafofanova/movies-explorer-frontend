import React from 'react';
import './AboutMe.css';
import foto from '../../images/foto.jpg';

function AboutMe() {
    return ( 
      <section className="about-me">
        <h2  className="about-me__header">
          <a name="about-me" href="/"> </a>
            Студент
        </h2>
        <div className="about-me__container">  
          <img className="about-me__foto" alt="аватар" src={foto}/>
          <div className="about-me__content">
            <div>
             <h3 className="about-me__title">Ольга</h3>
             <p className="about-me__text-accent">Фронтенд-разработчик, 38 лет</p>
             <p className="about-me__text">Я живу в городе Кирове. Работаю в ИТ компании инженером по сопровождению и тестированию ПО. 
               В команде появилась появилась потребность в еще одном фронтенд-разработчике, поэтому руководителем было принято решение отправить меня на учебу по веб-разработке. 
             </p>
            </div>
            <nav>
              <ul className="about-me__list">
                <li>
                  <a className="about-me__link" href="https://ru-ru.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
                </li>
                <li>
                  <a className="about-me__link" href="https://github.com/olgafofanova" target="_blank" rel="noreferrer">Github</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    );
}

export default AboutMe;