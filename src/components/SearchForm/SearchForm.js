import './SearchForm.css'
import FormValidation from '../../hooks/FormValidation';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function SearchForm({ isLoading, showApiError, showSearchError, handleSearch }) {
    const { pathname } = useLocation();
    const { handleChange, validationErrors, inputValue, setInputValue, setValidationErrors, isValid, setIsValid, resetForm } = FormValidation();

    const handleSubmitForm = (evt) => {
        evt.preventDefault();
        isValid ? handleSearch(inputValue.searchWord) : showSearchError(true);
    };

    useEffect(() => {
        if (pathname === '/movies') {
            const storageSearchWord = localStorage.getItem('storageSearchWord');
            storageSearchWord && setInputValue({ searchWord: storageSearchWord });
            setIsValid(true);
        } else {
            setInputValue({ keyWord: '' });
        }
    }, [pathname]);

    return (
        <section className='search-form'>
            {/* <div className='search-form__box'> */}
            <form className='search-form__form' name='form-search' onSubmit={handleSubmitForm} noValidate>
                <input className='search-form__input' type='text' required min='1' maxLength='33' disabled={isLoading}
                    onChange={handleChange}
                    id='searchWord'
                    name='searchWord'
                    placeholder='Фильм'>
                </input>
                <button className='search-form__input-button' type='submit' disabled={isLoading}>
                    Найти
                </button>
            </form>
            {/* </div> */}
            {showSearchError ? <p className='search-form__error'>Ничего не найдено</p> : ''}
            {showApiError ? <p className='search-form__error'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p> : ''}
        </section>
    )
}

export default SearchForm;