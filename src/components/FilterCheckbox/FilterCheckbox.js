import './FilterCheckbox.css'
import { useState, useEffect } from 'react';

function FilterCheckbox({ handleChangeCheckBox }) {
    const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(false);
    const pathname = window.location.pathname;


    const handleCheckChange = () => {
        setIsCheckBoxChecked(!isCheckBoxChecked);
        handleChangeCheckBox(!isCheckBoxChecked);
    };


    useEffect(() => {
        if (pathname === '/movies') {
            const storageIsMovieShort = JSON.parse(localStorage.getItem('storageIsMovieShort'));
            storageIsMovieShort && setIsCheckBoxChecked(storageIsMovieShort);
        } else {
            setIsCheckBoxChecked(false);
        }
    }, []);

    return (
        <div className="filter-checkbox">
            <div className='filter-checkbox__box'>
                <p className='filter-checkbox__switch-text'>Короткометражки</p>
                <label className="filter-checkbox__switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" className='filter-checkbox__input'
                        checked={isCheckBoxChecked}
                        onChange={handleCheckChange}
                    />
                    <span className="filter-checkbox__slider filter-checkbox__slider_round"></span>
                </label>
            </div>
        </div>
    )
}

export default FilterCheckbox;