import { Link } from 'react-router-dom';
import './LoggedInHeader.css'
import logo from '../../images/logo__COLOR_green.svg'
import Navigation from '../Navigation/Navigation';

function LoggedInHeader({ isOpen, onClose, onClickMenu }) {
    return (
        <header className='header-logged-in'>
            {/* <div className='header-logged-in__box'> */}
            <Link to='/' className='header__link-logo'>
                <img alt='зеленое кольцо - лого проекта' src={logo} className='header__logo'></img>
            </Link>
            <button type='button' className='header-logged-in__menu-button' onClick={onClickMenu}></button>
            <Navigation
                isOpen={isOpen}
                onClose={onClose}
            />
            {/* </div> */}
        </header>
    )
}

export default LoggedInHeader;