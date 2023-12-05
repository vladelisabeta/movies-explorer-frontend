import './SavedMovies.css';
import preview from '../../images/film_preview.png';

function SavedMovies() {
    return (
        <li className='movie-card'>
            <a className='movie-card__link' href='/'>
                <img className='movie-card__preview' src={preview} alt='превью картинка фильма'></img>
                <div className='movie-card__description-box'>
                    <p className='movie-card__film-name'>33 слова о дизайне</p>
                    <button className='movie-card__button-delete' type='button'></button>
                </div>
                <div className='movie-card__time-box'>
                    <p className='movie-card__film-time'>1ч 42м</p>
                </div>
            </a>
        </li>
    )
}

export default SavedMovies;