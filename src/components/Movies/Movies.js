import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import PopupMenu from '../PopupMenu/PopupMenu';

function Movies() {
    return ( 
      <>
        <Header />
        <SearchForm />
        <Preloader />
        <MoviesCardList />
        <Footer />
        <PopupMenu />
      </>        
    );
}

export default Movies;