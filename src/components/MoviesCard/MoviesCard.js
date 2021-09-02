import React from 'react';
import './MoviesCard.css';
import img from '../../images/pic.png';
import { config } from '../../utils/config';

function MoviesCard ({ card, onCardLike, isLiked, classNameButtonLike }) {

  const baseUrlImage = config.baseUrlImage;

  const duration = (
    Math.floor (card.duration / 60) + 'ч ' + (card.duration % 60) + 'м' 
  )

    const handleLikeClick = () => {
      onCardLike(card); 
      };

    return ( 
<article className="movies-card">
  <a className="movies-card__trailer-link" href={card.trailerLink} target="_blank">
  <img 
  className="movies-card__img" 
  src={card.image} //{ baseUrlImage + card.image.url } 
  />  
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
    className={`movies-card__like ${classNameButtonLike} ${isLiked ? 'movies-card__like_isLike' : ''}`}
    type="button" 
    onClick={handleLikeClick}
  >
  </button>
</div> 

</article>
    );
}

export default MoviesCard ;