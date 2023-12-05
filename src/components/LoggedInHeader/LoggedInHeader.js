import './LoggedInHeader.css'
import logo from '../../images/logo__COLOR_green.svg'

function LoggedInHeader() {
    return (
        <header className='header-logged-in'>
            <img alt='зеленое кольцо - лого проекта' src={logo} className='header__logo'></img>
            <button type='button' className='header-logged-in__menu-button'></button>
        </header>
    )
}

export default LoggedInHeader;