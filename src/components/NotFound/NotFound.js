import { useNavigate } from "react-router-dom";
import './NotFound.css'

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className='not-found'>
            <div className='not-found__box'>
                <p className='not-found__numbers'>404</p>
                <p className='not-found__text'>Страница не найдена</p>
            </div>
            <button className='not-found__button-back' type='button' onClick={() => navigate(-1)}
            >Назад</button>
        </div>
    )
}

export default NotFound;