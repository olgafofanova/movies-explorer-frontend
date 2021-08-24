import React, {useState, useEffect} from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import PopupMenu from '../PopupMenu/PopupMenu';

function SavedMovies() {
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
          <Header onCollMenuClick={handleCollMenuClick}/>
          <SearchForm />
          <MoviesCardList />
          <Footer />
          <PopupMenu 
                        isOpen={isPopupMenuOpen} 
                        onClose={closePopupMenu} 
                        itemAccent='saved-movies'
                    /> 
       </> 
    );
}

export default SavedMovies;