import React, {useState, useEffect} from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import PopupMenu from '../PopupMenu/PopupMenu';

function Movies({loggedIn, onCardsLoadClick, cards, onCardLike, loading}) {

  const [isPopupMenuOpen, setIsPopupMenuOpen] = useState(false);
  const [isFilterChecked, setIsFilterChecked] = useState(false);

  function handleCollMenuClick(event) {
    setIsPopupMenuOpen(true);
};

function closePopupMenu() {
  setIsPopupMenuOpen(false);
};

function handleFilterCheckbox(event) {
  setIsFilterChecked(!isFilterChecked);
};

    return ( 
      <>
        <Header onCollMenuClick={handleCollMenuClick} loggedIn={loggedIn}/>
        <SearchForm onCardsLoadClick={onCardsLoadClick} onFilterCheckbox={handleFilterCheckbox} isFilterChecked={isFilterChecked}/>
        {loading ? <Preloader /> :<MoviesCardList cards={cards} onCardLike={onCardLike} isFilterChecked={isFilterChecked}/>}
        <PopupMenu 
                        isOpen={isPopupMenuOpen} 
                        onClose={closePopupMenu} 
                        itemAccent='movies'
                    /> 
      </>        
    );
}

export default Movies;