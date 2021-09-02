import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import NotFound from '../NotFound/NotFound';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function MoviesCardList ({cards, onCardLike, cardsSaved, isListCardsSaved, onCardDelete }) {

    const currentUser = React.useContext(CurrentUserContext);

    return ( 
        <section className="movies-cardlist">   
        <div className="movies-cardlist_card-container">   
        {cards.map((card) => { 
                            return <MoviesCard 
                                    key={card.movieId} 
                                    card={card} 
                                    onCardLike = {isListCardsSaved ? onCardDelete: onCardLike}  
                                    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
                                    isLiked = {cardsSaved.some(i => i._id === card.id)}
                                    // Изменяем стиль если это кнопка в списке сохраненных карточек
                                    classNameButtonLike = {isListCardsSaved ? 'movies-card__like_del': ''}

                                />}
                            ) 
                } 
            </div>
            <NotFound  isHidden={ cards.length > 0 }/>
        </section>

    );
}

export default MoviesCardList ;