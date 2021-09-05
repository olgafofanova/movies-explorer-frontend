import { config } from './config.js';

class Api {
    constructor(config) {
        this.baseUrl = config.baseUrlMovies;
        this.headers = config.headersMovies;
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

const moviesApi = new Api(config);
export default moviesApi;