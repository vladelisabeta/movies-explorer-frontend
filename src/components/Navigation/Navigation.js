import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation({ onClose, isOpen }) {
    const popupStatusClassName = `navigation-menu  ${isOpen ? 'navigation-menu_opened' : ''}`

    return (
        <div className={popupStatusClassName}>
            <div className='navigation-menu__box'>
                <div className='navigation-menu__button-box'>
                    <button type='button' className='navigation-menu__button-close' onClick={onClose}></button>
                </div>
                <nav className='navigation-menu__link-box'>
                    <Link to='/' className='navigation-menu__link navigation-menu__link_main'>Главная</Link>
                    <Link to='/movies' className='navigation-menu__link'>Фильмы</Link>
                    <Link to='/saved-movies' className='navigation-menu__link'>Сохранённые фильмы</Link>
                </nav>
                <Link to='/profile' className='navigation-menu__account-box'>
                    <div className='navigation-menu__account'>Аккаунт</div>
                    <div className='navigation-menu__account-icon'></div>
                </Link>
            </div>
        </div>
    )
}

export default Navigation;