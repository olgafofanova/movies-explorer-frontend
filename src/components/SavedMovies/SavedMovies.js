import React, {useState, useEffect} from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/moviesApi';
import {filterCheckbox, filterMovies} from '../../utils/filterMovies';

function SavedMovies({ onCollMenuClick, loggedIn }) {

  const [cardsSaved, setCardsSaved] = useState([]);
  const [isFilterChecked, setIsFilterChecked] = useState(false);
  const [CardsShow, setCardsShow] = useState([]);

 // загрузка сохраненных карточек
const LoadSevedCards = () => {     
  moviesApi.getCards()
  .then(res => {
      setCardsSaved(res);
      setCardsShow(res);
  })
  .catch(err => {
      console.log('Ошибка при получении данных', err);
  })
};

 useEffect(() => {
    LoadSevedCards();
}, [ ] );


function handleCardsLoad(searchWord) {
  if (searchWord)  {
    setCardsShow(filterMovies(cardsSaved, searchWord));
  }
} 

function handleFilterCheckbox(event) {
  setIsFilterChecked(!isFilterChecked);
};

    return ( 
        <>
          <Header onCollMenuClick={onCollMenuClick} loggedIn={loggedIn}/>
        <SearchForm onCardsLoadClick={handleCardsLoad} onFilterCheckbox={handleFilterCheckbox} isFilterChecked={isFilterChecked}/>
        <MoviesCardList cards={ isFilterChecked ? CardsShow : filterCheckbox(CardsShow) } />
        <Footer />
       </> 
    );
}

export default SavedMovies;