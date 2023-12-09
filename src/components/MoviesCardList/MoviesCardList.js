import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import SavedMovies from '../SavedMovies/SavedMovies';

const pathname = window.location.pathname;
const buttoneName = 'movies-card-list__button-more';
const buttonModifiedName = pathname === '/saved-movies' ? 'movies-card-list__button-more_hidden' : '';
const isHiddenButton = `${buttoneName} ${buttonModifiedName}`

function MoviesCardList() {
    return (
        <section className='movies-card-list'>
            <div className='movies-card-list__box'>
                <ul className='movies-card-list__grid'>
                    <MoviesCard buttonClass='movie-card__button-delete' />
                    <MoviesCard buttonClass='movie-card__button-delete' />
                    <MoviesCard buttonClass='movie-card__button-delete' />
                    <MoviesCard buttonClass='movie-card__button-delete' />
                    <MoviesCard buttonClass='movie-card__button-delete' />
                    <MoviesCard buttonClass='movie-card__button-delete' />
                    <MoviesCard buttonClass='movie-card__button-delete' />
                    <MoviesCard buttonClass='movie-card__button-delete' />
                    <MoviesCard buttonClass='movie-card__button-delete' />
                    <MoviesCard buttonClass='movie-card__button-delete' />
                    {/* <SavedMovies></SavedMovies>
                    <SavedMovies></SavedMovies>
                    <SavedMovies></SavedMovies> */}
                </ul>
                <div className='movies-card-list__button-box'>
                    <button type='button' className={isHiddenButton}>Ещё</button>
                </div>
            </div>

        </section>
    )
}

export default MoviesCardList;