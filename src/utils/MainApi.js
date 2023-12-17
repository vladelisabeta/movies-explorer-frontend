import { BASE_URL_MAIN_API } from "./consts.js";

export class MainApi {
    constructor({ baseUrl, headers }) {
        this._headers = headers
        this._baseUrl = baseUrl
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    // регистрация пользователя
    signUpUser(name, email, password) {
        return fetch(`${this._baseUrl}/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name, email, password
            })
        })
            .then(res => this._checkResponse(res))
    };

    // авторизация пользователя (логин)
    signInUser(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email, password
            })
        })
            .then(res => this._checkResponse(res))
    };

    checkToken(jwt) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwt}`
            },
        })
            .then(res => this._checkResponse(res))
    }

    // получить данные пользователя
    getUserProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
            .then(res => this._checkResponse(res))
    }

    // изменить профиль пользователя 
    editProfile(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify(data)
        })
            .then(res => this._checkResponse(res))
    }

    // получить сохраненные фильмы
    getSavedMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            headers: this._headers
        })
            .then(res => this._checkResponse(res))
    }

    // сохранить фильм
    saveMovie(data) {
        return fetch(`${this._baseUrl}/movies`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify(data)
        })
            .then(res => this._checkResponse(res))
    }

    // удалить из сохраненных фильмов
    removeMovie(id) {
        return fetch(`${this._baseUrl}/movies/${id}`, {
            method: "DELETE",
            headers: this._headers,
        })
            .then(res => this._checkResponse(res))
    }

    getToken() {
        this._headers.authorization = `Bearer ${localStorage.getItem('jwt')}`;
    }
}

// export const mainApi = new MainApi({
//     baseUrl: BASE_URL_MAIN_API,
//     headers: {
//         'Content-Type': 'application/json'
//     }
// });

