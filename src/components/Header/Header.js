import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../images/logo__COLOR_green.svg'

function Header() {
    return (
        <header className='header'>
            <div className='header__box'>
                <Link to='/' className='header__link-logo'>
                    <img className='header__logo' src={logo} alt='зеленое кольцо - лого проекта'></img>
                </Link>
                <div className='header__link-box'>
                    <Link to='/signup' className='header__signup-link'>Регистрация</Link>
                    <Link to='/signin' className='header__login-button'>Войти</Link>
                </div>
            </div>
        </header>
    )
}

export default Header; 