import './SearchForm.css'
import useFormValidation from '../../hooks/useFormValidation';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


function SearchForm({ isLoading, showApiError, showSearchError, handleSearch, setShowSearchError }) {
    const { pathname } = useLocation();
    const { handleChange, inputValue, setInputValue, isValid, setIsValid, resetForm } = useFormValidation();

    const [needTextError, setNeedTextError] = useState(false)


    function handleSubmitForm(evt) {
        evt.preventDefault();
        if (!inputValue.searchWord || inputValue.searchWord.trim() === '') {
            setNeedTextError(true);
        } else if (isValid) {
            handleSearch(inputValue.searchWord);
            setNeedTextError(false);
        }
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
            {needTextError ? <p className='search-form__error'>Нужно ввести ключевое слово</p> : ''}
            {showSearchError ? <p className='search-form__error'>Ничего не найдено</p> : ''}
            {/* {emptyError ? <p className='search-form__error'>Введите что-нибудь</p> : ''} */}
            {showApiError ? <p className='search-form__error'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p> : ''}
        </section>
    )
}

export default SearchForm;