import { config } from './config.js';

class Api {
    constructor(config) {
        this.baseUrl = config.baseUrlMovies;
        this.headers = config.headers;
    }

    
    _parseResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(new Error(`Произошла ошибка со статус-кодом ${res.status}`));
    }

    getCards() {
        return fetch(`${this.baseUrl}`, {
                headers: this.headers,
                method: 'GET',
                
            })
            .then(res => this._parseResponse(res));
    }
}


// const config = {
//     baseUrlMovies: 'https://api.nomoreparties.co/beatfilm-movies',
//     headers: {
//         'Content-Type': 'application/json',
//     },
// };

const moviesApi = new Api(config);
export default moviesApi;