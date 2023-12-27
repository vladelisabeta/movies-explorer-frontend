// const {
//     HTTP_STATUS_BAD_REQUEST,
//     HTTP_STATUS_INTERNAL_SERVER_ERROR,
//     HTTP_STATUS_UNAUTHORIZED,
//     HTTP_STATUS_NOT_FOUND,
//     HTTP_STATUS_CONFLICT,
//     HTTP_STATUS_FORBIDDEN,
// } = require('http2').constants;

export const BASE_URL_MAIN_API = 'https://api.movies.vladelisabeta.nomoredomainsmonster.ru';
export const BASE_URL_MOVIES_API = 'https://api.nomoreparties.co/beatfilm-movies';

export const URL_IMAGE = 'https://api.nomoreparties.co/';

export const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

export const cardsCounterShow = () => {
    const counter = { init: 12, more: 3 };
    if (window.innerWidth > 1280) {
        counter.init = 16;
        counter.more = 8;
    }

    if (window.innerWidth < 1280) {
        counter.init = 8;
        counter.more = 4;
    }
    if (window.innerWidth < 481) {
        counter.init = 5;
        counter.more = 2;
    }

    return counter;
};

export function movieDurationConverted(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
}