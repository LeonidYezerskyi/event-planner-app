import { useState, useEffect } from "react";
import { CiFilter } from 'react-icons/ci'
import cn from 'classnames';

import css from "./CategorySearch.module.css"

const CategorySearch = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isTablet, setIsTablet] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const updateIsTablet = () => {
            setIsTablet(window.innerWidth >= 768);
        };

        window.addEventListener("resize", updateIsTablet);

        return () => {
            window.removeEventListener("resize", updateIsTablet);
        };
    }, []);

    return (
        <>
            <div className={css.categoryWrapper} onClick={() => setIsOpen(!isOpen)}>
                {isTablet ? <span className={css.categoryBtnText}>Category</span> : null}
                <CiFilter className={css.icon} />
            </div>
            {
                isOpen && (
                    <div className={css.openWrapper} onClick={() => setIsOpen(!isOpen)}>
                        <div className={css.mainField} >
                            <span className={css.mainFieldText}>Category</span>
                            <CiFilter className={cn(css.icon, css.icon2)} />
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