import './Portfolio.css';

function Portfolio() {
    return (
        <section className='portfolio'>
            <h4 className='portfolio__title'>Портфолио</h4>
            <ul className='portfolio__list'>
                <li className='portfolio__slot'>
                    <a href='https://github.com/vladelisabeta/how-to-learn' className='portfolio__link' target="_blank" rel="noopener noreferrer">Статичный сайт
                        <button className='portfolio__arrow-button' type='button'></button>
                    </a>
                </li>
                <li className='portfolio__slot'>
                    <a href='https://github.com/vladelisabeta/russian-travel' className='portfolio__link' target="_blank" rel="noopener noreferrer">Адаптивный сайт
                        <button className='portfolio__arrow-button' type='button'></button>
                    </a>
                </li>
                <li className='portfolio__slot'>
                    <a href='https://github.com/vladelisabeta/mesto-react' className='portfolio__link' target="_blank" rel="noopener noreferrer">Одностраничное приложение
                        <button className='portfolio__arrow-button' type='button'></button>
                    </a>
                </li>
            </ul>
        </section>
    )
}
export default Portfolio;