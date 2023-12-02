import './Techs.css'

function Techs() {
    return (
        <section className='techs' id='techs'>
            <div className='techs__content'>
                <h2 className='techs__title'>Технологии</h2>
                <h3 className='techs__techs-title'>7 технологий</h3>
                <p className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className='techs__list'>
                    <li className='techs__list-box'>HTML</li>
                    <li className='techs__list-box'>CSS</li>
                    <li className='techs__list-box'>JS</li>
                    <li className='techs__list-box'>React</li>
                    <li className='techs__list-box'>Git</li>
                    <li className='techs__list-box'>Express.js</li>
                    <li className='techs__list-box'>mongoDB</li>
                </ul>
            </div>
        </section>
    )
}

export default Techs; 