import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import NotFound from '../NotFound/NotFound';

function MoviesCardList ({ cards, cardsSaved, onCardLike, onCardDelete, isListCardsSaved, isErr  }) {
 
  return ( 
    <section className="movies-cardlist">   
      <div className="movies-cardlist_card-container">   
        {cards.map((card) => { 
          return <MoviesCard 
                   key={card.movieId} 
                   card={card} 
                   onCardLike = {isListCardsSaved ? onCardDelete: onCardLike} 
                   onCardDelete = {onCardDelete}  
                   // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
                   isLiked = {cardsSaved.some(i => i.movieId === card.movieId)}
                   isListCardsSaved = {isListCardsSaved}
                 />
        }) 
        } 
      </div>
      <NotFound  isErr={ isErr } />
    </section>
  );
}

export default MoviesCardList ;