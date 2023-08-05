import { useState } from "react"
import { CiFilter } from 'react-icons/ci'
import cn from 'classnames';

import css from "./CategorySearch.module.css"

const CategorySearch = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={css.categoryWrapper} onClick={() => setIsOpen(!isOpen)}>
                <CiFilter className={css.icon} />
            </div>
            {
                isOpen && (
                    <div className={css.openWrapper} onClick={() => setIsOpen(!isOpen)}>
                        <div className={css.mainField} >
                            <CiFilter className={cn(css.icon, css.icon2)} />
                            <span className={css.mainFieldText}>Category</span>
                        </div>
                        <p>Art</p>
                        <p>Music</p>
                        <p>Business</p>
                        <p>Conference</p>
                        <p>Workshop</p>
                        <p>Party</p>
                        <p className={css.optionText}>Sport</p>
                    </div>
                )
            }
        </>
    )
}

export default CategorySearch