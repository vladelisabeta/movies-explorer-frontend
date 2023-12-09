import './FilterCheckbox.css'

function FilterCheckbox() {
    return (
        <div class="filter-checkbox">
            <div className='filter-checkbox__box'>
                <p className='filter-checkbox__switch-text'>Короткометражки</p>
                <label class="filter-checkbox__switch" for="checkbox">
                    <input type="checkbox" id="checkbox" className='filter-checkbox__input' />
                    <span class="filter-checkbox__slider filter-checkbox__slider_round"></span>
                </label>
            </div>
        </div>
    )
}

export default FilterCheckbox;