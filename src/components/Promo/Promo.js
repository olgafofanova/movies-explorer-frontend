import React from 'react';
import './Promo.css';
import Header from '../Header/Header';

function Promo({loggedIn}) {
    return ( 
        <section className="promo">
          <Header loggedIn={loggedIn}/>
          <div className="promo__container">
            <h2  className="promo__title">
              Учебный проект студента факультета Веб-разработки.
            </h2>
          </div>
        </section>
    );
}

export default Promo;