import React from 'react';
import './MoviesCard.css';
import img from '../../images/pic.png';
import { config } from '../../utils/config';

function MoviesCard ({ card, onCardLike }) {

  const baseUrlImage = config.baseUrlImage;

  const duration = (
    Math.floor (card.duration / 60) + 'ч ' + (card.duration % 60) + 'м' 
  )
    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  //const isLiked=card.likes.some(i => i._id === currentUser._id);

  // const isLiked=card.likes.some(i => i === currentUser._id);


    // Создаём переменную, которую после зададим в `className` для кнопки лайка

    // const cardLikeButtonClassName=(
    //   `card__delete-button ${isLiked ? 'element__button-like button element__button-like_active' : 'element__button-like button'}`
    // ); 


    // src={card.image } 
    // onClick={handleClick} 
    // alt={card.name} 


    function handleLikeClick() {
      onCardLike(card); 
    }

    return ( 
<article className="movies-card">
  <a className="movies-card__trailer-link" href={card.trailerLink} target="_blank">
  <img 
  className="movies-card__img" 
  src={ baseUrlImage + card.image.url } 
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
    className="movies-card__like"
    type="button" 
  >
  </button>
</div> 

</article>
    );
}

export default MoviesCard ;