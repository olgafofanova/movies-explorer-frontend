import React, {useState, useEffect} from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import More from '../More/More';


function MoviesCardList ({cards, onCardLike}) {

    const [countCards, setcountCards] = useState(5); 
 //   const [isFilterCheckbox, setisFilterCheckbox] = useState(5);
 const tmp = cards.slice(0, countCards);

//  {cards.slice(0, countCards).map((card) => {


    function handleMoreClick(event) {
        setcountCards( countCards + 5 );
    };

    return ( 
        <section className="movies-cardlist">   
        <div className="movies-cardlist_card-container">   
        {tmp.map((card) => {
        {/* {cards.map((card) => { */}
                            return <MoviesCard 
                                    key={card._id} 
                                    card={card} 
                                    onCardLike = {onCardLike} 
                                />}
                            ) 
                } 
            </div>
            <More  onClick={handleMoreClick}/>
        </section>

    );
}

export default MoviesCardList ;