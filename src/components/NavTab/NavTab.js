import './NavTab.css'

function NavTab() {
    return (
        <nav className='nav-tab'>
            <div className='nav-tab__box'>
                <a className='nav-tab__link' href='#about-me'>
                    <div className='nav-tab__link-container'>Узнать больше</div>
                </a>
            </div>
        </nav>
    )
}

export default NavTab;