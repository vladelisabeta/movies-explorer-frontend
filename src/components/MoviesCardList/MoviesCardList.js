import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import SavedMovies from '../SavedMovies/SavedMovies';

function MoviesCardList() {
    return (
        <section className='movies-card-list'>
            <div className='movies-card-list__box'>
                <ul className='movies-card-list__grid'>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    {/* <SavedMovies></SavedMovies>
                    <SavedMovies></SavedMovies>
                    <SavedMovies></SavedMovies> */}
                </ul>
                <button type='button' className='movies-card-list__button-more'>Ещё</button>
            </div>

        </section>
    )
}

export default MoviesCardList;