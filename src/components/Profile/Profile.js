import './Profile.css';
import React, { useState, useEffect } from 'react';
import { currentUserContext } from '../../contexts/CurrentUserContext';
import FormValidation from '../../hooks/FormValidation';

function Profile({ onLogOut, onEdit }) {
    const currentUser = React.useContext(currentUserContext);
    const [isEditing, setIsEditing] = useState(false);
    const { handleChange, validationErrors, inputValue, setInputValue, setValidationErrors, isValid, setIsValid, resetForm } = FormValidation();

    function handleEditClick(evt) {
        setIsEditing(false);
        evt.preventDefault();
        console.log('click edit')
        setIsEditing(true);
    }

    useEffect(() => {
        setInputValue({
            ...inputValue,
            name: currentUser.name,
            email: currentUser.email,
        });
    }, [currentUser]);

    function handleSubmit(evt) {
        evt.preventDefault();
        // тут должнен быть код для отправки на сервер
        onEdit({
            name: inputValue.name,
            email: inputValue.email
        })
        setIsEditing(false);
        console.log('blocked save btn')
    }

    const disabledButton = validationErrors.email || validationErrors.name ||
        (currentUser.email === inputValue.email && currentUser.name === inputValue.name);

    // const isSaveButtonActive = disabledButton || (inputValue.name !== currentUser.name || inputValue.email !== currentUser.email);

    const saveButtonClassName = `profile__save-button ${disabledButton ? 'profile__save-button_disabled' : ''
        }`;


    // !validationErrors
    // && 

    return (
        <section className='profile'>
            <div className='profile__box'>
                <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
                <form className='profile__form' onSubmit={handleSubmit} noValidate>
                    <div className='profile__input-box'>
                        <label className='profile__input-description'>Имя</label>
                        <input className='profile__input' value={inputValue.name || ''}
                            name='name'
                            disabled={!isEditing}
                            onChange={handleChange}
                            minLength='3'
                        ></input>
                    </div>
                    <div className='profile__input-box'>
                        <label className='profile__input-description'>E-mail</label>
                        <input className='profile__input' value={inputValue.email || ''}
                            type='email'
                            name='email'
                            onChange={handleChange}
                            disabled={!isEditing}
                        ></input>
                    </div>
                    <div className='profile__button-box'>
                        <span className='profile__input-error' id='name-error'>{validationErrors.name || validationErrors.email}</span>
                        {isEditing ?
                            <button type='submit' className={saveButtonClassName} disabled={disabledButton}>Сохранить</button>
                            :
                            <button type='submit' className='profile__edit-button' onClick={handleEditClick}>Редактировать</button>
                        }
                        {!isEditing ?
                            <button type='button' className='profile__logout-button' onClick={onLogOut}>Выйти из аккаунта</button>
                            :
                            ''
                        }
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Profile;