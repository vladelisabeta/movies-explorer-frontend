import './FilterCheckbox.css'

function FilterCheckbox() {
    return (
        <div className="filter-checkbox">
            <div className='filter-checkbox__box'>
                <p className='filter-checkbox__switch-text'>Короткометражки</p>
                <label className="filter-checkbox__switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" className='filter-checkbox__input' />
                    <span className="filter-checkbox__slider filter-checkbox__slider_round"></span>
                </label>
            </div>
        </div>
    )
}

export default FilterCheckbox;