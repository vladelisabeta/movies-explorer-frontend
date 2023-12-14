import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo__COLOR_green.svg';
import { useRef, useState } from 'react';

function Register({ onRegister }) {

    const registerFormRef = useRef('');
    const [inputErrors, setInputErrors] = useState({ name: '', email: '', password: '' });
    const [apiError, setApiError] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [isValid, setIsValid] = useState(false);


    function onChange(evt) {
        const { name, value, validationMessage } = evt.target;
        // setInputValues((state) => ({
        //     ...state,
        //     [name]: value,
        // }));
        setInputErrors((state) => ({
            ...state,
            [name]: validationMessage,
        }));
        setIsValid(registerFormRef.current.checkValidity());
    }

    // сбор инпутов
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    function handleChangeName(e) {
        setName(e.target.value)
    }

    function handleChangePassword(e) {
        setPassword(e.target.value)
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value)
    }
    //  конец сбора инпутов

    // сабмит 
    function onSubmit(evt) {
        evt.preventDefault();
        onRegister(name, email, password);
        setIsDisabled(true);
    }


    return (
        <section className='login'>
            <div className='login__box login__box_signup'>
                <Link to='/' className='login__link-logo'>
                    <img src={logo} className='login__link-logo-image' alt='зеленое кольцо - лого проекта'></img>
                </Link>
                <h1 className='login__title'>Добро пожаловать!</h1>
            </div>
            <form className='form' name='registration-form' ref={registerFormRef} onSubmit={onSubmit}>
                <label className='form__input-description'>Имя
                    <input className='form__input' onChange={handleChangeName}
                        required
                        maxLength='30'></input>
                    <span className='form__input-error' id='name-error'>{inputErrors.name}</span>
                </label>
                <label className='form__input-description'>
                    E-mail
                    <input className='form__input'
                        type='email'
                        required
                        id='email'
                        onChange={handleChangeEmail}
                    ></input>
                    <span className='form__input-error' id='email-error'>{inputErrors.email}</span>
                </label>
                <label className='form__input-description'>Пароль
                    <input className='form__input form__input_password' type='password'
                        minLength='8'
                        required
                        name='password'
                        id='password'
                        onChange={handleChangePassword}
                    ></input>
                    <span className='form__input-error' id='password-error'>{inputErrors.password}</span>
                </label>

                <span className='form__api-error-message'>{apiError}</span>
                <button type='submit' className='form__submit-button-signup'>Зарегистрироваться</button>
            </form>
            <div className='login__link-box'>
                <p className='login__link-description'>Уже зарегистрированы?</p>
                <Link to='/signin' className='login__link'>Войти</Link>
            </div>
        </section>
    )
}

export default Register;