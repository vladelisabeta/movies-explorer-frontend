import './MoviesCard.css';
import preview from '../../images/film_preview.png';
import { MainApi } from '../../utils/MainApi';
const pathname = window.location.pathname;

function MoviesCard({ handleMovieToggle }) {
    return (
        <li className='movie-card'>
            <a className='movie-card__link' href='/'>
                <img className='movie-card__preview' src={preview} alt='превью картинка фильма'></img>
            </a>
            <div className='movie-card__description-box'>
                <p className='movie-card__film-name'>33 слова о дизайне</p>
                {/* <button className='movie-card__button-save' type='button'></button> */}
                <button className={pathname === '/saved-movies' ? 'movie-card__button-delete' : 'movie-card__button-save'} type='button' onClick={handleMovieToggle}></button>
            </div>
            <div className='movie-card__time-box'>
                <p className='movie-card__film-time'>1ч 42м</p>
            </div>
        </li>
    )
}

export default MoviesCard;