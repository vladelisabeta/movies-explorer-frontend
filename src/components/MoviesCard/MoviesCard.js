import './MoviesCard.css';
import { useState, useContext, useEffect } from 'react';
import preview from '../../images/film_preview.png';
import { BASE_URL_MAIN_API } from '../../utils/consts';
import { MainApi } from '../../utils/MainApi';
import { movieDurationConverted } from '../../utils/consts';
import { currentUserContext } from '../../contexts/CurrentUserContext';

function MoviesCard({ movie, checkIsMovieSaved }) {
    const pathname = window.location.pathname;
    const { nameRU, trailerLink, thumbnail, duration, image } = movie;
    const { savedMovies, setSavedMovies } = useContext(currentUserContext);
    const [mainId, setMainId] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isMovieSaved, setIsMovieSaved] = useState(false);

    console.log(savedMovies, 'savedd movies')

    const mainApi = new MainApi({
        baseUrl: BASE_URL_MAIN_API,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    useEffect(() => {
        setIsMovieSaved(checkIsMovieSaved.isMovieSaved);
        setMainId(checkIsMovieSaved.id);
    }, [checkIsMovieSaved]);


    function handleLikeMovie() {
        const jwt = localStorage.getItem('jwt');
        setIsLoading(true);
        mainApi.saveMovie(movie, jwt)
            .then((movieData) => {
                const newSavedMovies = [...savedMovies, movieData];
                setSavedMovies(newSavedMovies);
                localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
                setIsMovieSaved(true);
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    };

    function handleRemoveMovie() {
        const jwt = localStorage.getItem('jwt');
        setIsLoading(true);
        mainApi.removeMovie(mainId, jwt)
            .then(() => {
                const newSavedMovies = savedMovies.filter((movieData) => {
                    return !(movieData._id === mainId);
                });
                setSavedMovies(newSavedMovies);
                localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
                setIsMovieSaved(false);
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    };


    return (
        <li className='movie-card'>
            <a className='movie-card__link' href={trailerLink}>
                <img className='movie-card__preview' src={image} alt='превью картинка фильма'></img>
            </a>
            <div className='movie-card__description-box'>
                <p className='movie-card__film-name'>{nameRU}</p>
                {pathname === '/movies' && <button className={`movie-card__button-save ${isMovieSaved ? 'movie-card__button-delete' : ''}`} type='button'
                    onClick={isMovieSaved ? handleRemoveMovie : handleLikeMovie}></button>
                }
                {pathname === '/saved-movies' && <button className={'movie-card__button-delete'} type='button' onClick={handleRemoveMovie}></button>
                }
            </div>
            <div className='movie-card__time-box'>
                <p className='movie-card__film-time'>{movieDurationConverted(duration)}</p>
            </div>
        </li>
    )
}

export default MoviesCard;