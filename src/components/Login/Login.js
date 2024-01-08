import { Link } from 'react-router-dom';
import './Login.css'
import logo from '../../images/logo__COLOR_green.svg'
import useFormValidation from '../../hooks/useFormValidation';

function Login({ onLogin }) {

    const { handleChange, validationErrors, inputValue, resetForm } = useFormValidation();

    function onSubmit(evt) {
        evt.preventDefault();
        onLogin(inputValue.email, inputValue.password);
        resetForm();
    }

    const disabledButton = !(
        validationErrors.email === '' &&
        validationErrors.password === '' || undefined
    );

    const submitButtonClassName = `form__submit-button ${disabledButton ? 'form__submit-button_disabled' : ''
        }`;

    return (
        <section className='login'>
            <div className='login__box'>
                <Link to='/' className='login__link-logo'>
                    <img src={logo} className='login__link-logo-image' alt='зеленое кольцо - лого проекта'></img>
                </Link>
                <h1 className='login__title'>Рады видеть!</h1>
            </div>
            <form className='form' name='login-form' onSubmit={onSubmit} noValidate>
                <label className='form__input-description'>E-mail
                    <input className='form__input' onChange={handleChange}
                        type='email'
                        required
                        name='email'
                        value={inputValue.email || ''}
                    ></input>
                    <span className='form__input-error' id='email-error'>{validationErrors.email}</span>
                </label>
                <label className='form__input-description'>
                    Пароль
                    <input className='form__input form__input_password' type='password' onChange={handleChange}
                        minLength='8'
                        required
                        name='password'
                        value={inputValue.password || ''}
                    ></input>
                    <span className='form__input-error' id='password-error'>{validationErrors.password}</span>
                </label>
                <button type='submit' className={submitButtonClassName}
                    disabled={disabledButton}
                >Войти</button>
            </form>
            <div className='login__link-box'>
                <p className='login__link-description'>Ещё не зарегистрированы?</p>
                <Link to='/signup' className='login__link'>Регистрация</Link>
            </div>
        </section>
    )
}

export default Login;