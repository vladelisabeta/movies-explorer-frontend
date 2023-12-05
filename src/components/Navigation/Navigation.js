import './Navigation.css'

function Navigation() {
    return (
        <div className='navigation-menu navigation-menu_opened'>
            <div className='navigation-menu__button-box'>
                <button type='button' className='navigation-menu__button-close'></button>
            </div>
            <nav className='navigation-menu__link-box'>
                <a href='/' className='navigation-menu__link'>Главная</a>
                <a href='/' className='navigation-menu__link'>Фильмы</a>
                <a href='/' className='navigation-menu__link'>Сохранённые фильмы</a>
                <a className='navigation-menu__account-box' href='/'>
                    <div className='navigation-menu__account'>Аккаунт</div>
                    <div className='navigation-menu__account-icon'></div>
                </a>
            </nav>
        </div>
    )
}

export default Navigation;