import React, {useState, useEffect} from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import More from '../More/More';
import {filterCheckbox} from '../../utils/filterMovies';

function Movies({loggedIn, loading, onCardsLoadClick, onCollMenuClick, cards, cardsSaved, onCardLike, onCardDelete, isErr}) {

  const [isFilterChecked, setIsFilterChecked] = useState(true);
  const [countCardsShow, setcountCardsShow,] = useState(5); 

  const CardsShow = isFilterChecked ? cards : filterCheckbox(cards);
  
  function handleMoreClick(event) {
    setcountCardsShow( countCardsShow + 5 );
  };

  function handleFilterCheckbox(event) {
    setIsFilterChecked(!isFilterChecked);
  };

  return ( 
    <>
      <Header onCollMenuClick={onCollMenuClick} loggedIn={loggedIn}/>
      <SearchForm onCardsLoadClick={onCardsLoadClick} onFilterCheckbox={handleFilterCheckbox} isFilterChecked={isFilterChecked}/>
      {loading ? <Preloader /> :<MoviesCardList cards={CardsShow.slice(0, countCardsShow) } onCardLike={onCardLike} onCardDelete={onCardDelete} cardsSaved={cardsSaved} isErr={isErr}/>}
      <More  onClick={handleMoreClick} isHidden={ CardsShow.length < countCardsShow } />
      <Footer />
    </>        
  );
}

export default Movies;