import './Login.css'
import logo from '../../images/black_circle_logo.svg'

function Login() {
    return (
        <section className='login'>
            <div className='login__box'>
                <a onclick="window.history.go(-1); return false;" className='login__link-logo'>
                    <img src={logo} className='login__link-logo-image'></img>
                </a>
                <h1 className='login__title'>Рады видеть!</h1>
            </div>
            <form className='form' name='login-form'>
                <label className='form__input-description'>E-mail
                    <input className='form__input'></input>
                </label>
                <label className='form__input-description'>
                    Пароль
                    <input className='form__input'></input>
                </label>
                <button type='submit' className='form__submit-button'>Войти</button>
                {/* <label className='form__input-description'>
                    <input className='form__input'></input>
                </label> */}
            </form>
            <div className='login__link-box'>
                <p className='login__link-description'>Ещё не зарегистрированы?</p>
                <a href='/' className='login__link'>Регистрация</a>
            </div>
        </section>
    )
}

export default Login;