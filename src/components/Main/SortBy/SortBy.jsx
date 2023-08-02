import css from './SortBy.module.css'
import sort from "../../../assets/sort.svg"

const SortBy = () => {
    return (
        <div className={css.sortWrapper}>
            <img className={css.img} src={sort} alt="sort-icon" />
        </div>
    )
}

export default SortBy