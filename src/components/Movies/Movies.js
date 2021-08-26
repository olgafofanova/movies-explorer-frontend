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

  function handleCollMenuClick(event) {
    setIsPopupMenuOpen(true);
    console.log(isPopupMenuOpen);
};

function closePopupMenu() {
  setIsPopupMenuOpen(false);
};

    return ( 
      <>
        <Header onCollMenuClick={handleCollMenuClick} loggedIn={loggedIn}/>
        <SearchForm onCardsLoadClick={onCardsLoadClick}/>
        {loading ? <Preloader /> :<MoviesCardList cards={cards} onCardLike={onCardLike} />}
        <Footer />
        <PopupMenu 
                        isOpen={isPopupMenuOpen} 
                        onClose={closePopupMenu} 
                        itemAccent='movies'
                    /> 
      </>        
    );
}

export default Movies;