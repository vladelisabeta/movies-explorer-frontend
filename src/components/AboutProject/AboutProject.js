import './AboutProject.css'

function AboutProject() {
    return (
        <section className='about-project'>
            <div className='about-project__content'>
                <h2 className='about-project__title'>О проекте
                </h2>
                <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
                <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>

                <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
                <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                <div className='about-project__time-box'>
                    <div className='about-project__time-spent-table-front'>
                        <p className='about-project__time-text-back'>1 неделя</p>
                    </div>
                    <div className='about-project__time-spent-table-back'>
                        <p className='about-project__time-text-front'>4 недели</p>
                    </div>
                    <p className='about-project__production-text'>Backend</p>
                    <p className='about-project__production-text'>Frontend</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;