import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo__COLOR_green.svg'

function Register() {
    return (
        <section className='login'>
            <div className='login__box login__box_signup'>
                <Link to='/' className='login__link-logo'>
                    <img src={logo} className='login__link-logo-image' alt='зеленое кольцо - лого проекта'></img>
                </Link>
                <h1 className='login__title'>Добро пожаловать!</h1>
            </div>
            <form className='form' name='registration-form'>
                <label className='form__input-description'>Имя
                    <input className='form__input'></input>
                </label>
                <label className='form__input-description'>
                    E-mail
                    <input className='form__input'></input>
                </label>
                <label className='form__input-description'>Пароль
                    <input className='form__input form__input_password' type='password'></input>
                </label>
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