import React from 'react';
import './Techs.css';

function Techs() {
    return ( 
      <section className="techs">
        <div className="techs_container">
          <h2  className="techs__header">
            <a name="techs"></a>
              Технологии
          </h2>
          <h3  className="techs__title">
            7 технологий
          </h3>
          <p className="techs__text">
            На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте. 
          </p>  
          <ul  className="techs__list">
            <li  className="techs__list-item">
              <p  className="techs__list-text">
                HTML
              </p>
            </li>
            <li  className="techs__list-item">
              <p  className="techs__list-text">
                CSS
              </p>
            </li>
            <li  className="techs__list-item">
              <p  className="techs__list-text">
                JS
              </p>
            </li>
            <li  className="techs__list-item">
              <p  className="techs__list-text">
                React
              </p>
            </li>
            <li  className="techs__list-item">
              <p  className="techs__list-text">
                Git
              </p>
            </li>
            <li  className="techs__list-item">
              <p  className="techs__list-text">
                Express.js
              </p>
            </li>
            <li  className="techs__list-item">
              <p  className="techs__list-text">
                mongoDB
              </p>
            </li>         
          </ul>
        </div>
      </section>
    );
}

export default Techs;