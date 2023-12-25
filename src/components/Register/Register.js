import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo__COLOR_green.svg';
import { useRef, useState } from 'react';
import FormValidation from '../../hooks/FormValidation';

function Register({ onRegister }) {
    // const [isDisabled, setIsDisabled] = useState(false);

    // const buttonDisabled = isValid ? setIsDisabled(true) : setIsDisabled(false);

    //  конец сбора инпутов
    const { handleChange, validationErrors, inputValue, setInputValue, setValidationErrors, isValid, setIsValid, resetForm } = FormValidation();

    // сабмит 
    function onSubmit(evt) {
        evt.preventDefault();
        onRegister(inputValue.name, inputValue.email, inputValue.password);
        // setIsDisabled(true);
        resetForm();
    }

    const disabledButton = !(
        validationErrors.email === "" &&
        validationErrors.password === "" &&
        validationErrors.name === ""
    );

    const submitButtonClassName = `form__submit-button-signup ${disabledButton ? 'form__submit-button-signup_disabled' : ''
        }`;

    return (
        <section className='login'>
            <div className='login__box login__box_signup'>
                <Link to='/' className='login__link-logo'>
                    <img src={logo} className='login__link-logo-image' alt='зеленое кольцо - лого проекта'></img>
                </Link>
                <h1 className='login__title'>Добро пожаловать!</h1>
            </div>
            <form className='form' name='registration-form' onSubmit={onSubmit} noValidate>
                <label className='form__input-description'>Имя
                    <input className='form__input' onChange={handleChange}
                        required
                        maxLength='30'
                        name='name'
                        id='name'
                        minLength='3'
                    ></input>
                    <span className='form__input-error' id='name-error'>{validationErrors.name}</span>
                </label>
                <label className='form__input-description'>
                    E-mail
                    <input className='form__input'
                        type='email'
                        required
                        id='email'
                        name='email'
                        onChange={handleChange}
                    ></input>
                    <span className='form__input-error' id='email-error'>{validationErrors.email}</span>
                </label>
                <label className='form__input-description'>Пароль
                    <input className='form__input form__input_password' type='password'
                        minLength='8'
                        required
                        name='password'
                        id='password'
                        onChange={handleChange}
                    ></input>
                    <span className='form__input-error' id='password-error'>{validationErrors.password}</span>
                </label>

                <span className='form__api-error-message'></span>
                <button type='submit' className={submitButtonClassName}
                    disabled={disabledButton}
                >Зарегистрироваться</button>
            </form>
            <div className='login__link-box'>
                <p className='login__link-description'>Уже зарегистрированы?</p>
                <Link to='/signin' className='login__link'>Войти</Link>
            </div>
        </section>
    )
}

export default Register;