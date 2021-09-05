import React from 'react';
import './MoviesCard.css';

function MoviesCard ({ card, onCardLike, onCardDelete, isLiked, isListCardsSaved }) {

  const duration = (
    Math.floor (card.duration / 60) + 'ч ' + (card.duration % 60) + 'м' 
  )

  const handleLikeClick = () => {
    if (isListCardsSaved) {
      onCardDelete(card);
    } else if (isLiked) {
      onCardDelete(card);
    } else 
      onCardLike(card); 
  };

  return ( 
    <article className="movies-card">
      <a className="movies-card__trailer-link" href={card.trailerLink} target="_blank" rel="noreferrer">
        <img className="movies-card__img" src={card.image} alt="Постер"/>  
      </a>
      <div className="movies-card__info-container">
        <div className="movies-card__info">
          <h2 className="movies-card__name"> 
            {card.nameRU}
          </h2> 
          <p className="movies-card__duration">
            {duration}
          </p>
        </div> 
        <button 
          className={`movies-card__btn-like ${isLiked ? 'movies-card__btn-like_isLike' : ''} ${isListCardsSaved ? 'movies-card__btn-like_del' : ''}`}
          type="button" 
          onClick={handleLikeClick}
        >
        </button>
     </div> 
    </article>
  );
}

export default MoviesCard ;