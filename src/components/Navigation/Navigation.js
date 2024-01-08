import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation({ onClose, isOpen }) {
    const popupStatusClassName = `navigation-menu  ${isOpen ? 'navigation-menu_opened' : ''}`;
    const pathname = window.location.pathname;
    const mainMenuBoxClassName = `navigation-menu__box ${pathname === '/' ? 'navigation-menu__box_main' : null}`;
    const mainLinkClassName = `navigation-menu__link ${pathname === '/' ? 'navigation-menu__link_main' : null}`;
    const mainAccountBoxClassName = `navigation-menu__account-box ${pathname === '/' ? 'navigation-menu__account-box_main' : null}`;
    const mainAccountClassName = `navigation-menu__account ${pathname === '/' ? 'navigation-menu__account_main' : null}`

    return (
        <div className={popupStatusClassName}>
            <div className={mainMenuBoxClassName}>
                <div className='navigation-menu__button-box'>
                    <button type='button' className='navigation-menu__button-close' onClick={onClose}></button>
                </div>
                <nav className='navigation-menu__link-box'>
                    <Link to='/' className={mainLinkClassName}>Главная</Link>
                    <Link to='/movies' className={mainLinkClassName}>Фильмы</Link>
                    <Link to='/saved-movies' className={mainLinkClassName}>Сохранённые фильмы</Link>
                </nav>
                <Link to='/profile' className={mainAccountBoxClassName}>
                    <div className={mainAccountClassName}>Аккаунт</div>
                    <div className='navigation-menu__account-icon'></div>
                </Link>
            </div>
        </div>
    )
}

export default Navigation;