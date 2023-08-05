import { useState } from "react"
import { GoArrowUp, GoArrowDown } from "react-icons/go"
import css from './SortBy.module.css'
import sort from "../../../assets/sort.svg"
import sort2 from "../../../assets/sort2.svg"


const SortBy = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={css.sortWrapper} onClick={() => setIsOpen(!isOpen)}>
                <img className={css.img} src={sort} alt="sort-icon" />
            </div>
            {
                isOpen && (
                    <div className={css.openWrapper} onClick={() => setIsOpen(!isOpen)}>
                        <div className={css.mainField}>
                            <span className={css.mainFieldText}>Sort by</span>
                            <img className={css.img} src={sort2} alt="sort-icon" />
                        </div>
                        <div className={css.sortItem}>
                            <p>by name</p>
                            <GoArrowUp className={css.iconField} />
                        </div>
                        <div className={css.sortItem}>
                            <p>by name</p>
                            <GoArrowDown className={css.iconField} />
                        </div>
                        <div className={css.sortItem}>
                            <p>by data</p>
                            <GoArrowUp className={css.iconField} />
                        </div>
                        <div className={css.sortItem}>
                            <p>by data</p>
                            <GoArrowDown className={css.iconField} />
                        </div>
                        <div className={css.sortItem}>
                            <p>by priority</p>
                            <GoArrowUp className={css.iconField} />
                        </div>
                        <div className={css.sortItem}>
                            <p>by priority</p>
                            <GoArrowDown className={css.iconField} />
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default SortBy