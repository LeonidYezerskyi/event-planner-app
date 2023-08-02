import { CiFilter } from 'react-icons/ci'
import css from "./CategorySearch.module.css"

const CategorySearch = () => {
    return (
        <div className={css.categoryWrapper}>
            <CiFilter className={css.icon} />
        </div>
    )
}

export default CategorySearch