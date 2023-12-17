import { Link } from 'react-router-dom';
import './Header.css'
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo__COLOR_green.svg'

function Header({ isLoggedIn, isOpen, onClose, onClickMenu }) {
    const headerLinkBoxClassName = `header__link-box  ${isLoggedIn ? 'header__link-box_hidden' : ''}`


    return (
        <header className='header'>
            <div className='header__box'>
                <Link to='/' className='header__link-logo'>
                    <img className='header__logo' src={logo} alt='зеленое кольцо - лого проекта'></img>
                </Link>
                <div className={headerLinkBoxClassName}>
                    <Link to='/signup' className='header__signup-link'>Регистрация</Link>
                    <Link to='/signin' className='header__login-button'>Войти</Link>
                </div>
                {isLoggedIn ? <button type='button' className='header__menu-button' onClick={onClickMenu}></button> : null}
                {isLoggedIn ? (<Navigation
                    isOpen={isOpen}
                    onClose={onClose}
                />) : null}
            </div>
        </header>
    )
}

export default Header; 