import './SearchForm.css'

function SearchForm() {
    return (
        <section className='search-form'>
            {/* <div className='search-form__box'> */}
            <form className='search-form__form'>
                <input className='search-form__input' placeholder='Фильм'>
                </input>
                <button className='search-form__input-button' type='submit'>
                    Найти
                </button>
            </form>
            {/* </div> */}
        </section>
    )
}

export default SearchForm;