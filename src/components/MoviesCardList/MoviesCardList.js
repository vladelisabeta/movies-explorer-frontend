import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import SavedMovies from '../SavedMovies/SavedMovies';

function MoviesCardList() {
    return (
        <section className='movies-card-list'>
            <div className='movies-card-list__box'>
                <ul className='movies-card-list__grid'>
                    {/* <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard> */}
                    <SavedMovies></SavedMovies>
                    <SavedMovies></SavedMovies>
                    <SavedMovies></SavedMovies>
                </ul>
            </div>

        </section>
    )
}

export default MoviesCardList;