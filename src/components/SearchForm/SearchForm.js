import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import icon from '../../images/icon-find.png';


function SearchForm() {
    return ( 
      <section className="search-form">   
        <div className="search-form__container">       
        <div className="search-form__find">
          <p className="search-form__title">фильм</p>
          <img  className="search-form__img" src={icon}  alt="Поиск"/>
        </div> 
        <FilterCheckbox />
        </div>
      </section>
    );
}

export default SearchForm;