import './Register.css';
import logo from '../../images/black_circle_logo.svg'

function Register() {
    return (
        <section className='login'>
            <div className='login__box'>
                <a onclick="window.history.go(-1); return false;" className='login__link-logo'>
                    <img src={logo} className='login__link-logo-image'></img>
                </a>
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
                    <input className='form__input'></input>
                </label>
                <button type='submit' className='form__submit-button'>Зарегистрироваться</button>
            </form>
            <div className='login__link-box'>
                <p className='login__link-description'>Уже зарегистрированы?</p>
                <a href='/' className='login__link'>Войти</a>
            </div>
        </section>
    )
}

export default Register;