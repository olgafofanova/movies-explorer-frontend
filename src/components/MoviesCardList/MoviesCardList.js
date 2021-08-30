import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import NotFound from '../NotFound/NotFound';

function MoviesCardList ({cards, onCardLike}) {

    return ( 
        <section className="movies-cardlist">   
        <div className="movies-cardlist_card-container">   
        {cards.map((card) => { 
                            return <MoviesCard 
                                    key={card.id} 
                                    card={card} 
                                    onCardLike = {onCardLike} 
                                />}
                            ) 
                } 
            </div>
            <NotFound  isHidden={ cards.length > 0 }/>
        </section>

    );
}

export default MoviesCardList ;