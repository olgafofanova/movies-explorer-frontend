import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import More from '../More/More';

function MoviesCardList () {
    return ( 
        <section className="movies-cardlist">   
        <div className="movies-cardlist_card-container">   
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            </div>
            <More />
        </section>

    );
}

export default MoviesCardList ;