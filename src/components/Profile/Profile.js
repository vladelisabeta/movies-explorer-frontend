import './Profile.css'

function Profile({ onLogOut }) {
    return (
        <section className='profile'>
            <div className='profile__box'>
                <h1 className='profile__title'>Привет, Виталий!</h1>
                <form className='profile__form'>
                    <div className='profile__input-box'>
                        <label className='profile__input-description'>Имя</label>
                        <input className='profile__input' disabled value='Виталий'></input>
                    </div>
                    <div className='profile__input-box'>
                        <label className='profile__input-description'>E-mail</label>
                        <input className='profile__input' disabled value='pochta@yandex.ru'></input>
                    </div>
                </form>
                <div className='profile__button-box'>
                    <button type='button' className='profile__edit-button'>Редактировать</button>
                    <button type='button' className='profile__logout-button' onClick={onLogOut}>Выйти из аккаунта</button>
                </div>
            </div>
        </section>
    )
}

export default Profile;