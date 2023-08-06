import { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai"
import css from './CreateButton.module.css'

const CreateButton = () => {
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
        <div className={css.createWrapper}>
            <AiOutlinePlus className={css.icon} />
            {isTablet ? <p className={css.addBtnText}>Add new event</p> : null}
        </div>
    )
}

export default CreateButton