import { BiSearch } from "react-icons/bi"
import css from "./Search.module.css"

const Search = () => {
    return (
        <div className={css.searchContainer}>
            <BiSearch className={css.icon} />
            <input
                className={css.input}
                type="text"
                placeholder="Search by keywords"
            />
        </div>
    )
}

export default Search