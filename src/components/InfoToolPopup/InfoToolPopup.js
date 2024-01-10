import './InfoToolPopup.css'


function InfoToolPopup({ isSuccess, isOpen, onClose }) {

    const text = isSuccess ? 'Все получилось!' : 'Ничего не вышло!';

    const infoToolStatusClassName = `info-tool ${isOpen ? 'info-tool_opened' : ''}`

    return (
        <div
            className={infoToolStatusClassName}
        >
            <div className='info-tool__box'>
                <button
                    type='button'
                    className='info-tool__button-close'
                    onClick={onClose}
                />
                <p className='info-tool__text'>{text}</p>
            </div>
        </div>
    )
}

export default InfoToolPopup;