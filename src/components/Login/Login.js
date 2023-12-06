import { Link } from 'react-router-dom';
import './Login.css'
import logo from '../../images/logo__COLOR_green.svg'

function Login() {
    return (
        <section className='login'>
            <div className='login__box'>
                <Link to='/' className='login__link-logo'>
                    <img src={logo} className='login__link-logo-image' alt='зеленое кольцо - лого проекта'></img>
                </Link>
                <h1 className='login__title'>Рады видеть!</h1>
            </div>
            <form className='form' name='login-form'>
                <label className='form__input-description'>E-mail
                    <input className='form__input'></input>
                </label>
                <label className='form__input-description'>
                    Пароль
                    <input className='form__input form__input_password' type='password'></input>
                </label>
                <button type='submit' className='form__submit-button'>Войти</button>
            </form>
            <div className='login__link-box'>
                <p className='login__link-description'>Ещё не зарегистрированы?</p>
                <Link to='/signup' className='login__link'>Регистрация</Link>
            </div>
        </section>
    )
}

export default Login;