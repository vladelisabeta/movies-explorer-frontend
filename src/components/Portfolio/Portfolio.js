import './Portfolio.css';

function Portfolio() {
    return (
        <section className='portfolio'>
            <div className='portfolio__box'>
                <h4 className='portfolio__title'>Портфолио</h4>
                <ul className='portfolio__list'>
                    <li className='portfolio__slot'>
                        <a href='https://github.com/vladelisabeta/how-to-learn' className='portfolio__link' target="_blank" rel="noopener noreferrer">Статичный сайт
                            <span class="portfolio__arrow-symbol">↗</span>
                        </a>
                    </li>
                    <li className='portfolio__slot'>
                        <a href='https://github.com/vladelisabeta/russian-travel' className='portfolio__link' target="_blank" rel="noopener noreferrer">Адаптивный сайт
                            <span class="portfolio__arrow-symbol">↗</span>
                        </a>
                    </li>
                    <li className='portfolio__slot'>
                        <a href='https://github.com/vladelisabeta/mesto-react' className='portfolio__link' target="_blank" rel="noopener noreferrer">Одностраничное приложение
                            <span class="portfolio__arrow-symbol">↗</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default Portfolio;