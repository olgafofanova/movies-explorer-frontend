import { config } from './config.js';

class Api {
    constructor(config) {
        this.baseUrl = config.baseUrlMain;
        this.baseUrlImg = config.baseUrlImage;
        this.headers = config.headers;
    }

    _parseResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(new Error(`Произошла ошибка со статус-кодом ${res.status}`));
    }

    //сохранение фильма в избранное
    postCard(data) {
       // const urlImg = `${this.baseUrlImg}` + data.image?.url;
        return fetch(`${this.baseUrl}/movies`, {
       method: 'POST',
                credentials: 'include',
                headers: this.headers,
                body: JSON.stringify(
                    data
                //   {
                //     country: data.country,
                //     director: data.director,
                //     duration: data.duration,
                //     year: data.year,
                //     description: data.description,
                //     image: urlImg,
                //     trailer: data.trailerLink,
                //     thumbnail: urlImg,
                //     movieId: String(data.id),
                //     nameRU: data.nameRU,
                //     nameEN: data.nameEN,
                // }
                ),
            })
            .then(res => this._parseResponse(res));
    }

    //удаление из избранных
    deleteCard({ _id }) {
        return fetch(`${this.baseUrl}/movies/${_id}`, {
    method: 'DELETE',
                credentials: 'include',
                headers: this.headers,
            })
            .then(res => this._parseResponse(res));
    }








    setUserInfo(data) {
        return fetch(`${this.baseUrl}/users/me`, {
     method: 'PATCH',
                credentials: 'include',
                headers: this.headers,
                body: JSON.stringify(
                    data
                ),
            })
            .then(res => this._parseResponse(res));
    }
    
    setUserAvatar(data) {
        return fetch(`${this.baseUrl}/users/me/avatar`, {
     method: 'PATCH',
                credentials: 'include',
                headers: this.headers,
                body: JSON.stringify(
                    data
                ),
            })
            .then(res => this._parseResponse(res));
    }

    getUser() {
        return fetch(`${this.baseUrl}/users/me`, {
                headers: this.headers,
                method: 'GET',
                credentials: 'include',
            })
            .then(res => this._parseResponse(res));
    }

    getCards() {
        return fetch(`${this.baseUrl}/movies`, {
                headers: this.headers,
                method: 'GET',
                credentials: 'include',
            })
            .then(res => this._parseResponse(res));
    }



    changeLikeCardStatus({ _id, noIsLiked }) {
        if (noIsLiked){
           return fetch(`${this.baseUrl}/cards/${_id}/likes`, {
        method: 'PUT',
                credentials: 'include',
                headers: this.headers
            })
            .then(res => this._parseResponse(res))   
        } else {
            return fetch(`${this.baseUrl}/cards/${_id}/likes`, {
         method: 'DELETE',
                credentials: 'include',
                headers: this.headers
            })
            .then(res => this._parseResponse(res));   
        }
    }
}

const api = new Api(config);
export default api;