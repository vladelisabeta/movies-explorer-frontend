import './AboutMe.css';
import avatar from '../../images/ApplicationFrameHost_yUJnbWaIic_waifu2x_art_noise1_scale.png';

function AboutMe() {
    return (
        <section className='about-me' id='about-me'>
            <div className='about-me__container'>
                <h2 className='about-me__title'>Студент</h2>
                <div className='about-me__box'>
                    <div className='about-me__info'>
                        <h3 className='about-me__title-name'>Елизавета</h3>
                        <p className='about-me__occupation'>Студент Я.Практикум</p>
                        <p className='about-me__text'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                        <a href='https://github.com/vladelisabeta' className='about-me__github' target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                    <img src={avatar} alt='аватар студента' className='about-me__avatar' />
                </div>
            </div>
        </section>
    )
}

export default AboutMe;