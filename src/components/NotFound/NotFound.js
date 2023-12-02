import './NotFound.css'

function NotFound() {
    return (
        <div className='not-found'>
            <div className='not-found__box'>
                <p className='not-found__numbers'>404</p>
                <p className='not-found__text'>Страница не найдена</p>
            </div>
            <button className='not-found__button-back' type='button' onclick="window.history.go(-1); return false;"
            >Назад</button>
        </div>
    )
}

export default NotFound;