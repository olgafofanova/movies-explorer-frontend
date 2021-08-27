
import { config } from './config.js';
const BASE_URL=config.baseUrlMain;
const CONFIG_HEADERS=config.headers;



export const filterMovies = (cards, searchWord) => {
  return cards.filter( (card) => {
    return card.nameRU.includes(searchWord); 
  });
};
