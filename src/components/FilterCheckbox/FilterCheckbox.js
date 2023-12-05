import './FilterCheckbox.css'

function FilterCheckbox() {
    return (
        <div class="filter-checkbox__container">
            <p className='filter-checkbox__switch-text'>Короткометражки</p>
            <label class="filter-checkbox__switch" for="checkbox">
                <input type="checkbox" id="checkbox" className='filter-checkbox__input' />
                <div class="filter-checkbox__slider filter-checkbox__slider_round"></div>
            </label>
        </div>
    )
}

export default FilterCheckbox;