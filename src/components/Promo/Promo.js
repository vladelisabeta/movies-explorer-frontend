import './Promo.css'
import promoImage from '../../images/promo_image_big.svg'

function Promo() {
    return (
        <section className='promo'>
            <div className='promo__content'>
                <img src={promoImage} className='promo__image' alt='планета составленная из маленьких надписей web'></img>
                <div className='promo__text-content'>
                    <h1 className='promo__title'>
                        Учебный проект студента факультета Веб-разработки.
                    </h1>
                    <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                </div>
            </div>
        </section>
    )
}

export default Promo;