import React, {useState, useEffect} from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/moviesApi';
import {filterCheckbox, filterMovies} from '../../utils/filterMovies';

function SavedMovies({ onCollMenuClick, loggedIn, cardsSaved, onCardDelete, isErr }) {

  const [isFilterChecked, setIsFilterChecked] = useState(true);
  const [CardsShow, setCardsShow] = useState([]);

 useEffect(() => {
  setCardsShow(cardsSaved);
}, [ cardsSaved] );


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
        <SearchForm onCardsLoadClick={handleCardsLoad} onFilterCheckbox={handleFilterCheckbox} isFilterChecked={isFilterChecked} isListCardsSaved={true} />
        <MoviesCardList cards={ isFilterChecked ?  CardsShow : filterCheckbox(CardsShow) } cardsSaved={cardsSaved} isListCardsSaved={true} onCardDelete={onCardDelete} isErr={isErr}/>
        <Footer />
       </> 
    );
}

export default SavedMovies;