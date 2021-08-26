import React, {useState, useEffect} from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import More from '../More/More';


function MoviesCardList ({cards, onCardLike}) {

    const [countCards, setcountCards] = useState(5);
    // const showCards  = months.slice(2, 5);


    return ( 
        <section className="movies-cardlist">   
        <div className="movies-cardlist_card-container">   
        {cards.map((card) => {
                            return <MoviesCard 
                                    key={card._id} 
                                    card={card} 
                                    onCardLike = {onCardLike} 
                                />}
                            ) 
                } 
            </div>
            <More />
        </section>

    );
}

export default MoviesCardList ;