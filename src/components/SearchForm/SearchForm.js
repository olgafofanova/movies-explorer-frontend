import React, {useState} from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({onCardsLoadClick, onFilterCheckbox, isFilterChecked, isListCardsSaved}) {

  const [searchWord, setSearchWord] = useState( !isListCardsSaved ? (localStorage.getItem("searchWord") || '') : '' );  
  const [err, setErr] = useState( '' ); 

  function handleChangeSearchWord(e) {
    setSearchWord(e.target.value);
    setErr('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (searchWord) {
      onCardsLoadClick(searchWord); 
    }
   else {
    setErr('Нужно ввести ключевое слово');
   }
  } 

  return ( 
      <section className="search-form">   
        <div className="search-form__container">       
        <form className="search-form__find" onSubmit={handleSubmit}>
            <label className = "search-form__block-input">
                <input 
                  type="text"       
                  className="search-form__input search-form__input_type_title" 
                  id="search-form__input" 
                  name="name" 
                  placeholder={ !err ? 'фильм':'' } 
                  minLength="1" 
                  onChange={handleChangeSearchWord} 
                  value={searchWord|| ''} 
                />
                <span className="search-form__input-error">{ err|| '' }</span> 
              </label>                
            <button type="submit" className="search-form__button-find" >Найти</button>  
          </form>
        <FilterCheckbox onFilterCheckbox={onFilterCheckbox} isFilterChecked={isFilterChecked}/>
        </div>
      </section>
  );
}

export default SearchForm;