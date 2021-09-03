import React from 'react';
import { config } from './config.js';

export const filterMovies = (cards, searchWord) => {
  return cards.filter( (card) => {
   // return card.nameRU.includes(searchWord); 
   return (
    card.description?.toLowerCase().includes(searchWord.toLowerCase()) ||
    card.director?.toLowerCase().includes(searchWord.toLowerCase()) ||
    card.nameEN?.toLowerCase().includes(searchWord.toLowerCase()) ||
    card.nameRU?.toLowerCase().includes(searchWord.toLowerCase())
);
  });
}


export const formatMovies = (cards) => {
  return cards.map( (item) => {
    return    {
      country: (item.country ? item.country : ' '), 
      director: (item.director ? item.director : ' '), 
      duration: (item.duration ? item.duration : ' '), 
      year: (item.year ? item.year : ' '), 
      description: (item.description ? item.description : ' '),
      image: config.baseUrlImage + item.image.url,
      trailer: (item.trailerLink ? item.trailerLink : 'https://bentizol.ru/assets/file-storage/images/blog-1_0.jpg'),
      thumbnail: config.baseUrlImage + item.image.url,
      movieId: String(item.id),
      nameRU: (item.nameRU ? item.nameRU : ' '),
      nameEN: (item.nameEN ? item.nameEN : ' '),
  } ; 
  });
}

export const filterOvner = (cards, userId) => {
  return cards.filter( (card) => {
    return card.owner===userId; 
  });
}
  export const filterCheckbox = (cards) => {
    return cards.filter( (card) => {
      return card.duration < 41; 
    });

};
