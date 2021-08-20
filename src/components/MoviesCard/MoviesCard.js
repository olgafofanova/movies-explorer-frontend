import React from 'react';
import './MoviesCard.css';
import img from '../../images/pic.png';

function MoviesCard () {
    return ( 
<article className="movies-card">
<img 
  className="movies-card__img" 
  src={img} 
/> 
<div className="movies-card__info-container">

<div className="movies-card__info">
  <h2 className="movies-card__name"> 
  Рудбой
  </h2> 
  <p className="movies-card__duration">
1ч 42м
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