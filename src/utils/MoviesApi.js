// import { BASE_URL_MOVIES_API } from './consts.js';

export class MoviesApi {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    getMovies() {
        return fetch(this._baseUrl, {
            method: 'GET',
            headers: this._headers
        })
            .then(res => this._checkResponse(res))
    }
};

// export const moviesApi = new MoviesApi({
//     baseUrl: BASE_URL_MOVIES_API,
//     headers: {
//         'Content-Type': 'application/json'
//     }
// });