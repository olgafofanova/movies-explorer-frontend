import React, {useState, useEffect} from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import More from '../More/More';
import NotFound from '../NotFound/NotFound';
import {filterCheckbox} from '../../utils/filterMovies';

function MoviesCardList ({cards, onCardLike, isFilterChecked}) {

    const [countCards, setcountCards] = useState(5); 

 //const tmp = cards.slice(0, countCards);
console.log(isFilterChecked);
//  const tmp = isFilterChecked ? cards.slice(0, countCards) : filterCheckbox(cards.slice(0, countCards));
const tmp = isFilterChecked ? cards : filterCheckbox(cards);


//  {cards.slice(0, countCards).map((card) => {


    function handleMoreClick(event) {
        setcountCards( countCards + 5 );
    };

    return ( 
        <section className="movies-cardlist">   
        <div className="movies-cardlist_card-container">   
        {tmp.slice(0, countCards).map((card) => { 
        {/* {tmp.map((card) => { */}
        {/* {cards.map((card) => { */}
                            return <MoviesCard 
                                    key={card._id} 
                                    card={card} 
                                    onCardLike = {onCardLike} 
                                />}
                            ) 
                } 
            </div>
            <NotFound  isHidden={ tmp.length > 0 }/>
            <More  onClick={handleMoreClick} isHidden={ tmp.length < countCards } />
        </section>

    );
}

export default MoviesCardList ;