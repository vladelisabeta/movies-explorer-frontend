import './MoviesCard.css';
import { useState, useEffect } from 'react';
import { BASE_URL_MAIN_API } from '../../utils/consts';
import { MainApi } from '../../utils/MainApi';
import { movieDurationConverted } from '../../utils/consts';


function MoviesCard({ movieCard, checkIsMovieSaved, onClickRemove, onClickLike }) {
    const pathname = window.location.pathname;
    const { nameRU, trailerLink, thumbnail, duration, image } = movieCard;
    const [mainId, setMainId] = useState('');
    const [isMovieSaved, setIsMovieSaved] = useState('');

    const mainApi = new MainApi({
        baseUrl: BASE_URL_MAIN_API,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    useEffect(() => {
        setMainId(checkIsMovieSaved.id);
    }, [checkIsMovieSaved]);



    function handleMovieSave() {
        if (!isMovieSaved) {
            setIsMovieSaved(true);
            onClickLike(movieCard);
        } else {
            onClickRemove(movieCard);
            setIsMovieSaved(false);
        }
    }

    function handleMovieRemove() {
        onClickRemove(mainId)
    }


    return (
        <li className='movie-card'>
            <a className='movie-card__link' href={trailerLink}>
                <img className='movie-card__preview' src={image} alt='превью картинка фильма'></img>
            </a>
            <div className='movie-card__description-box'>
                <p className='movie-card__film-name'>{nameRU}</p>
                {pathname === '/movies' && <button className={`movie-card__button-save ${checkIsMovieSaved.isMovieSaved ? 'movie-card__button-delete' : ''}`} type='button'
                    onClick={checkIsMovieSaved.isMovieSaved ? handleMovieRemove : handleMovieSave}></button>
                }
                {pathname === '/saved-movies' && <button className={'movie-card__button-delete'} type='button' onClick={handleMovieRemove}></button>
                }
            </div>
            <div className='movie-card__time-box'>
                <p className='movie-card__film-time'>{movieDurationConverted(duration)}</p>
            </div>
        </li>
    )
}

export default MoviesCard;