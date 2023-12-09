import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__content'>
                <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className='footer__container'>
                    <div className='footer__link-box'>
                        <a href='https://practicum.yandex.ru/' className='footer__link' target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a>
                        <a href='https://github.com/vladelisabeta' className='footer__link' target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                    <p className='footer__copyright'>vladelisabeta&copy;2023</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;