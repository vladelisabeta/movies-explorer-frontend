import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__content'>
                <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className='footer__container'>
                    <a href='/' className='footer__link'>Яндекс.Практикум</a>
                    <a href='/' className='footer__link'>Github</a>
                    <p className='footer__copyright'>vladelisabeta&copy;2023</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;