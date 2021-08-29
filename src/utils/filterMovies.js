import React from 'react';

export const filterMovies = (cards, searchWord) => {
  return cards.filter( (card) => {
    return card.nameRU.includes(searchWord); 
  });
}

  export const filterCheckbox = (cards) => {
    return cards.filter( (card) => {
      return card.duration < 41; 
    });

};
