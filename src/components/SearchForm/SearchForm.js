import React, {useState, useEffect} from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import icon from '../../images/icon-find.png';


function SearchForm({onCardsLoadClick, onFilterCheckbox, isFilterChecked}) {

  const [searchWord, setSearchWord] = useState(''); 

  function handleChangeSearchWord(e) {
    setSearchWord(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onCardsLoadClick(searchWord);
  } 

    return ( 
      <section className="search-form">   
        <div className="search-form__container">       
        <form className="search-form__find" onSubmit={handleSubmit}>
            <label className = "">
                <input 
                type="text"       
                className="search-form__input search-form__input_type_title" 
                id="search-form__input" 
                name="name" 
                placeholder="фильм"  
                required 
                minLength="1" 
                onChange={handleChangeSearchWord} 
                value={searchWord|| ''} 
                />
                <span className="search-form__input-error search-form__input-error"> </span> 
              </label>                
            <button type="submit" className="search-form__button-find" onClick={onCardsLoadClick} >Найти</button>  
          </form>
        <FilterCheckbox onFilterCheckbox={onFilterCheckbox} isFilterChecked={isFilterChecked}/>
        </div>
      </section>
    );
}

export default SearchForm;