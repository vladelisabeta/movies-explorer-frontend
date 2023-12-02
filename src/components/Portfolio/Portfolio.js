import './Portfolio.css';

function Portfolio() {
    return (
        <section className='portfolio'>
            <h4 className='portfolio__title'>Портфолио</h4>
            <ul className='portfolio__list'>
                <li className='portfolio__slot'>
                    <a href='/' className='portfolio__link'>Статичный сайт</a>
                    <button className='portfolio__arrow-button' type='button'></button>
                </li>
                <li className='portfolio__slot'>
                    <a href='/' className='portfolio__link'>Адаптивный сайт</a>
                    <button className='portfolio__arrow-button' type='button'></button></li>
                <li className='portfolio__slot'>
                    <a href='/' className='portfolio__link'>Одностраничное приложение</a>
                    <button className='portfolio__arrow-button' type='button'></button></li>
            </ul>
        </section>
    )
}
export default Portfolio;